export type Experience = {
  company: string;
  role: string;
  period: string;
  href?: string;
  logoLabel: string;
  logoClassName?: string;
  stack: string[];
  bullets: string[];
  metrics: { label: string; value: string }[];
};

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  href?: string;
  hrefLabel?: string;
  bento?: "wide" | "tall";
};

export const site = {
  name: "Jinalkumar Rathva",
  location: "Ahmedabad, India",
  email: "25bce511@nirmauni.ac.in",
  github: "https://github.com/Jinal2502",
  linkedin: "https://linkedin.com/in/jinal-rathva-370bb1269",
  /** Set to your Cal.com (or similar) URL; falls back to mailto when omitted */
  calLink: undefined as string | undefined,
};

export const heroSubtitle =
  "Full-Stack Engineer building resilient production systems, high-concurrency SaaS, and AI workflows.";

export const aboutText =
  "Computer Science engineer specializing in full-stack architecture, API performance, and zero-to-one product shipping. I bridge frontend precision with scalable distributed backends — building everything from AI assessment engines and agritech infrastructure to multi-role academic platforms.";

export const experience: Experience[] = [
  {
    company: "Guidopia",
    role: "Founding Full Stack Engineer & Tech Lead",
    period: "2024 — Present",
    href: "https://www.guidopia.com",
    logoLabel: "G",
    logoClassName: "bg-violet-600 text-white text-xs font-semibold",
    stack: ["React", "Node.js", "Express", "MongoDB", "OpenAI"],
    metrics: [
      { label: "Active users", value: "500+" },
      { label: "Institutions", value: "5" },
      { label: "Revenue", value: "₹25L+" },
      { label: "Releases", value: "10+" },
    ],
    bullets: [
      "First technical hire; designed core MERN architecture, CI/CD pipelines, and deployed to production from day zero.",
      "Architected an automated AI exam generation & evaluation engine (OpenAI API), reducing grading turnaround by 90%.",
      "Engineered zero-downtime payments and media ingestion using Razorpay webhooks and optimized Cloudinary pipelines.",
      "Scaled the platform across 10+ institutions and 500+ daily active users, driving over ₹25L in transaction revenue.",
    ],
  },
  {
    company: "NPS Talent Explorer",
    role: "Frontend Engineer",
    period: "2025",
    href: "https://www.npstalentexplorer.in",
    logoLabel: "NPS",
    logoClassName: "bg-sky-600 text-white text-[10px] font-semibold",
    stack: [
      "React",
      "JavaScript",
      "REST APIs",
      "Tailwind CSS",
      "State Management",
    ],
    metrics: [
      { label: "User roles", value: "3" },
      { label: "Faster reports", value: "85%" },
      { label: "Exam uptime", value: "100%" },
    ],
    bullets: [
      "Engineered a low-latency examination interface supporting strict role isolation across students, invigilators, and admins.",
      "Built an optimistic client-side state caching layer to prevent test progress loss during erratic network disconnections.",
      "Developed real-time teacher analytics dashboards, cutting evaluation compiling time from several hours to seconds.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Space Foundation India — Official Website",
    description:
      "End-to-end design, build, and deployment of the organization's public site for nationwide outreach, events, and content.",
    highlights: [
      "Responsive UI, SEO, and accessibility baked in for registrations and ongoing content updates.",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "SEO"],
    href: "https://spacefoundationindia.com",
    hrefLabel: "Live",
    bento: "wide",
  },
  {
    title: "BeejRakshak — Farmer-First AgriTech",
    description:
      "Web and mobile platform unifying mandi intelligence, government scheme matching, and satellite-based field monitoring.",
    highlights: [
      "ML price forecasting and arbitrage for mandi timing; Scrapbot for scheme eligibility and PMFBY PDFs.",
      "Sentinel-1 SAR pipeline on Google Earth Engine with PostGIS storage and multi-language Supabase auth.",
    ],
    tags: [
      "React",
      "Expo",
      "Supabase",
      "PostGIS",
      "Google Earth Engine",
    ],
    href: "https://github.com/Jinal2502/BeejRakshak",
    hrefLabel: "GitHub",
  },
  {
    title: "Habito — Student Accommodation",
    description:
      "Full-stack housing marketplace with role-based dashboards for students, hosts, and admins — piloted before a multi-college rollout.",
    highlights: [
      "Validated demand with 500+ students; architecture ready for 35+ colleges in Ahmedabad.",
      "Listings, image uploads, and scalable PostgreSQL + Supabase backend.",
    ],
    tags: ["Next.js 16", "PostgreSQL", "Supabase", "Tailwind CSS"],
    hrefLabel: "Solo build",
  },
];
