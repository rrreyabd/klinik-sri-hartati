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
            'user_id' => $this->faker->numberBetween(5, $usersCount),
            'doctor_id' => 3,
            'treatment_id' => $this->faker->randomElement([1, 2, 3]),
            'date' => $this->faker->dateTimeBetween('-1 days', '+1 days')->format('Y-m-d'),
            'time' => $this->faker->time(),
            'name' => $this->faker->name,
            'birthdate' => $this->faker->date(),
            'phone_number' => $this->faker->phoneNumber,
            'gender' => $this->faker->randomElement(['Laki-laki', 'Perempuan']),
            'status' => $this->faker->randomElement(['Selesai', 'Menunggu', 'Dibatalkan']),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
