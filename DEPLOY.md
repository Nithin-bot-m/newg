# Deploy Greenroots to Cloudflare Pages

This project is pre-configured for **static export** to Cloudflare Pages. No server runtime required — runs entirely on Cloudflare's global CDN, free tier friendly.

---

## Option A — Deploy via Cloudflare Dashboard (recommended, no CLI)

1. Push the project to a GitHub repo (public or private).
2. Go to **Cloudflare Pages** → **Create a project** → **Connect to Git**.
3. Select your repo.
4. Configure build:
   - **Framework preset:** `Next.js`
   - **Build command:** `bun run build` *(or `npm run build` if you don't have Bun)*
   - **Build output directory:** `out`
   - **Node version:** `20` (set via env var `NODE_VERSION=20`)
5. Click **Save and Deploy**.

You'll get a URL like `greenroots.pages.dev` once deployed. Custom domains can be attached in the Pages dashboard under **Custom domains**.

---

## Option B — Deploy via Wrangler CLI

```bash
# 1. Install wrangler globally
npm install -g wrangler

# 2. Authenticate with your Cloudflare account
wrangler login

# 3. Build the static site
cd /home/z/my-project
bun run build

# 4. Deploy to Cloudflare Pages
wrangler pages deploy out --project-name=greenroots
```

First deploy will create the project automatically. Subsequent deploys update it.

---

## Option C — Direct upload (no Git, no CLI)

If you just want to upload the pre-built `out/` folder:

1. Zip the `out/` directory:
   ```bash
   cd /home/z/my-project
   zip -r greenroots.zip out/
   ```
2. Download `greenroots.zip` to your machine.
3. Go to **Cloudflare Pages** → **Create project** → **Direct Upload**.
4. Drag the zip into the upload area.
5. Done — instant `*.pages.dev` URL.

---

## Configuration summary (already in the repo)

### `next.config.ts`
```ts
output: "export"                  // generate static HTML/CSS/JS in ./out
images: { unoptimized: true }     // CF Pages doesn't run Next image optimizer
trailingSlash: true               // cleaner URLs on static hosting
```

### `public/_headers` (auto-applied by Cloudflare Pages)
- Security headers (CSP, X-Frame-Options, etc.) on all routes
- 1-year immutable cache on `/_next/static/*`, SVG, and WOFF2 fonts

### `public/_redirects` (auto-applied by Cloudflare Pages)
- Empty by default — add 301 redirects here if you change URL structure later

---

## Verifying the build locally

```bash
cd /home/z/my-project
bun run build                    # builds to ./out
bunx serve out -p 3001           # preview locally at http://localhost:3001
```

Open http://localhost:3001 — you should see the full Greenroots site, identical to the live z.ai preview.

---

## What works on Cloudflare Pages

- ✅ All 20 sections (Hero, Courses, Mentors, FAQ, etc.) — fully static HTML
- ✅ Mobile + desktop responsive layouts
- ✅ Yellow accent color scheme (`#F9D032`) and dark theme sections
- ✅ All CTAs and form inputs (note: forms don't submit yet — wire them to Formspree/Netlify Forms/Cloudflare Workers when ready)

## What doesn't work (without extra setup)

- ❌ Next.js Image Optimization (we already disabled it — placeholders render fine)
- ❌ Server-side API routes (we marked `/api` as `force-static` — it returns a static JSON)
- ❌ NextAuth.js sessions (would need Cloudflare Workers + KV if you add auth later)

If you need dynamic features later, switch to **`@cloudflare/next-on-pages`** adapter — but for a marketing site, static export is simpler and faster.

---

## Custom domain setup

After deployment:

1. In Cloudflare Pages dashboard → your project → **Custom domains** → **Set up a domain**
2. Enter `yourdomain.com` (and `www.yourdomain.com` if desired)
3. Cloudflare auto-provisions the SSL cert and adds the CNAME record (if your DNS is on Cloudflare)
4. Wait 2–5 minutes — your site is now live on your own domain

---

## Costs

- **Free tier:** 500 builds/month, unlimited bandwidth, unlimited requests, 20,000 files per deployment — more than enough for this site
- **Paid tier ($20/mo):** only needed if you exceed build limits or want Cloudflare Analytics Pro

---

## Support files in this repo

- `next.config.ts` — static export config
- `public/_headers` — Cloudflare Pages security headers + asset caching
- `public/_redirects` — Cloudflare Pages redirect rules (empty)
- `src/app/api/route.ts` — marked `force-static` so it builds cleanly
- `DEPLOY.md` (this file) — deployment guide

Build verified working: 2.1MB total output, 4 prerendered pages, zero server runtime required.
