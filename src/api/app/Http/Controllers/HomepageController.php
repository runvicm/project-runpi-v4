<?php

namespace App\Http\Controllers;

use App\Models\DevlogEntry;
use Illuminate\Http\Request;

class HomepageController extends Controller
{
    public function devlog()
    {

        $devlogs = DevlogEntry::with('tags')
            ->where(['status' => 'published'])
            ->orderBy('published_at', 'desc')
            ->limit(3)
            ->get()
            ->map(fn($log) => [
                'title' => ucwords($log->title),
                'slug' => $log->slug,
                'overview' => $log->overview,
                'published_at' => $log->published_at->format('M d, Y'),
                'view_count' => $log->view_count,
                'tags' => $log->tags->map(fn($tag) => ['slug' => $tag->slug]),
            ]);

        return response()->json($devlogs);
    }
}
