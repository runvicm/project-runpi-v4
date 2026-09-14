<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DevlogEntrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $path = database_path('seeders/data/devlog_entries.json');
        $rows = json_decode(file_get_contents($path), true);

        foreach ($rows as $row) {
            DB::table('devlog_entries')->updateOrInsert(
                ['id' => $row['id']],
                [
                    'title' => $row['title'],
                    'nav_label' => $row['nav_label'],
                    'slug' => $row['slug'],
                    'overview' => $row['overview'],
                    'content' => $row['content'],
                    'status' => $row['status'],
                    'view_count' => $row['view_count'],
                    'published_at' => $row['published_at'],
                    'created_at' => $row['created_at'],
                    'updated_at' => $row['updated_at'],
                    'deleted_at' => $row['deleted_at'],
                ]
            );
        }
    }
}
