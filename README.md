# AI Flipping V2.0 — Affiliate & JV Resource Portal

An affiliate/JV resource portal built with Next.js (App Router), TypeScript, and TailwindCSS. This site provides affiliates with everything they need to promote AI Flipping V2.0 — affiliate links, banner ads, swipe copy, funnel details, and compliance guidelines. No products are sold on this site.

## Pages

| Route      | Description                                           |
|------------|-------------------------------------------------------|
| `/`        | Main portal — offer details, funnel stack, leaderboard, promo angles, compliance, review form |
| `/assets`  | Downloadable banner ads and swipe copy (Facebook, X, email, etc.) |
| `/terms`   | Terms of service                                      |
| `/privacy` | Privacy policy                                        |

## Prerequisites

- Node.js 18+ (recommended: 20 LTS)
- npm 9+

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.local` and update the values:

| Variable                          | Description                        |
|-----------------------------------|------------------------------------|
| `NEXT_PUBLIC_AFFILIATE_LINK`      | WarriorPlus affiliate signup URL   |
| `NEXT_PUBLIC_SUPPORT_EMAIL`       | Support email address              |
| `NEXT_PUBLIC_REVIEW_ACCESS_EMAIL` | Email for review access requests   |
| `NEXT_PUBLIC_SITE_URL`            | Production site URL (for SEO)      |

## Editing Content

All site copy lives in a single file:

```
src/content/siteContent.ts
```

Edit the exported objects to change offer details, funnel stack, leaderboard prizes, promo angles, compliance notes, banner references, swipe copy, terms, and privacy text.

## Replacing Images

### Banners
Replace the SVG placeholders in `public/banners/` with your final PNG images. Update the file extensions in `siteContent.ts` → `assetsPage.bannerSizes`.

### OpenGraph Image
Replace `public/og-image.svg` with a 1200x630 PNG named `og-image.png`. Update the reference in `src/app/layout.tsx` if you change the filename.

### Favicon
Replace `src/app/favicon.ico` with your own icon.

## Building for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option A: Git Integration (Recommended)
1. Push this repo to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Add environment variables in the Vercel dashboard.
4. Deploy.

### Option B: Vercel CLI
```bash
npm i -g vercel
vercel
```

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React 19](https://react.dev/)
