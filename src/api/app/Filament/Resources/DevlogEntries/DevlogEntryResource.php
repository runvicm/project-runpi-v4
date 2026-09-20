<?php

namespace App\Filament\Resources\DevlogEntries;

use App\Filament\Resources\DevlogEntries\Pages\CreateDevlogEntry;
use App\Filament\Resources\DevlogEntries\Pages\EditDevlogEntry;
use App\Filament\Resources\DevlogEntries\Pages\ListDevlogEntries;
use App\Filament\Resources\DevlogEntries\Pages\ViewDevlogEntry;
use App\Filament\Resources\DevlogEntries\Schemas\DevlogEntryForm;
use App\Filament\Resources\DevlogEntries\Schemas\DevlogEntryInfolist;
use App\Filament\Resources\DevlogEntries\Tables\DevlogEntriesTable;
use App\Models\DevlogEntry;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class DevlogEntryResource extends Resource
{
    protected static ?string $model = DevlogEntry::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'title';

    public static function getNavigationGroup(): string|\UnitEnum|null
    {
        return 'Devlog';
    }

    public static function getNavigationLabel(): string
    {
        return 'Entries';
    }

    public static function form(Schema $schema): Schema
    {
        return DevlogEntryForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return DevlogEntryInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return DevlogEntriesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListDevlogEntries::route('/'),
            'create' => CreateDevlogEntry::route('/create'),
            'view' => ViewDevlogEntry::route('/{record}'),
            'edit' => EditDevlogEntry::route('/{record}/edit'),
        ];
    }

    public static function getRecordRouteBindingEloquentQuery(): Builder
    {
        return parent::getRecordRouteBindingEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
