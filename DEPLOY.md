# Deploy Greenroots to Cloudflare Pages

This project is pre-configured for **static export** to Cloudflare Pages. It compiles static HTML, CSS, JavaScript, and assets directly into the `./out` directory, running on Cloudflare's global CDN with zero server runtime required.

---

## ⚠️ CRITICAL: Cloudflare Pages Build Settings

Cloudflare Pages often fails on Next.js 16 projects for two reasons:
1. **Wrong Framework Preset:** Selecting "Next.js" makes Cloudflare expect Edge SSR / `@cloudflare/next-on-pages` and look for `.next` instead of `out`. **You must select `None` or `Next.js (Static HTML Export)`.**
2. **Old Node Version:** Cloudflare Pages defaults to Node 12 or 16 if unspecified. Next.js 16 requires **Node 20**. (This repo includes `.nvmrc` and `.node-version` pinning Node 20).

---

## Step-by-Step Deployment via Cloudflare Pages Dashboard

1. **Push your code to GitHub / GitLab**.
2. Open the [Cloudflare Dashboard](https://dash.cloudflare.com/) and go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your repository: `greenroots-full-project` (or your repo name).
4. In the **Set up builds and deployments** screen, configure:

| Setting | Value | Note |
| :--- | :--- | :--- |
| **Framework preset** | `None` *(or `Next.js (Static HTML Export)`)* | ⚠️ **DO NOT select standard `Next.js`** |
| **Build command** | `npm run build` | Runs `next build` to create static `./out` |
| **Build output directory** | `out` | Next.js exports static files here |
| **Root directory** | `/` | Leave empty / default unless in a subdirectory |

5. Under **Environment variables (advanced)**, add:
   - Variable name: `NODE_VERSION`
   - Value: `20`
6. Click **Save and Deploy**.

---

## Troubleshooting Common Cloudflare Deployment Errors

### 1. `Error: Output directory "out" not found` or looks for `.next`
- **Cause:** Framework preset is set to `Next.js` (which attempts Edge SSR and looks for `.next` or `.vercel/output/static`).
- **Fix:** In Cloudflare Pages project settings → **Builds & deployments** → **Build configurations** → Change **Framework preset** to `None`, **Build command** to `npm run build`, and **Build output directory** to `out`. Trigger a new deployment.

### 2. `Unsupported engine: node` or `Node.js version 16.x is not supported by Next.js`
- **Cause:** Cloudflare Pages build environment is using an outdated Node.js runtime.
- **Fix:** Ensure `NODE_VERSION=20` is set in **Settings** → **Environment variables**. The repo also includes `.nvmrc` and `.node-version` specifying `20` to guarantee Cloudflare uses Node 20.

### 3. Deploy via Wrangler CLI (Alternative)

If you prefer deploying directly from your terminal:

```bash
# 1. Install wrangler globally or use npx
npm install -g wrangler

# 2. Login to Cloudflare
wrangler login

# 3. Build the static site
npm run build

# 4. Deploy the out folder
wrangler pages deploy out --project-name=greenroots
```

---

## Configuration summary (already in the repo)

- **`next.config.ts`**: Configured with `output: "export"`, `images: { unoptimized: true }`, and `trailingSlash: true`.
- **`.nvmrc` & `.node-version`**: Pin Node.js version 20 for Cloudflare's build runners.
- **`wrangler.toml`**: Configures `pages_build_output_dir = "out"`, `compatibility_flags = ["nodejs_compat"]`, and `compatibility_date = "2024-09-23"`.
- **`public/_headers`**: Cloudflare security headers + long-term caching for static assets.
- **`public/_redirects`**: Redirect rule support for Cloudflare Pages.

