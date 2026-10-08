import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Report from '@/lib/models/Report';
import { saveReportFile } from '@/lib/fileStorage';
import { cleanAndValidatePhone } from '@/lib/phoneValidation';

export const dynamic = 'force-dynamic';

const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/jpg',
  'image/png',
];

const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15MB

/**
 * GET /api/reports
 * Fetch all reports (with optional search query)
 */
export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search')?.trim();

    let query: any = {};
    if (search) {
      const searchRegex = new RegExp(search, 'i');
      query = {
        $or: [
          { patientName: searchRegex },
          { phoneNumber: searchRegex },
          { patientId: searchRegex },
          { reportTitle: searchRegex },
          { testName: searchRegex },
        ],
      };
    }

    const reports = await Report.find(query).sort({ reportDate: -1, createdAt: -1 });

    return NextResponse.json({ success: true, reports }, { status: 200 });
  } catch (error: any) {
    console.error('Fetch Reports Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch reports' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/reports
 * Upload and create a new diagnostic report
 */
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const patientName = formData.get('patientName') as string;
    const phoneInput = (formData.get('phoneNumber') || formData.get('patientId')) as string;
    const reportTitle = (formData.get('reportTitle') || formData.get('testName')) as string;
    const reportDateInput = formData.get('reportDate') as string;
    const file = formData.get('file') as File;

    // 1. Validate required fields
    if (!patientName || !patientName.trim()) {
      return NextResponse.json({ error: 'Please enter patient name.' }, { status: 400 });
    }

    if (!phoneInput) {
      return NextResponse.json({ error: 'Please enter patient mobile number.' }, { status: 400 });
    }

    if (!reportTitle || !reportTitle.trim()) {
      return NextResponse.json({ error: 'Please enter report title / test name.' }, { status: 400 });
    }

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'Please upload a PDF or image report file.' }, { status: 400 });
    }

    // 2. Validate phone number
    const phoneCheck = cleanAndValidatePhone(phoneInput);
    if (!phoneCheck.isValid) {
      return NextResponse.json({ error: phoneCheck.error }, { status: 400 });
    }

    // 3. Validate file type & size
    const fileType = file.type?.toLowerCase();
    const fileName = file.name?.toLowerCase();
    const isAllowedExt =
      fileName.endsWith('.pdf') ||
      fileName.endsWith('.jpg') ||
      fileName.endsWith('.jpeg') ||
      fileName.endsWith('.png');

    if (!ALLOWED_MIME_TYPES.includes(fileType) && !isAllowedExt) {
      return NextResponse.json(
        { error: 'Invalid file format. Allowed formats: PDF, JPG, JPEG, PNG.' },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File size exceeds 15MB limit. Please upload a smaller file.' },
        { status: 400 }
      );
    }

    // 4. Save file to storage
    const uploadResult = await saveReportFile(file);

    // 5. Save report record in MongoDB
    await connectToDatabase();

    const reportDate = reportDateInput ? new Date(reportDateInput) : new Date();

    const report = await Report.create({
      patientName: patientName.trim(),
      phoneNumber: phoneCheck.cleanPhone,
      patientId: phoneCheck.cleanPhone,
      reportTitle: reportTitle.trim(),
      testName: reportTitle.trim(),
      reportDate: isNaN(reportDate.getTime()) ? new Date() : reportDate,
      fileUrl: uploadResult.fileUrl,
      fileType: uploadResult.fileType,
      fileName: uploadResult.fileName,
      fileSize: uploadResult.fileSize,
      publicId: uploadResult.publicId,
      resourceType: uploadResult.resourceType,
    });

    return NextResponse.json({ success: true, report }, { status: 201 });
  } catch (error: any) {
    console.error('Create Report Error:', error);
    return NextResponse.json(
      { error: error.message || 'Server error occurred during report upload.' },
      { status: 500 }
    );
  }
}
