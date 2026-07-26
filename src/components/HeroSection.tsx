"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import FadeIn from "./ui/FadeIn";
import Lanyard from "./ui/Lanyard";
import SocialTooltip from "./ui/SocialTooltip";
import WaveBackground from "./ui/WaveBackground";
import SideRays from "./ui/SideRays";
import ResumeButton from "./ui/ResumeButton";

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for a fluid trailing glow
  const spotlightX = useSpring(mouseX, { stiffness: 60, damping: 22 });
  const spotlightY = useSpring(mouseY, { stiffness: 60, damping: 22 });

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e && e.touches[0] ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = "touches" in e && e.touches[0] ? e.touches[0].clientY : (e as MouseEvent).clientY;
      // Center 550px spotlight (offset by 275px)
      mouseX.set(clientX - 275);
      mouseY.set(clientY - 275);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("touchmove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, [mouseX, mouseY]);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen lg:h-screen w-full relative flex flex-col justify-center overflow-hidden bg-[#0C0C0C]">
      
      {/* Dynamic SideRays Ambient Light Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SideRays
          speed={1.8}
          rayColor1="#7C3AED"
          rayColor2="#60A5FA"
          intensity={2.0}
          spread={2.0}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.8}
          falloff={1.6}
          opacity={0.9}
        />
      </div>

      {/* Interactive Background Glow Spotlight */}
      <motion.div
        style={{
          x: spotlightX,
          y: spotlightY,
          left: 0,
          top: 0,
        }}
        className="absolute pointer-events-none rounded-full blur-[130px] bg-gradient-to-r from-[#7C3AED]/30 to-[#60A5FA]/15 w-[550px] h-[550px] z-0"
      />

      {/* Retro Tech Grid Background (illuminated by spotlight) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 z-0 pointer-events-none" />

      {/* Interactive Wave Flow Background */}
      <WaveBackground />

      {/* Main Split Grid Area */}
      <div className="flex-grow w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-12 gap-12 lg:gap-20 pt-12 pb-16 lg:py-0 z-20">
        
        {/* Left Column: Heading, Subtitle & CTA Button */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left select-none max-w-[620px] lg:max-w-[520px] xl:max-w-[580px]">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-[1.1] flex flex-col gap-1.5 sm:gap-2 md:gap-2.5 text-[8.5vw] sm:text-[7.5vw] md:text-[6vw] lg:text-[4.6vw] xl:text-[4.8vw]">
              <span className="text-[#646973]">Hi, I&apos;m</span>
              <span className="text-[#BBCCD7]">Sathyanesar</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35} y={20} className="mt-6 md:mt-8">
            <p 
              className="text-[#D7E2EA]/75 font-light uppercase tracking-widest leading-relaxed max-w-[360px] sm:max-w-[440px] lg:max-w-none" 
              style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.25rem)" }}
            >
            aspiring software engineer driven by building scalable & intelligent applications
            </p>
          </FadeIn>

          {/* Mobile Glassmorphic Profile Card (Compact & sleek without bottom tag) */}
          <FadeIn delay={0.45} y={30} className="block lg:hidden my-5 sm:my-6 w-full max-w-[200px] sm:max-w-[240px] mx-auto z-20">
            <div className="relative group p-2 rounded-2xl bg-[#111111]/70 backdrop-blur-md border border-[#7C3AED]/30 shadow-[0_0_25px_rgba(124,58,237,0.2)] transition-all duration-300 hover:border-[#7C3AED]/60 hover:shadow-[0_0_35px_rgba(124,58,237,0.35)] overflow-hidden">
              {/* Subtle top ambient purple glow inside card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-[#7C3AED]/20 blur-2xl pointer-events-none rounded-full" />
              
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-[#D7E2EA]/10">
                <img 
                  src="/sathyanesar_profile.png" 
                  alt="E. Sathyanesar Profile" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.55} y={20} className="mt-4 md:mt-10 flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
            <SocialTooltip />
            <ResumeButton />
          </FadeIn>
        </div>

        {/* Right Column: Desktop Placeholder structure to preserve desktop layout and grid spacing */}
        <div className="hidden lg:flex w-full max-w-[550px] xl:max-w-[620px] items-center justify-center pointer-events-none select-none opacity-0">
          <div className="w-full h-[550px] xl:h-[620px]" />
        </div>

      </div>

      {/* Absolute Lanyard Canvas Container - Desktop & Laptop screens only (>= lg breakpoint) */}
      <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-full lg:w-[58vw] xl:w-[52vw] h-full z-40 pointer-events-none items-center justify-center overflow-hidden">
        <div className="w-full h-full pointer-events-auto">
          <FadeIn delay={0.6} y={30} className="w-full h-full">
            <Lanyard 
              position={[0, 0, 16]} 
              gravity={[0, -40, 0]} 
              frontImage="/sathyanesar_profile.png" 
              backImage="/sathyanesar_profile.png" 
              imageFit="cover" 
            />
          </FadeIn>
        </div>
      </div>

      {/* Padding container to maintain visual weight parity on desktop */}
      <div className="h-4 flex-shrink-0 hidden lg:block" />

      {/* Seamless Bottom Gradient Blend into About Section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#0C0C0C]/60 to-[#0C0C0C] z-30 pointer-events-none" />

    </section>
  );
}
