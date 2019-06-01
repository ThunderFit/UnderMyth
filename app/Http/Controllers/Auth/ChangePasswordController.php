<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Foundation\Auth\ResetsPasswords;
use App\Hashers\AuthMeHasher;
use Illuminate\Support\Str;

class ChangePasswordController extends AuthBaseController
{
    use ResetsPasswords;

    protected $redirectTo = '/profile';

    public function __construct()
    {

    }

    protected function resetPassword($user, $password)
    {
        $user->forceFill([
            'password' => (new AuthMeHasher())->make($password),
            'remember_token' => Str::random(60),
        ])->save();

        $this->guard()->login($user);
    }
}
