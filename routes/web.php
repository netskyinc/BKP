<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', 'MainController@index');
Route::get('/about-us', 'MainController@about');
Route::get('/world-forum', 'MainController@worldForum');
Route::get('/news', 'MainController@news');
Route::get('/forum', 'MainController@forum');
Route::get('/how-choice', 'MainController@howChoice');
Route::get('/contracts', 'MainController@contracts');
