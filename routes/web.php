<?php

$route = $this;

/***** Index Page*****/
$this->get('/', 'IndexController@get');

/***** Auth / Register Route *****/

$this->get('/auth', 'Auth\AuthController@showLoginForm')->Middleware('guest')->name('authGet');
$this->post('/auth', 'Auth\AuthController@login')->Middleware('guest')->name('authPost');

$this->post('/logout', 'Auth\AuthController@logout')->Middleware('auth')->name('logoutPost');

$this->get('/register', 'Auth\RegisterController@showRegistrationForm')->Middleware('guest')->name('registerGet');
$this->post('/register', 'Auth\RegisterController@register')->Middleware('guest')->name('registerPost');

/***** MainPages Route*****/
$this->get('/rules', 'Main\RulesController@get')->name('rules');
$this->get('/contacts', 'Main\ContactsController@get')->name('contacts');
$this->get('/info', 'Main\InfoController@get')->name('info');
$this->get('/version', 'Main\VersionController@get')->name('version');

/***** Redirection *****/
$this->get('/vklink', 'Main\VkLinkController@get')->name('vklink');

$this->get('/logout', 'RedirectController@index')->Middleware('auth')->name('logoutGet');

/***** Profile Routes *****/

$this->get('/profile', 'Profile\ProfileController@showProfile')->Middleware('auth')->name('profileGet');
$this->get('/profile/user', 'Profile\ProfileUserController@showProfile')->Middleware('auth')->name('profileUserGet');

$this->get('/profile/changePassword/{token}', 'Auth\ChangePasswordController@showResetForm')->Middleware('guest')->name('profileChangePasswordGet');
$this->post('/profile/changePassword', 'Auth\ChangePasswordController@reset')->Middleware('guest')->name('profileChangePasswordPost');
$this->get('/profile/resetPassword', 'Auth\ForgotPasswordController@showLinkRequestForm')->Middleware('guest')->name('resetPassword');
$this->post('/profile/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->Middleware('guest')->name('profileEmailPost');

/***** Services *****/

$this->group(array('prefix' => 'services'), function () use ($route) {
    $route->get('/', 'Services\ServicesController@get')->name('services');
    $route->get('/build', 'Services\BuildController@get')->name('services.build');
});

