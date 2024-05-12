<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalRecord extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'doctor_id', 'treatment_id', 'name', 'weight', 'blood_pressure', 'indication', 'diagnosis'
    ];
    
}
