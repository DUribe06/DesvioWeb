"use client";

import { useState, FormEvent } from "react";

export default function Drop001() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email.trim()) {
      setStatus("error");
      setErrorMessage("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email");
      return;
    }

    setStatus("loading");

    // Submit to Netlify Forms via fetch
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          form_name: "drop001",
          email: email,
        }),
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Try again later.");
    }
  };

  return (
    <section
      id="drop-001"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-desvio-black via-desvio-red/5 to-desvio-black" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Section label */}
        <p className="font-body text-xs tracking-[0.3em] uppercase text-desvio-red mb-4">
          Limited Release
        </p>

        {/* Drop number */}
        <h2 className="font-headline text-7xl md:text-8xl lg:text-9xl font-bold text-desvio-white mb-2">
          DROP
        </h2>
        <h2 className="font-headline text-7xl md:text-8xl lg:text-9xl font-bold text-desvio-red mb-8">
          001
        </h2>

        {/* Description */}
        <p className="font-body text-desvio-concrete text-lg md:text-xl leading-relaxed mb-12 max-w-lg mx-auto">
          Our first drop. Limited pieces. No restocks.
          <br />
          Subscribe to get early access before it sells out.
        </p>

        {/* Email form — Netlify Forms */}
        <form
          name="drop001"
          {...({ netlify: true, "netlify-honeypot": "bot-field" } as any)}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input type="hidden" name="form-name" value="drop001" />
          <input type="hidden" name="bot-field" />

          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="your@email.com"
            disabled={status === "loading"}
            className="flex-1 font-body bg-desvio-white/5 border border-desvio-white/20 px-5 py-4 text-desvio-white placeholder-desvio-concrete/40 focus:outline-none focus:border-desvio-red transition-colors disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="font-body text-sm tracking-[0.2em] uppercase px-8 py-4 bg-desvio-red text-desvio-white hover:bg-desvio-white hover:text-desvio-black transition-all duration-300 border-2 border-desvio-red disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>

        {/* Status messages */}
        {status === "success" && (
          <p className="mt-6 font-body text-sm text-desvio-red tracking-wide">
            ✓ You&apos;re in. We&apos;ll notify you when Drop 001 drops.
          </p>
        )}
        {status === "error" && errorMessage && (
          <p className="mt-6 font-body text-sm text-desvio-concrete tracking-wide">
            {errorMessage}
          </p>
        )}

        {/* Fine print */}
        <p className="mt-8 font-body text-xs text-desvio-concrete/30">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
