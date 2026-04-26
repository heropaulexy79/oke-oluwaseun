import { NextResponse } from 'next/server';
import { getDb } from '@/lib/firebase-admin';
import { sendGeneralConfirmation } from '@/lib/email';

export const runtime = 'nodejs';


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, location, referral, expectations } = body;

    // Validate required fields
    if (!name || !phone || !email || !location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare data for Firestore and Webhook
    // MATCHING WEBINAR FORMAT EXACTLY FOR TESTING
    const registrationData = {
      name,
      email,
      phone,
      expectations: expectations || 'N/A',
      location, // Extra field
      referral: referral || 'N/A', // Extra field
      timestamp: new Date().toISOString(),
      dateString: new Date().toLocaleString('en-GB', { timeZone: 'Africa/Lagos' }),
      source: 'Identity Crisis Webinar', // TEMP: Match webinar source
    };

    // Log for debugging
    console.log('New General Registration Received:', registrationData);

    // Save to Firestore
    let docId = '';
    try {
      const db = getDb();
      const docRef = await db.collection('maximize_registrations').add(registrationData);
      docId = docRef.id;
      console.log('Successfully saved to Firestore. Doc ID:', docId);
    } catch (dbError: any) {
      console.error('Firestore Error:', dbError);
      return NextResponse.json(
        { error: 'Database error', details: dbError.message },
        { status: 500 }
      );
    }

    // (Resend is disabled as per user request)

    // Backup: Send to Google Sheets Webhook if configured (User uses this for Gmail emails)
    const WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (WEBHOOK_URL) {
      try {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(registrationData),
        });
        console.log('Webhook backup triggered successfully for:', email);
      } catch (webhookError) {
        console.error('Failed to send to webhook backup:', webhookError);
      }
    } else {
      console.warn('GOOGLE_SHEETS_WEBHOOK_URL is not set. Backup email will not be sent.');
    }

    return NextResponse.json(
      { message: 'Registration successful', registrationId: docId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Registration Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
