<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Patient;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('User/Profile', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function editPassword()
    {
        return Inertia::render('User/UbahKataSandi');
    }

    public function addDataDiri()
    {
        return Inertia::render('User/DataInputForm');
    }

    public function storeDataDiri(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
            'nik' => 'required',
            'birthdate' => 'required',
            'address'   => 'required',
            'blood_type'   => 'required',
            'gender' => 'required',
            'phone_number' => 'required',
            'full_name' => 'required',
        ]);

        try {
            // dd($request->all());

            $patient = Patient::create([
                'user_id' => $request->user_id,
                'NIK' => $request->nik,
                'birthdate' => $request->birthdate,
                'address'   => $request->address,
                'blood_type'   => $request->blood_type,
                'gender' => $request->gender,
                'phone_number' => $request->phone_number
            ]);

            if ($request->full_name !== Auth::user()->name) {
                User::where('id', $request->user_id)->update(['name' => $request->full_name]);
            }

            return redirect()->route('index');
        } catch (\Exception $e) {
            return redirect()->route('data.edit')->with('status', 'Terjadi kesalahan saat menyimpan data. Silahkan coba lagi.');
        }
    }



    public function editDataDiri()
    {

        return Inertia::render('User/DataDiri', [
            'success' => session('success'),
            'error' => session('error'),
        ]);
    }

    public function updateDataDiri(Request $request)
    {
        $request->validate([
            'tanggal_lahir' => 'required|date',
            'alamat'   => 'required|string',
            'golongan_darah'   => 'required|string',
            'nomor_telepon' => 'required|string',
        ]);

        try {
            Patient::where('user_id', Auth::user()->id)->update([
                'birthdate' => $request->tanggal_lahir,
                'address'   => $request->alamat,
                'blood_type'   => $request->golongan_darah,
                'phone_number' => $request->nomor_telepon
            ]);

            return redirect()->route('datadiri.edit')->with('success', 'Data diri berhasil diperbarui.');
        } catch (\Exception $e) {
            return redirect()->route('datadiri.edit')->with('error', 'Terjadi kesalahan saat menyimpan data. Silahkan coba lagi.');
        }
    }

    public function skipTour(Request $request)
    {
        User::where('id', Auth::user()->id)->update(['isSkipped' => true]);

        return redirect()->route('index');
    }
}
