<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\AppointmentView;
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
        $appointments = AppointmentView::where('date', $formattedDate)
            ->orderBy('time', 'asc')
            ->get();
            
        return Inertia::render('Dokter/DokterDashboard', [
            'appointments' => $appointments
        ]);
    }

    public function edit($id)
    {
        $patientData = Patient::with('user')->find($id);
    
        return Inertia::render('Dokter/DokterFormRekamMedis', [
            'patientData' => $patientData
        ]);
    }

    public function store(Request $request) {
        $request->validate([
            'user_id' => 'required',
            'doctor_id' => 'required',
            'date' => 'required',
            'name' => 'required',
            'weight' => 'required',
            'blood_pressure' => 'required',
            'allergy' => 'required',
            'complaint' => 'required',
            'diagnosis' => 'required',
        ]);

        $medicalRecord = MedicalRecord::create([
            'user_id' => $request->user_id,
            'doctor_id' => $request->doctor_id,
            'date' => $request->date,
            'name' => $request->name,
            'weight' => $request->weight,
            'blood_pressure' => $request->blood_pressure,
            'allergy' => $request->allergy,
            'complaint' => $request->complaint,
            'diagnosis' => $request->diagnosis,
        ]);

        return $this->dataDiriPasien($request->user_id);
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
