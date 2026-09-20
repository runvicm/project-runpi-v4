<?php

namespace App\Filament\Resources\DevlogStatuses\Pages;

use App\Filament\Resources\DevlogStatuses\DevlogStatusResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewDevlogStatus extends ViewRecord
{
    protected static string $resource = DevlogStatusResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
