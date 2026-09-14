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
        $entries = DevlogEntry::with('tags')
            ->where(['status' => 'published'])
            ->orderBy('published_at', 'desc')
            ->get()
            ->map(fn($entry) => [
                'title' => ucwords($entry->title),
                'label' => $entry->nav_label,
                'slug' => $entry->slug,
                'overview' => $entry->overview,
                'published_at' => $entry->published_at->format('M d, Y'),
                'view_count' => $entry->view_count,
                'tags' => $entry->tags->map(fn($tag) => ['slug' => $tag->slug]),
            ]);

        return response()->json($entries);
    }


    public function show(string $slug)
    {
        $log  = DevlogEntry::where('slug', $slug)->with('tags')->firstOrFail();

        $logData = [
            'title' => ucwords($log->title),
            'overview' => $log->overview,
            'content' => $log->content,
            'published_at' => $log->published_at->format('M d, Y'),
            'view_count' => $log->view_count,
            'tags' => $log->tags->map(fn($tag) => ['slug' => $tag->slug]),
        ];

        return response()->json($logData);
    }


    public function tree()
    {

        $entries = DevlogEntry::query()
            ->select(['id', 'slug', 'nav_label', 'published_at'])
            ->where('status', 'published')
            ->whereNotNull('published_at')
            ->orderBy('published_at', 'desc')
            ->get();

        $tree = $entries
            ->groupBy(fn($entry) => $entry->published_at->format('Y'))
            ->map(function ($yearEntries, $year) {
                $months = $yearEntries
                    ->groupBy(fn($entry) => $entry->published_at->format('F'))
                    ->map(function ($monthEntries, $month) use ($year) {
                        return [
                            'value' => "{$year}/{$month}",
                            'label' => $month,
                            'children' => $monthEntries
                                ->map(fn($entry) => [
                                    'value' => $entry->slug,
                                    'label' => "{$entry->nav_label}.md",
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
            'count' => $entries->count(),
            'tree' => $tree,
        ]);
    }
}
