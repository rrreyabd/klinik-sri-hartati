<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class JanjiTemuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $auth = Auth::user();
        return Inertia::render('User/JanjiTemu');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {   
        $timestamp = strtotime($request->waktu);
        $waktu = Carbon::createFromTimestamp($timestamp, 'Asia/Jakarta');
        
        // Validasi
        $request->validate([
            'perawatan' => 'required',
            'dokter'   => 'required',
            'jam'   => 'required',
            'waktu' => 'required',
        ]);
        
        // dd($request->waktu);
        
        $hasil = [
            $request->perawatan, 
            $request->dokter, 
            $request->jam, 
            $timestamp,
            $waktu
        ];

        dd($hasil);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
