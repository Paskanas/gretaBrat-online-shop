<?php

use App\Http\Controllers\PortfolioImageController;
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


Route::get('/portfolio-images', [PortfolioImageController::class, 'getPortfolioImages'])->name('getPortfolioImages');
Route::get('/get-max-order-number', [PortfolioImageController::class, 'getMaxOrderNum'])->name('getMaxOrderNum');
