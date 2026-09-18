"use client";

import { site } from "@/lib/portfolio-data";

export function GitHubGlow() {
  return (
    <a
      href={site.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex animate-fade-in-right items-center gap-2 rounded-full border border-red-500/25 bg-red-50 px-3 py-1 font-mono text-xs text-red-600 backdrop-blur-sm transition-colors hover:border-red-500/40 hover:bg-red-100 dark:border-red-500/20 dark:bg-red-950/30 dark:text-red-400 dark:hover:bg-red-950/50 dark:hover:text-red-300"
      aria-label="GitHub profile — available for builds"
    >
      <span className="relative flex h-2 w-2" aria-hidden>
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"
        />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
      </span>
      Available for builds / GitHub
    </a>
  );
}
