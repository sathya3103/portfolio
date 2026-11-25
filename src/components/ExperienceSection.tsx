"use client";

import React from "react";
import FadeIn from "./ui/FadeIn";

const INTERNSHIPS = [
  {
    num: "01",
    date: "June 2026",
    role: "Full Stack Development Intern",
    company: "Digioptimized",
    desc: "Developed responsive frontend and robust backend application features. Streamlined end-to-end data pipelines for optimal transfer rates and utilized Git version-controlled collaboration workflows.",
  },
  {
    num: "02",
    date: "Dec 2025",
    role: "Cybersecurity with Gen AI Intern",
    company: "Vodafone Idea Foundation (VOIS)",
    desc: "Analyzed 3+ active system threat intelligence models, explored Generative AI system architectures, and studied client authentication systems alongside enterprise network security.",
  },
  {
    num: "03",
    date: "Sept 2025",
    role: "AI & Data Analytics Intern",
    company: "AICTE – Shell India – Edunet Foundation",
    desc: "Executed exploratory data analysis (EDA) on datasets, built predictive machine learning models, and optimized classifier parameters to improve forecasting accuracy.",
  },
];

const EDUCATION = [
  {
    date: "Expected 2027",
    degree: "B.E. Computer Science Engineering",
    school: "Agni College of Technology",
    detail: "Academic Standing CGPA: 7.73",
  },
  {
    date: "2022 – 2023",
    degree: "Higher Secondary Certificate",
    school: "Brotherhood Matric Higher Secondary School",
    detail: "Achieved Percentage: 76.83%",
  },
];

export default function ExperienceSection() {
  return (
    <section 
      id="career" 
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-16 sm:py-20 relative z-20"
    >
      {/* Anchor aliases for backward compatibility */}
      <span id="internships" className="absolute -top-16 left-0 opacity-0 pointer-events-none" aria-hidden="true" />
      <span id="experience" className="absolute -top-16 left-0 opacity-0 pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        
        {/* Column 1: Internships */}
        <div className="lg:col-span-6 flex flex-col">
          <FadeIn delay={0} y={30} className="mb-6 sm:mb-8">
            <h2 
              className="font-black uppercase tracking-tight text-[#D7E2EA]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              Internships
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-3.5">
            {INTERNSHIPS.map((item, idx) => (
              <FadeIn
                key={item.num}
                delay={idx * 0.08}
                y={20}
                className="flex flex-col p-4 sm:p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] transition-all duration-200 hover:border-white/20 hover:bg-white/[0.04] gap-2.5 group"
              >
                {/* Header Row: Role, Company & Date Badge */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-4">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-bold text-sm sm:text-base uppercase tracking-wide text-[#D7E2EA] group-hover:text-white transition-colors duration-200">
                      {item.role}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/80 font-mono">
                      @ {item.company}
                    </span>
                  </div>
                  <span className="self-start sm:self-auto text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#D7E2EA]/90 px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 whitespace-nowrap">
                    {item.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/75 leading-relaxed">
                  {item.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Column 2: Education */}
        <div id="education" className="lg:col-span-6 flex flex-col">
          <FadeIn delay={0.1} y={30} className="mb-6 sm:mb-8">
            <h2 
              className="font-black uppercase tracking-tight text-[#D7E2EA]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              Education
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-3.5">
            {EDUCATION.map((item, idx) => (
              <FadeIn
                key={idx}
                delay={idx * 0.1}
                y={20}
                className="flex flex-col p-4 sm:p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] transition-all duration-200 hover:border-white/20 hover:bg-white/[0.04] gap-2.5 group"
              >
                {/* Header Row: Degree & Date Badge */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-4">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-bold text-sm sm:text-base uppercase tracking-wide text-[#D7E2EA] group-hover:text-white transition-colors duration-200">
                      {item.degree}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/80 font-mono">
                      {item.school}
                    </span>
                  </div>
                  <span className="self-start sm:self-auto text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#D7E2EA]/90 px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 whitespace-nowrap">
                    {item.date}
                  </span>
                </div>

                {/* Detail */}
                <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/75 leading-relaxed">
                  {item.detail}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
