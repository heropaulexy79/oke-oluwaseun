import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

export async function GET() {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

  const envStatus = {
    RESEND_API_KEY: apiKey ? `✓ set (length: ${apiKey.length})` : '✗ MISSING',
    FROM_EMAIL: fromEmail,
  };

  if (!apiKey) {
    return NextResponse.json({ envStatus, result: '✗ Cannot send – API key missing' });
  }

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: `Test <${fromEmail}>`,
      to: fromEmail, // send to self as a test
      subject: '✅ Resend Test – Working!',
      html: '<p>This is a test email from your website via Resend. If you see this, emails are working correctly!</p>',
    });

    if (error) {
      return NextResponse.json({ envStatus, result: `✗ ERROR: ${error.message}`, error });
    }

    return NextResponse.json({ envStatus, result: '✓ Test email sent successfully', data });
  } catch (err: any) {
    return NextResponse.json({ envStatus, result: `✗ ERROR: ${err?.message ?? String(err)}` });
  }
}
