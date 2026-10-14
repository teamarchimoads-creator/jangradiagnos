import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');

// Compute 64-bit dHash (difference hash) using sharp
async function computeDHash(filePath) {
  try {
    // 9x8 grayscale image gives 8 differences per row across 8 rows = 64 bits
    const { data } = await sharp(filePath)
      .resize(9, 8, { fit: 'fill' })
      .grayscale()
      .raw()
      .toBuffer({ resolveWithObject: true });

    let hash = '';
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const left = data[row * 9 + col];
        const right = data[row * 9 + col + 1];
        hash += left > right ? '1' : '0';
      }
    }
    return hash;
  } catch (e) {
    return null;
  }
}

function hammingDistance(h1, h2) {
  if (!h1 || !h2 || h1.length !== h2.length) return 999;
  let dist = 0;
  for (let i = 0; i < h1.length; i++) {
    if (h1[i] !== h2[i]) dist++;
  }
  return dist;
}

async function run() {
  const auditData = JSON.parse(fs.readFileSync('image_audit_report.json', 'utf-8'));
  const images = auditData.allImages;

  console.log(`Computing dHash for ${images.length} images...`);
  for (const img of images) {
    img.dhash = await computeDHash(img.fullPath);
  }

  // Find visual clusters (near duplicates with hamming distance <= 5)
  const clusters = [];
  const visited = new Set();

  for (let i = 0; i < images.length; i++) {
    if (visited.has(i)) continue;
    const group = [images[i]];
    visited.add(i);

    for (let j = i + 1; j < images.length; j++) {
      if (visited.has(j)) continue;
      const dist = hammingDistance(images[i].dhash, images[j].dhash);
      if (dist <= 5) {
        group.push(images[j]);
        visited.add(j);
      }
    }

    if (group.length > 1) {
      clusters.push(group);
    }
  }

  console.log(`Identified ${clusters.length} visual clusters of identical or near-duplicate images.`);

  // Generate an HTML visual audit page so we can inspect and classify
  let html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Image Audit & Visual Inspection</title>
<style>
  body { font-family: system-ui, sans-serif; background: #0b1120; color: #f8fafc; padding: 24px; margin: 0; }
  h1, h2 { color: #38bdf8; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; margin-bottom: 40px; }
  .card { background: #1e293b; border-radius: 12px; overflow: hidden; border: 1px solid #334155; }
  .card img { width: 100%; height: 180px; object-fit: cover; background: #0f172a; display: block; }
  .info { padding: 12px; font-size: 11px; line-height: 1.4; color: #94a3b8; }
  .info strong { color: #f1f5f9; display: block; word-break: break-all; margin-bottom: 4px; font-size: 12px; }
  .badge { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; margin-top: 4px; }
  .badge-cluster { background: #b45309; color: #fef3c7; }
  .cluster-box { border: 2px solid #f59e0b; border-radius: 12px; padding: 16px; margin-bottom: 24px; background: #1e1b18; }
</style>
</head>
<body>
<h1>Jangra Diagnostics — Complete Image Audit (${images.length} Images)</h1>
<p>Audit of <code>public/newPictures</code>, <code>public/gallery</code>, <code>public/services</code>, and root.</p>

<h2>Near-Duplicate Visual Clusters (${clusters.length} groups found)</h2>
`;

  clusters.forEach((g, cIdx) => {
    html += `<div class="cluster-box">
      <h3>Cluster #${cIdx + 1} (${g.length} matching / similar images)</h3>
      <div class="grid">`;
    g.forEach(img => {
      html += `<div class="card">
        <img src="${img.relPath}" loading="lazy" />
        <div class="info">
          <strong>${img.fileName}</strong>
          <div>Folder: ${img.folder}</div>
          <div>Size: ${(img.sizeBytes / 1024).toFixed(1)} KB | ${img.width}x${img.height} (${img.aspectRatio}:1)</div>
          <span class="badge badge-cluster">Cluster #${cIdx + 1}</span>
        </div>
      </div>`;
    });
    html += `</div></div>`;
  });

  html += `<h2>All Audited Images by Folder</h2>`;

  const folders = ['newPictures', 'gallery', 'services', 'root'];
  for (const f of folders) {
    const fImages = images.filter(i => i.folder === f);
    html += `<h3>Folder: public/${f === 'root' ? '' : f} (${fImages.length} images)</h3>
    <div class="grid">`;
    fImages.forEach(img => {
      html += `<div class="card">
        <img src="${img.relPath}" loading="lazy" />
        <div class="info">
          <strong>${img.fileName}</strong>
          <div>Size: ${(img.sizeBytes / 1024).toFixed(1)} KB | ${img.width}x${img.height} (${img.aspectRatio}:1)</div>
          <div>Path: <code>${img.relPath}</code></div>
        </div>
      </div>`;
    });
    html += `</div>`;
  }

  html += `</body></html>`;

  fs.writeFileSync('public/audit_preview.html', html);
  fs.writeFileSync('visual_clusters.json', JSON.stringify(clusters, null, 2));
  console.log('Saved visual_clusters.json and public/audit_preview.html');
}

run();
