<?php

namespace App\Http\Controllers\Profile;

class ProfileController extends ProfileBaseController
{
    public function showProfile()
    {
        return view('profile.main');
    }
}
