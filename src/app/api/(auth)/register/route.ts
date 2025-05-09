import axios from 'axios';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log(req, 'body');
  try {
    const body = await req.json();

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-up`,
      body
    );
    console.log(res, 'registerRes');

    const nextResponse = NextResponse.json({
      status: 200,
      message: 'Register Successfully',
      role: 'user',
    });

    return nextResponse;
  } catch (e) {
    console.log(e, 'error');
    return NextResponse.json({ status: 200, message: 'somthing went wrong' });
  }
}
