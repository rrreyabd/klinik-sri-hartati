<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('appointment_id');
            $table->string('payment_code')->unique();
            $table->integer('amount');
            $table->dateTime('payment_due');
            $table->dateTime('payment_date')->nullable();
            $table->string('payment_proof')->nullable();
            $table->enum('status', ['Menunggu Pembayaran', 'Berhasil', 'Dibatalkan'])->default('Menunggu Pembayaran');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('appointment_id')->references('id')->on('appointments');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
