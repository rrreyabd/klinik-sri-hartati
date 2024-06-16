<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'nik',
        'gender',
        'phone_number',
        'address',
        'specialization',
        'birthdate',
        'status',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
