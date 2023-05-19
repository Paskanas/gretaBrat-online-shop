<?php

namespace App\Http\Controllers;

use App\Models\Achievement;
use App\Http\Requests\StoreAchievementRequest;
use App\Http\Requests\UpdateAchievementRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AchievementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexJs()
    {
        return Inertia::render('AboutMe');
    }
    public function getAchievements()
    {
        $achievements = Achievement::all();
        return response()->json($achievements);
    }

    public function index()
    {
        $achievements = Achievement::all();
        return view('achievements.index', ['achievements' => $achievements]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('achievements.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreAchievementRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAchievementRequest $request)
    {
        $achievement = new Achievement;
        $achievement->achievement = $request->achievement;

        $achievement->save();

        return redirect()->route('achievements-index');
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAchievementRequest  $request
     * @param  \App\Models\Achievement  $achievement
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAchievementRequest $request, Achievement $achievement)
    {
        $achievement->achievement = $request->achievement;

        $achievement->save();
        return redirect()->route('achievements-index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Achievement  $achievement
     * @return \Illuminate\Http\Response
     */
    public function destroy(Achievement $achievement)
    {
        $achievement->delete();
        return redirect()->route('achievements-index');
    }
}
