import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import WhatsAppRequest from '@/lib/models/WhatsAppRequest';

export const dynamic = 'force-dynamic';

function generateRequestId() {
  return `#WA-${Math.floor(1000 + Math.random() * 9000)}`;
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { patientName, mobileNumber, service, message, preferredDate } = data;

    if (!patientName || !mobileNumber || !service) {
      return NextResponse.json({ error: 'Patient Name, Mobile Number, and Service are required.' }, { status: 400 });
    }

    await connectToDatabase();

    const requestId = generateRequestId();

    const newRequest = new WhatsAppRequest({
      requestId,
      patientName,
      mobileNumber,
      service,
      message,
      preferredDate,
      status: 'WhatsApp Opened' // Set initially since we are opening WhatsApp next
    });

    await newRequest.save();

    return NextResponse.json({ success: true, requestId, message: 'Request saved successfully.' }, { status: 201 });
  } catch (error: any) {
    console.error('WhatsApp Request Error:', error);
    return NextResponse.json({ error: 'Failed to process WhatsApp request.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const requests = await WhatsAppRequest.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, requests }, { status: 200 });
  } catch (error: any) {
    console.error('Fetch WhatsApp Requests Error:', error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
