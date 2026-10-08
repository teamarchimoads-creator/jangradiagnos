import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Booking from '@/lib/models/Booking';

export const dynamic = 'force-dynamic';

function generateBookingId() {
  return `#BK-${Math.floor(1000 + Math.random() * 9000)}`;
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const patientName = data.patientName || data.name;
    const mobileNumber = data.mobileNumber || data.phone;
    const email = data.email || '';
    const service = data.service || '';
    const age = data.age;
    const gender = data.gender;
    const collectionType = data.collectionType || 'Centre Visit';
    const address = data.address || '';
    const pincode = data.pincode || '';
    const preferredDate = data.preferredDate || '';
    const preferredTime = data.preferredTime || '';
    const tests = data.tests || (service ? [service] : []);
    const notes = data.notes || data.message || '';

    if (!patientName || !mobileNumber) {
      return NextResponse.json({ error: 'Name and Phone Number are required.' }, { status: 400 });
    }

    if (collectionType === 'Home Collection' && (!address || !pincode)) {
      return NextResponse.json({ error: 'Address and Pincode are required for Home Collection.' }, { status: 400 });
    }

    await connectToDatabase();

    const bookingId = generateBookingId();

    const newBooking = new Booking({
      bookingId,
      patientName,
      mobileNumber,
      email,
      service,
      age,
      gender,
      collectionType,
      address,
      pincode,
      preferredDate,
      preferredTime,
      tests: tests || [],
      notes,
      status: 'New',
      whatsappStatus: 'Not Opened'
    });

    await newBooking.save();

    return NextResponse.json({ success: true, bookingId, message: 'Booking submitted successfully.' }, { status: 201 });
  } catch (error: any) {
    console.error('Booking Request Error:', error);
    return NextResponse.json({ error: 'Failed to process booking request.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const bookings = await Booking.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, bookings }, { status: 200 });
  } catch (error: any) {
    console.error('Fetch Bookings Error:', error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
