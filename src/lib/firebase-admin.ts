import admin from "firebase-admin";
import serviceAccount from '../../config/serviceAccountKey.json';

if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // Replace escaped newlines in private key (from .env) with real newlines
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });
  }
  
  export const adminDb = admin.firestore();
  export { admin };