<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Doctor;
use App\Models\User;
use App\Models\Payment;
use App\Models\AppointmentView;

class OwnerController extends Controller
{
    public function index()
    {
        $doctor = Doctor::count();
        $staff = User::where('role','staff')->count();
        $revenue = Payment::where('status','Berhasil')->sum('amount');
        $transaction = Payment::with('user','appointment.treatment')->orderBy('payment_date', 'desc')->take(5)->get();
        return Inertia::render('Owner/OwnerDashboard',[
            'totalDoctor' => $doctor,
            'totalStaff' => $staff,
            'revenue' => $revenue,
            'transactions' => $transaction
        ]);
    }

    public function jadwalIndex()
    {
        return Inertia::render('Owner/OwnerJadwal');
    }

    public function dokterIndex()
    {
        return Inertia::render('Owner/OwnerDokter');
    }
    public function staffIndex()
    {
        return Inertia::render('Owner/OwnerStaff');
    }
    public function pasienIndex()
    {
        return Inertia::render('Owner/OwnerPasien');
    }

    public function pembayaranIndex()
    {
        return Inertia::render('Owner/OwnerPembayaran');
    }

    public function akunIndex()
    {
        return Inertia::render('Owner/OwnerAkun');
    }
}
