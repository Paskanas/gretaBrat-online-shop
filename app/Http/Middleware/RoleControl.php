<?php

namespace App\Http\Middleware;

use App\Models\Role;
use Closure;
use Illuminate\Http\Request;

class RoleControl
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $role)
    {
        $userRole = $request->user()?->role ?? 0;

        if (!auth()->check() || auth()->user()->role != Role::IS_ADMIN) {
            abort(403);  // 403 Forbidden
        }

        if ($role === 'admin') {
            if ($userRole < Role::IS_ADMIN) {
                abort(401);  // 401 Unauthorized
            }
        }
        //komentaras
        //for now there isn't any regular users
        // if ($role === 'user') {
        //     if ($userRole < 1) {
        //         abort(401);
        //     }
        // }
        return $next($request);
    }
}
