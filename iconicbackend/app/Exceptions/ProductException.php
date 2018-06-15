<?php

namespace App\Exceptions;

use Exception;

class ProductException extends Exception
{
    public function __construct(string $message, int $code, $e = null)
    {
        parent::__construct($message, $code, $e);
        // not so abstracted, needs to be refactored when get some more time.
        // focusing on the core
        $this->fallbackData = json_decode(file_get_contents(base_path() . '/database/fallback.json'));
    }

    /**
     * Report the exception.
     *
     * @return void
     */
    public function report()
    {
    }

    /**
     * Render the exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request
     * @return \Illuminate\Http\Response
     */
    public function render($request, $exception)
    {
        return response()->json([
            'statusCode' => $exception->getCode(),
            'exception' => $exception->getMessage(),
            'fallback' => $this->fallbackData
        ]);
    }
}
