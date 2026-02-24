"use client";

import { useState } from "react";

interface CopyBlockProps {
  label: string;
  text: string;
}

export function CopyBlock({ label, text }: CopyBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        <button
          onClick={handleCopy}
          className="rounded-lg bg-neon-blue/10 px-3 py-1.5 text-xs font-medium text-neon-blue transition-colors hover:bg-neon-blue/20"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="whitespace-pre-wrap p-5 text-sm leading-relaxed text-muted">
        {text}
      </pre>
    </div>
  );
}
