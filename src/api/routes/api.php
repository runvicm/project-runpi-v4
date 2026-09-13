<?php

use App\Http\Controllers\DevlogController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('throttle:30,1')->group(function () {
    // Route::get('/homepage/devlog', [ApiHomepageController::class, 'devlog']);

    Route::get('/devlog/status', [DevlogController::class, 'status']);
    // Route::get('/devlog/list', [ApiDevlogController::class, 'logs']);
    // Route::get('/devlog/view/{slug}', [ApiDevlogController::class, 'view']);
    // Route::post('/devlog/view/{slug}', [ApiDevlogController::class, 'addView']);

    // Route::get('/minecraft/server/info', [ApiMinecraftController::class, 'stat']);
});








Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
