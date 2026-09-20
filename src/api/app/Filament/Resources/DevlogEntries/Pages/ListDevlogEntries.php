<?php

namespace App\Filament\Resources\DevlogEntries\Pages;

use App\Filament\Resources\DevlogEntries\DevlogEntryResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListDevlogEntries extends ListRecords
{
    protected static string $resource = DevlogEntryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
