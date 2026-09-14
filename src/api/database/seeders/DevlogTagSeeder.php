<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DevlogTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $path = database_path('seeders/data/devlog_tags.json');
        $rows = json_decode(file_get_contents($path), true);

        foreach ($rows as $row) {
            DB::table('devlog_tags')->updateOrInsert(
                ['id' => $row['id']],
                [
                    'name' => $row['name'],
                    'slug' => $row['slug'],
                    'created_at' => $row['created_at'],
                    'updated_at' => $row['updated_at'],
                ]
            );
        }
    }
}
