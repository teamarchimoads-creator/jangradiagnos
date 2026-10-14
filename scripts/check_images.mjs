import fs from 'fs';

const text = fs.readFileSync('src/data/galleryData.ts', 'utf8');
const regex = /src:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"/g;
let m;
while ((m = regex.exec(text)) !== null) {
  console.log(`${m[3]} | ${m[1]} | ${m[2]}`);
}
