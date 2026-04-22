import admin from 'firebase-admin';

/**
 * Normalizes the Firebase private key to handle all variations of how
 * Vercel/environment variables may encode the newlines:
 *  - Literal \\n (double-escaped)  → real newline
 *  - \n in a JSON-stringified key  → real newline
 *  - Already correct               → left as-is
 */
function normalizePrivateKey(key: string | undefined): string | undefined {
  if (!key) return undefined;
  // Strip surrounding quotes if Vercel added them
  let normalized = key.trim().replace(/^["']|["']$/g, '');
  // Replace all literal \n sequences (double-escaped) with real newlines
  normalized = normalized.replace(/\\n/g, '\n');
  return normalized;
}

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = normalizePrivateKey(process.env.FIREBASE_PRIVATE_KEY);

// Log env var status (values are masked) to help debug Vercel deployments
if (!projectId || !clientEmail || !privateKey) {
  console.error('[Firebase] Missing environment variables:', {
    FIREBASE_PROJECT_ID: projectId ? '✓ set' : '✗ MISSING',
    FIREBASE_CLIENT_EMAIL: clientEmail ? '✓ set' : '✗ MISSING',
    FIREBASE_PRIVATE_KEY: privateKey ? '✓ set' : '✗ MISSING',
  });
}

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    });
    console.log('[Firebase] Admin SDK initialized successfully.');
  } catch (err) {
    console.error('[Firebase] Failed to initialize Admin SDK:', err);
  }
}

export const db = admin.firestore();
