<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers;

class ServicesController extends Controllers\Controller
{
    public function __construct()
    {

    }

    public function get()
    {
        return view('main.services');
    }
}
