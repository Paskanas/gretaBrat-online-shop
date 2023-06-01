<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PortfolioImage>
 */
class PortfolioImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $counter = 1;

        return [
            'photo_path' => $this->faker->imageUrl($width = 640, $height = 480, 'jpg'),
            'title' => $this->faker->sentence(),
            'order' => $counter++,
            'created_at' => $this->faker->dateTime(),
            'updated_at' => $this->faker->dateTime(),
        ];
    }
}
