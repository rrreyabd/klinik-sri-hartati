<?php

namespace Database\Seeders;

use App\Models\Treatment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TreatmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $treatments = [
            [
                'name' => 'Perawatan 1',
                'fee' => 100000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Perawatan 2',
                'fee' => 200000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Perawatan 3',
                'fee' => 300000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        foreach ($treatments as $treatment) {
            $seed = Treatment::where('name', $treatment['name'])->first();
            if (!$seed) {
                $treatment['created_at'] = now();
                $treatment['updated_at'] = now();
                Treatment::create($treatment);
            }
        }
    }
}
