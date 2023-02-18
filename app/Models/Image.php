<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;

class Image extends Model
{
    use HasFactory;
    public function deleteImage($imagePath, $directoryName, $all = false)
    {
        $name = pathinfo($imagePath, PATHINFO_FILENAME);
        $ext = pathinfo($imagePath, PATHINFO_EXTENSION);
        if ($all) {
            $path = asset("/storage/images/$directoryName") . '/' . $name . '.' . $ext;
        } else {
            if (App::environment('production')) {
                $path = getcwd() . "/storage/images/$directoryName/" . $name . '.' . $ext;
            } else {
                $path = public_path("/storage/images/$directoryName") . '/' . $name . '.' . $ext;
            }
        }

        if (file_exists($path)) {
            unlink($path);
        }
    }

    public function processImage($request, $title, $itemName, $dbImagePath = null, $directoryName)
    {
        $image = $request->file($itemName);
        $ext = $image->getClientOriginalExtension();
        $file = $title . '.' . $ext;
        if ($dbImagePath) {
            $this->deleteImage($dbImagePath, $directoryName, true);
        }

        if (App::environment('production')) {
            $image->move(getcwd() . "/storage/images/$directoryName", $file);
        } else {
            $image->move(public_path() . "/storage/images/$directoryName", $file);
        }

        return asset("/storage/images/$directoryName") . '/' . $file;
    }

    public function getExtension($itemName)
    {
        $ext = pathinfo($itemName, PATHINFO_EXTENSION);
        return $ext;
    }

    public function getAssetPath($imagePath, $directoryName)
    {
        $name = pathinfo($imagePath, PATHINFO_FILENAME);
        $ext = pathinfo($imagePath, PATHINFO_EXTENSION);
        if (App::environment('production')) {
            $path = getcwd() . "/storage/images/$directoryName/" . $name . '.' . $ext;
        } else {
            $path = public_path("/storage/images/$directoryName") . '/' . $name . '.' . $ext;
        }
        return $path;
    }
}
