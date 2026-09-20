<?php

namespace App\Filament\Resources\DevlogEntries\Pages;

use App\Filament\Resources\DevlogEntries\DevlogEntryResource;
use Filament\Resources\Pages\CreateRecord;

class CreateDevlogEntry extends CreateRecord
{
    protected static string $resource = DevlogEntryResource::class;
}
