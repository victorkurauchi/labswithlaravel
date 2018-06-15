<?php

namespace App\Connectors;

use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\BadResponseException;
use GuzzleHttp\Exception\ClientException;
use App\Exceptions\ProductException;

class GuzzleConnector implements ConnectorInterface
{
    public function __construct()
    {
        // config object would be the best approach.
        $this->client = new Client([
            // 'base_uri' => 'https://jsonplaceholder.typicode.com/',
            'base_uri' =>  'https://eve.theiconic.com.au/catalog/',
            'timeout' => 60,
            'stream' => true,
            'headers' => [
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
            ]
        ]);
    }

    public function get($endpoint, $params = null)
    {
        try {
            // $request = $this->client->request('GET', 'products');
            $request = $this->client->request('GET', $endpoint);
            return $request->getBody(true)->getContents();
        } catch (\Exception $e) {
            // return [
            //     'statusCode' => $e->getCode(),
            //     'message' => $e->getMessage()
            // ];
            throw new ProductException($e->getMessage(), $e->getCode(), $e);
        }
    }
}
