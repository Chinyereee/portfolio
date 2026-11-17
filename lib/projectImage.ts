import fs from "node:fs";
import path from "node:path";

const EXTS = ["png", "jpg", "jpeg", "webp"];
const DIR = path.join(process.cwd(), "public", "images", "projects");

function find(base: string): string | null {
  for (const ext of EXTS) {
    if (fs.existsSync(path.join(DIR, `${base}.${ext}`))) {
      return `/images/projects/${base}.${ext}`;
    }
  }
  return null;
}

/** Main screenshot: public/images/projects/<slug>.png (or .jpg/.webp) */
export function getProjectImage(slug: string): string | null {
  return find(slug);
}

/** Extra screenshots: <slug>-2.png, <slug>-3.png ... up to -8 */
export function getProjectGallery(slug: string): string[] {
  const out: string[] = [];
  for (let i = 2; i <= 8; i++) {
    const f = find(`${slug}-${i}`);
    if (f) out.push(f);
  }
  return out;
}
