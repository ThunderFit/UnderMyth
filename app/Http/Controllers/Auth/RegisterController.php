<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Hashers\AuthMeHasher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends AuthBaseController
{
    use RegistersUsers { register as public registerBase; }

    protected $redirectTo = '/profile';

    public function showRegistrationForm()
    {
        return isRegisterOn()
            ? view('auth.register')
            : redirect( route('authGet') );
    }

    public function register(Request $request)
    {
        return isRegisterOn()
            ? self::registerBase($request)
            : redirect( route('authGet') );
    }

    protected function validator(array $data)
    {
        return Validator::make($data, getRegisterValidateRules());
    }

    protected function create(array $data)
    {
        return User::create([
            'username' => $data['username'],
            'name' => strtolower($data['username']),
            'password' => (new AuthMeHasher())->make($data['password']),
        ]);
    }
}
