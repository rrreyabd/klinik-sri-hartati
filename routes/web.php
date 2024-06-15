<?php

use App\Http\Controllers\AntrianController;
use App\Http\Controllers\DokterController;
use App\Http\Controllers\JadwalController;
use App\Http\Controllers\JanjiTemuController;
use App\Http\Controllers\OwnerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RekamMedisController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\TagihanController;
use App\Http\Controllers\MessageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Main', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'status' => session('status'),
        'error' => session('error'),
        'information' => \App\Models\Information::first(),
        'appointments' => \App\Models\Appointment::where('status', 'Selesai')->count(),
        'notif' => Auth::check() ? \App\Models\Payment::where('user_id', Auth::user()->id)->where('status', 'Menunggu Pembayaran')->count() : 0,
        'tour' => session('tour'),
    ]);
})
->name('index')
->middleware('CheckPatientData')
;

// Hubungi Kami
Route::post('/messages', [MessageController::class, 'store'])->name('message.store')->middleware('auth', 'verified');

// Data Diri
Route::get('/data/input', [ProfileController::class, 'addDataDiri'])->name('data.edit')->middleware('auth', 'verified');
Route::post('/data/input', [ProfileController::class, 'storeDataDiri'])->name('data.store')->middleware('auth', 'verified');


Route::middleware(['auth', 'CheckPatientData','verified','RoleCheck:user'])->group(function () {
    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Profile (2)
    Route::get('/kata-sandi', [ProfileController::class, 'editPassword'])->name('password.edit');
    Route::get('/data-diri', [ProfileController::class, 'editDataDiri'])->name('datadiri.edit');
    Route::patch('/data-diri', [ProfileController::class, 'updateDataDiri'])->name('datadiri.update');

    // Janji Temu
    Route::get('/janji-temu', [JanjiTemuController::class, 'index'])->name('janjiTemu.index');
    Route::post('/janjitemu', [JanjiTemuController::class, 'store'])->name('janjitemu');
    
    // Antrian Online
    Route::get('/antrian', [AntrianController::class, 'index'])->name('antrian.index');
    
    // Tagihan
    Route::get('/tagihan', [TagihanController::class, 'index'])->name('tagihan.index');
    Route::post('/tagihan', [TagihanController::class, 'store'])->name('tagihan.store');
    

    // Rekam Medis
    Route::get('/rekam-medis', [RekamMedisController::class, 'index'])->name('rekam-medis.index');
    
    // Jadwal
    Route::get('/jadwal', [JadwalController::class, 'index'])->name('jadwal.index');
});

// n
Route::middleware(['auth', 'verified','RoleCheck:staff'])->group(function () {
    Route::get('/staff', [StaffController::class, 'index'])->name('staff.index');
    
    Route::get('/staff/antrian', [StaffController::class, 'antrianIndex'])->name('staff.antrian.index');
    
    Route::get('/staff/janji-temu', [StaffController::class, 'janjiTemuIndex'])->name('staff.janji.temu.index');
    Route::get('/staff/janji-temu/daftar', [StaffController::class, 'daftarJanjiTemuIndex'])->name('staff.daftar.janji.temu.index');
    Route::post('/staff/janji-temu/store', [StaffController::class, 'store'])->name('staff.janji-temu.store');
    
    Route::get('/staff/pembayaran', [StaffController::class, 'pembayaranIndex'])->name('staff.pembayaran.index');
    Route::post('/konfirmasi/pembayaran', [StaffController::class, 'konfirmasiPembayaran'])->name('staff.konfirmasi');
    

    Route::get('/staff/rekam-medis', [StaffController::class, 'rekamMedisIndex'])->name('staff.rekam-medis.index');
});

// Dokter
Route::middleware(['auth', 'verified','RoleCheck:dokter'])->group(function () {
    Route::get('/dokter', [DokterController::class, 'index'])->name('dokter.index');
    Route::get('/dokter/pasien/{id}', [DokterController::class, 'dataDiriPasien'])->name('dokter.pasien');
    Route::get('/dokter/rekam-medis/{id}', [DokterController::class, 'detailRekamMedis'])->name('dokter.rekam-medis.detail');
    Route::get('/dokter/rekam-medis/{id}/tambah', [DokterController::class, 'edit'])->name('dokter.edit');
    Route::post('/dokter/rekam-medis/tambah', [DokterController::class, 'store'])->name('dokter.store');
});

// Owner
Route::middleware(['auth', 'verified','RoleCheck:owner'])->group(function () {
    Route::get('/owner/dashboard', [OwnerController::class, 'index'])->name('owner.index');
    Route::get('/owner/jadwal', [OwnerController::class, 'jadwalIndex'])->name('owner.jadwal');
    Route::get('/owner/akun', [OwnerController::class, 'akunIndex'])->name('owner.akun');
    Route::get('/owner/pasien', [OwnerController::class, 'pasienIndex'])->name('owner.pasien');
    
    Route::get('/owner/dokter', [OwnerController::class, 'dokterIndex'])->name('owner.dokter');
    Route::get('/owner/dokter/edit/{id}', [OwnerController::class, 'dokterEdit'])->name('owner.dokter.edit');
    Route::post('/owner/dokter/update/{id}', [OwnerController::class, 'dokterUpdate'])->name('owner.dokter.update');
    Route::get('/owner/dokter/delete/{id}', [OwnerController::class, 'dokterDelete'])->name('owner.dokter.delete');

    Route::get('/owner/staff', [OwnerController::class, 'staffIndex'])->name('owner.staff');
    Route::get('/owner/pembayaran', [OwnerController::class, 'pembayaranIndex'])->name('owner.pembayaran');
});

// Skip
Route::get('/skip/tour', [ProfileController::class, 'skipTour'])->name('tour.skip');

Route::fallback(function () {
    return Inertia::render('Fallback');
});

require __DIR__ . '/auth.php';
