import fs from 'fs';
import path from 'path';

const newPicsDir = path.resolve('public/newPictures');
const files = fs.readdirSync(newPicsDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));

console.log(`Total files in newPictures: ${files.length}`);

// Group by timestamp base
const groups = {};
for (const f of files) {
  // Extract time like "1.03.01 PM" or "1.37.00 PM"
  const m = f.match(/at\s+(\d+\.\d+\.\d+\s+[AP]M)/i);
  const timeKey = m ? m[1] : 'other';
  if (!groups[timeKey]) groups[timeKey] = [];
  groups[timeKey].push(f);
}

console.log('Timestamp groupings:');
for (const [timeKey, groupFiles] of Object.entries(groups)) {
  console.log(`- ${timeKey} (${groupFiles.length} files): ${groupFiles.join(', ')}`);
}
