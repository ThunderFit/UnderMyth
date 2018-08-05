<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


/***** Index Page*****/
Route::get('/', 'IndexController@get');

/***** MainPages Route*****/
Route::get('/rules', 'Main\RulesController@get');
Route::get('/contacts', 'Main\ContactsController@get');
Route::get('/info', 'Main\InfoController@get');

/***** Redirection *****/
Route::get('/vklink', 'Main\VkLinkController@get');
