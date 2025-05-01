import axios from 'axios';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // console.log(body);
    // console.log(process.env.NEXT_PUBLIC_API_URL);

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-in`,
      body
    );
    const setCookieHeader = res.headers['set-cookie'];
    console.log(setCookieHeader);

    const nextResponse = NextResponse.json(
      { status: 200, message: 'success', role: 'user' }
      // { status: 200 }
    );

    if (setCookieHeader) {
      const cookies = Array.isArray(setCookieHeader)
        ? setCookieHeader
        : [setCookieHeader];

      cookies.forEach((cookie) => {
        nextResponse.headers.append('Set-Cookie', cookie);
      });
    }

    // redirect('/home');

    return nextResponse;
  } catch (e) {
    console.log(e);
    return NextResponse.json({ status: 200, message: 'somthing went wrong' });
  }
}
