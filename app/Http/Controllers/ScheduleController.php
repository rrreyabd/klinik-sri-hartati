<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    public function store(Request $request) {
        dd("ScheduleController: Berhasil menambahkan jadwal berhalangan", $request->all());
    }
}
