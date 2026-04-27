import { NextResponse } from 'next/server';
import { sendGeneralConfirmation } from '@/lib/email';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const testEmail = searchParams.get('email') || process.env.EMAIL_USER;

  const envStatus = {
    EMAIL_USER: process.env.EMAIL_USER ? `✓ set` : '✗ MISSING',
    EMAIL_PASS: process.env.EMAIL_PASS ? `✓ set` : '✗ MISSING',
  };

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return NextResponse.json({ 
      envStatus, 
      result: '✗ Cannot send – Environment variables missing' 
    });
  }

  if (!testEmail) {
    return NextResponse.json({ 
      envStatus, 
      result: '✗ No recipient email provided. Use ?email=your@email.com' 
    });
  }

  try {
    await sendGeneralConfirmation(testEmail, 'Test User');
    return NextResponse.json({ 
      envStatus, 
      result: '✓ Test email sent successfully to ' + testEmail 
    });
  } catch (err: any) {
    return NextResponse.json({ 
      envStatus, 
      result: `✗ ERROR: ${err?.message ?? String(err)}` 
    });
  }
}
