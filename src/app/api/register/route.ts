import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase-admin';

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
    try {
      await db.collection('registrations').add(registrationData);
      console.log('Successfully saved to Firestore');
    } catch (dbError) {
      console.error('Firestore Error:', dbError);
    }

    return NextResponse.json(
      { message: 'Registration successful' },
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
