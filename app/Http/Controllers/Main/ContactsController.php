<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;

class ContactsController extends Controller
{
    public function __construct()
    {

    }

    public function get()
    {
        return view('main.contacts');
    }
}
