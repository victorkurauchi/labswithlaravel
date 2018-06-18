<?php

namespace App\Repositories;

interface RepositoryInterface
{
    public function all($q = null, $startIndex = null);
    public function create(array $data);
    public function update(array $data, $id);
    public function delete($id);
    public function show($id);
}
