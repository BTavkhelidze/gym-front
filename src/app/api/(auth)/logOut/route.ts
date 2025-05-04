import { NextResponse } from 'next/server';

export async function POST(res: NextResponse) {
  const response = NextResponse.json({ message: 'Logged out', status: 200 });
  console.log(res);
  console.log(response);

  response.cookies.delete('accesstoken');
  return response;
}
