<?php

namespace App\Filament\Resources\DevlogEntries\Pages;

use App\Filament\Resources\DevlogEntries\DevlogEntryResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewDevlogEntry extends ViewRecord
{
    protected static string $resource = DevlogEntryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
