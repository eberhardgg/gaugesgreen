import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fafafa;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f5f5f5;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bg)"/>

  <!-- Subtle accent line -->
  <rect x="80" y="200" width="4" height="230" fill="#10b981" rx="2"/>

  <!-- Main name -->
  <text x="110" y="270" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" fill="#111827">
    Ryan Eberhard
  </text>

  <!-- Tagline -->
  <text x="110" y="340" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="400" fill="#4b5563">
    I fix stalled growth at Series A/B companies.
  </text>

  <!-- Proof line -->
  <text x="110" y="390" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="400" fill="#6b7280">
    Three IPOs. $2B+ in exits.
  </text>

  <!-- Brand -->
  <text x="110" y="540" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="500" fill="#9ca3af" letter-spacing="2">
    GAUGES GREEN
  </text>

  <!-- Domain -->
  <text x="${width - 80}" y="540" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="400" fill="#9ca3af" text-anchor="end">
    gaugesgreen.com
  </text>
</svg>
`;

const outputPath = join(__dirname, '..', 'public', 'og.png');

sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)
  .then(() => {
    console.log(`OG image generated: ${outputPath}`);
  })
  .catch(err => {
    console.error('Error generating OG image:', err);
    process.exit(1);
  });
