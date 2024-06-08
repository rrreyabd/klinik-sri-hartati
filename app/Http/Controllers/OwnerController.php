<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Doctor;
use App\Models\Staff;
use App\Models\User;
use App\Models\Payment;
use App\Models\Patient;
use App\Models\AppointmentView;

class OwnerController extends Controller
{
    public function index()
    {
        $doctor = Doctor::count();
        $staff = Staff::count();
        $revenue = Payment::where('status', 'Berhasil')->sum('amount');
        $transaction = Payment::with('user', 'appointment.treatment')->orderBy('payment_date', 'desc')->take(5)->get();
        return Inertia::render('Owner/OwnerDashboard', [
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
        $doctor = Doctor::with('user')->get();
        return Inertia::render('Owner/OwnerDokter', [
            'doctors' => $doctor
        ]);
    }

    public function dokterEdit($id)
    {
        $doctor = Doctor::with('user')->find($id);
        return Inertia::render('Owner/OwnerDokterEdit', [
            'doctor' => $doctor
        ]);
    }

    public function dokterUpdate(Request $request, $id)
    {
        dd($request->all());

        $doctor = Doctor::find($id);
        $doctor->update($request->all());
        return redirect()->route('owner.dokter.index');
    }

    public function dokterDelete($id)
    {
        $doctor = Doctor::find($id);
        $doctor->delete();
        return redirect()->route('owner.dokter')->with('success', 'Dokter berhasil dihapus');
    }

    public function staffIndex()
    {
        $staff = Staff::with('user')->get();
        return Inertia::render('Owner/OwnerStaff', [
            'staffs' => $staff
        ]);
    }
    public function pasienIndex()
    {
        $patient = Patient::with('user')->get();
        return Inertia::render('Owner/OwnerPasien', [
            'patients' => $patient
        ]);
    }

    public function pembayaranIndex()
    {
        $payment = Payment::with('user', 'appointment.treatment')->orderBy('payment_date', 'desc')->get();
        return Inertia::render('Owner/OwnerPembayaran', [
            'payments' => $payment
        ]);
    }

    public function akunIndex()
    {
        $user = User::where('role', 'user')->get();
        $staff = User::where('role', 'staff')->get();
        $dokter = User::where('role', 'dokter')->get();

        return Inertia::render('Owner/OwnerAkun', [
            'user' => $user,
            'staff' => $staff,
            'dokter' => $dokter
        ]);
    }
}
