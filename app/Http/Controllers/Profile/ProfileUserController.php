<?php

namespace App\Http\Controllers\Profile;

class ProfileUserController extends ProfileBaseController
{
    public function showProfile()
    {
        return view('profile.main');
    }
}
