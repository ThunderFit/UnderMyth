<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers;

class BuildController extends Controllers\Controller
{
    public function __construct()
    {

    }

    public function index()
    {
        return view('services.build.index');
    }

    public function edit()
    {
        return view('services.build.edit');
    }
}
