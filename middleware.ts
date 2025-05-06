import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_ROUTES = ['/sign-in', '/sign-up'];

export async function middleware(request: NextRequest) {
  console.log(
    'Mid d  le w a re t r i g g se r e d f o r:',
    request.nextUrl.pathname
  );
  console.error('Error log test:', request.nextUrl.pathname); // Try console.error
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
