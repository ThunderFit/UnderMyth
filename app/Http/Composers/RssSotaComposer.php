<?php namespace App\Http\Composers;

use Illuminate\Contracts\View\View;

class RssSotaComposer {

    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $feed = app('Feeds')->make('https://www.shroudoftheavatar.com/?feed=rss2');

        $view->with('title', $feed->get_title());
        $view->with('permalink', $feed->get_permalink());
        $view->with('items', $feed->get_items());
    }
}