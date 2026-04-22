import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase-admin';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, expectations } = body;

    // Validate required fields
    if (!name || !email || !phone || !expectations) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare data for Firestore
    const registrationData = {
      name,
      email,
      phone,
      expectations,
      timestamp: new Date().toISOString(),
      dateString: new Date().toLocaleString('en-GB', { timeZone: 'Africa/Lagos' }),
      source: 'Identity Crisis Webinar',
    };

    // Log for debugging
    console.log('New Webinar Registration:', registrationData);

    // Save to Firestore
    try {
      await db.collection('registrations').add(registrationData);
      console.log('Successfully saved to Firestore');
    } catch (dbError) {
      console.error('Firestore Error:', dbError);
      // We still try the legacy webhook as a backup if configured
    }

    // Backup: Send to Google Sheets Webhook if configured
    const WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (WEBHOOK_URL) {
      try {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(registrationData),
        });
      } catch (webhookError) {
        console.error('Failed to send to webhook backup:', webhookError);
      }
    }

    return NextResponse.json(
      { message: 'Registration successful' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Webinar Registration Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
