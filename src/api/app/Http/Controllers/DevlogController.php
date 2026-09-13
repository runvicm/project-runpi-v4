<?php

namespace App\Http\Controllers;

use App\Models\DevlogStatus;
use Illuminate\Http\Request;

class DevlogController extends Controller
{

    public function status()
    {
        $status = DevlogStatus::latest()->first()->status ?? 'No Status';

        return response()->json($status);
    }
}
