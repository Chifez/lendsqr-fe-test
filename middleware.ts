import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

let user: boolean | null = null;

export async function middleware(req: NextRequest) {
  // Check auth condition
  if (user) {
    return NextResponse.redirect(new URL('/', req.url));
  } else {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: '/',
};
