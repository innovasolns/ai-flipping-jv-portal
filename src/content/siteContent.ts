export const siteConfig = {
  name: "AI Flipping V2.0",
  tagline: "Affiliate & JV Resource Portal",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aiflippingwarrior.socialnestmarketing.com",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@socialnestmarketing.com",
  affiliateLink: process.env.NEXT_PUBLIC_AFFILIATE_LINK || "https://warriorplus.com/as/o/nyk2yc",
  reviewAccessEmail: process.env.NEXT_PUBLIC_REVIEW_ACCESS_EMAIL || "support@socialnestmarketing.com",
};

export const nav = [
  { label: "Overview", href: "/" },
  { label: "Assets", href: "/assets" },
  { label: "Terms", href: "/terms" },
];

export const portalHero = {
  headline: "Promote AI Flipping V2.0",
  subheadline:
    "Everything you need to promote our high-converting offer — affiliate link, banner ads, swipe copy, funnel details, and leaderboard prizes. Grab your link and start earning.",
};

export const offerSummary = {
  productName: "AI Flipping V2.0 Masterclass",
  fePrice: "$27",
  feCommission: "50%",
  launchDate: "TBD — Check Back for Updates",
  launchTime: "11:00 AM EST",
  platform: "WarriorPlus",
  niche: "Make Money Online / AI / Digital Products",
  refundRate: "< 5%",
  conversionRate: "8-12% on cold traffic",
};

export const funnelStack = [
  { name: "FE: AI Flipping V2.0", price: "$27", commission: "50%" },
  { name: "OTO1: AI Flipping Pro", price: "$47", commission: "50%" },
  { name: "OTO2: Done-For-You Package", price: "$97", commission: "50%" },
  { name: "OTO3: Reseller License", price: "$67", commission: "50%" },
  { name: "OTO4: Coaching Upsell", price: "$197", commission: "40%" },
];

export const leaderboard = [
  { place: "1st Place", prize: "$500 Cash" },
  { place: "2nd Place", prize: "$300 Cash" },
  { place: "3rd Place", prize: "$200 Cash" },
  { place: "4th-5th Place", prize: "$100 Cash Each" },
  { place: "Top 10", prize: "$50 Cash Each" },
];

export const promoAngles = [
  "The easiest AI side hustle in 2025 — no coding, no content creation",
  "How to make your first $1K in 21 days with AI (step-by-step)",
  "Forget dropshipping — this AI method is faster and more profitable",
  "Brand-new V2.0 launch — completely overhauled system",
  "Only $27 to start — no monthly fees, no hidden costs",
];

export const complianceNotes = [
  "No income claims or guarantees in your promotions.",
  "No spam — only promote to opt-in lists and engaged audiences.",
  "No brand bidding on 'AI Flipping' or related terms without written approval.",
  "No cookie-stuffing or fraudulent traffic of any kind.",
  "All promotions must comply with WarriorPlus and FTC guidelines.",
];

export const assetsPage = {
  headline: "Affiliate Banners & Swipe Copy",
  subheadline:
    "Grab ready-made creatives and copy blocks. Right-click to save banners or use the Copy button for text.",
  bannerSizes: [
    { name: "Leaderboard", width: 728, height: 90, file: "banner-728x90.png" },
    { name: "Full Banner", width: 468, height: 60, file: "banner-468x60.png" },
    {
      name: "Medium Rectangle",
      width: 300,
      height: 250,
      file: "banner-300x250.png",
    },
    {
      name: "Wide Skyscraper",
      width: 160,
      height: 600,
      file: "banner-160x600.png",
    },
    {
      name: "Social Share",
      width: 1200,
      height: 628,
      file: "banner-1200x628.png",
    },
  ],
  copyBlocks: [
    {
      label: "Facebook Post",
      text: `🤖 Just found the easiest way to make money with AI in 2025...

No coding. No content creation. No experience needed.

It's called "AI Flipping" — you install a pre-built AI system, customize it in minutes, and flip it for profit.

Students are hitting $500-$6K in their first month.

The V2.0 Masterclass is only $27 right now (normally $97).

👉 [YOUR AFFILIATE LINK]

#AI #MakeMoneyOnline #SideHustle #AIFlipping`,
    },
    {
      label: "X / Twitter Post",
      text: `The smartest AI side hustle I've seen in 2025:

1. Install a pre-built AI system
2. Customize it (takes ~15 min)
3. Flip it on a marketplace

No coding. No audience. No content creation.

Students are making $500+ in their first week.

The full system is just $27 → [YOUR LINK]`,
    },
    {
      label: "Email Subject Lines",
      text: `Subject Line Options:
- "This AI method made $500 in 24 hours (no coding)"
- "Forget dropshipping — try AI Flipping instead"
- "The $27 system that's replacing freelancing"
- "NEW: Make your first $1K in 21 days with AI"
- "[Case Study] $6K in 32 days with zero tech skills"`,
    },
    {
      label: "Short Description",
      text: `AI Flipping V2.0 is a step-by-step masterclass that shows complete beginners how to build, customize, and sell AI-powered digital systems for profit. No coding, no content creation, no experience required. Launch price: $27 (normally $97). Includes DFY templates, traffic playbook, and 30-day guarantee.`,
    },
    {
      label: "Bonus Stack Ideas",
      text: `Bonus ideas to increase your conversions:
- Exclusive AI prompt library (100+ prompts)
- Private 1-on-1 setup call (15 min)
- Additional DFY niche templates
- Traffic cheat sheet (PDF)
- Video walkthrough of your first flip
- Access to your own mastermind group`,
    },
  ],
};

