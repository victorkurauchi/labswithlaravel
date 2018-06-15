<?php

namespace App\Connectors;

interface ConnectorInterface
{
    public function get($endpoint, $params);
}
