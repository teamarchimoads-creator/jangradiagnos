import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import CallbackRequest from '@/lib/models/CallbackRequest';

export const dynamic = 'force-dynamic';

function generateRequestId() {
  return `#CB-${Math.floor(1000 + Math.random() * 9000)}`;
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { patientName, mobileNumber, preferredTime, service, message } = data;

    if (!patientName || !mobileNumber || !preferredTime || !service) {
      return NextResponse.json({ error: 'Please provide all required fields.' }, { status: 400 });
    }

    await connectToDatabase();

    const requestId = generateRequestId();

    const newRequest = new CallbackRequest({
      requestId,
      patientName,
      mobileNumber,
      preferredTime,
      service,
      message,
      status: 'New'
    });

    await newRequest.save();

    return NextResponse.json({ success: true, requestId, message: 'Callback request saved successfully.' }, { status: 201 });
  } catch (error: any) {
    console.error('Callback Request Error:', error);
    return NextResponse.json({ error: 'Failed to process callback request.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const requests = await CallbackRequest.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, requests }, { status: 200 });
  } catch (error: any) {
    console.error('Fetch Callback Requests Error:', error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
