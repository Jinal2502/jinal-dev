"use client";

import type { Project } from "@/lib/portfolio-data";
import { IconArrowUpRight } from "./icons";

type ProjectGridProps = {
  projects: Project[];
};

const cardClass =
  "group relative flex flex-col rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-950/60 dark:shadow-none dark:hover:border-red-500/50 dark:hover:shadow-[0_0_30px_-10px_rgba(239,68,68,0.2)]";

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.title}
          className={`${cardClass} ${
            project.bento === "wide" ? "md:col-span-2" : ""
          } ${project.bento === "tall" ? "md:row-span-2" : ""}`}
        >
          <div className="mb-4 flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
              {project.title}
            </h3>
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 font-mono text-[11px] text-zinc-600 transition-all group-hover:border-red-500/30 group-hover:text-red-600 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400 dark:group-hover:text-red-400"
                aria-label={`${project.hrefLabel ?? "Open"} — ${project.title}`}
              >
                {project.hrefLabel ?? "Open"}
                <IconArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ) : (
              <span className="shrink-0 font-mono text-[11px] text-zinc-500">
                {project.hrefLabel}
              </span>
            )}
          </div>

          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>

          <ul className="mt-4 flex-1 space-y-2">
            {project.highlights.map((line) => (
              <li
                key={line}
                className="text-sm leading-relaxed text-zinc-700 before:mr-2 before:text-red-500/80 before:content-['→'] dark:text-zinc-300 dark:before:text-red-500/70"
              >
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[11px] text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
