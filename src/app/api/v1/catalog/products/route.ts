import { NextResponse } from 'next/server';
import { PRODUCTS } from '@/lib/data/catalog';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase().trim();
  const board = searchParams.get('board');
  const grade = searchParams.get('grade') ? Number(searchParams.get('grade')) : null;
  const subject = searchParams.get('subject');
  const format = searchParams.get('format');

  let results = [...PRODUCTS];

  if (q) {
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.subjects.some((s) => s.toLowerCase().includes(q))
    );
  }

  if (board) {
    results = results.filter((p) => p.boards.includes(board as any));
  }

  if (grade !== null) {
    results = results.filter((p) => p.classes.includes(grade));
  }

  if (subject) {
    results = results.filter((p) => p.subjects.includes(subject));
  }

  if (format) {
    results = results.filter((p) => p.formatId === format);
  }

  return NextResponse.json({
    success: true,
    data: {
      products: results,
      total: results.length,
    },
  });
}
