import type { ReactNode } from "react";
import { ContactSection } from "./components/contact-section";
import { ExperienceList } from "./components/experience-list";
import { HeroSection } from "./components/hero-section";
import { ProjectGrid } from "./components/project-grid";
import { Reveal } from "./components/reveal";
import { aboutText, experience, projects } from "@/lib/portfolio-data";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 font-mono text-xs tracking-[0.18em] text-red-600 uppercase dark:text-red-500/90">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fafafa] dark:bg-[#0a0a0a]">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.15),rgba(255,255,255,0))]"
        aria-hidden
      />
      <div className="canvas-grid pointer-events-none fixed inset-0" aria-hidden />

      <main className="relative z-10 mx-auto max-w-4xl px-6 py-14 pb-36">
        <HeroSection />

        <Reveal>
          <section className="mt-16">
            <SectionLabel>About</SectionLabel>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-700 sm:text-base dark:text-zinc-300">
              {aboutText}
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section id="experience" className="mt-16 scroll-mt-28">
            <SectionLabel>Experience</SectionLabel>
            <h2 className="mb-4 text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Work
            </h2>
            <ExperienceList items={experience} />
          </section>
        </Reveal>

        <Reveal>
          <section id="projects" className="mt-16 scroll-mt-28">
            <SectionLabel>Projects</SectionLabel>
            <h2 className="mb-4 text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Selected builds
            </h2>
            <ProjectGrid projects={projects} />
          </section>
        </Reveal>

        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
    </div>
  );
}
