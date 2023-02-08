<?php

use App\Http\Controllers\ArtController;
use App\Http\Controllers\AchievementController;
use App\Http\Controllers\EmailController;
use Illuminate\Foundation\Application;
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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::prefix('arts')->name('restorants-js-')->group(function () {
Route::get('/', [ArtController::class, 'home'])->name('home');

// }
// Route::get('/', function () {
//     return Inertia::render('Home');
// })
// // ->middleware(['auth', 'verified'])
// ->name('home');

// Route::get('/about-me', function () {
//     return Inertia::render('AboutMe');
// })
//     // ->middleware(['auth', 'verified'])
//     ->name('about-me');

Route::get('/about-me', [AchievementController::class, 'index'])->name('about-me');


Route::get('/contact', function () {
    return Inertia::render('Contact');
})
    // ->middleware(['auth', 'verified'])
    ->name('contact');

Route::post('/contacts', [EmailController::class, 'sendEmail'])->name('send');


Route::get('/cart', function () {
    return Inertia::render('Cart');
})
    // ->middleware(['auth', 'verified'])
    ->name('cart');

// Route::get('/shop', function () {
//     return Inertia::render('Shop');
// })
Route::get('/shop', [ArtController::class, 'shop'])
    // ->middleware(['auth', 'verified'])
    ->name('shop');

// Route::get('show', [ArtController::class, 'link'])->name('show-route');
Route::get('/shop/{id}', [ArtController::class, 'showJs'])->name('shop-item');
// Arts
Route::prefix('arts-admin')->name('arts-')->group(function () {
    Route::get('', [ArtController::class, 'index'])->name('index')
        // ->middleware('roleControl:user')
    ;
    Route::get('create', [ArtController::class, 'create'])->name('create')
        // ->middleware('roleControl:admin')
    ;
    Route::post('', [ArtController::class, 'store'])->name('store')
        // ->middleware('roleControl:admin')
    ;
    Route::get('edit/{art}', [ArtController::class, 'edit'])->name('edit')
        // ->middleware('roleControl:admin')
    ;
    Route::put('{art}', [ArtController::class, 'update'])->name('update')
        // ->middleware('roleControl:admin')
    ;
    Route::delete('{art}', [ArtController::class, 'destroy'])->name('delete')
        // ->middleware('roleControl:admin')
    ;
    Route::get('show/{id}', [ArtController::class, 'show'])->name('show')
        // ->middleware('roleControl:user')
    ;
    Route::delete('delete-picture/{art}', [ArtController::class, 'deletePicture'])->name('delete-picture');
    // Route::get('show', [ArtController::class, 'link'])->name('show-route');
});

require __DIR__ . '/auth.php';
