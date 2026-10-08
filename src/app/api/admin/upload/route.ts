import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Report from '@/lib/models/Report';
import { saveReportFile } from '@/lib/fileStorage';
import { cleanAndValidatePhone } from '@/lib/phoneValidation';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const patientName = (formData.get('patientName') as string)?.trim();
    const phoneInput = (formData.get('phoneNumber') || formData.get('patientId')) as string;
    const reportTitle = (formData.get('reportTitle') || formData.get('testName')) as string;
    const reportDateInput = formData.get('reportDate') as string;
    const file = formData.get('file') as File;

    if (!patientName || !phoneInput || !reportTitle || !file) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const phoneCheck = cleanAndValidatePhone(phoneInput);
    if (!phoneCheck.isValid) {
      return NextResponse.json({ error: phoneCheck.error }, { status: 400 });
    }

    const uploadResult = await saveReportFile(file);

    await connectToDatabase();

    const reportDate = reportDateInput ? new Date(reportDateInput) : new Date();

    const report = await Report.create({
      patientName,
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
    console.error('Admin Upload Error:', error);
    return NextResponse.json({ error: error.message || 'Server Error' }, { status: 500 });
  }
}
