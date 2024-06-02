<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'gender',
        'phone_number',
        'address',
        'birthdate',
    ];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
