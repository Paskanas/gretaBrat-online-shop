<?php

use App\Http\Controllers\ArtController;
use App\Http\Controllers\AchievementController;
use App\Http\Controllers\EmailController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', [ArtController::class, 'home'])->name('home');

Route::get('/about-me', [AchievementController::class, 'index'])->name('about-me');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::post('/contacts', [EmailController::class, 'sendEmail'])->name('send');


// Arts
Route::prefix('arts-admin')->name('arts-')->group(function () {
    Route::get('', [ArtController::class, 'index'])->name('index')
        ->middleware('roleControl:admin');
    Route::get('create', [ArtController::class, 'create'])->name('create')
        ->middleware('roleControl:admin');
    Route::post('', [ArtController::class, 'store'])->name('store')
        ->middleware('roleControl:admin');
    Route::get('edit/{art}', [ArtController::class, 'edit'])->name('edit')
        ->middleware('roleControl:admin');
    Route::put('{art}', [ArtController::class, 'update'])->name('update')
        ->middleware('roleControl:admin');
    Route::delete('{art}', [ArtController::class, 'destroy'])->name('delete')
        ->middleware('roleControl:admin');
    Route::get('show/{id}', [ArtController::class, 'show'])->name('show')
        ->middleware('roleControl:admin');
    Route::delete('delete-picture/{art}', [ArtController::class, 'deletePicture'])->name('delete-picture');
});

require __DIR__ . '/auth.php';
