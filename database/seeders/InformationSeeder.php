<?php

namespace Database\Seeders;

use App\Models\Information;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InformationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $information = [
            [
                'name' => 'Klinik Sri Hartati',
                'email' => 'srihartati@klinik.com',
                'phone' => '081234567890',
                'address' => 'Jalan Raya No. 1, Jakarta Selatan',
                'open_time' => '08:00',
                'close_time' => '22:00',
            ]
            ];

        Information::insert($information);
    }
}
