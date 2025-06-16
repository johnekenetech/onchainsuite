
import { admin, adminDb } from '@/lib/firebase-admin';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'GET works!' });
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const docRef = await admin.firestore().collection('waitlist').add({
      email,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    return NextResponse.json(
      { message: 'Successfully joined waitlist', id: docRef.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 });
  }
}