<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class CreatePatientView extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
            CREATE OR REPLACE VIEW patient_view AS
            SELECT
                patients.user_id AS user_id,
                patients.id AS patient_id,
                users.name AS name,
                users.email AS email,
                patients.birthdate,
                patients.blood_type,
                patients.gender,
                patients.address,
                patients.phone_number
            FROM
                users
            JOIN
                patients ON users.id = patients.user_id
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement("DROP VIEW IF EXISTS patient_view");
    }
}
