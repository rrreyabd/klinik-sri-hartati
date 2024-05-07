<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
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
        $appointments = Appointment::all();
        return Inertia::render('Staff/StaffJanjiTemu', [
            'appointments' => $appointments,
        ]);
    }
    public function pembayaranIndex()
    {
        return Inertia::render('Staff/StaffPembayaran');
    }
}
