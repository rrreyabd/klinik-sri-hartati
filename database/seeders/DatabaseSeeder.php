<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Treatment;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User
        $users = [
            [
                'name' => 'Raihan Abdillah',
                'email' => 'raihan@gmail.com',
                'role' => 'user',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Aaron Leonhart',
                'email' => 'staff@staff.com',
                'role' => 'staff',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Dr. Kendrick Lamar',
                'email' => 'dokter@dokter.com',
                'role' => 'dokter',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Owner',
                'email' => 'owner@owner.com',
                'role' => 'owner',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        foreach ($users as $userData) {
            $user = User::where('email', $userData['email'])->first();
            if (!$user) {
                $userData['created_at'] = now();
                $userData['updated_at'] = now();
                User::create($userData);
            }
        }

        // Treatment
        $treatments = [
            [
                'name' => 'Perawatan 1',
                'fee' => 100000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Perawatan 2',
                'fee' => 200000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Perawatan 3',
                'fee' => 300000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        foreach ($treatments as $treatment) {
            $seed = Treatment::where('name', $treatment['name'])->first();
            if (!$seed) {
                $treatment['created_at'] = now();
                $treatment['updated_at'] = now();
                Treatment::create($treatment);
            }
        }

        
    }
}
