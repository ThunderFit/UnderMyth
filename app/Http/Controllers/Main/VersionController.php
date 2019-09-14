<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Models\Version;

class VersionController extends Controller
{
    public function __construct()
    {
    }

    public function get()
    {
        $model = new Version();
        $versions = $model
            ->where(['active' => 1])
            ->orderBy('created_at', 'desc')
            ->limit(10)
            ->get();
        return view('main.version', ['versions' => $versions]);
    }
}
