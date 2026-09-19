<?php

use App\Http\Controllers\DevlogController;
use App\Http\Controllers\HomepageController;
use Carbon\Carbon;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $deployedAt = Carbon::createFromTimestamp((int) file_get_contents(storage_path('deployed_at.txt')));

    $containerStartedAt = Carbon::createFromTimestamp(stat('/proc/1')['ctime']);

    return response()->json([
        'status' => 'ok',
        'message' => "hey, this is Project Runpi Api 👋",
        'time' => now()->toIso8601String(),
        'timezone' => config('app.timezone'),
        'deployed_ago' => $deployedAt->diffForHumans(),
        'container_uptime' => $containerStartedAt->diffForHumans(),
        'php_version' => phpversion(),
        'laravel_version' => app()->version(),
        'environment' => app()->environment(),
        'github' => 'https://github.com/runvicm',
    ]);
});


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
