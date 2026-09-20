<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

#[Fillable([
    'title',
    'nav_label',
    'slug',
    'overview',
    'content',
    'status',
    'view_count',
    'published_at',
])]
class DevlogEntry extends Model
{
    use SoftDeletes;

    protected $casts = [
        'published_at'  => 'datetime',
        'view_count'    => 'integer'
    ];

    public function tags()
    {
        return $this->belongsToMany(
            DevlogTag::class,
            'devlog_entry_tag',
            'entry_id',
            'tag_id'
        )->withTimestamps();
    }
}
