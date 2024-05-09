<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StaffController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Staff/StaffDashboard');
    }

    public function antrianIndex()
    {
        return Inertia::render('Staff/StaffAntrian');
    }
    public function janjiTemuIndex()
    {
        $appointments = Appointment::with(['treatment', 'user'])->orderBy('time', 'asc')->get();

        return Inertia::render('Staff/StaffJanjiTemu', [
            'appointments' => $appointments,
            'status' => session('status'),
            'error' => session('error'),
        ]);
    }
    
    public function daftarJanjiTemuIndex() {
        return Inertia::render('Staff/StaffDaftarJanjiTemu');
    }

    public function store(Request $request)
    {
        // Validasi
        $validation = $request->validate([
            'user_id' => 'required',
            'perawatan' => 'required',
            'dokter'   => 'required',
            'jam'   => 'required',
            'tanggal' => 'required',
            'nama_lengkap' => 'required',
            'nomor_hp' => 'required',
            'tanggal_lahir' => 'required',
            'jenis_kelamin' => 'required',
        ]);

        $timestamp = strtotime($request->tanggal);
        $waktu = Carbon::createFromTimestamp($timestamp, 'Asia/Jakarta');

        try {
            Appointment::create([
                'user_id' => $validation['user_id'],
                'doctor_id' => $validation['dokter'],
                'treatment_id' => $validation['perawatan'],
                'date' => $waktu,
                'time' => $validation['jam'],
                'name' => $validation['nama_lengkap'],
                'birthdate' => $validation['tanggal_lahir'],
                'gender' => $validation['jenis_kelamin'],
                'phone_number' => $validation['nomor_hp'],
            ]);

            return redirect()->route('staff.janji.temu.index')->with('status', 'Janji Pasien Temu Berhasil Dibuat!');
        } catch (\Exception $e) {
            return redirect()->route('staff.janji.temu.index')->with('error', 'Janji Temu Gagal Dibuat');
        }
    }

    public function pembayaranIndex()
    {
        return Inertia::render('Staff/StaffPembayaran');
    }

}
