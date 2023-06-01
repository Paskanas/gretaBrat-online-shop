<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Achievement;
use Inertia\Inertia;

class AchievementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('AboutMe');
    }

    public function getAchievements()
    {
        $achievements = Achievement::select('id', 'achievement')->orderByDesc('id')->get();

        return response()->json($achievements);
    }
}
