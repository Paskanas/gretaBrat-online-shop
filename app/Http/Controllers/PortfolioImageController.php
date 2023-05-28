<?php

namespace App\Http\Controllers;

use App\Models\PortfolioImage;
use App\Http\Requests\StorePortfolioImageRequest;
use App\Http\Requests\UpdatePortfolioImageRequest;
use App\Jobs\CompressVideo;
use App\Jobs\CreateThumbnailFromVideo;
use App\Models\Image;
use getID3;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;


// import the Intervention Image Manager Class
use Intervention\Image\ImageManager;

class PortfolioImageController extends Controller
{
    private $directory = 'portfolio';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Image $image, ImageManager $imageManager)
    {
        $portfolioImages = PortfolioImage::orderBy('order')->get();
        $maxOrderNum = PortfolioImage::select()->max('order');

        foreach ($portfolioImages as $key => $content) {
            $extension = $image->getExtension($content->photo_path);
            if ($content->order === $maxOrderNum) {
                $maxOrderIndex = $key;
            }
            if ($extension === 'jpg') {
                $width = $imageManager->make($image->getAssetPath($content->photo_path, $this->directory))->width();
                $height = $imageManager->make($image->getAssetPath($content->photo_path, $this->directory))->height();
                $portfolioImages[$key]['imageDimentions'] = [$width, $height];
                $portfolioImages[$key]['isImage'] = true;
            } else if ($extension === 'mp4') {
                $getID3 = new getID3;
                $file = $getID3->analyze($image->getAssetPath($portfolioImages[$key]->photo_path, $this->directory));
                if ($file && array_key_exists('video', $file)) {
                    $portfolioImages[$key]['imageDimentions'] = [$file['video']['resolution_x'], $file['video']['resolution_y']];
                }
                $portfolioImages[$key]['isVideo'] = true;
            }
        }

        return view('portfolioImage.index', ['portfolioImages' => $portfolioImages, 'maxOrder' => [$maxOrderNum, $maxOrderIndex]]);
    }

    public function home(Image $image)
    {
        $portfolioImages = PortfolioImage::where('order', '>', 0)->get();
        $maxOrderNum = PortfolioImage::max('order');

        if ($maxOrderNum % 2 === 1) {
            $maxOrderNum -= 1;
        }
        foreach ($portfolioImages as $key => $content) {
            $portfolioImages[$key]['extension'] = $image->getExtension($content->photo_path);
        }
        return Inertia::render('Home', ['portfolioImages' => $portfolioImages, 'maxOrderNum' => $maxOrderNum]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $portfolioImages = PortfolioImage::select('order')->where('order', '>', '0')->pluck('order')->toArray();

        $order = [];
        foreach (range(0, 255) as $number) {
            $order[$number] = $number;
        }
        $availableOrders = array_diff($order, $portfolioImages);
        return view('portfolioImage.create', ['availableOrders' => $availableOrders]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePortfolioImageRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePortfolioImageRequest $request, Image $image)
    {
        $portfolioImage = new PortfolioImage;
        $portfolioImage->title = $request->title;
        $portfolioImage->order = $request->order;


        if ($request->file('photoPath')) {
            $portfolioImage->photo_path = $image->processImage($request, $portfolioImage->title, 'photoPath', null, $this->directory);
        }

        $portfolioImage->save();
        if (App::environment('local')) {
            CreateThumbnailFromVideo::dispatch($portfolioImage);
            CompressVideo::dispatch($portfolioImage);
        }
        return redirect()->route('portfolioImages-index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PortfolioImage  $portfolioImage
     * @return \Illuminate\Http\Response
     */
    public function show(int $portfolioImageId, Image $image, ImageManager $imageManager)
    {
        $portfolioImage = PortfolioImage::where('id', $portfolioImageId)->first();
        $extension = $image->getExtension($portfolioImage->photo_path);
        if ($extension === 'jpg') {
            $width = $imageManager->make($image->getAssetPath($portfolioImage->photo_path, $this->directory))->width();
            $height = $imageManager->make($image->getAssetPath($portfolioImage->photo_path, $this->directory))->height();
            $portfolioImage['imageDimentions'] = [$width, $height];
            $portfolioImage['isImage'] = true;
        } else if ($extension === 'mp4') {
            $getID3 = new getID3;
            $file = $getID3->analyze($image->getAssetPath($portfolioImage->photo_path, $this->directory));
            $portfolioImage['imageDimentions'] = [$file['video']['resolution_x'], $file['video']['resolution_y']];
            $portfolioImage['isVideo'] = true;
        }
        return view('portfolioImage.show', [
            'portfolioImage' => $portfolioImage
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PortfolioImage  $portfolioImage
     * @return \Illuminate\Http\Response
     */
    public function edit(PortfolioImage $portfolioImage, Image $image, ImageManager $imageManager)
    {
        $portfolioOrders = PortfolioImage::select('order')->where('order', '>', '0')->pluck('order')->toArray();

        $order = [];
        foreach (range(0, 255) as $number) {
            $order[$number] = $number;
        }

        $extension = $image->getExtension($portfolioImage->photo_path);
        if ($extension === 'jpg') {
            $width = $imageManager->make($image->getAssetPath($portfolioImage->photo_path, $this->directory))->width();
            $height = $imageManager->make($image->getAssetPath($portfolioImage->photo_path, $this->directory))->height();
            $portfolioImage['imageDimentions'] = [$width, $height];
            $portfolioImage['isImage'] = true;
        } else if ($extension === 'mp4') {
            $getID3 = new getID3;
            $file = $getID3->analyze($image->getAssetPath($portfolioImage->photo_path, $this->directory));
            $portfolioImage['imageDimentions'] = [$file['video']['resolution_x'], $file['video']['resolution_y']];
            $portfolioImage['isVideo'] = true;
        }

        $availableOrders = array_diff($order, $portfolioOrders);
        return view('portfolioImage.edit', ['portfolioImage' => $portfolioImage, 'availableOrders' => $availableOrders]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePortfolioImageRequest  $request
     * @param  \App\Models\PortfolioImage  $portfolioImage
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePortfolioImageRequest $request, PortfolioImage $portfolioImage, Image $image)
    {
        $portfolioImage->title = $request->title;
        $portfolioImage->order = $request->order;


        if ($request->file('photoPath')) {
            $this->deletePicture($portfolioImage, $image);
            $portfolioImage->delete();
            $portfolioImage->photo_path = $image->processImage($request, $portfolioImage->title, 'photoPath', $portfolioImage->photo_path, $this->directory);
        }

        $portfolioImage->save();
        return redirect()->route('portfolioImages-index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PortfolioImage  $portfolioImage
     * @return \Illuminate\Http\Response
     */
    public function destroy(PortfolioImage $portfolioImage, Image $image)
    {
        $this->deletePicture($portfolioImage, $image);
        $portfolioImage->delete();
        return redirect()->route('portfolioImages-index');
    }

    public function deletePicture(PortfolioImage $portfolioImage, Image $image)
    {

        if ($portfolioImage->photo_path) {
            $image->deleteImage($portfolioImage->photo_path, $this->directory);
        }

        $portfolioImage->photo_path = null;
        $portfolioImage->save();
        return redirect()->back();
    }
}
