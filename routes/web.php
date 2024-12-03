<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WeddingGuestController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});

Route::namespace('/')->group(function () {
    Route::get('/{id}/{name}', [WelcomeController::class, 'index'])->name('welcome.index');
    Route::put('/{id}', [WelcomeController::class, 'update'])->name('welcome.update');
});

Route::get('/dashboard', function () {
    return Inertia::render('WeddingGuests');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/wedding-guests', function () {
//     return Inertia::render('WeddingGuests');
// })->middleware(['auth', 'verified'])->name('wedding-guests');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [WeddingGuestController::class, 'index'])->name('dashboard.index');
    Route::post('/dashboard', [WeddingGuestController::class, 'store'])->name('dashboard.store');
    Route::put('/dashboard', [WeddingGuestController::class, 'update'])->name('dashboard.update');
    Route::delete('/dashboard', [WeddingGuestController::class, 'destroy'])->name('dashboard.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
