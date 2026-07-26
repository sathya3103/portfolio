"use client";

import FadeIn from "./ui/FadeIn";

const CERTIFICATIONS = [
  { title: "Machine Learning with Python", issuer: "IBM", year: "2025" },
  { title: "Python for Data Science & AI", issuer: "IBM", year: "2025" },
  { title: "Data Analysis with Python", issuer: "IBM", year: "2024" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp", year: "2024" },
];

const ACHIEVEMENTS = [
  {
    title: "Hackathon Finalist",
    location: "St. Joseph's College",
    desc: "Reached the final presentation round, presenting the NextBench marketplace with a live demo and answering technical Q&A panel queries.",
  },
  {
    title: "Student Mentor",
    location: "24-Hour College Hackathon",
    desc: "Guided and mentored an engineering team through the MVP design, helping them secure a spot in the finals out of 70+ participating teams.",
  },
];

export default function CredentialsSection() {
  return (
    <section className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 relative z-30">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-[#D7E2EA]/10 pt-16">
        
        {/* Certifications Grid */}
        <div className="lg:col-span-6 flex flex-col">
          <FadeIn delay={0} y={30} className="mb-8">
            <h2 className="font-black uppercase tracking-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
              Certifications
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <FadeIn
                key={idx}
                delay={idx * 0.08}
                y={20}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 p-5 rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/5 transition-colors duration-200 hover:border-[#D7E2EA]/20"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-sm sm:text-base uppercase tracking-wide text-[#D7E2EA]">
                    {cert.title}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-mono">
                    {cert.issuer}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#D7E2EA]/40 font-mono">
                  {cert.year}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="lg:col-span-6 flex flex-col">
          <FadeIn delay={0.1} y={30} className="mb-8">
            <h2 className="font-black uppercase tracking-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
              Achievements
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-4">
            {ACHIEVEMENTS.map((ach, idx) => (
              <FadeIn
                key={idx}
                delay={idx * 0.12}
                y={20}
                className="flex flex-col p-5 rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/5 transition-colors duration-200 hover:border-[#D7E2EA]/20 gap-2"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-sm sm:text-base uppercase tracking-wide text-[#D7E2EA]">
                    {ach.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/50 font-mono text-right">
                    {ach.location}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/75 leading-relaxed">
                  {ach.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
