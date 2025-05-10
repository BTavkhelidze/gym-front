import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-in`,
      body
    );
    console.log(res, 'res');
    const setCookieHeader = res.headers['set-cookie'];

    const nextResponse = NextResponse.json({
      status: 200,
      message: 'success',
      role: 'user',
    });

    if (setCookieHeader) {
      const cookies = Array.isArray(setCookieHeader)
        ? setCookieHeader
        : [setCookieHeader];

      cookies.forEach((cookie) => {
        if (cookie.startsWith('accesstoken=')) {
          nextResponse.headers.append('Set-Cookie', cookie);
        }
      });
    }
    return nextResponse;
  } catch (e) {
    console.log(e, 'loginErrpt');
    return NextResponse.json({ status: 200, message: 'somthing went wrong' });
  }
}
