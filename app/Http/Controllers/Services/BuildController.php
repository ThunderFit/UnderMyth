<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers;

class BuildController extends Controllers\Controller
{
    public function __construct()
    {

    }

    public function get()
    {
        return view('services.build');
    }
}
