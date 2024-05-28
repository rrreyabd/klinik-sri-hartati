<?php

namespace Database\Seeders;

use App\Models\Appointment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AppointmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $appointments = [
            [
                'user_id' => 1,
                'doctor_id' => 6,
                'treatment_id' => 1,
                'date' => "2024-05-08",
                'time' => "08:00:00",
                'status' => "Selesai",
            ],
        ];

        foreach ($appointments as $appointmentData) {
            $appointment = Appointment::where([
                'date' => $appointmentData['date'],
                'time' => $appointmentData['time']
            ])->first();
            
            if (!$appointment) {
                $appointmentData['created_at'] = now();
                $appointmentData['updated_at'] = now();
                Appointment::create($appointmentData);
            }
        }

    Appointment::factory(50)->create();
    }
}
