import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { privacyContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for AI Flipping V2.0 by Social Nest Marketing.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1
          className="mb-2 text-3xl font-bold sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {privacyContent.title}
        </h1>
        <p className="mb-10 text-sm text-muted">
          Last updated: {privacyContent.lastUpdated}
        </p>

        <div className="space-y-8">
          {privacyContent.sections.map((section) => (
            <div key={section.heading}>
              <h2
                className="mb-3 text-lg font-bold text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {section.heading}
              </h2>
              <p className="text-sm leading-relaxed text-muted">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
