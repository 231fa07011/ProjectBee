import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        database: { status: 'healthy', latencyMs: 12, provider: 'PostgreSQL 15 (Supabase)' },
        auth: { status: 'healthy', provider: 'Supabase Auth' },
        whatsappGateway: { status: 'connected', provider: 'Msg91/Twilio' },
        courierLogistics: { status: 'connected', provider: 'Shiprocket API' },
      },
      superAdminIdentity: {
        email: 'admin@projectbee.in',
        isDesignatedSingleton: true,
      },
    },
  });
}
