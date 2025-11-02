"use client";

import { useState } from "react";
import NetworkBackground from "../components/NetworkBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <main className="relative bg-slate-950 text-white">
      {/* Optional background animation */}
      <NetworkBackground />

      {/* Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Sections */}
      <section id="home" className="pt-24 scroll-mt-24">
        <Hero setActiveSection={setActiveSection} />
      </section>

      <section id="about" className="pt-24 scroll-mt-24">
        <About />
      </section>

      <section id="education" className="pt-24 scroll-mt-24">
        <Education />
      </section>

      <section id="experience" className="pt-24 scroll-mt-24">
        <Experience />
      </section>

      <section id="projects" className="pt-24 scroll-mt-24">
        <Projects />
      </section>

      <section id="skills" className="pt-24 scroll-mt-24">
        <Skills />
      </section>

      <section id="contact" className="pt-24 scroll-mt-24">
        <Contact />
      </section>
    </main>
  );
}
