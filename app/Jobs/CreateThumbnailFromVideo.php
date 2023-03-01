<?php

namespace App\Jobs;

use App\Models\PortfolioImage;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\App;
use ProtoneMedia\LaravelFFMpeg\Support\FFMpeg;

class CreateThumbnailFromVideo implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public $video;
    public function __construct(PortfolioImage $portfolioItem)
    {
        $this->video = $portfolioItem;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $destination = '/' . 'thumbnails' . '/' . $this->video->title . '.png';
        if (App::environment('production')) {
            FFMpeg::fromDisk('prod-portfolio-orginal-video')
                ->open($this->video->title . '.mp4')
                ->getFrameFromSeconds(2)
                ->export()
                ->toDisk('prod-portfolio-video')
                ->save($destination);
        } else {
            FFMpeg::fromDisk('portfolio-orginal-video')
                ->open($this->video->title . '.mp4')
                ->getFrameFromSeconds(2)
                ->export()
                ->toDisk('portfolio-video')
                ->save($destination);
        }
    }
}
