<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\Role;
use Illuminate\Foundation\Auth\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('artworks_page', fn (User $user) => $user->role === Role::IS_ADMIN);
        Gate::define('portfolio_images_page', fn (User $user) => $user->role === Role::IS_ADMIN);
        Gate::define('achievements_page', fn (User $user) => $user->role === Role::IS_ADMIN);
        Gate::define('optimize_page', fn (User $user) => $user->role === Role::IS_ADMIN);
        //
    }
}
