<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\UnavailableSchedule;


class ScheduleController extends Controller
{
    public function store(Request $request) {
        UnavailableSchedule::create([
            'doctor_id' => $request->doctor_id,
            'date' => $request->date,
            'time' => $request->time,
            'reason' => $request->reason,
        ]);
        
        return redirect()->route('owner.jadwal')->with('success', 'Jadwal berhasil ditambahkan');
    }

    public function destroy($id) {
        $schedule = UnavailableSchedule::find($id);

        $schedule->delete();

        return redirect()->route('owner.jadwal')->with('success', 'Jadwal berhasil dihapus');
    }
}
