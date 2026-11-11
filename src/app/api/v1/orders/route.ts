import { NextResponse } from 'next/server';
import { listOrders, createOrder } from '@/lib/db';

export async function GET() {
  try {
    const orders = await listOrders();
    return NextResponse.json({
      success: true,
      data: {
        orders,
        total: orders.length,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: { code: 'SERVER_ERROR', message: error.message },
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { parentName, parentWhatsapp, items } = body;

    if (!parentName || !parentWhatsapp) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'MISSING_PARENT_DATA',
            message: 'Parent name and WhatsApp number are required.',
          },
        },
        { status: 400 }
      );
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'EMPTY_CART',
            message: 'Cannot place an order with an empty cart.',
          },
        },
        { status: 400 }
      );
    }

    const order = await createOrder(body);

    return NextResponse.json({
      success: true,
      data: {
        order,
        message: 'Order created successfully.',
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: { code: 'SERVER_ERROR', message: error.message },
      },
      { status: 500 }
    );
  }
}

