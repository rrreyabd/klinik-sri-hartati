<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Patient;
use Symfony\Component\HttpFoundation\Response;

class CheckPatientData
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check()) {
            $user = Auth::user();
            
            if ($user->role == "user") {
                $data = Patient::where('user_id', $user->id)->first();

                if (!$data) {
                    return redirect()->route('data.edit');
                }
            }
        }

        return $next($request);
    }
}
