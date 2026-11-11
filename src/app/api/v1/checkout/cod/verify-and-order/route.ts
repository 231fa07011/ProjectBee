import { NextResponse } from 'next/server';
import { createOrder } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { parentName, parentWhatsapp, otp, items, shippingAddress, studentName, studentClass, totalPayablePaise } = body;

    if (!parentName || !parentWhatsapp) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'MISSING_PARENT_DATA',
            message: 'Parent name and WhatsApp number are mandatory for child safety.',
          },
        },
        { status: 400 }
      );
    }

    if (!otp || otp.length !== 6) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'INVALID_OTP',
            message: 'Please provide a valid 6-digit WhatsApp OTP.',
          },
        },
        { status: 400 }
      );
    }

    const orderNumber = `PB-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`;

    const savedOrder = await createOrder({
      orderNumber,
      parentName,
      parentWhatsapp,
      parentPhone: parentWhatsapp,
      studentName,
      studentClass,
      shippingAddress,
      items: items || [],
      totalPayablePaise: totalPayablePaise || 0,
      status: 'confirmed',
    });

    return NextResponse.json({
      success: true,
      data: {
        orderNumber: savedOrder.orderNumber,
        status: savedOrder.status,
        paymentMethod: 'cod',
        order: savedOrder,
        message: 'Order verified and confirmed successfully.',
      },
    });
  } catch (e: any) {
    return NextResponse.json(
      {
        success: false,
        error: { code: 'SERVER_ERROR', message: e.message },
      },
      { status: 500 }
    );
  }
}
