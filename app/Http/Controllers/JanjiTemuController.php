<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\Payment;
use App\Models\Treatment;
use App\Models\User;
use App\Models\UnavailableSchedule;
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
        $treatments = Treatment::all();
        $doctors = User::where('role', 'dokter')->get();
        $appointments = Appointment::all();
        $unavailable_schedule = UnavailableSchedule::all();

        return Inertia::render('User/JanjiTemu', [
            'treatments' => $treatments,
            'doctors' => $doctors,
            'appointments' => $appointments,
            'schedules' => $unavailable_schedule
        ]);
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
            $appointment = Appointment::create([
                'user_id' => $validation['user_id'],
                'doctor_id' => $validation['dokter'],
                'treatment_id' => $validation['perawatan'],
                'date' => $waktu,
                'time' => $validation['jam'],
            ]);

            // Get the fee from the treatment
            $treatment = Treatment::find($validation['perawatan']);
            $fee = $treatment ? $treatment->fee : 0;

            // Set the payment due to today at 24:00
            $payment_due = Carbon::now()->addHours(1);

            // Payment Code
            $paymentCount = Payment::count() + 1;
            $paymentCode = sprintf('%06d', $paymentCount);

            Payment::create([
                'user_id' => $validation['user_id'],
                'appointment_id' => $appointment->id,
                'payment_code' => 'SH' . $paymentCode,
                'amount' => $fee,
                'payment_due' => $payment_due,
                'status' => 'Menunggu Pembayaran',
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
