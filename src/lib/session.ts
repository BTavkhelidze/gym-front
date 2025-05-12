import { NextRequest } from 'next/server';

export function getSession(request?: NextRequest) {
  const rawCookie = request?.headers.get('cookie') || '';

  if (!rawCookie.includes('accesstoken')) {
    return null;
  }
  try {
    return { isLogedIn: true };
  } catch (e) {
    console.error(e);
    return null;
  }
}
