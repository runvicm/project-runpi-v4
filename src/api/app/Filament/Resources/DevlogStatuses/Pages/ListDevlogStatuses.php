<?php

namespace App\Filament\Resources\DevlogStatuses\Pages;

use App\Filament\Resources\DevlogStatuses\DevlogStatusResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListDevlogStatuses extends ListRecords
{
    protected static string $resource = DevlogStatusResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
