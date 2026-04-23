import { NextResponse } from 'next/server';
import { getDb } from '@/lib/firebase-admin';
import { sendWebinarConfirmation } from '@/lib/email';

export const runtime = 'nodejs';


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
    let docId = '';
    try {
      const db = getDb();
      const docRef = await db.collection('webinar_registrations').add(registrationData);
      docId = docRef.id;
      console.log('Successfully saved to Firestore. Doc ID:', docId);
    } catch (dbError: any) {
      console.error('Firestore Error:', dbError);
      return NextResponse.json(
        { error: 'Database error', details: dbError.message },
        { status: 500 }
      );
    }

    // Send confirmation email (non-blocking — don't fail the request if email fails)
    try {
      await sendWebinarConfirmation(email, name);
      console.log('Confirmation email sent to:', email);
    } catch (emailError) {
      console.error('Email send failed (non-fatal):', emailError);
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
      { message: 'Registration successful', registrationId: docId },
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
