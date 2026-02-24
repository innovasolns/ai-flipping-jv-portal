"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, siteConfig } from "@/content/siteContent";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="glass sticky top-0 z-50 border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight sm:text-xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="gradient-text">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-neon-blue ${
                pathname === link.href ? "text-neon-blue" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get Affiliate Link
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${
              mobileOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${
              mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-card ${
                  pathname === link.href ? "text-neon-blue" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Get Affiliate Link
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
