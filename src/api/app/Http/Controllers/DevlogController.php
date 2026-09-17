<?php

namespace App\Http\Controllers;

use App\Models\DevlogEntry;
use App\Models\DevlogStatus;

class DevlogController extends Controller
{

    public function status()
    {
        $status = DevlogStatus::latest()->first()->status ?? 'No Status';

        return response()->json($status);
    }


    public function index()
    {
        $devlogs = DevlogEntry::with('tags')
            ->where(['status' => 'published'])
            ->orderBy('published_at', 'desc')
            ->paginate(6);


        $devlogs->through(fn($entry) => [
            'title' => ucwords($entry->title),
            'label' => $entry->nav_label,
            'slug' => $entry->slug,
            'overview' => $entry->overview,
            'published_at' => $entry->published_at->diffForHumans(),
            'date_iso' => $entry->published_at->format('Y-m-d'),
            'view_count' => $entry->view_count,
            'tags' => $entry->tags->map(fn($tag) => ['slug' => $tag->slug]),
        ]);

        return response()->json($devlogs);
    }


    public function show(string $slug)
    {
        $devlog  = DevlogEntry::where('slug', $slug)->with('tags')->firstOrFail();

        $devlogData = [
            'title' => ucwords($devlog->title),
            'overview' => $devlog->overview,
            'content' => $devlog->content,
            'published_at' => $devlog->published_at->diffForHumans(),
            'date_iso' => $devlog->published_at->format('Y-m-d'),
            'view_count' => $devlog->view_count,
            'tags' => $devlog->tags->map(fn($tag) => ['slug' => $tag->slug]),
        ];

        return response()->json($devlogData);
    }


    /**
     * Api to be use for Mantine Tree
     * 
     * return Mantine tree
     */
    public function tree()
    {

        $devlogs = DevlogEntry::query()
            ->select(['id', 'slug', 'nav_label', 'published_at'])
            ->where('status', 'published')
            ->whereNotNull('published_at')
            ->orderBy('published_at', 'desc')
            ->get();

        $tree = $devlogs
            ->groupBy(fn($devlog) => $devlog->published_at->format('Y'))
            ->map(function ($yearEntries, $year) {
                $months = $yearEntries
                    ->groupBy(fn($devlog) => $devlog->published_at->format('F'))
                    ->map(function ($monthEntries, $month) use ($year) {
                        return [
                            'value' => "{$year}/{$month}",
                            'label' => $month,
                            'children' => $monthEntries
                                ->map(fn($devlog) => [
                                    'value' => $devlog->slug,
                                    'label' => "{$devlog->nav_label}.md",
                                ])
                                ->values(),
                        ];
                    })
                    ->values();

                return [
                    'value' => (string) $year,
                    'label' => (string) $year,
                    'children' => $months,
                ];
            })
            ->values();

        return response()->json([
            'count' => $devlogs->count(),
            'devlogTree' => $tree,
        ]);
    }


    public function addView(string $slug)
    {
        $log  = DevlogEntry::where('slug', $slug)->firstOrFail();
        $log->increment('view_count');
    }
}
