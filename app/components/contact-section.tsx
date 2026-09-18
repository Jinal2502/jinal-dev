import { site } from "@/lib/portfolio-data";
import { IconSend } from "./icons";

const bookChatHref =
  site.calLink ??
  `mailto:${site.email}?subject=${encodeURIComponent("Book a chat")}`;

export function ContactSection() {
  return (
    <section id="contact" className="mt-16 scroll-mt-28">
      <div
        className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] sm:p-8 dark:border-zinc-800/80 dark:bg-zinc-950/60 dark:shadow-none"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_20%_0%,rgba(220,38,38,0.08),transparent_50%),radial-gradient(ellipse_60%_60%_at_100%_100%,rgba(220,38,38,0.05),transparent)] dark:bg-[radial-gradient(ellipse_70%_80%_at_20%_0%,rgba(220,38,38,0.14),transparent_50%),radial-gradient(ellipse_60%_60%_at_100%_100%,rgba(220,38,38,0.08),transparent)]"
          aria-hidden
        />

        <div className="relative">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 font-mono text-[11px] font-medium text-red-600 dark:border-red-800 dark:bg-red-950/40 dark:text-red-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" aria-hidden />
            OPEN TO OPPORTUNITIES
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
            Let&apos;s build something ambitious.
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-700 sm:text-base dark:text-zinc-400">
            Have an ambitious{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-200">
              0→1 build
            </span>
            , high-scale engineering role, or early-stage product challenge? My
            inbox is always open.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-zinc-900"
            >
              <IconSend className="h-4 w-4" />
              Say Hello
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              LinkedIn ↗
            </a>
            <a
              href={bookChatHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Book a Chat / Cal ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
