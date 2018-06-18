<?php

namespace App\Connectors;

use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\BadResponseException;
use GuzzleHttp\Exception\ClientException;
use App\Exceptions\ProductException;

class GuzzleConnector implements ConnectorInterface
{
    public function __construct(array $config)
    {
        // config object would be the best approach.
        $this->client = new Client($config);
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
