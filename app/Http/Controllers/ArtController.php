<?php

namespace App\Http\Controllers;

use App\Models\Art;
use App\Http\Requests\StoreArtRequest;
use App\Http\Requests\UpdateArtRequest;
use Inertia\Inertia;
use App\Models\Image;

class ArtController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $arts = Art::all();
        return view('art.index', ['arts' => $arts]);
    }

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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('art.create', []);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreArtRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreArtRequest $request, Image $image)
    {
        $art = new Art;
        $art->title = $request->title;
        $art->description = $request->description;
        $art->price = $request->price;

        if ($request->file('photoPath')) {
            $art->photo_path = $image->processImage($request, $art->title, 'photoPath', null, 'artworks');
        }
        if ($request->file('hoverPhotoPath')) {
            $art->hover_photo_path = $image->processImage($request, 'hover' . $art->title, 'hoverPhotoPath', null, 'artworks');
        }

        $art->save();
        return redirect()->route('arts-index');
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

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Art  $art
     * @return \Illuminate\Http\Response
     */
    public function edit(Art $art)
    {
        return view('art.edit', ['art' => $art]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateArtRequest  $request
     * @param  \App\Models\Art  $art
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateArtRequest $request, Art $art, Image $image)
    {
        $art->title = $request->title;
        $art->description = $request->description;
        $art->price = $request->price;


        if ($request->file('photoPath')) {
            $this->deletePicture($art, $image, $art->photo_path);
            $art->delete();
            $art->photo_path = $image->processImage($request, $art->title, 'photoPath', $art->photo_path, 'artworks');
        }

        if ($request->file('hoverPhotoPath')) {
            $this->deletePicture($art, $image, $art->hover_photo_path);
            $art->delete();
            $art->hover_photo_path = $image->processImage($request, 'hover' . $art->title, 'hoverPhotoPath', $art->hover_photo_path, 'artworks');
        }

        $art->save();
        return redirect()->route('arts-index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Art  $art
     * @return \Illuminate\Http\Response
     */
    public function destroy(Art $art, Image $image)
    {
        $this->deletePicture($art, $image, $art->photo_path);
        $this->deletePicture($art, $image, $art->hover_photo_path);
        $art->delete();
        return redirect()->route('arts-index');
    }

    public function deletePicture(Art $art, Image $image, $path)
    {

        if ($art->photo_path) {
            $image->deleteImage($path, 'artworks');
        }

        $art->photo_path = null;
        $art->save();
        return redirect()->back();
    }
}
