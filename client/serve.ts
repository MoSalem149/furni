import { extname, join } from "jsr:@std/path";

const MIME: Record<string, string> = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
};

const DIST = join(Deno.cwd(), "dist");

Deno.serve(async (req) => {
  const url = new URL(req.url);
  let pathname = url.pathname;

  // Try exact file first, fallback to index.html for SPA routing
  const tryPaths = [
    join(DIST, pathname),
    join(DIST, pathname, "index.html"),
    join(DIST, "index.html"),
  ];

  for (const filePath of tryPaths) {
    try {
      const data = await Deno.readFile(filePath);
      const ext = extname(filePath);
      const contentType = MIME[ext] || "application/octet-stream";
      return new Response(data, {
        headers: {
          "content-type": contentType,
          "access-control-allow-origin": "*",
        },
      });
    } catch {
      continue;
    }
  }

  return new Response("Not found", { status: 404 });
});