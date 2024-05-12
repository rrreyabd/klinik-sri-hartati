<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Patient;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DokterController extends Controller
{
    public function index()
    {
        $currentDate = Carbon::now();
        $formattedDate = $currentDate->format('Y-m-d');
        $appointments = Appointment::where('date', $formattedDate)->with(['treatment', 'user'])->get();

        return Inertia::render('Dokter/DokterDashboard', [
            'appointments' => $appointments
        ]);
    }

    public function edit()
    {

        return Inertia::render('Dokter/DokterFormRekamMedis');
    }

    public function dataDiriPasien($id)
    {
        $data = User::find($id);
        $patient = Patient::where('user_id', $id)->first();
    
        return Inertia::render('Dokter/DokterDataDiriPasien', [
            'data' => $data,
            'patient' => $patient
        ]);
    }
}
