"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!finePointer || reducedMotion) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    let ringX = 0;
    let ringY = 0;
    let targetX = 0;
    let targetY = 0;
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });
    };

    const tick = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      setRing({ x: ringX, y: ringY });
      frame = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest(
        "a, button, [role='button'], input, textarea, select, label",
      );
      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(frame);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
        }}
        aria-hidden
      >
        <div
          className={`rounded-full bg-white transition-all duration-200 ${
            hovering ? "h-2 w-2 opacity-100" : "h-1.5 w-1.5 opacity-90"
          }`}
        />
      </div>
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          transform: `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)`,
        }}
        aria-hidden
      >
        <div
          className={`rounded-full border border-neutral-900/25 transition-all duration-300 dark:border-white/35 ${
            hovering ? "h-10 w-10 opacity-70" : "h-7 w-7 opacity-40"
          }`}
        />
      </div>
    </>
  );
}
