import fs from 'fs';
import sharp from 'sharp';

const files = [
  'WhatsApp Image 2026-10-14 at 1.03.02 PM.jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.01 PM (2).jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.02 PM.jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.03 PM.jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.06 PM.jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.11 PM (2).jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.12 PM.jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.15 PM.jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.16 PM.jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.16 PM (1).jpeg',
  'WhatsApp Image 2026-10-14 at 1.37.20 PM.jpeg'
];

const artifactDir = 'C:/Users/Himanshu/.gemini/antigravity-ide/brain/9be4426f-07ec-4a03-be64-95af1408aa1d/.tempmediaStorage';
if (!fs.existsSync(artifactDir)) fs.mkdirSync(artifactDir, { recursive: true });

for (let i = 0; i < files.length; i++) {
  const f = files[i];
  const out = `${artifactDir}/test_thumb_${i}.jpg`;
  await sharp(`public/newPictures/${f}`).resize(400, 266, { fit: 'cover' }).jpeg({ quality: 80 }).toFile(out);
  console.log(`Saved thumb ${i}: ${f} -> ${out}`);
}
