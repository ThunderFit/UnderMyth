<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Hashers\AuthMeHasher;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends AuthBaseController
{
    use RegistersUsers;

    protected $redirectTo = '/profile';

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'nick' => 'required|max:16',
            'password' => 'required|min:6|confirmed',
        ]);
    }

    protected function create(array $data)
    {
        return User::create([
            'nick' => $data['nick'],
            'password' => (new AuthMeHasher())->make($data['password']),
        ]);
    }
}
