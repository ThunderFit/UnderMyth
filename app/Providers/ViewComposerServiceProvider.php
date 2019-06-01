<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ViewComposerServiceProvider extends ServiceProvider
{
    /**
     * @return void
     */
    public function boot()
    {
        View()->composer('widgets.rss.sota', 'App\Http\Composers\RssSotaComposer');
    }

    /**
     * @return void
     */
    public function register()
    {
        //
    }
}
