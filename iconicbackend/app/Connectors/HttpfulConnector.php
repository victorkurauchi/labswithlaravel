<?php

namespace App\Connectors;

use App\Exceptions\ProductException;

class HttpfulConnector implements ConnectorInterface
{
    public function __construct(array $config)
    {
        // using another lib to make http calls, using the ConnectorInterface
        $this->client = null;
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
