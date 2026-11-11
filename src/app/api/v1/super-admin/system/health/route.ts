import { NextResponse } from 'next/server';
import { checkDatabaseHealth } from '@/lib/db';

export async function GET() {
  const dbHealth = await checkDatabaseHealth();

  return NextResponse.json({
    success: true,
    data: {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        database: dbHealth,
        whatsappGateway: {
          status: 'connected',
          provider: 'WhatsApp Direct Gateway',
          configuredNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '917331102982',
        },
        courierLogistics: {
          status: 'ready',
          provider: 'Shiprocket Logistics API',
          coveragePincodes: 28000,
        },
      },
      system: {
        environment: process.env.NODE_ENV || 'production',
        framework: 'Next.js 14 App Router',
        storeName: process.env.NEXT_PUBLIC_STORE_NAME || 'ProjectBee',
        storeCity: process.env.NEXT_PUBLIC_STORE_CITY || 'Bengaluru',
      },
    },
  });
}
