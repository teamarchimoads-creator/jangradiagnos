import fs from 'fs';
import path from 'path';

const audit = JSON.parse(fs.readFileSync('image_audit_report.json', 'utf8'));
const newPics = audit.allImages.filter(i => i.folder === 'newPictures');

console.log(`Found ${newPics.length} images in newPictures`);

// Let's print out all filenames sorted
newPics.sort((a,b) => a.fileName.localeCompare(b.fileName)).forEach((img, idx) => {
  console.log(`${idx + 1}. [${img.fileName}] ${img.width}x${img.height} (${(img.sizeBytes/1024).toFixed(0)}KB)`);
});
