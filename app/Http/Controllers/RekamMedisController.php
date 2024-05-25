<?php

namespace App\Http\Controllers;

use App\Models\MedicalRecord;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RekamMedisController extends Controller
{
    public function index()
    {

        $MedicalRecords = MedicalRecord::where('user_id', Auth::user()->id)->get();
        
        return Inertia::render('User/RekamMedis', [
            'MedicalRecords' => $MedicalRecords
        ]);
    }
}
