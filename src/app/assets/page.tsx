import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { CopyBlock } from "@/components/CopyBlock";
import { assetsPage } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Affiliate Assets — Banners & Swipe Copy",
  description:
    "Download banners and grab ready-made copy for promoting AI Flipping V2.0. Facebook, Twitter, email swipes, and more.",
  openGraph: {
    title: "Affiliate Assets — Banners & Swipe Copy",
    description:
      "Download banners and grab ready-made copy for promoting AI Flipping V2.0.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

export default function AssetsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-4 pb-8 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1
            className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="gradient-text">{assetsPage.headline}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            {assetsPage.subheadline}
          </p>
        </div>
      </section>

      {/* Banners */}
      <Section title="Affiliate Banners" dark>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {assetsPage.bannerSizes.map((banner) => (
            <div
              key={banner.file}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative flex items-center justify-center bg-background/50 p-4">
                <Image
                  src={`/banners/${banner.file}`}
                  alt={`${banner.name} banner — ${banner.width}x${banner.height}`}
                  width={banner.width}
                  height={banner.height}
                  className="max-h-48 w-auto object-contain"
                  unoptimized
                />
              </div>
              <div className="flex items-center justify-between border-t border-border px-5 py-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {banner.name}
                  </p>
                  <p className="text-xs text-muted">
                    {banner.width} &times; {banner.height}
                  </p>
                </div>
                <a
                  href={`/banners/${banner.file}`}
                  download
                  className="rounded-lg bg-neon-blue/10 px-3 py-1.5 text-xs font-medium text-neon-blue transition-colors hover:bg-neon-blue/20"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          Right-click any banner to save, or use the Download button.
          To swap creatives, replace files in{" "}
          <code className="rounded bg-card px-1.5 py-0.5 text-neon-blue">
            /public/banners/
          </code>.
        </p>
      </Section>

      {/* Copy Blocks */}
      <Section title="Swipe Copy">
        <div className="mx-auto max-w-3xl space-y-6">
          {assetsPage.copyBlocks.map((block) => (
            <CopyBlock key={block.label} label={block.label} text={block.text} />
          ))}
        </div>
      </Section>
    </>
  );
}
