import { NextResponse } from 'next/server';
import { getProducts } from '@/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || undefined;
  const board = searchParams.get('board') || undefined;
  const grade = searchParams.get('grade') ? Number(searchParams.get('grade')) : undefined;
  const subject = searchParams.get('subject') || undefined;
  const format = searchParams.get('format') || undefined;
  const isBestSeller = searchParams.get('bestSeller') === 'true' ? true : undefined;

  const products = await getProducts({
    query: q,
    board,
    grade,
    subject,
    format,
    isBestSeller,
  });

  return NextResponse.json({
    success: true,
    data: {
      products,
      total: products.length,
    },
  });
}
