import sharp from "sharp";
import { existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const pngPath = join(root, "AxCode(FundoBranco).png");
const existingWebp = join(root, "public", "images", "axcode-logo.webp");
const outDir = join(root, "public", "images");
const output = join(outDir, "axcode-logo.webp");

mkdirSync(outDir, { recursive: true });

const input = existsSync(pngPath) ? pngPath : existingWebp;
if (!existsSync(input)) {
  console.error(
    "Nenhuma fonte encontrada: adicione AxCode(FundoBranco).png na raiz do projeto ou public/images/axcode-logo.webp"
  );
  process.exit(1);
}

function lum(r, g, b) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const pixels = new Uint8ClampedArray(data);
const w = info.width;
const h = info.height;

for (let i = 0; i < pixels.length; i += 4) {
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];
  const L = lum(r, g, b);

  if (L > 243 || (r > 228 && g > 228 && b > 228)) {
    pixels[i + 3] = 0;
    continue;
  }

  const isGreenish = g > r + 22 && g > b + 12;
  if (!isGreenish && L < 82 && r < 105 && g < 105 && b < 120) {
    const t = 0.88;
    pixels[i] = Math.round(r + (252 - r) * t);
    pixels[i + 1] = Math.round(g + (252 - g) * t);
    pixels[i + 2] = Math.round(b + (255 - b) * t);
  }
}

const MAX_WIDTH = 560;

const pipeline = sharp(Buffer.from(pixels), {
  raw: { width: w, height: h, channels: 4 },
})
  .resize({
    width: Math.min(MAX_WIDTH, w),
    fit: "inside",
    withoutEnlargement: true,
  })
  .trim({ threshold: 14 });

await pipeline
  .webp({ quality: 93, alphaQuality: 100, effort: 6 })
  .toFile(output);

const meta = await sharp(output).metadata();
console.log("Fonte:", input === pngPath ? "PNG" : "WebP existente");
console.log("Saída:", output);
console.log("Dimensões:", meta.width, "x", meta.height);
