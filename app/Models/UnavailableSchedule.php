<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnavailableSchedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'doctor_id',
        'date',
        'time',
        'reason',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'doctor_id');
    }
}
