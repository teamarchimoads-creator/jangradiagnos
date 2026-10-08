const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Wide Horizontal Logo (for Navbar, Footer, Headers)
const horizontalSvg = `
<svg width="1440" height="340" viewBox="0 0 1440 340" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7" />
      <stop offset="100%" stop-color="#0369A1" />
    </linearGradient>
    <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488" />
      <stop offset="100%" stop-color="#06B6D4" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0369A1" flood-opacity="0.15" />
    </filter>
  </defs>

  <!-- Emblem Group -->
  <g transform="translate(45, 30)">
    <!-- Outer Diagnostic Scanning Ring Arc -->
    <path d="M 140 20 A 120 120 0 1 0 260 140" fill="none" stroke="url(#blueGrad)" stroke-width="16" stroke-linecap="round" filter="url(#shadow)" />
    
    <!-- Secondary Dynamic Echo Arc -->
    <path d="M 230 70 A 90 90 0 0 1 230 210" fill="none" stroke="url(#tealGrad)" stroke-width="12" stroke-linecap="round" />
    
    <!-- Third Inner Pulse Arc -->
    <path d="M 205 95 A 60 60 0 0 1 205 185" fill="none" stroke="url(#blueGrad)" stroke-width="8" stroke-linecap="round" opacity="0.8" />

    <!-- Center Medical Cross + Dental Spark -->
    <g transform="translate(140, 140)">
      <!-- Medical Cross Vertical -->
      <rect x="-18" y="-60" width="36" height="120" rx="10" fill="url(#blueGrad)" />
      <!-- Medical Cross Horizontal -->
      <rect x="-60" y="-18" width="120" height="36" rx="10" fill="url(#blueGrad)" />
      
      <!-- Central Heartbeat / Dental Emblem Spark -->
      <circle cx="0" cy="0" r="16" fill="#FFFFFF" />
      <circle cx="0" cy="0" r="10" fill="url(#tealGrad)" />
      
      <!-- Small Sparkle / Dental Star -->
      <path d="M 38 -38 L 44 -26 L 56 -20 L 44 -14 L 38 -2 L 32 -14 L 20 -20 L 32 -26 Z" fill="#0D9488" />
    </g>

    <!-- Foundation Leaf / Ribbon -->
    <rect x="70" y="240" width="140" height="26" rx="13" fill="#0F172A" />
    <text x="140" y="258" font-family="'Inter', system-ui, -apple-system, sans-serif" font-size="13" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">ESTD 2013</text>
  </g>

  <!-- Text Group -->
  <g transform="translate(370, 60)">
    <!-- Primary Brand Title -->
    <text x="0" y="85" font-family="'Inter', 'Montserrat', 'Arial', sans-serif" font-size="78" font-weight="900" fill="#0F172A" letter-spacing="1.5">
      JANGRA <tspan fill="#0284C7">DIAGNOSTICS</tspan>
    </text>

    <!-- Secondary Category Subtitle -->
    <text x="4" y="145" font-family="'Inter', system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#0D9488" letter-spacing="5">
      DIAGNOSTIC &amp; DENTAL CARE CENTRE
    </text>

    <!-- Divider Line -->
    <rect x="4" y="170" width="980" height="3" fill="#E2E8F0" rx="1.5" />
    <rect x="4" y="170" width="220" height="3" fill="url(#blueGrad)" rx="1.5" />

    <!-- Tagline -->
    <text x="4" y="215" font-family="'Georgia', serif" font-style="italic" font-size="27" font-weight="500" fill="#475569">
      “Think of quality, Think of us.”
    </text>

    <!-- Accreditation / Quality Badge Text -->
    <g transform="translate(730, 193)">
      <rect x="0" y="0" width="240" height="32" rx="16" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.5" />
      <text x="120" y="21" font-family="'Inter', system-ui, sans-serif" font-size="13" font-weight="700" fill="#15803D" text-anchor="middle" letter-spacing="1">
        ✓ MAX LAB PARTNER
      </text>
    </g>
  </g>
</svg>
`;

// Square Icon (for App icon, favicon, etc.)
const squareSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#1E3A8A" />
    </linearGradient>
    <linearGradient id="sqBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="100%" stop-color="#0284C7" />
    </linearGradient>
    <linearGradient id="sqTeal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2DD4BF" />
      <stop offset="100%" stop-color="#0D9488" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="12" flood-color="#38BDF8" flood-opacity="0.4" />
    </filter>
  </defs>

  <!-- Background with rounded corners -->
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)" />

  <!-- Outer Scanning Ring -->
  <path d="M 256 64 A 192 192 0 1 0 448 256" fill="none" stroke="url(#sqBlue)" stroke-width="26" stroke-linecap="round" filter="url(#glow)" />
  <path d="M 400 144 A 144 144 0 0 1 400 368" fill="none" stroke="url(#sqTeal)" stroke-width="20" stroke-linecap="round" />

  <!-- Center Cross -->
  <g transform="translate(256, 256)">
    <rect x="-30" y="-100" width="60" height="200" rx="18" fill="url(#sqBlue)" />
    <rect x="-100" y="-30" width="200" height="60" rx="18" fill="url(#sqBlue)" />
    
    <circle cx="0" cy="0" r="28" fill="#FFFFFF" />
    <circle cx="0" cy="0" r="18" fill="url(#sqTeal)" />

    <!-- Dental Star Sparkle -->
    <path d="M 64 -64 L 72 -44 L 92 -36 L 72 -28 L 64 -8 L 56 -28 L 36 -36 L 56 -44 Z" fill="#2DD4BF" />
  </g>

  <!-- Letter 'J' Subtle Monogram Watermark at Bottom -->
  <text x="256" y="456" font-family="'Inter', sans-serif" font-size="44" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="6">
    JANGRA
  </text>
</svg>
`;

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');
  const appDir = path.join(__dirname, '..', 'src', 'app');

  // Write SVGs
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), horizontalSvg);
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), squareSvg);

  // Convert Horizontal SVG to PNG
  await sharp(Buffer.from(horizontalSvg))
    .png()
    .toFile(path.join(publicDir, 'logo.png'));
  console.log('Generated public/logo.png');

  // Convert to JPEG with white background
  await sharp(Buffer.from(horizontalSvg))
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .jpeg({ quality: 95 })
    .toFile(path.join(publicDir, 'logo.jpeg'));
  console.log('Generated public/logo.jpeg');

  // Convert Square SVG to PNG for Favicon / Icon
  await sharp(Buffer.from(squareSvg))
    .png()
    .toFile(path.join(appDir, 'icon.png'));
  console.log('Generated src/app/icon.png');

  await sharp(Buffer.from(squareSvg))
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('Generated public/favicon.png');
}

main().catch(console.error);
