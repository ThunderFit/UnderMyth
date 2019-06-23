<?php

namespace App\Providers\Eloquent;

use Illuminate\Auth\EloquentUserProvider;
use Illuminate\Contracts\Auth\Authenticatable as UserContract;
use App\Hashers\AuthMeHasher;

class EloquentUserNameProvider extends EloquentUserProvider
{
    public function validateCredentials(UserContract $user, array $credentials)
    {
        $plain = $credentials['password'];

        return ( new AuthMeHasher() )->check($plain, $user->getAuthPassword());
    }
}