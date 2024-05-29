<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'doctor_id',
        'treatment_id',
        'date',
        'time',
        'status',
    ];

    public function treatment()
    {
        return $this->belongsTo(Treatment::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    
    public function doctor()
    {
        return $this->belongsTo(User::class, 'doctor_id');
    }

    public function payment()
    {
        return $this->hasOne(Payment::class);
    }
}
