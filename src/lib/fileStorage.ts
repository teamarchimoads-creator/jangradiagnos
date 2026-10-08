import fs from 'fs';
import path from 'path';
import cloudinary from './cloudinary';

const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads', 'reports');

export interface UploadResult {
  fileUrl: string;
  fileType: string;
  fileName: string;
  fileSize: number;
  publicId?: string;
  resourceType?: string;
}

/**
 * Ensure the local uploads directory exists
 */
export async function ensureUploadsDirectory(): Promise<void> {
  if (!fs.existsSync(UPLOADS_DIR)) {
    await fs.promises.mkdir(UPLOADS_DIR, { recursive: true });
  }
}

/**
 * Detect file type extension from MIME type or file name
 */
export function getNormalizedFileType(file: File): string {
  const name = file.name.toLowerCase();
  const type = file.type.toLowerCase();

  if (type === 'application/pdf' || name.endsWith('.pdf')) return 'pdf';
  if (type === 'image/jpeg' || name.endsWith('.jpeg')) return 'jpeg';
  if (type === 'image/jpg' || name.endsWith('.jpg')) return 'jpg';
  if (type === 'image/png' || name.endsWith('.png')) return 'png';

  // Fallback check
  const ext = name.split('.').pop() || 'pdf';
  return ext;
}

/**
 * Save an uploaded file (saves locally to public/uploads/reports for fast, reliable serving,
 * and syncs with Cloudinary if configured).
 */
export async function saveReportFile(file: File): Promise<UploadResult> {
  await ensureUploadsDirectory();

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileType = getNormalizedFileType(file);
  const sanitizedOriginal = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  const uniqueName = `${Date.now()}-${sanitizedOriginal}`;
  const filePath = path.join(UPLOADS_DIR, uniqueName);

  // 1. Write file to disk in public/uploads/reports
  await fs.promises.writeFile(filePath, buffer);

  let fileUrl = `/uploads/reports/${uniqueName}`;
  let publicId: string | undefined = undefined;
  let resourceType: string | undefined = undefined;

  // 2. Optionally mirror to Cloudinary if available
  try {
    if (
      process.env.CLOUDINARY_CLOUD_NAME &&
      process.env.CLOUDINARY_API_KEY &&
      process.env.CLOUDINARY_API_SECRET
    ) {
      const base64Data = buffer.toString('base64');
      const fileUri = `data:${file.type || 'application/octet-stream'};base64,${base64Data}`;
      const isPdf = fileType === 'pdf';

      const uploadResponse = await cloudinary.uploader.upload(fileUri, {
        folder: 'jangra_reports',
        resource_type: isPdf ? 'raw' : 'auto',
        use_filename: true,
        unique_filename: true,
      });

      if (uploadResponse?.secure_url) {
        publicId = uploadResponse.public_id;
        resourceType = uploadResponse.resource_type;
        // Keep fileUrl as local /uploads/reports/${uniqueName} so browsers can embed & stream without CORS issues
      }
    }
  } catch (cloudErr) {
    console.warn('Cloudinary upload backup skipped:', cloudErr);
  }

  return {
    fileUrl,
    fileType,
    fileName: file.name,
    fileSize: file.size,
    publicId,
    resourceType,
  };
}

/**
 * Delete a report file from storage (both local and Cloudinary)
 */
export async function deleteReportFile(fileUrl?: string, publicId?: string): Promise<void> {
  // 1. Delete local file if it's stored locally
  if (fileUrl && fileUrl.startsWith('/uploads/reports/')) {
    try {
      const fileName = path.basename(fileUrl);
      const filePath = path.join(UPLOADS_DIR, fileName);
      if (fs.existsSync(filePath)) {
        await fs.promises.unlink(filePath);
      }
    } catch (err) {
      console.error('Error deleting local file:', err);
    }
  }

  // 2. Delete from Cloudinary if publicId is present
  if (publicId) {
    try {
      await cloudinary.uploader.destroy(publicId);
    } catch (err) {
      console.error('Error deleting Cloudinary asset:', err);
    }
  }
}
