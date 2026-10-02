import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — outputs fully static HTML/CSS/JS to ./out/
  // Cloudflare Pages can serve this directly with zero server runtime.
  output: "export",

  // Cloudflare Pages doesn't run the Next.js image optimizer.
  // Serve images as-is (placeholders already work without optimization).
  images: {
    unoptimized: true,
  },

  // Append trailing slashes to all routes for cleaner static hosting.
  trailingSlash: true,

  // The dev server in this sandbox runs on port 3000 — keep it as-is.
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
