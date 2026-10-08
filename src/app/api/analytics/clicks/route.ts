import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import ClickStats from '@/lib/models/ClickStats';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { linkName } = await req.json();
    if (!linkName) {
      return NextResponse.json({ error: 'linkName is required' }, { status: 400 });
    }

    await connectToDatabase();
    
    await ClickStats.findOneAndUpdate(
      { linkName },
      { 
        $inc: { clicks: 1 },
        $set: { lastClickedAt: new Date() }
      },
      { upsert: true, new: true }
    );

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Track Click Error:', error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const stats = await ClickStats.find({}).sort({ clicks: -1 });
    return NextResponse.json({ success: true, stats }, { status: 200 });
  } catch (error: any) {
    console.error('Fetch Stats Error:', error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
