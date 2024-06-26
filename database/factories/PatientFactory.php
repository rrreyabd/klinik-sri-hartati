<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Patient;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Patient>
 */
class PatientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        static $number = 9;

        return [
            'user_id' => $number++,
            'nik' => $this->faker->randomNumber(8, true) . $this->faker->randomNumber(8, true),
            'birthdate' => $this->faker->date(),
            'blood_type' => $this->faker->randomElement(['A', 'B', 'AB', 'O']),
            'gender' => $this->faker->randomElement(['Laki-laki', 'Perempuan']),
            'address' => $this->faker->address,
            'phone_number' => $this->faker->phoneNumber,
        ];
    }
}
