import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await axios.post(`http://localhost:8080/auth/sign-in`, body, {
      withCredentials: true,
    });
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
  } catch (error) {
    return NextResponse.json({
      status: 400,
      message: error.response.data.message,
    });
  }
}
