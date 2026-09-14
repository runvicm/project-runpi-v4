<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DevlogEntryTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $path = database_path('seeders/data/devlog_entry_tag.json');
        $rows = json_decode(file_get_contents($path), true);

        foreach ($rows as $row) {
            DB::table('devlog_entry_tag')->updateOrInsert(
                ['id' => $row['id']],
                [
                    'entry_id' => $row['entry_id'],
                    'tag_id' => $row['tag_id'],
                    'created_at' => $row['created_at'],
                    'updated_at' => $row['updated_at'],
                ]
            );
        }
    }
}
