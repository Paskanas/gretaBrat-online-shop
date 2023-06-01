<?php

namespace Tests\Feature\Smoke\User;

use Tests\TestCase;

class OpeningPageTest extends TestCase
{
    public function test_home_page_can_be_rendered()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_about_me_page_can_be_rendered()
    {
        $response = $this->get('/about-me');

        $response->assertStatus(200);
    }

    public function test_contact_page_can_be_rendered()
    {
        $response = $this->get('/contact');

        $response->assertStatus(200);
    }
}
