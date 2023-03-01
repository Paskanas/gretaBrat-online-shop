<?php

namespace App\Console\Commands;

use FFMpeg\Format\Video\X264;
use Illuminate\Console\Command;
use ProtoneMedia\LaravelFFMpeg\Support\FFMpeg;

class VideoEncode extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'video-encode:start';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Video encode';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // return Command::SUCCESS;
        $low = (new X264('aac'))->setKiloBitrate(500);
        $high = (new X264)->setKiloBitrate(10000);

        FFMpeg::fromDisk('portfolio-video-orginal')
            ->open('breathe.mp4')
            ->exportForHLS()
            ->addFormat(
                $low
                // , function ($filters) {
                //     $filters->resize(640, 480);
                // }
            )
            ->onProgress(function ($progress) {
                $this->info("Progress={$progress}%");
            })
            ->toDisk('portfolio-video')
            ->save('/file.mp4');
    }
}
