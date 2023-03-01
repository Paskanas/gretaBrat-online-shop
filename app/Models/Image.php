<?php

namespace App\Models;

use App\Jobs\CompressVideo;
use App\Jobs\CreateThumbnailFromVideo;
use FFMpeg\FFMpeg;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Storage;

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
            $pathThumbnail = asset("/storage/images/$directoryName/thumbnails/")  . $name . '.' . 'png';
        } else {
            if (App::environment('production')) {
                $path = getcwd() . "/storage/images/$directoryName/" . $name . '.' . $ext;
                $pathOrginal = getcwd() . "/storage/images/$directoryName/orginal/" . $name . '.' . $ext;
                $pathThumbnail = getcwd() . "/storage/images/$directoryName/thumbnails/"  . $name . '.' . 'png';
            } else {
                $path = public_path("/storage/images/$directoryName/")  . $name . '.' . $ext;
                $pathOrginal = public_path("/storage/images/$directoryName/orginal/") . $name . '.' . $ext;
                $pathThumbnail = public_path("/storage/images/$directoryName/thumbnails/")  . $name . '.' . 'png';
            }
        }

        if (file_exists($path)) {
            unlink($path);
        }
        if (file_exists($pathOrginal)) {
            unlink($pathOrginal);
        }
        if (file_exists($pathThumbnail)) {
            unlink($pathThumbnail);
        }
    }

    public function processImage($request, $title, $itemName, $dbImagePath = null, $directoryName)
    {
        $content = $request->file($itemName);
        $ext = $content->getClientOriginalExtension();
        $file = $title . '.' . $ext;

        if ($dbImagePath) {
            $this->deleteImage($dbImagePath, $directoryName, true);
        }

        if (App::environment('production')) {
            $content->move(getcwd() . "/storage/images/$directoryName/orginal", $file);
            if ($ext === 'jpg') {
                $gdImage = imagecreatefromjpeg(getcwd() . "/storage/images/$directoryName/orginal" . "/" . $file);
                imagejpeg($gdImage, getcwd() . "/storage/images/$directoryName" . '/' . $file, 90);
            } else if ($ext === 'mp4') {
                null;
            }
        } else {
            $content->move(public_path() . "/storage/images/$directoryName/orginal", $file);
            if ($ext === 'jpg') {
                $gdImage = imagecreatefromjpeg(public_path() . "/storage/images/$directoryName/orginal" . "/" . $file);
                imagejpeg($gdImage, public_path() . "/storage/images/$directoryName" . '/' . $file, 90);
            } else if ($ext === 'mp4') {
                Storage::copy(getcwd() . "/storage/images/$directoryName/orginal/$file", getcwd() . "/storage/images/$directoryName/$file");
            }
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
