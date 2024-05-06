<?php

use App\Http\Controllers\AntrianController;
use App\Http\Controllers\JanjiTemuController;
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
        'canRegister' => Route::has('register')
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
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
    Route::get('/staff/pembayaran', [StaffController::class, 'pembayaranIndex'])->name('pembayaran.temu.index');
});

require __DIR__ . '/auth.php';
