<?php

use App\Http\Controllers\Admin\AchievementController as AdminAchievementController;
use App\Http\Controllers\Admin\ArtController as AdminArtController;
use App\Http\Controllers\Admin\OptimizeController as AdminOptimizeController;
use App\Http\Controllers\Admin\PortfolioImageController as AdminPortfolioImageController;
use App\Http\Controllers\User\AchievementController as UserAchievementController;
use App\Http\Controllers\User\EmailController as UserEmailController;
use App\Http\Controllers\User\PortfolioImageController as UserPortfolioImageController;
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

Route::get('/', [UserPortfolioImageController::class, 'index'])->name('home');

Route::get('/about-me', [UserAchievementController::class, 'index'])->name('about-me');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::post('/contacts', [UserEmailController::class, 'sendEmail'])->name('send');

Route::middleware('auth')->group(function () {
    // Arts

    Route::prefix('arts-admin')->name('arts-')->middleware('roleControl:admin'/*, 'can:viewAny,user'*/ /*, 'can:view,art'*/)->group(function () {
        Route::get('', [AdminArtController::class, 'index'])->name('index');
        Route::get('create', [AdminArtController::class, 'create'])->name('create');
        Route::post('', [AdminArtController::class, 'store'])->name('store');
        Route::get('edit/{art}', [AdminArtController::class, 'edit'])->name('edit');
        Route::put('{art}', [AdminArtController::class, 'update'])->name('update');
        Route::delete('{art}', [AdminArtController::class, 'destroy'])->name('delete');
        Route::get('show/{id}', [AdminArtController::class, 'show'])->name('show');
        Route::delete('delete-picture/{art}', [AdminArtController::class, 'deletePicture'])->name('delete-picture');
    });
    // Portfolio Images
    Route::prefix('portfolioImages-admin')->middleware('roleControl:admin')->name('portfolioImages-')->group(function () {
        Route::get('', [AdminPortfolioImageController::class, 'index'])->name('index');
        Route::get('create', [AdminPortfolioImageController::class, 'create'])->name('create');
        Route::post('', [AdminPortfolioImageController::class, 'store'])->name('store');
        Route::get('edit/{portfolioImage}', [AdminPortfolioImageController::class, 'edit'])->name('edit');
        Route::put('{portfolioImage}', [AdminPortfolioImageController::class, 'update'])->name('update');
        Route::delete('{portfolioImage}', [AdminPortfolioImageController::class, 'destroy'])->name('delete');
        Route::get('show/{id}', [AdminPortfolioImageController::class, 'show'])->name('show');
        Route::delete('delete-picture/{portfolioImage}', [AdminPortfolioImageController::class, 'deletePicture'])->name('delete-picture');
    });
    // Achievements
    Route::prefix('achievements-admin')->middleware('roleControl:admin')->name('achievements-')->controller(AdminAchievementController::class)->group(function () {
        Route::get('', 'index')->name('index');
        Route::get('create', 'create')->name('create');
        Route::post('', 'store')->name('store');
        Route::put('{achievement}', 'update')->name('update');
        Route::delete('{achievement}', 'destroy')->name('delete');
    });

    //artisan optimize
    Route::get('/clear-optimize', [AdminOptimizeController::class, 'clearOptimize'])->name('clear')->middleware('roleControl:admin');

    //artisan clear cache
    Route::get('/optimize', [AdminOptimizeController::class, 'optimize'])->name('optimize')->middleware('roleControl:admin');
});
require __DIR__ . '/auth.php';
