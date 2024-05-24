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
            'user_id' => $this->faker->numberBetween(1, $usersCount),
            'appointment_id' => $successAppointment->isEmpty() ? null : $this->faker->unique()->randomElement($successAppointment->pluck('id')->toArray()),
            'amount' => $this->faker->numberBetween(50000, 200000),
            'payment_due' => $this->faker->dateTimeBetween('-3 days', '-1 days')->format('Y-m-d'),
            'status' => 'Berhasil',
            'payment_method' => $this->faker->randomElement(['Dana', 'BCA', 'Mandiri']),
        ];
    }
}
