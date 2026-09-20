<?php

namespace App\Filament\Resources\DevlogStatuses\Pages;

use App\Filament\Resources\DevlogStatuses\DevlogStatusResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Actions\RestoreAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditDevlogStatus extends EditRecord
{
    protected static string $resource = DevlogStatusResource::class;

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            DeleteAction::make(),
            ForceDeleteAction::make(),
            RestoreAction::make(),
        ];
    }
}
