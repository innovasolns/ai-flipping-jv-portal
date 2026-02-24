"use client";

import { useState } from "react";

export function ReviewAccessForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    promoMethod: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/review-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", promoMethod: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-neon-green/30 bg-neon-green/5 p-8 text-center">
        <div className="mb-3 text-4xl">✅</div>
        <h3
          className="mb-2 text-xl font-bold text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Request Submitted!
        </h3>
        <p className="text-sm text-muted">
          We&apos;ll review your application and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-8"
    >
      <h3
        className="mb-6 text-xl font-bold text-foreground"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Request Review Access
      </h3>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-neon-blue/50 focus:outline-none focus:ring-1 focus:ring-neon-blue/50"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-neon-blue/50 focus:outline-none focus:ring-1 focus:ring-neon-blue/50"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="promoMethod" className="mb-1.5 block text-sm font-medium text-foreground">
            How Will You Promote?
          </label>
          <select
            id="promoMethod"
            required
            value={formData.promoMethod}
            onChange={(e) => setFormData({ ...formData, promoMethod: e.target.value })}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-neon-blue/50 focus:outline-none focus:ring-1 focus:ring-neon-blue/50"
          >
            <option value="">Select a method...</option>
            <option value="email">Email List</option>
            <option value="social">Social Media</option>
            <option value="youtube">YouTube</option>
            <option value="blog">Blog / Website</option>
            <option value="paid">Paid Ads</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "loading" ? "Submitting..." : "Submit Request"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
