<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Art extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'photo_path',
        'hover_photo_path',
        'price'
    ];

    const SIZES = [
        'size' => ['30x20', '60x40'],
        'shipping' => [0, 1]
    ];
}
