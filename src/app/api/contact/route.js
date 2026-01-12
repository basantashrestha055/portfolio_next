import { sendMail } from '@/emails/sendEmail';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { firstname, lastname, email, phone, message } = await request.json();

    await sendMail({ firstname, lastname, email, phone, message });

    return NextResponse.json(
      {
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log('Error sending email:', error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
