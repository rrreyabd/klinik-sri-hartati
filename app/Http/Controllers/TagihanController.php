<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Payment;
use App\Models\Treatment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TagihanController extends Controller
{
    public function index()
    {
        $payments = Payment::where('user_id', Auth::user()->id)
            ->with(['appointment', 'user'])
            ->orderByRaw("status = 'Menunggu Pembayaran' DESC")
            ->orderBy('payment_date', 'desc')
            ->get();

        $pendingPayments = Payment::where('user_id', Auth::user()->id)
            ->with(['appointment', 'user'])
            ->where('status', 'Menunggu Pembayaran')
            ->orderBy('payment_date', 'desc')
            ->get();

        $cancelledPayments = Payment::where('user_id', Auth::user()->id)
            ->with(['appointment', 'user'])
            ->where('status', 'Dibatalkan')
            ->orderBy('payment_date', 'desc')
            ->get();

        $successPayments = Payment::where('user_id', Auth::user()->id)
            ->with(['appointment', 'user'])
            ->where('status', 'Berhasil')
            ->orderBy('payment_date', 'desc')
            ->get();

        $confirmPayments = Payment::where('user_id', Auth::user()->id)
            ->with(['appointment', 'user'])
            ->where('status', 'Menunggu Konfirmasi')
            ->orderBy('payment_date', 'desc')
            ->get();

        $treatments = Treatment::all();

        return Inertia::render('User/Tagihan', [
            'payments' => $payments,
            'pendingPayments' => $pendingPayments,
            'cancelledPayments' => $cancelledPayments,
            'successPayments' => $successPayments,
            'confirmPayments' => $confirmPayments,
            'treatments' => $treatments,
        ]);
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'payment_id' => 'required',
                'payment_proof' => 'required|image',
            ]);

            // Store the file and get the path
            $path = $request->file('payment_proof')->store('images', 'public');

            // Update the payment record with the status and file path
            $payment = Payment::find($request->payment_id);
            $payment->update([
                'status' => 'Menunggu Konfirmasi',
                'payment_proof' => $path,
                'payment_date' => now(),
            ]);

            $appointment = Appointment::find($payment->appointment_id);
            $appointment->update([
                'status' => "Menunggu Konfirmasi",
            ]);

            return redirect()->route('jadwal.index');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }
}
