<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Art extends Model
{
    use HasFactory;

    const SIZES = [
        'size' => ['30x20', '60x40'],
        'shipping' => [0, 1],
    ];
}
