import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { parentWhatsapp } = body;

    if (!parentWhatsapp || parentWhatsapp.length !== 10) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'INVALID_PHONE',
            message: 'A valid 10-digit Indian WhatsApp number is required.',
          },
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        verificationToken: `vt_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        cooldownSeconds: 60,
        message: `WhatsApp OTP dispatched to +91 ${parentWhatsapp}.`,
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

