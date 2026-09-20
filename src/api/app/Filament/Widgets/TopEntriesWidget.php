<?php

namespace App\Filament\Widgets;

use App\Models\DevlogEntry;
use Filament\Actions\BulkActionGroup;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;

class TopEntriesWidget extends TableWidget
{

    public function table(Table $table): Table
    {
        return $table
            ->query(
                DevlogEntry::query()
                    ->where('status', 'published')
                    ->orderByDesc('view_count')
                    ->orderByDesc('published_at')
                    ->limit(5)
            )
            ->columns([
                TextColumn::make('title'),
                TextColumn::make('view_count')->label('Views'),
                TextColumn::make('published_at')->dateTime(),
            ])
            ->searchable(false)
            ->paginated(false)
            ->filters([
                //
            ])
            ->headerActions([
                //
            ])
            ->recordActions([
                //
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    //
                ]),
            ]);
    }
}
