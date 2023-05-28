<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Artisan;

class OptimizeController extends Controller
{

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
