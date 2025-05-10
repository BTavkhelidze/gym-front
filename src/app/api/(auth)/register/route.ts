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
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      'Something went wrong';

    return NextResponse.json({
      status: 400,
      message,
    });
  }
}
