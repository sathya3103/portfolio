"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ComputerFace() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [isWinking, setIsWinking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.hypot(dx, dy) || 1;

      // Limit look offset for internal face elements (eyes/mouth)
      const maxOffset = 12;
      const targetX = (dx / distance) * Math.min(Math.abs(dx) * 0.04, maxOffset);
      const targetY = (dy / distance) * Math.min(Math.abs(dy) * 0.04, maxOffset);

      // Calculate 3D tilt angles for the computer monitor shell
      const rotateX = -(dy / window.innerHeight) * 18; // tilt up/down
      const rotateY = (dx / window.innerWidth) * 18;   // tilt left/right

      setOffset({ x: targetX, y: targetY, rotateX, rotateY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Alternating Blink and Playful Wink Interval loop
    const faceAnimationInterval = setInterval(() => {
      const isWinkChoice = Math.random() > 0.6; // 40% chance of winking instead of standard blinking
      
      if (isWinkChoice) {
        setIsWinking(true);
        setTimeout(() => setIsWinking(false), 220); // Longer wink duration for clarity
      } else {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 140);
      }
    }, 3800);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(faceAnimationInterval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center pointer-events-none"
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        animate={{
          rotateX: offset.rotateX,
          rotateY: offset.rotateY,
          y: [0, -8, 0],
        }}
        transition={{
          rotateX: { type: "spring", stiffness: 100, damping: 20 },
          rotateY: { type: "spring", stiffness: 100, damping: 20 },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
        className="w-[280px] h-[250px] sm:w-[350px] sm:h-[310px] md:w-[420px] md:h-[370px] lg:w-[480px] lg:h-[420px] xl:w-[540px] xl:h-[470px] bg-[#121212] border-4 border-[#D7E2EA]/20 rounded-[48px] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col justify-between relative overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* CRT Scanline Overlay */}
        <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-20 z-20 rounded-[40px]" />
        
        {/* Inner Screen */}
        <div className="absolute inset-4 bg-[#070707] rounded-[36px] border border-[#D7E2EA]/10 shadow-[inner_0_0_20px_rgba(0,0,0,0.95)] flex items-center justify-center overflow-hidden z-10">
          
          {/* Glowing purple ambient highlight inside the monitor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#7C3AED]/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Interactive Face Element (moves inside screen bounds) */}
          <motion.div
            animate={{
              x: offset.x,
              y: offset.y,
            }}
            transition={{ type: "spring", stiffness: 140, damping: 22 }}
            className="flex flex-col items-center justify-center gap-6 sm:gap-7 z-10"
          >
            {/* Eyes */}
            <div className="flex gap-11 sm:gap-14">
              {/* Left Eye: closes only on regular blinking */}
              <motion.div
                animate={{
                  scaleY: isBlinking ? 0.15 : 1.0,
                }}
                transition={{ duration: 0.08 }}
                className="w-5 h-8 sm:w-[26px] sm:h-[40px] rounded-full bg-[#D7E2EA] shadow-[0_0_16px_rgba(215,226,234,0.7)]"
              />
              {/* Right Eye: closes on regular blinking OR during a wink */}
              <motion.div
                animate={{
                  scaleY: (isBlinking || isWinking) ? 0.15 : 1.0,
                }}
                transition={{ duration: 0.08 }}
                className="w-5 h-8 sm:w-[26px] sm:h-[40px] rounded-full bg-[#D7E2EA] shadow-[0_0_16px_rgba(215,226,234,0.7)]"
              />
            </div>

            {/* Cute Mouth */}
            <svg
              width="54"
              height="22"
              viewBox="0 0 54 22"
              fill="none"
              className="text-[#D7E2EA] filter drop-shadow-[0_0_6px_rgba(215,226,234,0.6)] mt-1.5"
            >
              <path
                d="M7 6C17 17 37 17 47 6"
                stroke="currentColor"
                strokeWidth="5.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>

        {/* Retro computer bottom detailing (disk slot / power light) */}
        <div className="h-6 flex items-center justify-between px-4 mt-auto border-t border-[#D7E2EA]/5 pt-4 z-10">
          {/* Floppy Slot */}
          <div className="w-14 h-1.5 rounded-full bg-[#070707] border border-[#D7E2EA]/10" />
          
          {/* LED Light */}
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] shadow-[0_0_6px_#7C3AED] animate-pulse" />
            <span className="text-[7px] font-mono text-[#D7E2EA]/30 tracking-widest uppercase">PWR</span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
