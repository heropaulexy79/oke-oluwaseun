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

    // Prepare data for Firestore
    const registrationData = {
      name,
      phone,
      email,
      location,
      referral: referral || 'N/A',
      expectations: expectations || 'N/A',
      timestamp: new Date().toISOString(),
      dateString: new Date().toLocaleString('en-GB', { timeZone: 'Africa/Lagos' }),
      source: 'General Registration',
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

    // Send confirmation email (non-blocking)
    try {
      await sendGeneralConfirmation(email, name);
      console.log('Confirmation email sent to:', email);
    } catch (emailError) {
      console.error('Email send failed (non-fatal):', emailError);
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
