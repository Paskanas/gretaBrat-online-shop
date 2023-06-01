<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Models\PortfolioImage;
use Inertia\Inertia;

class PortfolioImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Home');
    }

    public function getPortfolioImages(Image $image)
    {
        $portfolioImages = PortfolioImage::where('order', '>', 0)->get();
        foreach ($portfolioImages as $key => $content) {
            $portfolioImages[$key]['extension'] = $image->getExtension($content->photo_path);
        }

        return response()->json($portfolioImages);
    }

    public function getMaxOrderNum()
    {
        $maxOrderNum = PortfolioImage::max('order');
        if ($maxOrderNum % 2 === 1) {
            $maxOrderNum -= 1;
        }

        return response()->json($maxOrderNum);
    }
}
