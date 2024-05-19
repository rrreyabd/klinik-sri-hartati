<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class JanjiTemuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $auth = Auth::user();
        return Inertia::render('User/JanjiTemu');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
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

            return redirect()->route('index')->with('status', 'Janji Temu Berhasil Dibuat!');
        } catch (\Exception $e) {
            return redirect()->route('index')->with('error', 'Janji Temu Gagal Dibuat');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
