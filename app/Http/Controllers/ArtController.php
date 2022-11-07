<?php

namespace App\Http\Controllers;

use App\Models\Art;
use App\Http\Requests\StoreArtRequest;
use App\Http\Requests\UpdateArtRequest;
use Inertia\Inertia;

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
    public function store(StoreArtRequest $request)
    {
        $art = new Art;
        $art->title = $request->title;
        $art->description = $request->description;
        $art->price = $request->price;

        if ($request->file('photoPath')) {
            $art->photo_path = $this->processPhoto($request, $art->title, 'photoPath');
        }
        if ($request->file('hoverPhotoPath')) {
            $art->hover_photo_path = $this->processPhoto($request, 'hover' . $art->title, 'hoverPhotoPath');
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


    private function deletePhoto($photoPath)
    {
        $name = pathinfo($photoPath, PATHINFO_FILENAME);
        $ext = pathinfo($photoPath, PATHINFO_EXTENSION);

        // $path = asset('/images') . '/' . $name . '.' . $ext;
        $path = public_path('/images/artworks') . '/' . $name . '.' . $ext;
        dump($path);
        if (file_exists($path)) {
            unlink($path);
        }
    }

    private function processPhoto($request, $title, $itemName, $dbPhotoPath = null)
    {
        $photo = $request->file($itemName);
        $ext = $photo->getClientOriginalExtension();
        $file = $title . '.' . $ext;
        if ($dbPhotoPath) {
            $this->deletePhoto($dbPhotoPath);
        }
        $photo->move(public_path() . '/images/artworks', $file);
        return asset('/images/artworks') . '/' . $file;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateArtRequest  $request
     * @param  \App\Models\Art  $art
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateArtRequest $request, Art $art)
    {
        $art->title = $request->title;
        $art->description = $request->description;
        $art->price = $request->price;


        if ($request->file('photoPath')) {
            $art->photo_path = $this->processPhoto($request, $art->title, 'photoPath', $art->photo_path);
        }

        if ($request->file('hoverPhotoPath')) {
            $art->hover_photo_path = $this->processPhoto($request, 'hover' . $art->title, 'hoverPhotoPath', $art->hover_photo_path);
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
    public function destroy(Art $art)
    {
        $art->delete();
        return redirect()->route('arts-index');
    }

    public function deletePicture(Art $art)
    {
        // $name = pathinfo($art->photo_path, PATHINFO_FILENAME) ?? 'none';
        // $ext = pathinfo($art->photo_path, PATHINFO_EXTENSION) ?? '.jpg';
        // $path = public_path('/images') . '/' . $name . '.' . $ext;
        // dump($path);
        // if (file_exists($path)) {
        //     unlink($path);
        // }

        if ($art->photo_path) {
            $this->deletePhoto($art->photo_path);
        }

        $art->photo_path = null;
        $art->save();
        return redirect()->back();
    }
}
