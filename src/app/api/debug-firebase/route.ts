import { NextResponse } from 'next/server';
import admin from 'firebase-admin';

export const runtime = 'nodejs';

export async function GET() {
  const rawKey = process.env.FIREBASE_PRIVATE_KEY ?? '';

  // Safely inspect the key without leaking it
  const keyInfo = {
    exists: !!rawKey,
    length: rawKey.length,
    startsCorrectly: rawKey.trimStart().startsWith('-----BEGIN'),
    endsCorrectly: rawKey.trimEnd().endsWith('-----'),
    containsLiteralBackslashN: rawKey.includes('\\n'),
    containsRealNewline: rawKey.includes('\n'),
    firstChars: rawKey.substring(0, 30).replace(/\n/g, '<NL>').replace(/\\n/g, '<ESC_NL>'),
  };

  const envStatus = {
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID ? `✓ set (${process.env.FIREBASE_PROJECT_ID})` : '✗ MISSING',
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL ? `✓ set (${process.env.FIREBASE_CLIENT_EMAIL})` : '✗ MISSING',
    FIREBASE_PRIVATE_KEY: keyInfo,
  };

  // Try to write a test document
  let firestoreTest: string;
  try {
    if (!admin.apps.length) {
      let privateKey = rawKey.trim().replace(/^["']|["']$/g, '');
      privateKey = privateKey.replace(/\\n/g, '\n');
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey,
        }),
      });
    }
    const db = admin.firestore();
    await db.collection('_debug').add({ test: true, ts: new Date().toISOString() });
    firestoreTest = '✓ Firestore write SUCCESS';
  } catch (err: any) {
    firestoreTest = `✗ Firestore ERROR: ${err?.message ?? String(err)}`;
  }

  return NextResponse.json({ envStatus, firestoreTest });
}
