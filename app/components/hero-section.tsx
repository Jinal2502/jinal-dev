"use client";

import { heroSubtitle, site } from "@/lib/portfolio-data";
import { GitHubGlow } from "./github-glow";

export function HeroSection() {
  const words = site.name.split(" ");

  return (
    <header id="home" className="relative scroll-mt-24 sm:scroll-mt-28">
      <div className="mb-6 flex justify-start sm:absolute sm:top-0 sm:right-0 sm:mb-0 sm:justify-end">
        <GitHubGlow />
      </div>

      <h1 className="text-[1.75rem] leading-tight font-extrabold tracking-tight text-balance text-zinc-900 min-[400px]:text-3xl sm:max-w-[calc(100%-11rem)] sm:text-4xl sm:leading-tight md:text-5xl dark:text-white">
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
        className="mt-3 max-w-2xl animate-fade-up text-pretty text-sm leading-relaxed text-zinc-700 sm:mt-4 sm:text-base md:text-lg dark:text-zinc-300"
        style={{ animationDelay: "180ms" }}
      >
        {heroSubtitle}
      </p>

      <p
        className="mt-2 animate-fade-up font-mono text-xs text-zinc-500 sm:mt-3"
        style={{ animationDelay: "280ms" }}
      >
        {site.location}
      </p>
    </header>
  );
}
