<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;

class RulesController extends Controller
{
    public function __construct()
    {

    }

    public function get()
    {
        return view('main.rules');
    }
}
