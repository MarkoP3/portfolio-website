import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marko Puzović | Software Engineer",
  description:
    "Software engineer passionate about .NET and Azure. Based in Novi Sad, Serbia.",
  metadataBase: new URL("https://markopuzovic.site"),
  openGraph: {
    title: "Marko Puzović | Software Engineer",
    description:
      "Software engineer passionate about .NET and Azure. Based in Novi Sad, Serbia.",
    url: "https://markopuzovic.site",
    siteName: "Marko Puzović",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ParticlesBackground />
        <a
          href="#profile"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:bg-foreground focus:text-background focus:px-3 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-background/80 border-b border-white/10">
          <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
            <a href="#profile" className="font-semibold tracking-tight accent">Marko</a>
            <div className="hidden sm:flex gap-6 text-sm">
              <a href="#education" className="opacity-80 hover:opacity-100 transition-colors hover:text-[var(--accent)]">Education</a>
              <a href="#experience" className="opacity-80 hover:opacity-100 transition-colors hover:text-[var(--accent)]">Experience</a>
              <a href="#projects" className="opacity-80 hover:opacity-100 transition-colors hover:text-[var(--accent)]">Projects</a>
              <a href="#certificates" className="opacity-80 hover:opacity-100 transition-colors hover:text-[var(--accent)]">Certificates</a>
              <a href="#achievements" className="opacity-80 hover:opacity-100 transition-colors hover:text-[var(--accent)]">Achievements</a>
              <a href="#skills" className="opacity-80 hover:opacity-100 transition-colors hover:text-[var(--accent)]">Skills</a>
              <a href="#contact" className="opacity-80 hover:opacity-100 transition-colors hover:text-[var(--accent)]">Contact</a>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
