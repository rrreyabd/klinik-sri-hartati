<?php

namespace Database\Factories;

use App\Models\Appointment;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Payment>
 */
class PaymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $successAppointment = Appointment::where('status', 'Selesai')->get();
        $usersCount = User::count();

        return [
            // 'user_id' => $this->faker->numberBetween(1, $usersCount),
            'user_id' => 1,
            'appointment_id' => $successAppointment->isEmpty() ? null : $this->faker->unique()->randomElement($successAppointment->pluck('id')->toArray()),
            'payment_code' => 'SH' . $this->faker->unique()->bothify('######'),
            'amount' => $this->faker->numberBetween(50000, 200000),
            'payment_due' => $this->faker->dateTimeBetween('-3 days')->format('Y-m-d'),
            'payment_date' => $this->faker->dateTimeBetween('-4 days')->format('Y-m-d'),
            'payment_proof' => 'https://mediakonsumen.com/files/2022/06/2022-06-25T145459.955.jpg',
            'status' => $this->faker->randomElement(['Berhasil', 'Dibatalkan']),
        ];
    }
}
