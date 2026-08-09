"use client";

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
    detail: "Academic Standing CGPA: 7.75",
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
    <section id="experience" className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        
        {/* Experience Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 
            className="hero-heading font-black uppercase tracking-tight text-[#D7E2EA] mb-12 sm:mb-16 md:mb-24 text-center"
            style={{ fontSize: "clamp(2.5rem, 9.5vw, 130px)" }}
          >
            Experience
          </h2>
        </FadeIn>

        {/* Experience List (Large Numbered Rows) */}
        <div className="w-full max-w-5xl flex flex-col border-t border-[#D7E2EA]/15">
          {INTERNSHIPS.map((item, idx) => (
            <FadeIn
              key={item.num}
              delay={idx * 0.1}
              y={30}
              className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12 border-b border-[#D7E2EA]/15 group hover:bg-white/[0.02] transition-colors duration-300 px-4 rounded-xl"
            >
              {/* Number */}
              <div 
                className="font-black text-[#D7E2EA] flex-shrink-0 leading-none select-none md:w-[140px] group-hover:text-[#7C3AED] transition-colors duration-300"
                style={{ fontSize: "clamp(2.2rem, 6.5vw, 100px)" }}
              >
                {item.num}
              </div>

              {/* Text Group */}
              <div className="flex-grow flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300 px-3 py-1 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30">
                    {item.date}
                  </span>
                </div>
                <h3 
                  className="font-black uppercase text-[#D7E2EA] tracking-wide mt-2"
                  style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.8rem)" }}
                >
                  {item.role} <span className="font-semibold text-[#7C3AED]">@ {item.company}</span>
                </h3>
                <p 
                  className="font-light text-[#D7E2EA]/80 leading-relaxed max-w-3xl mt-1"
                  style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)" }}
                >
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Education Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 
            className="hero-heading font-black uppercase tracking-tight text-[#D7E2EA] mb-12 sm:mb-16 md:mb-24 text-center"
            style={{ fontSize: "clamp(2.5rem, 9vw, 120px)" }}
          >
            Education
          </h2>
        </FadeIn>

        {/* Education Timeline */}
        <div className="w-full max-w-4xl flex flex-col border-t border-[#D7E2EA]/15">
          {EDUCATION.map((item, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 0.1}
              y={30}
              className="py-8 sm:py-10 border-b border-[#D7E2EA]/15 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12 group hover:bg-white/[0.02] transition-colors duration-300 px-4 rounded-xl"
            >
              {/* Date Column */}
              <div className="sm:w-[200px] font-bold text-purple-300 uppercase tracking-widest text-xs font-mono flex-shrink-0 pt-1">
                <span className="px-3 py-1 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 inline-block">
                  {item.date}
                </span>
              </div>

              {/* Details Column */}
              <div className="flex-grow flex flex-col gap-1">
                <h3 className="font-black uppercase text-lg sm:text-xl text-[#D7E2EA] leading-snug">
                  {item.degree}
                </h3>
                <span className="font-semibold text-[#7C3AED] text-sm uppercase tracking-wide">
                  {item.school}
                </span>
                <p className="font-light text-[#D7E2EA]/75 text-sm sm:text-base leading-relaxed mt-2">
                  {item.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
