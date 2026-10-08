import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Report from '@/lib/models/Report';
import { cleanAndValidatePhone } from '@/lib/phoneValidation';

export const dynamic = 'force-dynamic';

/**
 * GET /api/reports/search?phone=9876543210
 * Public Patient Report Search API
 * STRICT PRIVACY: Returns ONLY reports matching the EXACT phone number.
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const phoneInput = searchParams.get('phone');

    if (!phoneInput) {
      return NextResponse.json(
        { error: 'Please enter your registered 10-digit mobile number.' },
        { status: 400 }
      );
    }

    // Strict 10-digit validation
    const phoneCheck = cleanAndValidatePhone(phoneInput);
    if (!phoneCheck.isValid) {
      return NextResponse.json(
        { error: phoneCheck.error || 'Please enter a valid 10-digit mobile number.' },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const exactPhone = phoneCheck.cleanPhone;

    // Strict exact query - NO fuzzy regex, NO wildcards
    const reports = await Report.find({
      $or: [
        { phoneNumber: exactPhone },
        { patientId: exactPhone }
      ],
    })
      .sort({ reportDate: -1, createdAt: -1 })
      .lean();

    if (!reports || reports.length === 0) {
      return NextResponse.json(
        {
          success: true,
          reports: [],
          count: 0,
          message: 'No reports found for this mobile number.',
        },
        { status: 200 }
      );
    }

    // Extract patient name from the most recent report
    const patientName = reports[0]?.patientName || 'Patient';

    return NextResponse.json(
      {
        success: true,
        reports,
        count: reports.length,
        patientName,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Patient Search Error:', error);
    return NextResponse.json(
      { error: error.message || 'Server error occurred during report search.' },
      { status: 500 }
    );
  }
}
