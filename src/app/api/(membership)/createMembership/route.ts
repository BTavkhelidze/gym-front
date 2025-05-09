import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const cookieHeader = req.headers.get('cookie') || '';
    const body = await req.json();
    console.log(body, body);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/membership`,
      body,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Cookie: cookieHeader,
        },
      }
    );
    console.log(response.data, 'membership');
    return NextResponse.json({ message: response.data, status: 201 });
  } catch (e) {
    return NextResponse.json(e);
  }
}
