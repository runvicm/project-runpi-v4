<?php

namespace App\Filament\Resources\DevlogEntries\Schemas;

use App\Models\DevlogEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class DevlogEntryInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('title'),
                TextEntry::make('nav_label'),
                TextEntry::make('slug'),
                TextEntry::make('overview'),
                TextEntry::make('content')
                    ->html()
                    ->prose()
                    ->columnSpanFull(),
                TextEntry::make('status'),
                TextEntry::make('view_count')
                    ->numeric(),
                TextEntry::make('published_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('deleted_at')
                    ->dateTime()
                    ->visible(fn(DevlogEntry $record): bool => $record->trashed()),
            ]);
    }
}
