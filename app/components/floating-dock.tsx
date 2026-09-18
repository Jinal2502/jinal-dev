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
    "group relative flex h-9 w-9 items-center justify-center rounded-xl text-zinc-500 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-red-500/15 dark:hover:text-red-400";

  const tooltip = (
    <span
      className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg border border-zinc-200 bg-white px-2 py-1 font-mono text-[10px] font-medium text-zinc-800 opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:shadow-lg"
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

const iconClass = "h-[18px] w-[18px]";

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
      className="fixed bottom-6 left-1/2 z-50 flex w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center justify-center gap-2 rounded-full border border-zinc-200/80 bg-white/85 px-4 py-2 shadow-xl backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/85"
      aria-label="Site"
    >
      <div className="animate-dock-rise flex items-center justify-center gap-1.5">
        <DockItem label="Home" onClick={() => scrollToId("home")}>
          <IconHome className={iconClass} />
        </DockItem>
        <DockItem label="Experience" onClick={() => scrollToId("experience")}>
          <IconBriefcase className={iconClass} />
        </DockItem>
        <DockItem label="Projects" onClick={() => scrollToId("projects")}>
          <IconProjects className={iconClass} />
        </DockItem>

        <span className="mx-0.5 h-5 w-px bg-zinc-200 dark:bg-zinc-800" aria-hidden />

        <DockItem label="GitHub" href={site.github}>
          <IconGitHub className={iconClass} />
        </DockItem>
        <DockItem label="LinkedIn" href={site.linkedin}>
          <IconLinkedIn className={iconClass} />
        </DockItem>

        <span className="mx-0.5 h-5 w-px bg-zinc-200 dark:bg-zinc-800" aria-hidden />

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
