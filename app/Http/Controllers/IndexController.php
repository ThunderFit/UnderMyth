<?php

namespace App\Http\Controllers;

class IndexController extends Controller
{
    public function __construct()
    {

    }

    public function get()
    {
        return view('index');
    }
}
