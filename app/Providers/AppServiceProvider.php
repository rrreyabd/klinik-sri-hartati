<?php

namespace App\Providers;

use App\Models\Patient;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot()
    {
        Inertia::share([
            'auth' => function () {
                return [
                    'user' => Auth::user() ? Auth::user() : null,
                ];
            },
            'patient' => function () {
                return Auth::user() ? Patient::where('user_id', Auth::user()->id)->first() : null;
            },
        ]);
    }
}
