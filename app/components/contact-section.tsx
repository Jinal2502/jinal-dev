import { site } from "@/lib/portfolio-data";
import { IconSend } from "./icons";

const bookChatHref =
  site.calLink ??
  `mailto:${site.email}?subject=${encodeURIComponent("Book a chat")}`;

const secondaryBtn =
  "inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 min-[480px]:w-auto dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mt-12 scroll-mt-24 sm:mt-16 sm:scroll-mt-28"
    >
      <div
        className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] min-[400px]:p-6 sm:p-8 dark:border-zinc-800/80 dark:bg-zinc-950/60 dark:shadow-none"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_20%_0%,rgba(220,38,38,0.08),transparent_50%),radial-gradient(ellipse_60%_60%_at_100%_100%,rgba(220,38,38,0.05),transparent)] dark:bg-[radial-gradient(ellipse_70%_80%_at_20%_0%,rgba(220,38,38,0.14),transparent_50%),radial-gradient(ellipse_60%_60%_at_100%_100%,rgba(220,38,38,0.08),transparent)]"
          aria-hidden
        />

        <div className="relative">
          <span
            className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2 py-0.5 font-mono text-[10px] font-medium text-red-600 min-[400px]:px-2.5 min-[400px]:text-[11px] dark:border-red-800 dark:bg-red-950/40 dark:text-red-400"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" aria-hidden />
            <span className="truncate">OPEN TO OPPORTUNITIES</span>
          </span>

          <h2 className="mt-3 text-pretty text-xl font-bold tracking-tight text-zinc-900 min-[400px]:mt-4 min-[400px]:text-2xl sm:text-3xl dark:text-white">
            Let&apos;s build something ambitious.
          </h2>

          <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-zinc-700 min-[400px]:mt-3 sm:text-base dark:text-zinc-400">
            Have an ambitious{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-200">
              0→1 build
            </span>
            , high-scale engineering role, or early-stage product challenge? My
            inbox is always open.
          </p>

          <div className="mt-5 flex flex-col gap-2.5 min-[480px]:mt-6 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center min-[480px]:gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90 min-[480px]:w-auto dark:bg-white dark:text-zinc-900"
            >
              <IconSend className="h-4 w-4 shrink-0" />
              Say Hello
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryBtn}
            >
              LinkedIn ↗
            </a>
            <a href={bookChatHref} className={secondaryBtn}>
              <span className="min-[400px]:hidden">Book a Chat ↗</span>
              <span className="hidden min-[400px]:inline">Book a Chat / Cal ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
