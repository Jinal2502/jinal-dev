"use client";

import { site } from "@/lib/portfolio-data";

export function GitHubGlow() {
  return (
    <a
      href={site.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex max-w-full animate-fade-in-right items-center gap-1.5 rounded-full border border-red-500/25 bg-red-50 px-2.5 py-1 font-mono text-[10px] text-red-600 backdrop-blur-sm transition-colors hover:border-red-500/40 hover:bg-red-100 min-[400px]:gap-2 min-[400px]:px-3 min-[400px]:text-xs dark:border-red-500/20 dark:bg-red-950/30 dark:text-red-400 dark:hover:bg-red-950/50 dark:hover:text-red-300"
      aria-label="GitHub profile — available for builds"
    >
      <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"
        />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
      </span>
      <span className="truncate min-[400px]:truncate-none">
        <span className="min-[480px]:hidden">GitHub</span>
        <span className="hidden min-[480px]:inline">Available for builds / GitHub</span>
      </span>
    </a>
  );
}
