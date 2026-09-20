<?php

namespace App\Filament\Resources\DevlogStatuses;

use App\Filament\Resources\DevlogStatuses\Pages\CreateDevlogStatus;
use App\Filament\Resources\DevlogStatuses\Pages\EditDevlogStatus;
use App\Filament\Resources\DevlogStatuses\Pages\ListDevlogStatuses;
use App\Filament\Resources\DevlogStatuses\Pages\ViewDevlogStatus;
use App\Filament\Resources\DevlogStatuses\Schemas\DevlogStatusForm;
use App\Filament\Resources\DevlogStatuses\Schemas\DevlogStatusInfolist;
use App\Filament\Resources\DevlogStatuses\Tables\DevlogStatusesTable;
use App\Models\DevlogStatus;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class DevlogStatusResource extends Resource
{
    protected static ?string $model = DevlogStatus::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'status';

    public static function getNavigationGroup(): string|\UnitEnum|null
    {
        return 'Devlog';
    }

    public static function getNavigationLabel(): string
    {
        return 'Status';
    }


    public static function form(Schema $schema): Schema
    {
        return DevlogStatusForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return DevlogStatusInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return DevlogStatusesTable::configure($table);
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
            'index' => ListDevlogStatuses::route('/'),
            'create' => CreateDevlogStatus::route('/create'),
            'view' => ViewDevlogStatus::route('/{record}'),
            'edit' => EditDevlogStatus::route('/{record}/edit'),
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
