<?php

namespace Database\Factories;

use App\Models\MedicalRecord;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Prescription>
 */
class PrescriptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $recordsCount = MedicalRecord::count();

        return [
            // 'medical_record_id' => $this->faker->numberBetween(1, $recordsCount),
            'medical_record_id' => 1,
            'medicine' => $this->faker->word,
            'dose' => $this->faker->randomElement(['1 butir', '2 butir', '1 sendok teh']),
            'amount' => $this->faker->randomElement(['1x sehari', '2x sehari', '3x sehari', 'Seperlunya']),
            'notes' => $this->faker->sentence,
        ];
    }
}
