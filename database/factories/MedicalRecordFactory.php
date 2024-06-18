<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MedicalRecord>
 */
class MedicalRecordFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $usersCount = User::count();

        return [
            // 'user_id' => $this->faker->numberBetween(9, $usersCount),
            'user_id' => 1,
            'doctor_id' => 3,
            'appointment_id' => 1,
            'date' => $this->faker->dateTimeBetween('-14 days', '-3 days')->format('Y-m-d'),
            'name' => $this->faker->name,
            'weight' => $this->faker->randomFloat(2, 50, 150),
            'blood_pressure' => $this->faker->randomElement(['120/80', '130/85', '140/90']),
            'allergy' => $this->faker->word(),
            'complaint' => $this->faker->sentence,
            'diagnosis' => $this->faker->sentence,
        ];
    }
}
