<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Art;
use Inertia\Inertia;

class ArtController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function home()
    {
        $arts = Art::all();
        return Inertia::render('Home', ['arts' => $arts]);
    }

    public function shop()
    {
        $arts = Art::all();
        return Inertia::render('Shop', ['arts' => $arts]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Art  $art
     * @return \Illuminate\Http\Response
     */
    public function showJs(int $artId)
    {
        $art = Art::where('id', $artId)->first();
        return Inertia::render('ShopItem', ['art' => $art, 'sizes' => Art::SIZES]);
    }
}
