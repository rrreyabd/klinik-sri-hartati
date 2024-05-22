<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class OwnerController extends Controller
{
    public function index()
    {
        return Inertia::render('Owner/OwnerDashboard');
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
