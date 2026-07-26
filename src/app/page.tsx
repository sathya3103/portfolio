"use client";

import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CredentialsSection from "@/components/CredentialsSection";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/ui/FadeIn";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA]">
      {/* Dino Preloader */}
      <Preloader />

      {/* Scroll Sections */}
      <HeroSection />
      <AboutSection />
      <MarqueeSection />
      <ExperienceSection />
      <ProjectsSection />
      <CredentialsSection />
      <ContactSection />

      {/* Premium Footer */}
      <footer className="bg-[#0C0C0C] py-20 px-6 md:px-10 border-t border-[#D7E2EA]/10 flex flex-col md:flex-row justify-between items-center gap-8 relative z-30">
        <FadeIn delay={0.1} y={20} className="flex flex-col gap-2">
          <span className="text-2xl font-bold uppercase tracking-widest text-[#D7E2EA]">Sathyanesar</span>
          <span className="text-sm font-light text-[#D7E2EA]/60 uppercase tracking-widest">
            Full-Stack Developer & AI Engineer
          </span>
        </FadeIn>
        
        <FadeIn delay={0.2} y={20} className="flex gap-6">
          <a 
            href="https://github.com/sathya3103" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-light uppercase tracking-widest hover:text-white transition-colors text-[#D7E2EA]/60 underline underline-offset-4"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/sathyanesar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-light uppercase tracking-widest hover:text-white transition-colors text-[#D7E2EA]/60 underline underline-offset-4"
          >
            LinkedIn
          </a>
        </FadeIn>
        
        <FadeIn delay={0.3} y={20} className="text-xs font-light text-[#D7E2EA]/30 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} E. Sathyanesar. All rights reserved.
        </FadeIn>
      </footer>
    </main>
  );
}
