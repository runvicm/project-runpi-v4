<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name', 'slug'])]
class DevlogTag extends Model
{
    public function entries()
    {
        return $this->belongsToMany(
            DevlogEntry::class,
            'devlog_entry_tag',
            'tag_id',
            'entry_id'
        )->withTimestamps();
    }
}
