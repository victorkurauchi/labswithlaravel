<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProductTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        // $this->assertTrue(true);
        $response = $this->json('GET', '/api/products');
        print_r($response);
        $response
            ->assertStatus(200);
    }
}
