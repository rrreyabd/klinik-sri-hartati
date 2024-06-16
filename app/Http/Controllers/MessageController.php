<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'pesan' => 'required|string',
        ]);

        $message = new Message;
        $message->name = $request->nama;
        $message->email = $request->email;
        $message->message = $request->pesan;
        $message->save();

        return Inertia::render('Main')->with('message', 'Berhasil');
    }
}
