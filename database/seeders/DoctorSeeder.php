<?php

namespace Database\Seeders;

use App\Models\Doctor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DoctorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 5,6,7
        $doctors = [
            [
                'user_id' => 5,
                'nik' => '1234567890123451',
                'gender' => 'Laki-laki',
                'phone_number' => '081234567890',
                'address' => 'Jl. Jalan No. 1',
                'specialization' => 'Umum',
                'birthdate' => '1997-01-01',
                'status' => 'Aktif'
                // 'active_date' => '2021-01-01',
            ],
            [
                'user_id' => 6,
                'nik' => '1234567890123452',
                'gender' => 'Perempuan',
                'phone_number' => '081231231231',
                'address' => 'Jl. Jalan No. 2',
                'specialization' => 'Dermatologist',
                'birthdate' => '1997-01-02',
                'status' => 'Aktif'
                // 'active_date' => '2021-01-02',
            ],
            [
                'user_id' => 7,
                'nik' => '1234567890123453',
                'gender' => 'Laki-laki',
                'phone_number' => '080808080808',
                'address' => 'Jl. Jalan No. 3',
                'specialization' => 'Umum',
                'birthdate' => '1997-01-03',
                'status' => 'Aktif'
                // 'active_date' => '2021-01-03',
            ],
        ];

        foreach ($doctors as $doctorData) {
            $doctor = Doctor::where('user_id', $doctorData['user_id'])->first();
            if (!$doctor) {
                $doctorData['created_at'] = now();
                $doctorData['updated_at'] = now();
                Doctor::create($doctorData);
            }
        }
    }
}
