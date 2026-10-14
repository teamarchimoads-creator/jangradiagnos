import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');
const DIRS_TO_SCAN = ['newPictures', 'gallery', 'services', ''];

async function getFileHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex');
}

async function audit() {
  const allImages = [];

  for (const sub of DIRS_TO_SCAN) {
    const dirPath = path.join(PUBLIC_DIR, sub);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath);
    for (const f of files) {
      const fullPath = path.join(dirPath, f);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) continue;

      const ext = path.extname(f).toLowerCase();
      if (!['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif'].includes(ext)) continue;

      try {
        const hash = await getFileHash(fullPath);
        let meta = { width: 0, height: 0, format: ext.replace('.', '') };
        if (ext !== '.svg') {
          try {
            meta = await sharp(fullPath).metadata();
          } catch (e) {
            console.error('Sharp error on', f, e.message);
          }
        }

        const relPath = '/' + path.relative(PUBLIC_DIR, fullPath).replace(/\\/g, '/');
        allImages.push({
          fileName: f,
          relPath,
          fullPath,
          sizeBytes: stat.size,
          width: meta.width || 0,
          height: meta.height || 0,
          aspectRatio: meta.width && meta.height ? (meta.width / meta.height).toFixed(2) : 'N/A',
          format: meta.format || ext.replace('.', ''),
          sha256: hash,
          folder: sub || 'root'
        });
      } catch (err) {
        console.error('Error on file', f, err);
      }
    }
  }

  // Find exact duplicates by sha256
  const hashGroups = {};
  for (const img of allImages) {
    if (!hashGroups[img.sha256]) hashGroups[img.sha256] = [];
    hashGroups[img.sha256].push(img);
  }

  const exactDuplicates = Object.values(hashGroups).filter(g => g.length > 1);

  const report = {
    totalImages: allImages.length,
    byFolder: {
      newPictures: allImages.filter(i => i.folder === 'newPictures').length,
      gallery: allImages.filter(i => i.folder === 'gallery').length,
      services: allImages.filter(i => i.folder === 'services').length,
      root: allImages.filter(i => i.folder === 'root').length
    },
    exactDuplicates: exactDuplicates.map(g => ({
      hash: g[0].sha256.substring(0, 10),
      count: g.length,
      files: g.map(x => ({ relPath: x.relPath, size: x.sizeBytes, dimensions: `${x.width}x${x.height}` }))
    })),
    allImages
  };

  fs.writeFileSync('image_audit_report.json', JSON.stringify(report, null, 2));
  console.log(`Audited ${allImages.length} images. Found ${exactDuplicates.length} groups of exact duplicates.`);
}

audit();
