<?php

use App\Http\Controllers\ArtController;
use App\Http\Controllers\AchievementController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\PortfolioImageController as PortfolioImage;
use Illuminate\Support\Facades\Artisan;
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

Route::get('/', [PortfolioImage::class, 'home'])->name('home');

Route::get('/about-me', [AchievementController::class, 'indexJs'])->name('about-me');

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
// Portfolio Images
Route::prefix('portfolioImages-admin')->name('portfolioImages-')->group(function () {
    Route::get('', [PortfolioImage::class, 'index'])->name('index')
        ->middleware('roleControl:admin');
    Route::get('create', [PortfolioImage::class, 'create'])->name('create')
        ->middleware('roleControl:admin');
    Route::post('', [PortfolioImage::class, 'store'])->name('store')
        ->middleware('roleControl:admin');
    Route::get('edit/{portfolioImage}', [PortfolioImage::class, 'edit'])->name('edit')
        ->middleware('roleControl:admin');
    Route::put('{portfolioImage}', [PortfolioImage::class, 'update'])->name('update')
        ->middleware('roleControl:admin');
    Route::delete('{portfolioImage}', [PortfolioImage::class, 'destroy'])->name('delete')
        ->middleware('roleControl:admin');
    Route::get('show/{id}', [PortfolioImage::class, 'show'])->name('show')
        ->middleware('roleControl:admin');
    Route::delete('delete-picture/{portfolioImage}', [PortfolioImage::class, 'deletePicture'])->name('delete-picture');
});
// Achievements
Route::prefix('achievements-admin')->name('achievements-')->group(function () {
    Route::get('', [AchievementController::class, 'index'])->name('index')
        ->middleware('roleControl:admin');
    Route::get('create', [AchievementController::class, 'create'])->name('create')
        ->middleware('roleControl:admin');
    Route::post('', [AchievementController::class, 'store'])->name('store')
        ->middleware('roleControl:admin');
    Route::put('{achievement}', [AchievementController::class, 'update'])->name('update')
        ->middleware('roleControl:admin');
    Route::delete('{achievement}', [AchievementController::class, 'destroy'])->name('delete')
        ->middleware('roleControl:admin');
});

//artisan optimize
Route::get('/clear-optimize', function () {
    $exitCode = Artisan::call('optimize:clear');
    return $exitCode;
})->middleware('roleControl:admin');

//artisan clear cache
Route::get('/optimize', function () {
    $exitCode = Artisan::call('optimize');
    return $exitCode;
})->middleware('roleControl:admin');

require __DIR__ . '/auth.php';
