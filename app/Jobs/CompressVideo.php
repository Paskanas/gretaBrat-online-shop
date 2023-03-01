<?php

namespace App\Jobs;

use App\Models\PortfolioImage;
use FFMpeg\Coordinate\Dimension;
use FFMpeg\Format\Video\X264;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\App;
use ProtoneMedia\LaravelFFMpeg\Support\FFMpeg;

class CompressVideo implements ShouldQueue
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
        // $low = (new X264('aac'))->setKiloBitrate(500);
        $high = (new X264)->setKiloBitrate(4000);
        if (App::environment('production')) {
            FFMpeg::fromDisk('prod-portfolio-orginal-video')
                ->open($this->video->title . '.mp4')
                ->export()
                ->inFormat($high)
                ->toDisk('prod-portfolio-video')
                ->save('/' . $this->video->title . '.mp4');
        } else {
            FFMpeg::fromDisk('portfolio-orginal-video')
                ->open($this->video->title . '.mp4')
                ->export()
                ->inFormat($high)
                ->toDisk('portfolio-video')
                ->save('/' . $this->video->title . '.mp4');
        }
    }
}
