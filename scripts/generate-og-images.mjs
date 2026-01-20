/**
 * OG Image Generator for Gauges Green
 *
 * Generates 1200x630 OG images for social media previews.
 * Run: node scripts/generate-og-images.mjs
 */

import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, '..', 'public', 'og');

// Design tokens
const COLORS = {
  background: '#0a1f14',      // Deep green, near-black
  text: '#e8e6e1',            // Light warm gray
  textDim: '#8a8a8a',         // Muted gray
  accent: '#22b56a',          // Brand green
  accentFaded: 'rgba(34, 181, 106, 0.08)', // Very faded for watermark
};

const WIDTH = 1200;
const HEIGHT = 630;

// The "g" logo path data (scaled for large watermark)
const G_LOGO_PATH = `
M 128 32
C 78 32 40 70 40 120
C 40 170 78 208 128 208
C 154 208 176 196 194 176
L 194 206
C 194 238 166 256 132 256
C 96 256 68 236 60 206
L 92 196
C 100 222 116 230 132 230
C 150 230 168 216 168 198
L 168 178
C 154 196 142 208 128 208
Z
M 128 68
C 96 68 72 92 72 120
C 72 148 96 172 128 172
C 160 172 184 148 184 120
C 184 92 160 68 128 68
Z
M 128 92
C 148 92 164 106 164 120
C 164 134 148 148 128 148
C 108 148 92 134 92 120
C 92 106 108 92 128 92
Z
`;

/**
 * Create SVG for OG image
 */
function createOgSvg({ title, subtitle, showLogo = true }) {
  // Logo positioned on right side, large and partially cropped
  const logoScale = 2.5;
  const logoX = WIDTH - 180; // Positioned to the right, partially off-canvas
  const logoY = (HEIGHT - 256 * logoScale) / 2;

  const logoSvg = showLogo ? `
    <g transform="translate(${logoX}, ${logoY}) scale(${logoScale})" opacity="0.06">
      <path fill="${COLORS.accent}" fill-rule="evenodd" d="${G_LOGO_PATH}"/>
    </g>
  ` : '';

  // Text positioning - left side with safe margin for LinkedIn avatar overlap
  const textX = 80;
  const titleY = subtitle ? 270 : 315;
  const subtitleY = 340;

  return `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&amp;display=swap');
    </style>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${COLORS.background}"/>

  <!-- Watermark logo -->
  ${logoSvg}

  <!-- Title -->
  <text
    x="${textX}"
    y="${titleY}"
    font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    font-size="64"
    font-weight="600"
    fill="${COLORS.text}"
    letter-spacing="-2"
  >${escapeXml(title)}</text>

  ${subtitle ? `
  <!-- Subtitle -->
  <text
    x="${textX}"
    y="${subtitleY}"
    font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    font-size="28"
    font-weight="400"
    fill="${COLORS.textDim}"
    letter-spacing="-0.5"
  >${escapeXml(subtitle)}</text>
  ` : ''}
</svg>
  `.trim();
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Generate OG image from SVG
 */
async function generateOgImage(config, outputName) {
  const svg = createOgSvg(config);
  const outputPath = join(OUTPUT_DIR, outputName);

  await sharp(Buffer.from(svg))
    .png({ quality: 90 })
    .toFile(outputPath);

  console.log(`Generated: ${outputPath}`);
}

// Page configurations
const PAGES = [
  {
    name: 'home.png',
    config: {
      title: 'Ryan Eberhard',
      subtitle: 'Fractional Product & Growth Leadership',
      showLogo: true,
    },
  },
  {
    name: 'schedule.png',
    config: {
      title: 'Book a Call',
      subtitle: 'Schedule time with Ryan Eberhard',
      showLogo: true,
    },
  },
  {
    name: 'default.png',
    config: {
      title: 'Gauges Green',
      subtitle: 'Fractional Product & Growth Leadership',
      showLogo: true,
    },
  },
];

// Main
async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  for (const page of PAGES) {
    await generateOgImage(page.config, page.name);
  }

  console.log('\nOG images generated successfully!');
  console.log('\nTo refresh LinkedIn cache, visit:');
  console.log('https://www.linkedin.com/post-inspector/');
}

main().catch(console.error);
