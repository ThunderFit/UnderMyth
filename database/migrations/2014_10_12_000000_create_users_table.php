<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->unique();
            $table->string('password');

            $table->string('email')->unique()->nullable();
            $table->string('nick')->unique();

            $table->boolean('is_logged')->nullable();

            $table->string('has_session')->nullable();

            $table->ipAddress('ip')->nullable();
            $table->ipAddress('reg_ip')->nullable();

            $table->bigInteger('last_login')->nullable();
            $table->bigInteger('reg_date')->nullable();

            $table->double('last_x')->nullable();
            $table->double('last_y')->nullable();
            $table->double('last_z')->nullable();

            $table->string('last_world', 100)->nullable();
            $table->float('last_yaw')->nullable();
            $table->float('last_pitch')->nullable();

            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
