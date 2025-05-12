import { NextRequest, NextResponse } from 'next/server';
import { getSession } from './lib/session';

export async function middleware(request: NextRequest) {
  const session = await getSession(request);
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/auth')) {
    if (session?.isLogedIn) {
      return NextResponse.redirect(new URL('/dashboard/home', request.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith('/dashboard')) {
    if (!session?.isLogedIn) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
