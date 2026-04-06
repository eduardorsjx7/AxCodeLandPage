import sharp from "sharp";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const svgPath = join(root, "1.svg");
const outDir = join(root, "public", "images");

mkdirSync(outDir, { recursive: true });

const svg = readFileSync(svgPath, "utf8");
writeFileSync(join(outDir, "axcode-mark.svg"), svg);

const MAX = 512;
await sharp(svgPath)
  .resize(MAX, MAX, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .webp({ quality: 92, alphaQuality: 100, effort: 6 })
  .toFile(join(outDir, "axcode-mark.webp"));

const meta = await sharp(join(outDir, "axcode-mark.webp")).metadata();
console.log("SVG → public/images/axcode-mark.svg");
console.log("WebP → public/images/axcode-mark.webp", meta.width, "x", meta.height);
