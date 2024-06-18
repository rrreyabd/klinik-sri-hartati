<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\AppointmentView;
use App\Models\Prescription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class JadwalController extends Controller
{
    public function index()
    {
        $appointments = Appointment::where('user_id', Auth::user()->id)
            ->with(['doctor', 'treatment'])
            ->orderBy('date', 'desc')
            ->orderBy('time', 'desc')
            ->get();

        $doneAppointments = Appointment::where('user_id', Auth::user()->id)
            ->where('status', 'Selesai')
            ->with(['doctor', 'treatment'])
            ->orderBy('date', 'desc')
            ->orderBy('time', 'desc')
            ->get();

        $pendingAppointments = Appointment::where('user_id', Auth::user()->id)
            ->whereIn('status', ['Menunggu Jadwal', 'Menunggu Pembayaran', 'Menunggu Konfirmasi'])
            ->with(['doctor', 'treatment'])
            ->orderBy('date', 'desc')
            ->get();

        $cancelledAppointments = Appointment::where('user_id', Auth::user()->id)
            ->where('status', 'Batal')
            ->with(['doctor', 'treatment'])
            ->orderBy('date', 'desc')
            ->orderBy('time', 'desc')
            ->get();

        $prescriptions = Prescription::whereHas('medical_record', function ($query) {
            $query->where('user_id', Auth::user()->id);
        })->with('medical_record')->get();
        
        return Inertia::render('User/Jadwal', [
            'appointments' => $appointments,
            'doneAppointments' => $doneAppointments,
            'pendingAppointments' => $pendingAppointments,
            'cancelledAppointments' => $cancelledAppointments,
            'prescriptions' => $prescriptions,
        ]);
    }
}
