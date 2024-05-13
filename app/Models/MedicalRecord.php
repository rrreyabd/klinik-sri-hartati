<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalRecord extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'doctor_id', 'date', 'name', 'weight', 'blood_pressure', 'allergy', 'complaint', 'diagnosis'
    ];

    public function prescriptions()
    {
        return $this->hasMany(Prescription::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    
    public function doctor()
    {
        return $this->belongsTo(User::class, 'doctor_id');
    }
    
}
