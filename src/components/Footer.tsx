import Link from "next/link";
import { nav, siteConfig, footer } from "@/content/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link
              href="/"
              className="text-lg font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="gradient-text">{siteConfig.name}</span>
            </Link>
            <p className="mt-3 text-sm text-muted">{siteConfig.tagline}</p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              Navigation
            </h4>
            <ul className="space-y-2">
              {nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 transition-colors hover:text-neon-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="text-sm text-foreground/70 transition-colors hover:text-neon-blue"
                >
                  {siteConfig.supportEmail}
                </a>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-foreground/70 transition-colors hover:text-neon-blue"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-foreground/70 transition-colors hover:text-neon-blue"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs text-muted">{footer.copyright}</p>
          <p className="mt-2 text-center text-xs text-muted/60">
            {footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
