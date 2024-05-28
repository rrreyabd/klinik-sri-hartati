<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class RoleCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next, ...$roles)
    {
        $userRole = Auth::user()->role;

        if (in_array($userRole, $roles)) {
            DB::setDefaultConnection($userRole);
            return $next($request);
        } else {
            abort(404, 'Database connection not configured for this user role.');
        }
    
    }
}
