<?php

namespace App\Filament\Resources\DevlogStatuses\Pages;

use App\Filament\Resources\DevlogStatuses\DevlogStatusResource;
use Filament\Resources\Pages\CreateRecord;

class CreateDevlogStatus extends CreateRecord
{
    protected static string $resource = DevlogStatusResource::class;
}
