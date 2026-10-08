import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectToDatabase from '@/lib/db';
import Report from '@/lib/models/Report';
import { saveReportFile, deleteReportFile } from '@/lib/fileStorage';
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
 * GET /api/reports/:id
 * Fetch single report by MongoDB _id, or reports by phone number if id is a phone
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: 'Report ID is required' }, { status: 400 });
    }

    await connectToDatabase();

    // If id is a valid 24-character hex MongoDB ObjectId
    if (mongoose.Types.ObjectId.isValid(id) && id.length === 24) {
      const report = await Report.findById(id);
      if (!report) {
        return NextResponse.json({ error: 'Report not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, report }, { status: 200 });
    }

    // Otherwise, treat as phone number lookup (backward-compatible)
    const phoneCheck = cleanAndValidatePhone(id);
    const searchPhone = phoneCheck.isValid ? phoneCheck.cleanPhone : id;

    const reports = await Report.find({
      $or: [{ phoneNumber: searchPhone }, { patientId: searchPhone }],
    }).sort({ reportDate: -1, createdAt: -1 });

    return NextResponse.json({ success: true, reports }, { status: 200 });
  } catch (error: any) {
    console.error('Fetch Report Error:', error);
    return NextResponse.json(
      { error: error.message || 'Server error occurred' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/reports/:id
 * Edit an existing report (patient name, phone, title, date, replace file)
 */
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: 'Valid Report ID is required' }, { status: 400 });
    }

    await connectToDatabase();
    const existingReport = await Report.findById(id);
    if (!existingReport) {
      return NextResponse.json({ error: 'Report not found' }, { status: 404 });
    }

    const contentType = req.headers.get('content-type') || '';
    let patientName = existingReport.patientName;
    let phoneNumber = existingReport.phoneNumber;
    let reportTitle = existingReport.reportTitle;
    let reportDate = existingReport.reportDate;
    let newFile: File | null = null;

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      if (formData.has('patientName')) {
        patientName = (formData.get('patientName') as string)?.trim() || patientName;
      }
      if (formData.has('phoneNumber')) {
        phoneNumber = (formData.get('phoneNumber') as string)?.trim() || phoneNumber;
      }
      if (formData.has('reportTitle')) {
        reportTitle = (formData.get('reportTitle') as string)?.trim() || reportTitle;
      }
      if (formData.has('reportDate')) {
        const d = formData.get('reportDate') as string;
        if (d) reportDate = new Date(d);
      }
      const fileCandidate = formData.get('file');
      if (fileCandidate && typeof fileCandidate !== 'string') {
        newFile = fileCandidate as File;
      }
    } else {
      const body = await req.json();
      if (body.patientName) patientName = body.patientName.trim();
      if (body.phoneNumber) phoneNumber = body.phoneNumber.trim();
      if (body.reportTitle) reportTitle = body.reportTitle.trim();
      if (body.reportDate) reportDate = new Date(body.reportDate);
    }

    // Validate phone number
    const phoneCheck = cleanAndValidatePhone(phoneNumber);
    if (!phoneCheck.isValid) {
      return NextResponse.json({ error: phoneCheck.error }, { status: 400 });
    }

    // If new file is uploaded, replace existing file
    let fileUrl = existingReport.fileUrl;
    let fileType = existingReport.fileType;
    let fileName = existingReport.fileName;
    let fileSize = existingReport.fileSize;
    let publicId = existingReport.publicId;
    let resourceType = existingReport.resourceType;

    if (newFile) {
      const fType = newFile.type?.toLowerCase();
      const fName = newFile.name?.toLowerCase();
      const isAllowedExt =
        fName.endsWith('.pdf') ||
        fName.endsWith('.jpg') ||
        fName.endsWith('.jpeg') ||
        fName.endsWith('.png');

      if (!ALLOWED_MIME_TYPES.includes(fType) && !isAllowedExt) {
        return NextResponse.json(
          { error: 'Invalid file format. Allowed formats: PDF, JPG, JPEG, PNG.' },
          { status: 400 }
        );
      }

      if (newFile.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: 'File size exceeds 15MB limit.' },
          { status: 400 }
        );
      }

      // Delete old file from storage
      await deleteReportFile(existingReport.fileUrl, existingReport.publicId);

      // Save new file
      const uploadResult = await saveReportFile(newFile);
      fileUrl = uploadResult.fileUrl;
      fileType = uploadResult.fileType;
      fileName = uploadResult.fileName;
      fileSize = uploadResult.fileSize;
      publicId = uploadResult.publicId;
      resourceType = uploadResult.resourceType;
    }

    // Update document in MongoDB
    existingReport.patientName = patientName;
    existingReport.phoneNumber = phoneCheck.cleanPhone;
    existingReport.patientId = phoneCheck.cleanPhone;
    existingReport.reportTitle = reportTitle;
    existingReport.testName = reportTitle;
    existingReport.reportDate = isNaN(reportDate.getTime()) ? new Date() : reportDate;
    existingReport.fileUrl = fileUrl;
    existingReport.fileType = fileType;
    existingReport.fileName = fileName;
    existingReport.fileSize = fileSize;
    existingReport.publicId = publicId;
    existingReport.resourceType = resourceType;

    await existingReport.save();

    return NextResponse.json({ success: true, report: existingReport }, { status: 200 });
  } catch (error: any) {
    console.error('Update Report Error:', error);
    return NextResponse.json(
      { error: error.message || 'Server error occurred while updating report.' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/reports/:id
 * Delete report document and file from storage
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: 'Valid Report ID is required' }, { status: 400 });
    }

    await connectToDatabase();
    const report = await Report.findById(id);
    if (!report) {
      return NextResponse.json({ error: 'Report not found' }, { status: 404 });
    }

    // Delete associated file from storage (both local and Cloudinary)
    await deleteReportFile(report.fileUrl, report.publicId);

    // Delete MongoDB record
    await Report.findByIdAndDelete(id);

    return NextResponse.json(
      { success: true, message: 'Report deleted successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Delete Report Error:', error);
    return NextResponse.json(
      { error: error.message || 'Server error occurred while deleting report.' },
      { status: 500 }
    );
  }
}
