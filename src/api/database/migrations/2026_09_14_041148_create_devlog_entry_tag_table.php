<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('devlog_entry_tag', function (Blueprint $table) {
            $table->id();
            $table->foreignId('entry_id')->constrained('devlog_entries')->cascadeOnDelete();
            $table->foreignId('tag_id')->constrained('devlog_tags')->cascadeOnDelete();
            $table->timestamps();

            $table->unique(['entry_id', 'tag_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('devlog_entry_tag');
    }
};
