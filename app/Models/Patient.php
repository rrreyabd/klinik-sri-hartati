<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'nik',
        'birthdate',
        'blood_type',
        'gender',
        'address',
        'phone_number',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
