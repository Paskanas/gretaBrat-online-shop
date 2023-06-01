<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\ServiceProvider;
use Bugsnag\BugsnagLaravel\Facades\Bugsnag;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Model::preventLazyLoading();

        Model::handleLazyLoadingViolationUsing(
            function ($model, $relation) {
                Bugsnag::notifyError(
                    "N+1 Query detected",
                    sprintf("N+1 Query detected in %s::%s", get_class($model), $relation)
                );
            }
        );
    }
}
