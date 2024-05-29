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
                'phone' => '0853-5891-2715',
                'address' => 'Jl. Kuala Teuku Umar, Binje Baru, Kec. Datuk Tanah Datar, Kab  Batubara, Sumatera Utara, 21254',
                'open_time' => '08:00',
                'close_time' => '22:00',
            ]
            ];

        Information::insert($information);
    }
}
