"use client";

import React from "react";
import FadeIn from "./ui/FadeIn";

interface TechCardProps {
  name: string;
  icon: React.ReactNode;
}

function TechCard({ name, icon }: TechCardProps) {
  return (
    <div className="flex-shrink-0 w-full h-[54px] rounded-xl bg-[#151515] px-4 py-2.5 flex items-center justify-start gap-3.5 border border-white/5 hover:border-[#7C3AED]/40 hover:bg-[#181818] transition-all duration-250 ease-out select-none group relative overflow-hidden shadow-sm hover:shadow-[0_4px_20px_rgba(124,58,237,0.15)]">
      
      {/* Soft Purple Glow Behind Icon on Hover */}
      <div className="absolute left-4 w-8 h-8 bg-[#7C3AED]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none" />

      {/* Icon Wrapper with Scale & 3-deg Rotation on Hover */}
      <div className="flex-shrink-0 flex items-center justify-center relative z-10 transition-transform duration-250 ease-out group-hover:scale-110 group-hover:rotate-[3deg]">
        {icon}
      </div>

      {/* Skill Name Text */}
      <h3 className="font-bold uppercase tracking-wider text-xs sm:text-[13px] text-[#D7E2EA] group-hover:text-white transition-colors duration-250 truncate relative z-10">
        {name}
      </h3>

    </div>
  );
}

const CATEGORIZED_SKILLS = [
  {
    category: "Programming Language",
    skills: [
      { 
        name: "Java", 
        icon: (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" 
            alt="Java" 
            className="w-[24px] h-[24px] object-contain" 
          />
        )
      },
      { 
        name: "Python", 
        icon: (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
            alt="Python" 
            className="w-[24px] h-[24px] object-contain" 
          />
        )
      },
      { 
        name: "SQL", 
        icon: (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" 
            alt="SQL" 
            className="w-[24px] h-[24px] object-contain" 
          />
        )
      },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { 
        name: "JavaScript", 
        icon: (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
            alt="JavaScript" 
            className="w-[22px] h-[22px] rounded-[3px] object-contain" 
          />
        )
      },
      {
        name: "React.js",
        icon: (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
            alt="React.js" 
            className="w-[26px] h-[26px] object-contain" 
          />
        )
      },
      { 
        name: "HTML5", 
        icon: (
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
              alt="HTML5" 
              className="w-[20px] h-[20px] object-contain" 
            />
          </div>
        )
      },
      { 
        name: "CSS3", 
        icon: (
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" 
              alt="CSS3" 
              className="w-[20px] h-[20px] object-contain" 
            />
          </div>
        )
      },
    ],
  },
  {
    category: "Database",
    skills: [
      { 
        name: "PostgreSQL", 
        icon: (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
            alt="PostgreSQL" 
            className="w-[24px] h-[24px] object-contain" 
          />
        )
      },
      { 
        name: "MySQL", 
        icon: (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" 
            alt="MySQL" 
            className="w-[26px] h-[26px] object-contain" 
          />
        )
      },
      { 
        name: "MongoDB", 
        icon: (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" 
            alt="MongoDB" 
            className="w-[24px] h-[24px] object-contain" 
          />
        )
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      { 
        name: "Git", 
        icon: (
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" 
              alt="Git" 
              className="w-[20px] h-[20px] object-contain" 
            />
          </div>
        )
      },
      { 
        name: "GitHub", 
        icon: (
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
              alt="GitHub" 
              className="w-[20px] h-[20px] object-contain brightness-0 invert" 
            />
          </div>
        )
      },
      { 
        name: "VS Code", 
        icon: (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" 
            alt="VS Code" 
            className="w-[24px] h-[24px] object-contain" 
          />
        )
      },
    ],
  },
];

export default function MarqueeSection() {
  return (
    <section id="skills" className="min-h-screen relative w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-16 overflow-hidden relative z-20">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col items-center justify-center">
        
        {/* Heading */}
        <FadeIn delay={0} y={35} className="w-full text-center mb-8 sm:mb-10">
          <h2 
            className="font-black uppercase tracking-tight text-[#D7E2EA]"
            style={{ fontSize: "clamp(2.5rem, 8vw, 100px)" }}
          >
            Skills
          </h2>
        </FadeIn>

        {/* Categorized Skills - Responsive 4 Column Box Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full max-w-5xl">
          {CATEGORIZED_SKILLS.map((group, groupIdx) => (
            <div 
              key={group.category} 
              className="flex flex-col gap-3 bg-[#111111]/40 border border-[#D7E2EA]/5 rounded-xl p-4 md:p-5"
            >
              
              {/* Category Header */}
              <div className="flex items-center gap-2 pb-3 border-b border-[#D7E2EA]/10 select-none">
                <span className="w-1 h-3.5 rounded bg-[#7C3AED] shadow-[0_0_8px_#7C3AED]" />
                <h3 className="font-bold uppercase tracking-wider text-[10px] sm:text-xs text-[#D7E2EA]/75 font-mono">
                  {group.category}
                </h3>
              </div>

              {/* Skills Vertical Stack */}
              <div className="flex flex-col gap-2 mt-0.5">
                {group.skills.map((item, idx) => (
                  <FadeIn
                    key={item.name}
                    delay={(groupIdx * 0.05) + (idx * 0.02)}
                    y={10}
                    className="w-full"
                  >
                    <TechCard name={item.name} icon={item.icon} />
                  </FadeIn>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
