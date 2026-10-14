import fs from 'fs';

const allFiles = fs.readdirSync('public/newPictures').filter(f => f.endsWith('.jpeg') || f.endsWith('.png'));

// Group by timestamp
const groups = {};
for (const f of allFiles) {
  const match = f.match(/WhatsApp Image 2026-10-14 at (.*?)(?: \(\d+\))?\.jpeg/);
  const time = match ? match[1] : f;
  if (!groups[time]) groups[time] = [];
  groups[time].push(f);
}

for (const [time, files] of Object.entries(groups)) {
  console.log(`[${time}] -> ${files.length} files: ${files[0]}`);
}
