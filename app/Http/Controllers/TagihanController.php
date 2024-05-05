<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TagihanController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Tagihan');
    }
}
