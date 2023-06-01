<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreArtRequest;
use App\Http\Requests\UpdateArtRequest;
use App\Models\Art;
use App\Models\Image;

class ArtController extends Controller
{
    private function authenticate()
    {
        $this->authorize('artworks_page');      //third securit
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authenticate();
        $arts = Art::all();

        return view('admin.art.index', ['arts' => $arts]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->authenticate();

        return view('admin.art.create', []);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreArtRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreArtRequest $request, Image $image)
    {
        $this->authenticate();
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
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Art  $art
     * @return \Illuminate\Http\Response
     */
    public function edit(Art $art)
    {
        $this->authenticate();

        return view('admin.art.edit', ['art' => $art]);
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
        $this->authenticate();
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
        $this->authenticate();
        $this->deletePicture($art, $image, $art->photo_path);
        $this->deletePicture($art, $image, $art->hover_photo_path);
        $art->delete();

        return redirect()->route('arts-index');
    }

    public function deletePicture(Art $art, Image $image, $path)
    {
        $this->authenticate();
        if ($art->photo_path) {
            $image->deleteImage($path, 'artworks');
        }

        $art->photo_path = null;
        $art->save();

        return redirect()->back();
    }
}
