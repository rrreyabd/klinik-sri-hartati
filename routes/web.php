<?php

use App\Http\Controllers\AntrianController;
use App\Http\Controllers\DokterController;
use App\Http\Controllers\JanjiTemuController;
use App\Http\Controllers\OwnerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\TagihanController;
use Illuminate\Foundation\Application;
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
    ]);
})
->name('index')
->middleware('CheckPatientData')
;

// Data Diri
Route::get('/data/input', [ProfileController::class, 'addDataDiri'])->name('data.edit')->middleware('auth');
Route::post('/data/input', [ProfileController::class, 'storeDataDiri'])->name('data.store')->middleware('auth');


Route::middleware(['auth', 'CheckPatientData'])->group(function () {
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
    
    
    
    // Staff
    Route::get('/staff', [StaffController::class, 'index'])->name('staff.index');
    
    Route::get('/staff/antrian', [StaffController::class, 'antrianIndex'])->name('staff.antrian.index');
    
    Route::get('/staff/janji-temu', [StaffController::class, 'janjiTemuIndex'])->name('staff.janji.temu.index');
    Route::get('/staff/janji-temu/daftar', [StaffController::class, 'daftarJanjiTemuIndex'])->name('staff.daftar.janji.temu.index');
    Route::post('/staff/janji-temu/store', [StaffController::class, 'store'])->name('staff.janji-temu.store');
    
    Route::get('/staff/pembayaran', [StaffController::class, 'pembayaranIndex'])->name('staff.pembayaran.index');
    
    Route::get('/staff/rekam-medis', [StaffController::class, 'rekamMedisIndex'])->name('staff.rekam-medis.index');


    // Dokter
    Route::get('/dokter', [DokterController::class, 'index'])->name('dokter.index');
    Route::get('/dokter/pasien/{id}', [DokterController::class, 'dataDiriPasien'])->name('dokter.pasien');
    Route::get('/dokter/rekam-medis/{id}', [DokterController::class, 'detailRekamMedis'])->name('dokter.rekam-medis.detail');
    Route::get('/dokter/rekam-medis/{id}/tambah', [DokterController::class, 'edit'])->name('dokter.edit');
    Route::post('/dokter/rekam-medis/tambah', [DokterController::class, 'store'])->name('dokter.store');


});

// Owner
Route::get('/owner', [OwnerController::class, 'index'])->name('owner.index');
Route::get('/owner/jadwal', [OwnerController::class, 'jadwalIndex'])->name('owner.jadwal');
Route::get('/owner/akun', [OwnerController::class, 'akunIndex'])->name('owner.akun');
Route::get('/owner/pasien', [OwnerController::class, 'pasienIndex'])->name('owner.pasien');
Route::get('/owner/pembayaran', [OwnerController::class, 'pembayaranIndex'])->name('owner.pembayaran');

Route::fallback(function () {
    return Inertia::render('Fallback');
});

require __DIR__ . '/auth.php';
