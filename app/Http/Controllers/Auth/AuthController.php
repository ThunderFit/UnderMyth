<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

class AuthController extends AuthBaseController
{
    use AuthenticatesUsers;

    protected $redirectTo = '/profile';

    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    protected function username()
    {
        return 'username';
    }
}
