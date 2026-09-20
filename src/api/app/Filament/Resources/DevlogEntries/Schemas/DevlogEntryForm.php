<?php

namespace App\Filament\Resources\DevlogEntries\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class DevlogEntryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required()
                    ->minLength(5)
                    ->maxLength(50)
                    ->rules(['regex:/^[a-zA-Z0-9_ .,!?\'"()-]+$/'])
                    ->live(onBlur: true)
                    ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state))),
                TextInput::make('slug')
                    ->required()
                    ->disabled()
                    ->dehydrated(),
                TextInput::make('nav_label')
                    ->required(),
                Select::make('tags')
                    ->relationship('tags', 'name')
                    ->multiple()
                    ->preload()
                    ->searchable()
                    ->createOptionForm([
                        TextInput::make('name')
                            ->required()
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state))),
                        TextInput::make('slug')
                            ->required()
                            ->unique(ignoreRecord: true),
                    ]),
                TextInput::make('overview')
                    ->required()
                    ->columnSpanFull(),
                RichEditor::make('content')
                    ->required()
                    ->columnSpanFull(),
                Section::make()
                    ->schema([
                        Select::make('status')
                            ->options([
                                'draft' => 'Draft',
                                'published' => 'Published',
                            ])
                            ->default('draft')
                            ->required()
                            ->live()
                            ->afterStateUpdated(function ($state, $set) {
                                if ($state === 'published') {
                                    $set('published_at', now());
                                }
                                if ($state === 'draft') {
                                    $set('published_at', null);
                                }
                            }),

                        DateTimePicker::make('published_at')
                            ->label('Published at')
                            ->disabled() // auto-set by the toggle above, not manually editable
                            ->dehydrated(), // still saves the value even though disabled
                    ])
                    ->columns(2)
                    ->columnSpanFull(),
            ]);
    }
}