export const termsContent = {
  title: "Terms of Service",
  lastUpdated: "February 2025",
  sections: [
    {
      heading: "1. Acceptance of Terms",
      body: 'By accessing and using AI Flipping V2.0 (the "Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.',
    },
    {
      heading: "2. Description of Service",
      body: "AI Flipping V2.0 provides digital training materials, templates, and tools related to building and selling AI-powered digital products. The Service is delivered digitally and accessed through our member portal.",
    },
    {
      heading: "3. Purchase and Refund Policy",
      body: "All purchases are processed through WarriorPlus. We offer a 30-day money-back guarantee. To request a refund, contact our support team at the email provided. Refunds are processed within 5-7 business days.",
    },
    {
      heading: "4. Earnings Disclaimer",
      body: "Results vary. The income examples shown are not guarantees of earnings. Your results depend on your effort, experience, and market conditions. We make no representations about expected income from using this system.",
    },
    {
      heading: "5. Intellectual Property",
      body: "All content, templates, and materials provided through the Service are owned by Social Nest Marketing. You are granted a personal, non-transferable license to use these materials for your own business. Redistribution of course materials is prohibited unless you hold a Reseller License.",
    },
    {
      heading: "6. User Conduct",
      body: "You agree not to: share login credentials, redistribute course content without authorization, use the Service for any unlawful purpose, or misrepresent your affiliation with our brand.",
    },
    {
      heading: "7. Limitation of Liability",
      body: "To the maximum extent permitted by law, Social Nest Marketing shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.",
    },
    {
      heading: "8. Changes to Terms",
      body: "We reserve the right to update these Terms at any time. Continued use of the Service after changes constitutes acceptance of the new Terms.",
    },
    {
      heading: "9. Contact",
      body: "For questions about these Terms, contact us at support@socialnestmarketing.com.",
    },
  ],
};

export const privacyContent = {
  title: "Privacy Policy",
  lastUpdated: "February 2025",
  sections: [
    {
      heading: "1. Information We Collect",
      body: "We collect information you provide directly: name, email address, and payment details (processed by WarriorPlus). We also collect usage data such as pages visited, time on site, and device information via analytics tools.",
    },
    {
      heading: "2. How We Use Your Information",
      body: "We use your information to: deliver the purchased training, send important account updates, provide customer support, improve our products and services, and send marketing communications (with your consent).",
    },
    {
      heading: "3. Data Sharing",
      body: "We do not sell your personal information. We may share data with: payment processors (WarriorPlus), email service providers for communication, and analytics tools to improve our service. All third parties are bound by data protection agreements.",
    },
    {
      heading: "4. Cookies and Tracking",
      body: "We use cookies and similar technologies for analytics, affiliate tracking, and to remember your preferences. You can control cookies through your browser settings.",
    },
    {
      heading: "5. Data Security",
      body: "We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
    },
    {
      heading: "6. Your Rights",
      body: "You have the right to: access your personal data, request correction of inaccurate data, request deletion of your data, opt out of marketing communications, and lodge a complaint with a supervisory authority.",
    },
    {
      heading: "7. Data Retention",
      body: "We retain your data for as long as necessary to provide the Service and comply with legal obligations. You may request deletion at any time by contacting support.",
    },
    {
      heading: "8. Children's Privacy",
      body: "The Service is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.",
    },
    {
      heading: "9. Changes to This Policy",
      body: "We may update this Privacy Policy periodically. We will notify you of significant changes via email or through the Service.",
    },
    {
      heading: "10. Contact",
      body: "For privacy-related questions, contact us at support@socialnestmarketing.com.",
    },
  ],
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} Social Nest Marketing. All rights reserved.`,
  disclaimer:
    "This site is not a part of Google, Facebook, or any social media platform. Results vary and depend on individual effort.",
};
