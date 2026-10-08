import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import connectToDatabase from '@/lib/db';
import Report from '@/lib/models/Report';

export const dynamic = 'force-dynamic';

export async function GET(
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

    const { searchParams } = new URL(req.url);
    const isDownload = searchParams.get('download') === '1';

    let fileBuffer: Buffer | null = null;
    let contentType = 'application/pdf';

    const fileType = (report.fileType || 'pdf').toLowerCase();
    if (fileType === 'pdf') {
      contentType = 'application/pdf';
    } else if (fileType === 'jpg' || fileType === 'jpeg') {
      contentType = 'image/jpeg';
    } else if (fileType === 'png') {
      contentType = 'image/png';
    }

    // 1. Try reading from local public/uploads/reports
    if (report.fileUrl) {
      let localFileName = path.basename(report.fileUrl.split('?')[0]);
      let localPath = path.join(process.cwd(), 'public', 'uploads', 'reports', localFileName);

      if (fs.existsSync(localPath)) {
        fileBuffer = await fs.promises.readFile(localPath);
      } else {
        // Search if matching file exists in uploads/reports directory
        const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'reports');
        if (fs.existsSync(uploadsDir)) {
          const files = await fs.promises.readdir(uploadsDir);
          const matched = files.find(f => f.includes(report.fileName || '') || report.fileUrl.includes(f));
          if (matched) {
            fileBuffer = await fs.promises.readFile(path.join(uploadsDir, matched));
          }
        }
      }
    }

    // 2. Fetch from external URL (e.g. Cloudinary) or decode Data URI
    if (!fileBuffer && report.fileUrl) {
      if (report.fileUrl.startsWith('data:')) {
        const parts = report.fileUrl.split(',');
        if (parts.length > 1) {
          fileBuffer = Buffer.from(parts[1], 'base64');
        }
      } else if (report.fileUrl.startsWith('http')) {
        const remoteRes = await fetch(report.fileUrl);
        if (remoteRes.ok) {
          const arrayBuf = await remoteRes.arrayBuffer();
          fileBuffer = Buffer.from(arrayBuf);
        }
      }
    }

    if (!fileBuffer) {
      // If still not buffered, redirect to fileUrl if remote
      if (report.fileUrl && report.fileUrl.startsWith('http')) {
        return NextResponse.redirect(new URL(report.fileUrl, req.url));
      }
      return NextResponse.json({ error: 'Report file content not found.' }, { status: 404 });
    }

    const filename = report.fileName || `${report.reportTitle || 'report'}.${fileType}`;
    const dispositionType = isDownload ? 'attachment' : 'inline';

    return new NextResponse(new Uint8Array(fileBuffer), {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `${dispositionType}; filename="${encodeURIComponent(filename)}"`,
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error: any) {
    console.error('File Streaming Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to serve report file' },
      { status: 500 }
    );
  }
}
