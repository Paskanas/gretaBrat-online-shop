<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Artisan;

class OptimizeController extends Controller
{
    public function __construct()
    {
        // $this->authorize('optimize_page');  //third security
    }

    public function optimize()
    {
        Artisan::call('optimize');

        return redirect()->back();
    }

    public function clearOptimize()
    {
        Artisan::call('optimize:clear');

        return redirect()->back();
    }
}
