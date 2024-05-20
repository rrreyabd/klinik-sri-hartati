<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class CreateAppointmentsView extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
        CREATE OR REPLACE VIEW appointments_view AS
            SELECT 
                users.id AS user_id,
                users.name AS name,
                users.email AS email,
                patients.phone_number AS phone_number,
                TIMESTAMPDIFF(YEAR, patients.birthdate, CURDATE()) AS age,
                patients.blood_type AS blood_type,
                patients.gender AS gender,
                patients.address AS address,
                treatments.name AS treatment_name,
                appointments.date AS date,
                appointments.time AS time,
                appointments.status AS status
            FROM 
                appointments
            JOIN 
                users ON users.id = appointments.user_id
            JOIN 
                patients ON patients.user_id = users.id
            JOIN 
                treatments ON treatments.id = appointments.treatment_id
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement("DROP VIEW IF EXISTS appointments_view");
    }
}
