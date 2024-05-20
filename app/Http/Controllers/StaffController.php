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
    public function rekamMedisIndex()
    {
        return Inertia::render('Staff/StaffRekamMedis');
    }

}
