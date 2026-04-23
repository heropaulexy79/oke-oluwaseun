import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function GET() {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  const envStatus = {
    GMAIL_USER: gmailUser ? `✓ set (${gmailUser})` : '✗ MISSING',
    GMAIL_APP_PASSWORD: gmailPass ? `✓ set (length: ${gmailPass.length})` : '✗ MISSING',
  };

  if (!gmailUser || !gmailPass) {
    return NextResponse.json({ envStatus, result: '✗ Cannot send – env vars missing' });
  }

  // Try sending a real test email to the Gmail account itself
  let result: string;
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailPass },
    });

    await transporter.verify(); // checks credentials without sending
    result = '✓ SMTP credentials valid';

    await transporter.sendMail({
      from: `Oke Oluwaseun <${gmailUser}>`,
      to: gmailUser, // send to self as a test
      subject: '✅ Email Test – Working!',
      html: '<p>This is a test email from your website. If you see this, emails are working correctly!</p>',
    });
    result = '✓ Test email sent to ' + gmailUser;
  } catch (err: any) {
    result = `✗ ERROR: ${err?.message ?? String(err)}`;
  }

  return NextResponse.json({ envStatus, result });
}
