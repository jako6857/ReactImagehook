import { readdir } from "node:fs/promises";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".svg",
  ".avif"
]);

async function walkDirectory(currentDir, baseDir) {
  const entries = await readdir(currentDir, { withFileTypes: true });
  const images = [];

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      const nestedImages = await walkDirectory(fullPath, baseDir);
      images.push(...nestedImages);
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(extension)) {
      continue;
    }

    const relativePath = fullPath.replace(baseDir, "").replace(/\\/g, "/");
    images.push(relativePath.startsWith("/") ? relativePath : `/${relativePath}`);
  }

  return images;
}

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), "public");
    const images = await walkDirectory(publicDir, publicDir);

    return Response.json({ images });
  } catch {
    return Response.json(
      { images: [], error: "Could not read images from public folder." },
      { status: 500 }
    );
  }
}
