<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
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
    }
}
