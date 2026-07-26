"use client";

import { useState } from "react";
import { User } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import AnimatedText from "./ui/AnimatedText";
import ContactButton from "./ui/ContactButton";

export default function AboutSection() {
  const [imgErr, setImgErr] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="min-h-screen relative w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 overflow-hidden">
      
      {/* Top Ambient Glow Blend from Hero Section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-b from-[#7C3AED]/20 via-[#60A5FA]/10 to-transparent rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#0C0C0C] via-[#0C0C0C]/80 to-transparent pointer-events-none z-0" />
      
      {/* Decorative Corner Elements */}
      
      {/* Top Left - Moon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[3%] left-[1%] sm:left-[2%] md:left-[4%] w-[65px] sm:w-[130px] md:w-[210px] z-0 select-none pointer-events-none opacity-50 sm:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon"
          className="w-full h-auto animate-pulse"
        />
      </FadeIn>

      {/* Bottom Left - 3D Shape */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[4%] left-[2%] sm:left-[6%] md:left-[10%] w-[55px] sm:w-[110px] md:w-[180px] z-0 select-none pointer-events-none opacity-40 sm:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Shape"
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Top Right - Lego */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[3%] right-[1%] sm:right-[2%] md:right-[4%] w-[65px] sm:w-[130px] md:w-[210px] z-0 select-none pointer-events-none opacity-50 sm:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego Block"
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Bottom Right - 3D Cluster */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[4%] right-[2%] sm:right-[6%] md:right-[10%] w-[70px] sm:w-[130px] md:w-[220px] z-0 select-none pointer-events-none opacity-40 sm:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Objects Cluster"
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Centered Narrative Wrapper */}
      <div className="w-full max-w-4xl flex flex-col items-center justify-center z-10 relative">
        
        {/* Biography Text Block */}
        <div className="flex flex-col items-center text-center">
          <FadeIn delay={0} y={40} className="mb-6 sm:mb-8">
            <h2 
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: "clamp(3.2rem, 7vw, 100px)" }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text="I'm a Computer Science Engineering student who enjoys turning ideas into software that people can actually use. Over the course of three internships, I've worked across full-stack development, AI & data analytics, and cybersecurity, gaining experience with modern development workflows and production-oriented tools. Let's build something incredible together!"
            className="text-[#D7E2EA] font-medium leading-relaxed max-w-2xl text-center mb-10 sm:mb-12"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.45rem)" }}
          />

          <FadeIn delay={0.25} y={20}>
            <ContactButton
              onClick={() => {
                scrollTo("#contact");
              }}
            />
          </FadeIn>
        </div>

      </div>

    </section>
  );
}
