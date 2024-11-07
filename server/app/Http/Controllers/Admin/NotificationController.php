<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index(string $id)
    {
        $noti = Notification::orderByDesc('id')->where('user_id', $id)->paginate(10);
        return response()->json($noti);
    }

    public function isRead(string $id)
    {
        
    }
}
