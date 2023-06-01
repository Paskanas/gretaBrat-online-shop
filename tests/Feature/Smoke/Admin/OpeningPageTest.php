<?php

namespace Tests\Feature\Smoke\Admin;

use App\Models\PortfolioImage;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class OpeningPageTest extends TestCase
{
    use RefreshDatabase;

    private $publicDirectoryPath;

    private $directoryPath;

    private function removeDirectory($directory)
    {
        if (! is_dir($directory)) {
            return;
        }

        $files = scandir($directory);
        foreach ($files as $file) {
            if ($file === '.' || $file === '..') {
                continue;
            }

            $filePath = $directory.'/'.$file;
            if (is_dir($filePath)) {
                $this->removeDirectory($filePath);
            } else {
                unlink($filePath);
            }
        }

        rmdir($directory);
    }

    protected function setUp(): void
    {
        parent::setUp();
        $user = User::factory()->makeAdmin()->create();
        $this->actingAs($user);
        $this->directoryPath = 'storage/images/test/portfolio/';
        $this->publicDirectoryPath = public_path($this->directoryPath);
        if (! is_dir($this->publicDirectoryPath)) {
            mkdir($this->publicDirectoryPath, 0755, true);
        }
    }

    protected function tearDown(): void
    {
        parent::tearDown();
        $this->removeDirectory($this->publicDirectoryPath);
        $this->assertDirectoryDoesNotExist($this->publicDirectoryPath);
    }

    public function test_portfolio_images_admin_can_be_rendered()
    {
        $response = $this->get('/portfolioImages-admin');

        $response->assertStatus(200);
    }

    public function sanitizeString($string)
    {
        // Remove illegal characters
        $string = preg_replace('/[^\w\s-]/', '', $string);

        // Replace spaces with underscores
        $string = str_replace(' ', '_', $string);

        return $string;
    }

    public function manageFiles($portfolioImage)
    {

        $filePath = $this->publicDirectoryPath.$this->sanitizeString($portfolioImage->title).'.jpg';
        $content = file_get_contents($portfolioImage->photo_path);
        file_put_contents($filePath, $content);
        $fileUrl = asset('public'.$this->directoryPath.$this->sanitizeString($portfolioImage->title).'.jpg');

        $portfolioImage->photo_path = $fileUrl;
        $portfolioImage->save();
    }

    public function test_portfolio_image_single_page_can_be_rendered()
    {
        $portfolioImage = PortfolioImage::factory()->create();

        $this->manageFiles($portfolioImage);

        $response = $this->get('/portfolioImages-admin/show/1');

        $response->assertStatus(200);
    }

    public function test_portfolio_image_single_page_check_all_can_be_rendered()
    {
        foreach (range(1, 10) as $i) {
            $portfolioImage = PortfolioImage::factory()->create();
            $this->manageFiles($portfolioImage);
        }

        $portfolioImages = PortfolioImage::all();

        foreach ($portfolioImages as $portfolioImage) {
            $response = $this->get("/portfolioImages-admin/show/$portfolioImage->id");

            $response->assertStatus(200);
            $response->assertSee($portfolioImage->title);
            $response->assertSee($portfolioImage->order);
            $response->assertSee('Image');
            $response->assertSee('Image');
            $response->assertSee('Back');
            $response->assertSee('Width');
            $response->assertSee('Length');
        }
    }
}
