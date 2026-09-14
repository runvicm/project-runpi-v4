<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DevlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->call([
            DevlogTagSeeder::class,
            DevlogEntrySeeder::class,
            DevlogEntryTagSeeder::class,
        ]);

        if (DB::connection()->getDriverName() === 'pgsql') {
            foreach (['devlog_tags', 'devlog_entries', 'devlog_entry_tag'] as $table) {
                DB::statement("
                    SELECT setval(
                        pg_get_serial_sequence('{$table}', 'id'),
                        COALESCE((SELECT MAX(id) FROM {$table}), 1)
                    )
                ");
            }
        }
    }
}
