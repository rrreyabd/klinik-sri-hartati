<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\AppointmentView;
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
                                        ->whereIn('status', ['Menunggu Jadwal', 'Menunggu Pembayaran'])
                                        ->with(['doctor', 'treatment'])
                                        ->orderBy('date', 'desc')
                                        ->get();
        
        $cancelledAppointments = Appointment::where('user_id', Auth::user()->id)
                                        ->where('status', 'Batal')
                                        ->with(['doctor', 'treatment'])
                                        ->orderBy('date', 'desc')
                                        ->orderBy('time', 'desc')
                                        ->get();

        return Inertia::render('User/Jadwal', [
            'appointments' => $appointments,
            'doneAppointments' => $doneAppointments,
            'pendingAppointments' => $pendingAppointments,
            'cancelledAppointments' => $cancelledAppointments,
        ]);
    }
}
