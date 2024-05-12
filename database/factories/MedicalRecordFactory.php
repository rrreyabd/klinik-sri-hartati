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
            'user_id' => $this->faker->numberBetween(1, $usersCount),
            'doctor_id' => 3,
            'treatment_id' => $this->faker->numberBetween(1, 3),
            'name' => $this->faker->name,
            'weight' => $this->faker->randomFloat(2, 50, 150),
            'blood_pressure' => $this->faker->randomElement(['120/80', '130/85', '140/90']),
            'indication' => $this->faker->sentence,
            'diagnosis' => $this->faker->sentence,
        ];
    }
}
