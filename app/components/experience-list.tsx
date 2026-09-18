"use client";

import type { Experience } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";

type ExperienceListProps = {
  items: Experience[];
};

function highlightMetrics(text: string) {
  const parts = text.split(
    /(\d+%|\d+\+?|₹[\d.]+L\+?|10\+|90%|25L)/gi,
  );
  return parts.map((part, i) => {
    if (!part) return null;
    const isMetric = /^\d+%?\+?$|^₹|^90%$|^10\+$/i.test(part);
    return isMetric ? (
      <strong
        key={`${part}-${i}`}
        className="font-semibold text-zinc-900 dark:text-zinc-100"
      >
        {part}
      </strong>
    ) : (
      <span key={`${part}-${i}`}>{part}</span>
    );
  });
}

export function ExperienceList({ items }: ExperienceListProps) {
  return (
    <div className="ml-3 space-y-12 border-l border-zinc-200 pl-6 dark:border-zinc-800">
      {items.map((item, index) => (
        <Reveal key={`${item.company}-${item.period}`} delayMs={index * 60}>
          <article className="relative">
            <span
              className="absolute top-1.5 -left-[29px] h-2.5 w-2.5 rounded-full bg-red-500 ring-4 ring-[#fafafa] dark:ring-black"
              aria-hidden
            />

            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="min-w-0">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold leading-none text-zinc-900 transition-colors hover:text-red-600 dark:text-white dark:hover:text-red-400"
                  >
                    {item.company}
                  </a>
                ) : (
                  <h3 className="text-lg font-bold leading-none text-zinc-900 dark:text-white">
                    {item.company}
                  </h3>
                )}
                <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.role}
                </p>
              </div>
              <span
                className="shrink-0 font-mono text-xs tabular-nums text-zinc-500 dark:text-zinc-400"
              >
                {item.period}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-200/60 bg-zinc-100 px-2 py-0.5 font-mono text-[11px] font-medium text-zinc-700 dark:border-zinc-700/50 dark:bg-zinc-800/80 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-4 list-none space-y-2.5 pl-0">
              {item.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
                >
                  {highlightMetrics(bullet)}
                </li>
              ))}
            </ul>

            {item.metrics.length > 0 && (
              <div
                className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-zinc-100 pt-3 dark:border-zinc-800"
              >
                {item.metrics.map((metric, metricIndex) => (
                  <div
                    key={metric.label}
                    className={
                      metricIndex > 0
                        ? "border-l border-zinc-200 pl-8 dark:border-zinc-800"
                        : undefined
                    }
                  >
                    <span
                      className="block text-base font-bold font-mono text-zinc-900 dark:text-zinc-100"
                    >
                      {metric.value}
                    </span>
                    <span
                      className="mt-0.5 block text-[11px] font-medium tracking-wide text-zinc-500 uppercase"
                    >
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </article>
        </Reveal>
      ))}
    </div>
  );
}
