// middleware.ts
import { getSession } from '@/lib/session';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define public routes
const PUBLIC_ROUTES = ['/auth'];

const USER_ROUTES = ['/dashboard/home'];

export async function middleware(request: NextRequest) {
  const session = await getSession(request);
  console.log('console');

  const { pathname } = request.nextUrl;

  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  if (!session) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  return NextResponse.redirect(new URL('/auth', request.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
