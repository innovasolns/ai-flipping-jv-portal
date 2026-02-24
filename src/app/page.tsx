import Link from "next/link";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { ReviewAccessForm } from "@/components/ReviewAccessForm";
import {
  siteConfig,
  portalHero,
  offerSummary,
  funnelStack,
  leaderboard,
  promoAngles,
  complianceNotes,
} from "@/content/siteContent";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-8 pt-20 sm:px-6 sm:pt-28 lg:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.08),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,212,255,0.06),transparent_60%)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-purple/20 bg-neon-purple/5 px-4 py-1.5 text-sm font-medium text-neon-purple">
            <span className="h-2 w-2 rounded-full bg-neon-green animate-pulse" />
            Affiliate & JV Resource Portal
          </div>

          <h1
            className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="gradient-text">{portalHero.headline}</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {portalHero.subheadline}
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton href={siteConfig.affiliateLink} external>
              Get Your Affiliate Link
            </CTAButton>
            <CTAButton href="/assets" variant="secondary">
              Browse Ad Creatives
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <div className="border-y border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-5 sm:flex-row sm:justify-center sm:gap-8 sm:px-6">
          <QuickStat label="FE Price" value={offerSummary.fePrice} />
          <QuickStat label="FE Commission" value={offerSummary.feCommission} />
          <QuickStat label="Platform" value={offerSummary.platform} />
          <QuickStat label="Conversion" value={offerSummary.conversionRate} />
          <QuickStat label="Refund Rate" value={offerSummary.refundRate} />
        </div>
      </div>

      {/* Offer Summary */}
      <Section title="Offer Details" dark>
        <div className="mx-auto max-w-2xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(offerSummary).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4"
              >
                <span className="text-sm font-medium capitalize text-muted">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </span>
                <span className="text-sm font-bold text-foreground">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Funnel Stack */}
      <Section title="Funnel Stack & Commissions">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border">
          <div className="hidden grid-cols-3 border-b border-border bg-card px-6 py-3 sm:grid">
            <span className="text-sm font-semibold text-muted">Product</span>
            <span className="text-center text-sm font-semibold text-muted">
              Price
            </span>
            <span className="text-right text-sm font-semibold text-muted">
              Commission
            </span>
          </div>
          {funnelStack.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 gap-2 px-6 py-4 sm:grid-cols-3 sm:gap-0 ${
                i % 2 === 0 ? "bg-surface" : "bg-card"
              }`}
            >
              <span className="text-sm font-semibold text-foreground">
                {item.name}
              </span>
              <span className="text-sm text-muted sm:text-center">
                {item.price}
              </span>
              <span className="text-sm font-bold text-neon-green sm:text-right">
                {item.commission}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Leaderboard Contest */}
      <Section title="Leaderboard Contest" dark>
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {leaderboard.map((prize, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 text-center transition-all duration-300 hover:scale-[1.02] ${
                i === 0
                  ? "border-warning/40 bg-warning/5"
                  : "border-border bg-card"
              }`}
            >
              <div
                className="mb-2 text-2xl font-extrabold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <span className={i === 0 ? "text-warning" : "gradient-text"}>
                  {prize.place}
                </span>
              </div>
              <p className="text-lg font-bold text-foreground">{prize.prize}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Promo Angles */}
      <Section title="Promo Angles That Convert">
        <div className="mx-auto max-w-3xl space-y-3">
          {promoAngles.map((angle, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4"
            >
              <span className="mt-0.5 text-neon-blue">💡</span>
              <p className="text-sm text-foreground/80">{angle}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Ad Creatives CTA */}
      <Section dark>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="mb-3 text-2xl font-bold sm:text-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="gradient-text">Ready-Made Ad Creatives</span>
          </h2>
          <p className="mb-6 text-muted">
            Grab banner ads in all standard sizes, plus swipe copy for Facebook,
            X, email, and more.
          </p>
          <Link
            href="/assets"
            className="inline-flex items-center gap-2 rounded-xl border border-neon-blue/40 px-8 py-4 text-base font-semibold text-neon-blue transition-all hover:bg-neon-blue/10 hover:border-neon-blue/60"
          >
            View All Banners &amp; Swipe Copy
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </Section>

      {/* Review Access Form */}
      <Section>
        <div className="mx-auto max-w-lg">
          <ReviewAccessForm />
        </div>
      </Section>

      {/* Compliance */}
      <Section title="Compliance Guidelines" dark>
        <div className="mx-auto max-w-3xl rounded-2xl border border-warning/30 bg-warning/5 p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xl">⚠️</span>
            <h3
              className="text-base font-bold text-warning"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Affiliate Compliance — Please Read
            </h3>
          </div>
          <ul className="space-y-2">
            {complianceNotes.map((note, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />
                <span className="text-sm text-foreground/70">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="mb-4 text-3xl font-bold sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="gradient-text">Ready to Promote?</span>
          </h2>
          <p className="mb-8 text-lg text-muted">
            Grab your affiliate link and start earning commissions today.
          </p>
          <CTAButton href={siteConfig.affiliateLink} external>
            Get Your Affiliate Link
          </CTAButton>
        </div>
      </section>
    </>
  );
}

function QuickStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="font-medium text-muted">{label}:</span>
      <span className="font-bold text-foreground">{value}</span>
    </div>
  );
}
