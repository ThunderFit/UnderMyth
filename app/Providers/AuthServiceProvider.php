<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;
use App\Services\Guards;
use App\Providers\Eloquent;
use App\Models;
use App\Hashers;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        $this->registerProviders();

        $this->registerGuards();
    }

    private function registerProviders()
    {
        Auth::provider('AuthMe', function ($app, array $config) {

            return new Eloquent\EloquentUserNickProvider(
                new Hashers\AuthMeHasher(),
                Models\User::class
            );
        });
    }

    private function registerGuards()
    {
        Auth::extend('AuthMe', function ($app, $name, array $config) {

            $guard = new Guards\Auth\AuthMeSessionGuard(
                $name,
                Auth::createUserProvider($config['provider']),
                $app->make('session')->driver(),
                $app->make('request')
            );
            $guard->setCookieJar($app->make('cookie'));
            return $guard;
        });
    }
}
