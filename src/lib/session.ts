import { NextRequest } from 'next/server';

export function getSession(request: NextRequest) {
  const userToken = request.cookies.get('cookie')?.value;
  console.log(userToken, 'userToken');
  return userToken;
}
