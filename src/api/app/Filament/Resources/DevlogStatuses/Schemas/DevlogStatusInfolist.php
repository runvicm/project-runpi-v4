<?php

namespace App\Filament\Resources\DevlogStatuses\Schemas;

use App\Models\DevlogStatus;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class DevlogStatusInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('status'),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('deleted_at')
                    ->dateTime()
                    ->visible(fn (DevlogStatus $record): bool => $record->trashed()),
            ]);
    }
}
