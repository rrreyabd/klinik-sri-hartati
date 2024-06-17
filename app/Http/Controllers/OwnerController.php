<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Doctor;
use App\Models\Staff;
use App\Models\User;
use App\Models\Payment;
use App\Models\Patient;
use App\Models\UnavailableSchedule;
use App\Models\Appointment;
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
        $doctor = User::where('role', 'dokter')->get();
        $schedules = UnavailableSchedule::with('user')->get();
        $appointments = Appointment::all();
        // @dd($schedules);
        return Inertia::render('Owner/OwnerJadwal', [
            'unavailable_schedules' => $schedules,
            'doctors' => $doctor,
            'userAppointments' => $appointments
        ]);
    }

    public function dokterIndex()
    {
        $doctor = Doctor::with('user')->get();
        return Inertia::render('Owner/OwnerDokter', [
            'doctors' => $doctor
        ]);
    }

    public function dokterAdd()
    {

        return Inertia::render('Owner/OwnerDokterAdd');
    }

    public function dokterStore(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',

            'nik' => 'required',
            'gender' => 'required',
            'phone_number' => 'required',
            'specialization' => 'required',
            'address' => 'required',
            'birthdate' => 'required',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role' => 'staff',
            'password' => bcrypt($request->password),
            'email_verified_at' => now(),
        ]);

        $doctor = Doctor::create([
            'user_id' => $user->id,
            'nik' => $request->nik,
            'gender' => $request->gender,
            'phone_number' => $request->phone_number,
            'address'   => $request->address,
            'specialization' => $request->specialization,
            'birthdate' => $request->birthdate,
            'status'   => 'Aktif',
        ]);

        return redirect()->route('owner.dokter')->with('success', 'Dokter berhasil ditambahkan');
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
        $request->validate([
            'nik' => 'required',
            'gender' => 'required',
            'phone_number' => 'required',
            'address' => 'required',
            'birthdate' => 'required',
            'specialization' => 'required',
            'status' => 'required',
        ]);

        try {
            $doctor = Doctor::findOrFail($id);

            $doctor->update([
                'nik' => $request->nik,
                'gender' => $request->gender,
                'phone_number' => $request->phone_number,
                'address'   => $request->address,
                'birthdate' => $request->birthdate,
                'specialization' => $request->specialization,
                'status'   => $request->status,
            ]);

            $userData = array_filter($request->only('name', 'email'));
            if (!empty($userData)) {
                $doctor->user()->update($userData);
            }


            return redirect()->route('owner.dokter')->with('success', 'Dokter berhasil diupdate');
        } catch (\Exception $e) {
            return redirect()->route('owner.dokter')->with('error', 'Terjadi kesalahan saat menyimpan data. Silahkan coba lagi.');
        }
    }

    public function dokterDelete($id)
    {
        $doctor = Doctor::find($id);
        $doctor->delete();
        return redirect()->route('owner.dokter')->with('success', 'Dokter berhasil dihapus');
    }

    // Staff
    public function staffIndex()
    {
        $staff = Staff::with('user')->orderBy('status', 'asc')->get();
        return Inertia::render('Owner/OwnerStaff', [
            'staffs' => $staff
        ]);
    }

    public function staffAdd()
    {
        return Inertia::render('Owner/OwnerStaffAdd');
    }

    public function staffStore(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',

            'nik' => 'required',
            'gender' => 'required',
            'phone_number' => 'required',
            'address' => 'required',
            'birthdate' => 'required',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role' => 'staff',
            'password' => bcrypt($request->password),
            'email_verified_at' => now(),
        ]);

        $staff = Staff::create([
            'user_id' => $user->id,
            'nik' => $request->nik,
            'gender' => $request->gender,
            'phone_number' => $request->phone_number,
            'address'   => $request->address,
            'birthdate' => $request->birthdate,
            'status'   => 'Aktif',
        ]);

        return redirect()->route('owner.staff')->with('success', 'Staff berhasil ditambahkan');
    }

    public function staffEdit($id)
    {
        $staff = Staff::with('user')->find($id);
        return Inertia::render('Owner/OwnerStaffEdit', [
            'staff' => $staff
        ]);
    }

    public function staffUpdate(Request $request, $id)
    {
        $request->validate([
            'nik' => 'required',
            'gender' => 'required',
            'phone_number' => 'required',
            'address' => 'required',
            'birthdate' => 'required',
            'status' => 'required',
        ]);

        try {
            $staff = Staff::findOrFail($id);

            $staff->update([
                'nik' => $request->nik,
                'gender' => $request->gender,
                'phone_number' => $request->phone_number,
                'address'   => $request->address,
                'birthdate' => $request->birthdate,
                'status'   => $request->status,
            ]);

            $userData = array_filter($request->only('name', 'email'));
            if (!empty($userData)) {
                $staff->user()->update($userData);
            }


            return redirect()->route('owner.staff')->with('success', 'Staff berhasil diupdate');
        } catch (\Exception $e) {
            return redirect()->route('owner.staff')->with('error', 'Terjadi kesalahan saat menyimpan data. Silahkan coba lagi.');
        }
    }

    public function staffDelete($id)
    {
        $staff = Staff::find($id);
        $staff->delete();
        return redirect()->route('owner.staff')->with('success', 'Staff berhasil dihapus');
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
