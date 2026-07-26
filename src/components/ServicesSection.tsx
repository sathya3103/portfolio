"use client";

import FadeIn from "./ui/FadeIn";

const CAPABILITIES = [
  {
    num: "01",
    name: "Full-Stack Development",
    desc: "Developing frontend and backend web applications with React, JavaScript, and custom SQL databases like PostgreSQL and MySQL.",
  },
  {
    num: "02",
    name: "AI & Machine Learning",
    desc: "Building machine learning models using Random Forest, exploratory data analysis (EDA), and interactive panels with Streamlit.",
  },
  {
    num: "03",
    name: "Data Analytics",
    desc: "Analyzing complex datasets, executing statistical analysis, and drawing actionable insights using Python and SQL.",
  },
  {
    num: "04",
    name: "Software Engineering",
    desc: "Designing clean, scalable desktop systems and backend APIs using modern programming structures in Java and Python.",
  },
  {
    num: "05",
    name: "Cybersecurity",
    desc: "Analyzing threat models, secure user authentication systems, and applying Generative AI workflows.",
  },
];

export default function ServicesSection() {
  return (
    <section id="skills" className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 
            className="font-black uppercase text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Capabilities
          </h2>
        </FadeIn>

        {/* Capabilities List */}
        <div className="w-full max-w-5xl flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {CAPABILITIES.map((item, idx) => (
            <FadeIn
              key={item.num}
              delay={idx * 0.1}
              y={30}
              className="flex items-center gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)]"
            >
              {/* Number */}
              <div 
                className="font-black text-[#0C0C0C] flex-shrink-0 leading-none select-none"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {item.num}
              </div>

              {/* Text Group */}
              <div className="flex flex-col gap-2">
                <h3 
                  className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {item.name}
                </h3>
                <p 
                  className="font-light text-[#0C0C0C]/60 leading-relaxed max-w-2xl"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
