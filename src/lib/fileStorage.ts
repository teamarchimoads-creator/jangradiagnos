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
 * Safely ensure the local uploads directory exists (only works if filesystem is writable)
 */
export async function ensureUploadsDirectory(): Promise<boolean> {
  try {
    if (!fs.existsSync(UPLOADS_DIR)) {
      await fs.promises.mkdir(UPLOADS_DIR, { recursive: true });
    }
    return true;
  } catch {
    // Read-only filesystem (e.g. Vercel /var/task)
    return false;
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

  const ext = name.split('.').pop() || 'pdf';
  return ext;
}

/**
 * Save an uploaded file:
 * 1. Uploads to Cloudinary (Primary Cloud Storage for Vercel serverless & production).
 * 2. Mirrors locally to public/uploads/reports only if filesystem is writable (Localhost).
 * 3. Never throws EROFS on Vercel or read-only environments.
 */
export async function saveReportFile(file: File): Promise<UploadResult> {
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileType = getNormalizedFileType(file);
  const sanitizedOriginal = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  const uniqueName = `${Date.now()}-${sanitizedOriginal}`;

  let fileUrl = '';
  let publicId: string | undefined = undefined;
  let resourceType: string | undefined = undefined;

  // 1. PRIMARY: Upload to Cloudinary (Guaranteed to work on Vercel and local)
  try {
    const base64Data = buffer.toString('base64');
    const mime = file.type || (fileType === 'pdf' ? 'application/pdf' : 'image/jpeg');
    const fileUri = `data:${mime};base64,${base64Data}`;
    const isPdf = fileType === 'pdf';

    const uploadResponse = await cloudinary.uploader.upload(fileUri, {
      folder: 'jangra_reports',
      resource_type: isPdf ? 'raw' : 'auto',
      use_filename: true,
      unique_filename: true,
    });

    if (uploadResponse?.secure_url) {
      fileUrl = uploadResponse.secure_url;
      publicId = uploadResponse.public_id;
      resourceType = uploadResponse.resource_type;
    }
  } catch (cloudErr) {
    console.error('Cloudinary cloud upload failed:', cloudErr);
  }

  // 2. SECONDARY: Mirror to local disk if filesystem is writable (e.g. Local Development)
  // Safely skipped on Vercel (/var/task is read-only)
  try {
    const isWritable = await ensureUploadsDirectory();
    if (isWritable) {
      const filePath = path.join(UPLOADS_DIR, uniqueName);
      await fs.promises.writeFile(filePath, buffer);
      // If Cloudinary wasn't available, use local file path
      if (!fileUrl) {
        fileUrl = `/uploads/reports/${uniqueName}`;
      }
    }
  } catch (fsErr: any) {
    // Silently ignore EROFS on Vercel / serverless environments
    console.log('Local disk write skipped in serverless environment.');
  }

  // 3. FALLBACK: If both Cloudinary and disk were unavailable, embed as Data URI
  if (!fileUrl) {
    const mime = file.type || (fileType === 'pdf' ? 'application/pdf' : 'image/jpeg');
    fileUrl = `data:${mime};base64,${buffer.toString('base64')}`;
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
 * Delete a report file from storage (both Cloudinary and local if applicable)
 */
export async function deleteReportFile(fileUrl?: string, publicId?: string): Promise<void> {
  // 1. Delete from Cloudinary
  if (publicId) {
    try {
      await cloudinary.uploader.destroy(publicId);
    } catch (err) {
      console.warn('Cloudinary asset delete skipped:', err);
    }
  }

  // 2. Delete local file if it exists and filesystem allows it
  if (fileUrl && fileUrl.startsWith('/uploads/reports/')) {
    try {
      const fileName = path.basename(fileUrl);
      const filePath = path.join(UPLOADS_DIR, fileName);
      if (fs.existsSync(filePath)) {
        await fs.promises.unlink(filePath);
      }
    } catch {
      // Ignored in read-only environment
    }
  }
}
