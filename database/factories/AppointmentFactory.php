<?php

namespace Database\Factories;

use App\Models\Appointment;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class AppointmentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Appointment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $usersCount = User::count();
        
        return [
            'user_id' => $this->faker->numberBetween(9, $usersCount),
            'doctor_id' => 3,
            'treatment_id' => $this->faker->randomElement([1, 2, 3]),
            'date' => $this->faker->dateTimeBetween('-3 days', '+3 days')->format('Y-m-d'),
            'time' => $this->faker->randomElement(['08:00:00', '09:00:00', '10:00:00', '11:00:00', '12:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00', '20:00:00']),
            'status' => $this->faker->randomElement(['Selesai', 'Menunggu Pembayaran', 'Menunggu Jadwal', 'Dibatalkan']),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
