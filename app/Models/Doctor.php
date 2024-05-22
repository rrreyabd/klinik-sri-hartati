<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'gender',
        'phone_number',
        'address',
        'specialization',
        'salary',
        'birthdate',
        'active_date',
        'inactive_date',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
