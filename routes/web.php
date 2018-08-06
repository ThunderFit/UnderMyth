<?php

/***** Index Page*****/
Route::get('/', 'IndexController@get');

/***** Auth / Register Route *****/

Route::get('/auth', 'Auth\AuthController@showLoginForm')->Middleware('guest');
Route::post('/auth', 'Auth\AuthController@login')->Middleware('guest');

Route::post('/logout', 'Auth\AuthController@logout')->Middleware('auth');

//Route::get('/register', 'Auth\RegisterController@showRegistrationForm')->Middleware('guest');
//Route::post('/register', 'Auth\RegisterController@register')->Middleware('guest');

/***** MainPages Route*****/
Route::get('/rules', 'Main\RulesController@get');
Route::get('/contacts', 'Main\ContactsController@get');
Route::get('/info', 'Main\InfoController@get');

/***** Redirection *****/
Route::get('/vklink', 'Main\VkLinkController@get');

Route::get('/logout', 'RedirectController@index');

/***** Profile Routes *****/

Route::get('/profile', 'Profile\ProfileController@showProfile')->Middleware('auth');
