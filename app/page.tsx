import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-lg bg-surface px-4 py-2 text-sm font-medium text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:border focus:border-line"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
