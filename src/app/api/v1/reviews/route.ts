import { NextResponse } from 'next/server';
import { getReviews, submitReview } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('productId') || undefined;

    const reviews = await getReviews(productId);
    return NextResponse.json({
      success: true,
      data: {
        reviews,
        total: reviews.length,
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
    const { productId, rating, reviewText } = body;

    if (!productId || !rating || !reviewText) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'MISSING_FIELDS',
            message: 'Product ID, rating, and review text are required.',
          },
        },
        { status: 400 }
      );
    }

    const review = await submitReview(body);
    return NextResponse.json({
      success: true,
      data: {
        review,
        message: 'Thank you for your review! It has been posted.',
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

