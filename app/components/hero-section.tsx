"use client";

import { heroSubtitle, site } from "@/lib/portfolio-data";
import { GitHubGlow } from "./github-glow";

export function HeroSection() {
  const words = site.name.split(" ");

  return (
    <header id="home" className="relative scroll-mt-28 pt-4">
      <div className="mb-8 flex justify-end sm:absolute sm:top-0 sm:right-0 sm:mb-0">
        <GitHubGlow />
      </div>

      <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block animate-hero-word"
            style={{ animationDelay: `${i * 65}ms` }}
          >
            {word}
            {i < words.length - 1 ? "\u00a0" : ""}
          </span>
        ))}
      </h1>

      <p
        className="mt-4 max-w-2xl animate-fade-up text-base leading-relaxed text-zinc-700 sm:text-lg dark:text-zinc-300"
        style={{ animationDelay: "180ms" }}
      >
        {heroSubtitle}
      </p>

      <p
        className="mt-3 animate-fade-up font-mono text-xs text-zinc-500"
        style={{ animationDelay: "280ms" }}
      >
        {site.location}
      </p>
    </header>
  );
}
