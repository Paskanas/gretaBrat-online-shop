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
        // foreach ($arts as $key => $art) {
        //     $name = pathinfo($art->photo_path, PATHINFO_FILENAME);
        //     $ext = pathinfo($art->photo_path, PATHINFO_EXTENSION);
        //     $arts[$key]->photo_path = './images/artworks' . '/' . $name . '.' . $ext;

        //     $name = pathinfo($art->hover_photo_path, PATHINFO_FILENAME);
        //     $ext = pathinfo($art->hover_photo_path, PATHINFO_EXTENSION);
        //     $arts[$key]->hover_photo_path = './images/artworks' . '/' . $name . '.' . $ext;
        // }
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
            $art->photo_path = $image->processImage($request, $art->title, 'photoPath', $art->photo_path, 'artworks');
        }

        if ($request->file('hoverPhotoPath')) {
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
        $this->deletePicture($art, $image);
        $art->delete();
        return redirect()->route('arts-index');
    }

    public function deletePicture(Art $art, Image $image)
    {
        // $name = pathinfo($art->photo_path, PATHINFO_FILENAME) ?? 'none';
        // $ext = pathinfo($art->photo_path, PATHINFO_EXTENSION) ?? '.jpg';
        // $path = public_path('/images') . '/' . $name . '.' . $ext;
        // dump($path);
        // if (file_exists($path)) {
        //     unlink($path);
        // }

        if ($art->photo_path) {
            $image->deleteImage($art->photo_path, 'artworks');
        }

        $art->photo_path = null;
        $art->save();
        return redirect()->back();
    }
}
