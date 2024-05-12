<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\MedicalRecord;
use App\Models\Patient;
use App\Models\Prescription;
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
        $appointments = Appointment::where('date', $formattedDate)
            ->with(['treatment', 'user'])
            ->orderBy('time', 'asc')
            ->get();

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
        $rekam_medis = MedicalRecord::where('user_id', $id)->orderBy('date', 'asc')->with(['prescriptions', 'user', 'doctor'])->get();


        return Inertia::render('Dokter/DokterDataDiriPasien', [
            'data' => $data,
            'patient' => $patient,
            'rekam_medis' => $rekam_medis,
        ]);
    }

    public function detailRekamMedis($id)
    {
        $rekam_medis = MedicalRecord::with(['user', 'doctor'])->find($id);
        $reseps = Prescription::where('medical_record_id', $id)->get();

        return Inertia::render('Dokter/DokterDetailRekamMedis', [
            'rekam_medis' => $rekam_medis,
            'reseps' => $reseps,
        ]);
    }
}
