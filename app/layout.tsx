import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CustomCursor } from "./components/custom-cursor";
import { FloatingDock } from "./components/floating-dock";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Jinalkumar Rathva — Full Stack Engineer",
  description:
    "Portfolio of Jinalkumar Rathva — full-stack engineer building SaaS, Next.js products, and AI-powered platforms.",
};

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-[#fafafa] text-zinc-700 dark:bg-[#0a0a0a] dark:text-zinc-300">
        <CustomCursor />
        {children}
        <FloatingDock />
      </body>
    </html>
  );
}
