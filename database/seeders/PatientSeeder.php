<?php

namespace Database\Seeders;

use App\Models\Patient;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PatientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $patients =[
            [
                'user_id' => 1,
                'nik' => '2749174062836512',
                'birthdate' => '2004-11-18',
                'blood_type' => 'A',
                'gender' => 'Laki-laki',
                'address' => 'Jl. Jalan No. 1',
                'phone_number' => '081234567890',
            ]
        ];

        foreach ($patients as $patientData) {
            $patient = Patient::where('user_id', $patientData['user_id'])->first();
            if (!$patient) {
                $patientData['created_at'] = now();
                $patientData['updated_at'] = now();
                Patient::create($patientData);
            }
        }

        Patient::factory(80)->create();
    }
}
