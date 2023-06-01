<?php

use App\Http\Controllers\User\AchievementController as UserAchievementController;
use App\Http\Controllers\User\PortfolioImageController as UserPortfolioImageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/portfolio-images', [UserPortfolioImageController::class, 'getPortfolioImages'])->name('getPortfolioImages');
Route::get('/get-max-order-number', [UserPortfolioImageController::class, 'getMaxOrderNum'])->name('getMaxOrderNum');
Route::get('/achievements', [UserAchievementController::class, 'getAchievements'])->name('getAchievements');
