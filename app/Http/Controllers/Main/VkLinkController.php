<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;

class VkLinkController extends Controller
{
    public function __construct(){}

    public function get()
    {
        return redirect(env('VKLINK'));
    }
}
