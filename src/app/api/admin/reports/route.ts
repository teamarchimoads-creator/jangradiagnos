import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Report from '@/lib/models/Report';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectToDatabase();

    // Fetch reports sorted by newest first
    const reports = await Report.find({}).sort({ uploadedAt: -1 });

    return NextResponse.json({ success: true, reports }, { status: 200 });
  } catch (error: any) {
    console.error('Fetch Reports Error:', error);
    return NextResponse.json({ error: error.message || 'Server Error' }, { status: 500 });
  }

}