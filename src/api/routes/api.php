<?php

use App\Http\Controllers\DevlogController;
use App\Http\Controllers\HomepageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('throttle:30,1')->group(function () {

    // ======== Homepage ========
    Route::prefix('homepage')->name('devlog.')->group(function () {
        Route::get('devlog', [HomepageController::class, 'devlog']);
    });

    // ======== Devlog ========
    Route::prefix('devlog')->name('devlog.')->group(function () {
        Route::get('status', [DevlogController::class, 'status']);
        Route::get('entries', [DevlogController::class, 'index'])->name('entries.index');
        Route::get('entries/{entry:slug}', [DevlogController::class, 'show'])->name('entries.show');
        Route::get('tree', [DevlogController::class, 'tree'])->name('entries.tree');
        Route::post('entries/{entry:slug}', [DevlogController::class, 'addView']);
    });
});
