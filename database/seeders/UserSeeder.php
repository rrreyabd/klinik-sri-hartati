<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;

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
                'isSkipped' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Aaron Leonhart',
                'email' => 'staff@staff.com',
                'role' => 'staff',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'isSkipped' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Staff 2',
                'email' => 'staff2@staff.com',
                'role' => 'staff',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'isSkipped' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Staff 3',
                'email' => 'staff3@staff.com',
                'role' => 'staff',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'isSkipped' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Dr. Kendrick Lamar',
                'email' => 'dokter@dokter.com',
                'role' => 'dokter',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'isSkipped' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Dr. Go Younjung',
                'email' => 'dokter2@dokter.com',
                'role' => 'dokter',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'isSkipped' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Dr. Vincent',
                'email' => 'dokter3@dokter.com',
                'role' => 'dokter',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'isSkipped' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Owner',
                'email' => 'owner@owner.com',
                'role' => 'owner',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'isSkipped' => true,
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

        User::factory(80)->create();
    }
}
