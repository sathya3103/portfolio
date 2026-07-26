"use client";

import React from "react";
import LiveProjectButton from "./ui/LiveProjectButton";
import FadeIn from "./ui/FadeIn";
import ScrollStack, { ScrollStackItem } from "./ui/ScrollStack";

const PROJECTS = [
  {
    num: "01",
    category: "Python / Automation / API",
    name: "WhatsApp Weather Alert Automation",
    label: "GitHub Repo",
    href: "https://github.com/sathya3103/weather_alert_python",
    description: "Automated Python schedule utility tracking meteorological forecasts, querying live weather APIs, and dispatching real-time notifications to WhatsApp endpoints.",
    highlights: ["Automated 4-day forecasts", "Near-100% delivery reliability", "Sub-3-second notification triggers"],
  },
  {
    num: "02",
    category: "React / PostgreSQL / REST API / JWT",
    name: "NextBench Marketplace",
    label: "Live Demo",
    href: "https://nextbench-app.vercel.app",
    description: "A production-grade web marketplace designed for performance benchmarking, loaded with secure JWT sessions, optimized databases, and cart pipelines.",
    highlights: ["Production-ready marketplace", "Normalized database schema", "Secure JWT authentication flows"],
  },
  {
    num: "03",
    category: "Python / Cybersecurity / Pynput / Forensics",
    name: "Keystroke Logging Demonstration",
    label: "GitHub Repo",
    href: "https://github.com/sathya3103/Keystroke_Logging",
    description: "Cross-platform keyboard register auditing system developed in Python for cybersecurity lab forensics, capturing inputs in both clean and timestamp-detailed structures.",
    highlights: ["Cross-platform utility (Win/Linux)", "Forensic timestamp-based logging", "Built for defensive threat analysis"],
  },
];

function ProjectMockup({ num }: { num: string }) {
  if (num === "01") {
    // WhatsApp Weather
    return (
      <div className="w-full h-full min-h-[160px] bg-[#111111]/90 rounded-2xl overflow-hidden flex items-center justify-center border border-[#D7E2EA]/10 group/img relative">
        <img
          src="/weather_preview.png"
          alt="WhatsApp Weather Alert Automation"
          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
        />
      </div>
    );
  }

  if (num === "02") {
    // NextBench
    return (
      <div className="w-full h-full min-h-[160px] bg-[#111111]/90 rounded-2xl overflow-hidden flex items-center justify-center border border-[#D7E2EA]/10 group/img relative">
        <img
          src="/nextbench_preview.png"
          alt="NextBench Campus Marketplace"
          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
        />
      </div>
    );
  }

  if (num === "03") {
    // Keystroke Logging
    return (
      <div className="w-full h-full min-h-[160px] bg-[#111111]/90 rounded-2xl p-4 flex flex-col font-mono select-none border border-[#D7E2EA]/5 text-[#D7E2EA]">
        <div className="flex justify-between items-center border-b border-[#D7E2EA]/10 pb-2.5 mb-2.5">
          <span className="text-[10px] font-bold text-[#D7E2EA] tracking-wide">Keylogger Active</span>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 font-bold animate-pulse">LOGGING</span>
        </div>
        <div className="flex flex-col gap-1 text-[9px] leading-relaxed">
          <div className="text-[#D7E2EA]/40">[sys] Initializing pynput listener...</div>
          <div className="text-emerald-400">[clean_log] &quot;hello world&quot;</div>
          <div className="text-[#D7E2EA]/50 font-mono mt-1 border-t border-[#D7E2EA]/5 pt-1.5">[forensic_log] timestamps:</div>
          <div className="text-[#D7E2EA]/75 pl-2">• 11:35:01.04 - [SHIFT_DOWN]</div>
          <div className="text-[#D7E2EA]/75 pl-2">• 11:35:01.22 - &apos;H&apos;</div>
          <div className="text-[#D7E2EA]/75 pl-2">• 11:35:01.48 - &apos;e&apos;</div>
        </div>
      </div>
    );
  }

  return null;
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 relative z-30">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16">
          <h2 
            className="hero-heading font-black uppercase text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* Stacking Cards Container using ScrollStack from React Bits */}
        <div className="w-full relative">
          <ScrollStack 
            useWindowScroll={true} 
            className="window-scroll w-full" 
            itemDistance={100}
            baseScale={0.88}
            itemScale={0.04}
            itemStackDistance={35}
            stackPosition="12%"
            scaleEndPosition="6%"
          >
            {PROJECTS.map((proj) => (
              <ScrollStackItem key={proj.num}>
                <ProjectCard {...proj} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ num, category, name, label, href, description, highlights }: any) {
  return (
    <div className="w-full h-full p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden">
      {/* Top Row */}
      <div className="flex justify-between items-center flex-shrink-0 border-b border-[#D7E2EA]/15 pb-4">
        <div className="flex items-center gap-4 sm:gap-6">
          <span 
            className="font-black text-[#D7E2EA] leading-none"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            {num}
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/60">
              {category}
            </span>
            <h3 className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider text-[#D7E2EA] mt-0.5">
              {name}
            </h3>
          </div>
        </div>
        <LiveProjectButton href={href} label={label} />
      </div>

      {/* Bottom Row - Two Column Grid */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-10 gap-6 mt-6 items-center overflow-hidden">
        {/* Left Column (Info Panel) */}
        <div className="col-span-1 md:col-span-5 flex flex-col gap-5 justify-center h-full">
          <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/85 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col gap-3">
            {highlights.map((hl: string, hIdx: number) => (
              <div key={hIdx} className="flex items-center gap-3 text-xs tracking-wide text-[#D7E2EA]/75">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] flex-shrink-0" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Interactive mockup simulation) */}
        <div className="col-span-1 md:col-span-5 w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
          <div className="w-full max-w-sm md:max-w-md h-full flex items-center">
            <ProjectMockup num={num} />
          </div>
        </div>
      </div>
    </div>
  );
}
