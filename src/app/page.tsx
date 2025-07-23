"use client";

import {
  Hero,
  Terminal,
  Skills,
  Projects,
  Experience,
  ThemeSwitcher,
  ScrollToTop,
} from "@/components";

export default function Page() {
  return (
    <>
      <ThemeSwitcher />
      <ScrollToTop />
      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* Terminal Section */}
        <section className="py-12 px-8">
          <div className="flex justify-center">
            <Terminal />
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Footer */}
        <footer className="py-8 text-center text-neutral-400 border-t border-green-500/30">
          <div className="max-w-4xl mx-auto px-8">
            <p className="mb-4">
              Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer
              Motion
            </p>
            <p className="text-sm">
              © 2025 Vasudev D M. All rights reserved. |
              <span className="text-green-400 ml-1">
                Crafted for developers, by a developer
              </span>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
