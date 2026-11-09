import { NextResponse } from 'next/server';
import { BOARDS, CLASSES, SUBJECTS, PRODUCT_FORMATS } from '@/lib/data/taxonomy';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: {
      boards: BOARDS,
      classes: CLASSES,
      subjects: SUBJECTS,
      formats: PRODUCT_FORMATS,
    },
  });
}

