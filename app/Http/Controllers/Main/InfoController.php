<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;

class InfoController extends Controller
{
    public function __construct()
    {

    }

    public function get()
    {
        return view('main.info');
    }
}
