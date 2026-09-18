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
    <div className="ml-2 space-y-10 border-l border-zinc-200 pl-4 min-[400px]:ml-3 min-[400px]:space-y-12 min-[400px]:pl-6 dark:border-zinc-800">
      {items.map((item, index) => (
        <Reveal key={`${item.company}-${item.period}`} delayMs={index * 60}>
          <article className="relative">
            <span
              className="absolute top-1.5 -left-[21px] h-2.5 w-2.5 rounded-full bg-red-500 ring-4 ring-[#fafafa] min-[400px]:-left-[29px] dark:ring-[#0a0a0a]"
              aria-hidden
            />

            <div className="flex flex-col gap-1.5 gap-y-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="min-w-0 pr-1">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold leading-tight text-pretty text-zinc-900 transition-colors hover:text-red-600 min-[400px]:text-lg min-[400px]:leading-none dark:text-white dark:hover:text-red-400"
                  >
                    {item.company}
                  </a>
                ) : (
                  <h3 className="text-base font-bold leading-tight text-pretty text-zinc-900 min-[400px]:text-lg min-[400px]:leading-none dark:text-white">
                    {item.company}
                  </h3>
                )}
                <p className="mt-1 text-sm text-pretty text-zinc-600 dark:text-zinc-400">
                  {item.role}
                </p>
              </div>
              <span
                className="shrink-0 font-mono text-[11px] tabular-nums text-zinc-500 min-[400px]:text-xs dark:text-zinc-400"
              >
                {item.period}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-200/60 bg-zinc-100 px-2 py-0.5 font-mono text-[10px] font-medium text-zinc-700 min-[400px]:text-[11px] dark:border-zinc-700/50 dark:bg-zinc-800/80 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-4 list-none space-y-2.5 pl-0">
              {item.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-sm leading-relaxed text-pretty text-zinc-700 dark:text-zinc-300"
                >
                  {highlightMetrics(bullet)}
                </li>
              ))}
            </ul>

            {item.metrics.length > 0 && (
              <div
                className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-zinc-100 pt-3 min-[480px]:flex min-[480px]:flex-wrap min-[480px]:items-center min-[480px]:gap-x-6 min-[480px]:gap-y-3 sm:gap-x-8 dark:border-zinc-800"
              >
                {item.metrics.map((metric, metricIndex) => (
                  <div
                    key={metric.label}
                    className={
                      metricIndex > 0
                        ? "min-[480px]:border-l min-[480px]:border-zinc-200 min-[480px]:pl-6 sm:min-[480px]:pl-8 dark:min-[480px]:border-zinc-800"
                        : undefined
                    }
                  >
                    <span
                      className="block text-sm font-bold font-mono text-zinc-900 min-[400px]:text-base dark:text-zinc-100"
                    >
                      {metric.value}
                    </span>
                    <span
                      className="mt-0.5 block text-[10px] font-medium tracking-wide text-pretty text-zinc-500 uppercase min-[400px]:text-[11px]"
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
