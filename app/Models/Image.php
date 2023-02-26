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
            $path = asset("/storage/images/$directoryName/")  . $name . '.' . $ext;
            $pathOrginal = asset("/storage/images/$directoryName/orginal/")  . $name . '.' . $ext;
        } else {
            if (App::environment('production')) {
                $path = getcwd() . "/storage/images/$directoryName/" . $name . '.' . $ext;
                $pathOrginal = getcwd() . "/storage/images/$directoryName/orginal/" . $name . '.' . $ext;
            } else {
                $path = public_path("/storage/images/$directoryName/")  . $name . '.' . $ext;
                $pathOrginal = public_path("/storage/images/$directoryName/orginal/") . $name . '.' . $ext;
            }
        }

        if (file_exists($path)) {
            unlink($path);
        }
        if (file_exists($pathOrginal)) {
            unlink($pathOrginal);
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
            $image->move(getcwd() . "/storage/images/$directoryName/orginal", $file);
            $gdImage = imagecreatefromjpeg(getcwd() . "/storage/images/$directoryName/orginal" . "/" . $file);
            imagejpeg($gdImage, getcwd() . "/storage/images/$directoryName" . '/' . $file, 90);
        } else {
            $image->move(public_path() . "/storage/images/$directoryName/orginal", $file);
            $gdImage = imagecreatefromjpeg(public_path() . "/storage/images/$directoryName/orginal" . "/" . $file);
            imagejpeg($gdImage, public_path() . "/storage/images/$directoryName" . '/' . $file, 90);
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
            $path = public_path("/storage/images/$directoryName/") . $name . '.' . $ext;
        }
        return $path;
    }
    public function getOrginalAssetPath($imagePath, $directoryName)
    {
        $name = pathinfo($imagePath, PATHINFO_FILENAME);
        $ext = pathinfo($imagePath, PATHINFO_EXTENSION);
        if (App::environment('production')) {
            $path = getcwd() . "/storage/images/$directoryName/orginal/" . $name . '.' . $ext;
        } else {
            $path = public_path("/storage/images/$directoryName/orginal/") . $name . '.' . $ext;
        }
        return $path;
    }
}
