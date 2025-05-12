import { NextRequest } from 'next/server';

export function getSession(request: NextRequest) {
  const userToken = request.cookies.get('cookie')?.value;

  if (userToken?.includes('accesstoken')) {
    return { isLogedIn: true };
  }
  return null;
}
