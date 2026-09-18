"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  IconBriefcase,
  IconGitHub,
  IconHome,
  IconLinkedIn,
  IconMoon,
  IconProjects,
  IconSun,
} from "./icons";
import { site } from "@/lib/portfolio-data";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type DockItemProps = {
  label: string;
  children: ReactNode;
  onClick?: () => void;
  href?: string;
};

function DockItem({ label, children, onClick, href }: DockItemProps) {
  const className =
    "group relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-zinc-500 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-900 min-[400px]:h-9 min-[400px]:w-9 min-[400px]:rounded-xl dark:text-zinc-400 dark:hover:bg-red-500/15 dark:hover:text-red-400";

  const tooltip = (
    <span
      className="pointer-events-none absolute -top-9 left-1/2 z-10 hidden -translate-x-1/2 whitespace-nowrap rounded-lg border border-zinc-200 bg-white px-2 py-1 font-mono text-[10px] font-medium text-zinc-800 opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 min-[768px]:block dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:shadow-lg"
      role="tooltip"
    >
      {label}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={label}
      >
        {tooltip}
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className} aria-label={label} onClick={onClick}>
      {tooltip}
      {children}
    </button>
  );
}

const iconClass = "h-4 w-4 min-[400px]:h-[18px] min-[400px]:w-[18px]";

export function FloatingDock() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark";
    setDark(isDark);
    root.classList.toggle("dark", isDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-50 flex w-max max-w-[calc(100vw-1rem)] -translate-x-1/2 items-center justify-center gap-1.5 rounded-full border border-zinc-200/80 bg-white/85 px-2.5 py-1.5 shadow-xl backdrop-blur-md min-[400px]:bottom-6 min-[400px]:max-w-[calc(100vw-2rem)] min-[400px]:gap-2 min-[400px]:px-4 min-[400px]:py-2 dark:border-zinc-800/80 dark:bg-zinc-900/85"
      style={{ paddingBottom: "max(0.375rem, env(safe-area-inset-bottom, 0px))" }}
      aria-label="Site"
    >
      <div className="animate-dock-rise flex max-w-full items-center justify-center gap-0.5 min-[400px]:gap-1.5">
        <DockItem label="Home" onClick={() => scrollToId("home")}>
          <IconHome className={iconClass} />
        </DockItem>
        <DockItem label="Experience" onClick={() => scrollToId("experience")}>
          <IconBriefcase className={iconClass} />
        </DockItem>
        <DockItem label="Projects" onClick={() => scrollToId("projects")}>
          <IconProjects className={iconClass} />
        </DockItem>

        <span
          className="mx-0.5 hidden h-4 w-px bg-zinc-200 min-[360px]:block min-[400px]:h-5 dark:bg-zinc-800"
          aria-hidden
        />

        <DockItem label="GitHub" href={site.github}>
          <IconGitHub className={iconClass} />
        </DockItem>
        <DockItem label="LinkedIn" href={site.linkedin}>
          <IconLinkedIn className={iconClass} />
        </DockItem>

        <span
          className="mx-0.5 hidden h-4 w-px bg-zinc-200 min-[360px]:block min-[400px]:h-5 dark:bg-zinc-800"
          aria-hidden
        />

        <DockItem label={dark ? "Light mode" : "Dark mode"} onClick={toggleTheme}>
          {dark ? (
            <IconSun className={iconClass} />
          ) : (
            <IconMoon className={iconClass} />
          )}
        </DockItem>
      </div>
    </nav>
  );
}
