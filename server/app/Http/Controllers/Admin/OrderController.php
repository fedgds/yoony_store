<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use App\Models\Order;
use App\Models\OrderCancellation;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class OrderController extends Controller
{
    public function index(Request $request)
    {
       try {
        $perPage = $request->input('per_page', 10);

        switch ($request->status) {
            case Order::STATUS_ORDER_PENDING:
                $orders = Order::query()
                ->where('status_order', '=', Order::STATUS_ORDER_PENDING)
                ->with(['items.variant'])
                ->paginate($perPage);
                break;
            case Order::STATUS_ORDER_CONFIRMED:
                $orders = Order::query()
                ->where('status_order', '=', Order::STATUS_ORDER_CONFIRMED)
                ->with(['items.variant'])
                ->paginate($perPage);                
                break;
            case Order::STATUS_ORDER_PREPARING_GOODS:
                $orders = Order::query()
                ->where('status_order', '=', Order::STATUS_ORDER_PREPARING_GOODS)
                ->with(['items.variant'])
                ->paginate($perPage);                
                break;
            case Order::STATUS_ORDER_SHIPPING:
                $orders = Order::query()
                ->where('status_order', '=', Order::STATUS_ORDER_SHIPPING)
                ->with(['items.variant'])
                ->paginate($perPage);                
                break;
            case Order::STATUS_ORDER_DELIVERED:
                $orders = Order::query()
                ->where('status_order', '=', Order::STATUS_ORDER_DELIVERED)
                ->with(['items.variant'])
                ->paginate($perPage);               
                 break;
            case Order::STATUS_ORDER_CANCELED:
                $orders = Order::query()
                ->where('status_order', '=', Order::STATUS_ORDER_CANCELED)
                ->with(['items.variant'])
                ->paginate($perPage);                
                break;    
            default:
                $orders = Order::query()
                ->with(['items.variant'])
                ->paginate($perPage);        
            }



        return response()->json(
            [
                'data' => $orders,
                'status' => 'success'
            ],Response::HTTP_OK);
       } catch (\Throwable $th) {
        Log::error(__CLASS__ . '@' . __FUNCTION__, [
            'line' => $th->getLine(),
            'message' => $th->getMessage()
        ]);

        return response()->json([
            'message' => 'Lỗi tải trang',
            'status' => 'error',

        ], Response::HTTP_INTERNAL_SERVER_ERROR);
       }
    }

    public function orderDetail($code)
    {
       try {

        $orders = Order::query()
        ->with(['items.variant.attributeValues.attribute', 'items.variant.product'])
        ->where('code', $code)
        ->firstOrFail();
       
        return response()->json(
            [
                'data' => $orders,
                'status' => 'success'
            ],Response::HTTP_OK);
       } catch (\Throwable $th) {
        Log::error(__CLASS__ . '@' . __FUNCTION__, [
            'line' => $th->getLine(),
            'message' => $th->getMessage()
        ]);

        return response()->json([
            'message' => 'Lỗi tải trang',
            'status' => 'error',

        ], Response::HTTP_INTERNAL_SERVER_ERROR);
       }
    }

    public function updateOrderDetail(Request $request, $code)
    {
       try {

        $order = Order::query()
        ->with(['items.variant.attributeValues.attribute', 'items.variant.product'])
        ->where('code', $code)
        ->firstOrFail();
       
        $status = $request->input('status');


        switch ($status) {
            case Order::STATUS_ORDER_PENDING:
            case Order::STATUS_ORDER_CONFIRMED:
            case Order::STATUS_ORDER_PREPARING_GOODS:
            case Order::STATUS_ORDER_SHIPPING:
            case Order::STATUS_ORDER_DELIVERED:
            case Order::STATUS_ORDER_CANCELED:
                $order->status_order = $status;
                $order->save();

                $notification = Notification::create([
                    'user_id' => $order->user_id,
                    'order_id' => $order->id,
                    'content' => 'Đơn hàng '. $order->code .' đã được cập nhật trạng thái thành ' . Order::STATUS_ORDER[$order->status_order],
                ]);

                return response()->json([
                    'success' => true,
                    'message' => 'Trạng thái đơn hàng đã được cập nhật.',
                    'order' => $order,
                    'notification' => $notification
                ]);
            default:
                return response()->json([
                    'success' => false,
                    'message' => 'Trạng thái không hợp lệ.'
                ], 400);
        }

       } catch (\Throwable $th) {
        Log::error(__CLASS__ . '@' . __FUNCTION__, [
            'line' => $th->getLine(),
            'message' => $th->getMessage()
        ]);

        return response()->json([
            'message' => 'Lỗi tải trang',
            'status' => 'error',

        ], Response::HTTP_INTERNAL_SERVER_ERROR);
       }
    }

    public function canceledOrder(Request $request ,$code)
    {
        try {
            $order = Order::query()->where('code', $code)->first();
            
            $request->validate([
                'reason' => 'required|max:225'
            ], [
                'reason.required' => 'Vui lòng nhập lý do',
                'reason.max' => 'Tiêu đề không được vượt quá 225 ký tự.',
            ]);

            $reason = $request->reason;

            $order->update(['status_order' => Order::STATUS_ORDER_CANCELED]);

            OrderCancellation::create([
                'reason' => $reason,
                'order_id' =>  $order->id,
                'user_id' => Auth::id(),
            ]);

            return response()->json([
                'message' => 'Đơn hàng đã hủy thành công',
                'status' => 'success',
                'data' => $order
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            Log::error(__CLASS__ . '@' . __FUNCTION__, [
                'line' => $th->getLine(),
                'message' => $th->getMessage()
            ]);
    
            return response()->json([
                'message' => 'Lỗi tải trang',
                'status' => 'error',
    
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }



    }
}