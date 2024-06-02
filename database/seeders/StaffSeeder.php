<?php

namespace Database\Seeders;

use App\Models\Staff;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StaffSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $staffs = [
            [
                'user_id' => 2,
                'gender' => 'Laki-laki',
                'phone_number' => '0812345678',
                'address' => 'Jl. Medan No. 1',
                'birthdate' => '2000-12-01',
            ],
            [
                'user_id' => 3,
                'gender' => 'Perempuan',
                'phone_number' => '088888888888',
                'address' => 'Jl. Medan No. 2',
                'birthdate' => '1997-04-04',
            ],
            [
                'user_id' => 4,
                'gender' => 'Laki-laki',
                'phone_number' => '080808080808',
                'address' => 'Jl. Medan No. 3',
                'birthdate' => '1997-05-07',
            ],
        ];

        foreach ($staffs as $staffData) {
            $staff = Staff::where('user_id', $staffData['user_id'])->first();
            if (!$staff) {
                $staffData['created_at'] = now();
                $staffData['updated_at'] = now();
                Staff::create($staffData);
            }
        }
    }
}
