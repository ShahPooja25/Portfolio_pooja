"use client";

import { useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import TypingText from "../TypingText";

export default function Hero({ setActiveSection }) {
  const [showDownload, setShowDownload] = useState(false);

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection("contact");
  };

  const handleDownloadResume = () => {
    const resumeUrl = "/Pooja_Shah_Resume.pdf"; // ✅ make sure this file is in /public
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "D:\coding\pp\portfolio\public\Pooja_Shah_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 bg-transparent">
      <div className="text-center space-y-10 max-w-4xl">
        {/* Title Section */}
        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-white/90 font-light drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">
            Hello, I am
          </p>
          <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]">
            Pooja Shah
          </h1>

          <div className="min-h-16 flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <TypingText
                text="AI/ML Engineer • Full Stack Developer • Innovator"
                speed={40}
                delay={500}
                onComplete={() => setTimeout(() => setShowDownload(true), 600)}
              />
            </p>
          </div>

          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">
            Passionate about building intelligent systems that merge AI with elegant, high-performance web experiences.
          </p>
        </div>

        {/* Buttons */}
        <div className="pt-8 flex flex-col sm:flex-row gap-5 justify-center items-center flex-wrap">
          {/* Download Resume */}
          {showDownload && (
            <button
              onClick={handleDownloadResume}
              className="px-8 py-3 border-2 border-blue-400 
                         text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] 
                         hover:bg-blue-500/10 hover:border-blue-300 
                         rounded-lg font-semibold transition-all flex items-center gap-2"
            >
              <Download size={20} /> Download Resume
            </button>
          )}

          {/* Contact */}
          <button
            onClick={handleContactClick}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 
                       hover:from-purple-600 hover:to-blue-600 
                       text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] 
                       rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
          >
            Get In Touch <ArrowRight size={20} />
          </button>

          {/* Projects */}
          <button
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              projectsSection?.scrollIntoView({ behavior: "smooth" });
              setActiveSection("projects");
            }}
            className="px-8 py-3 border-2 border-purple-400 
                       text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] 
                       hover:bg-purple-500/10 
                       rounded-lg font-semibold transition-all"
          >
            View My Work
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 animate-bounce">
          <p className="text-white/80 text-sm mb-2 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">
            Scroll to explore
          </p>
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-purple-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
