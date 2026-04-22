import admin from 'firebase-admin';

/**
 * Lazy Firebase Admin initializer.
 * - Never runs at build time (no module-level side effects)
 * - Supports both raw PEM keys and base64-encoded keys (safest for Vercel)
 * - Handles all \\n escaping variants
 */
function getApp(): admin.app.App {
  if (admin.apps.length > 0) {
    return admin.apps[0]!;
  }

  const rawKey = process.env.FIREBASE_PRIVATE_KEY ?? '';
  let privateKey = rawKey.trim().replace(/^["']|["']$/g, ''); // strip accidental quotes

  if (!privateKey) {
    throw new Error('[Firebase] FIREBASE_PRIVATE_KEY is not set.');
  }

  // If the key doesn't look like PEM, assume it's base64-encoded
  if (!privateKey.includes('-----BEGIN')) {
    privateKey = Buffer.from(privateKey, 'base64').toString('utf-8');
  }

  // Replace any remaining literal \n with real newlines
  privateKey = privateKey.replace(/\\n/g, '\n');

  return admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey,
    }),
  });
}

/** Call this inside API route handlers — never at module level */
export function getDb(): admin.firestore.Firestore {
  return getApp().firestore();
}
