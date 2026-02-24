# Banner Placeholders

This folder contains placeholder SVG banners for the affiliate assets page.

## How to Replace

1. Create your final banner images in PNG format using the sizes below.
2. Name them exactly as listed (or update `src/content/siteContent.ts` if you change names).
3. Replace the SVG files with your PNG files.

## Sizes

| Name             | Dimensions  | Filename            |
|------------------|-------------|---------------------|
| Leaderboard      | 728 × 90    | banner-728x90.png   |
| Full Banner      | 468 × 60    | banner-468x60.png   |
| Medium Rectangle | 300 × 250   | banner-300x250.png  |
| Wide Skyscraper  | 160 × 600   | banner-160x600.png  |
| Social Share     | 1200 × 628  | banner-1200x628.png |

When you switch from SVG to PNG, update the file extensions in `src/content/siteContent.ts` → `assetsPage.bannerSizes`.
