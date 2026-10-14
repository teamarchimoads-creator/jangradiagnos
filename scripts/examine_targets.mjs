import fs from 'fs';
import sharp from 'sharp';

async function examine(filename) {
  const meta = await sharp(`public/newPictures/${filename}`).metadata();
  console.log(`${filename}: ${meta.width}x${meta.height}`);
}

const targets = [
  'WhatsApp Image 2026-10-14 at 1.03.02 PM.jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.02 PM.jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.06 PM.jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.11 PM.jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.11 PM (2).jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.12 PM.jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.15 PM.jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.16 PM.jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.16 PM (1).jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.20 PM.jpeg'
];

for (const t of targets) {
  if (fs.existsSync(`public/newPictures/${t}`)) {
    await examine(t);
  }
}
