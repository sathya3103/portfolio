"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = "", style }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.p
      initial={{ opacity: 0.15, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`select-none leading-relaxed text-center lg:text-left ${className}`}
      style={style}
    >
      {words.map((word, idx) => (
        <span
          key={idx}
          onMouseEnter={(e) => {
            e.currentTarget.classList.add("text-white");
            e.currentTarget.classList.remove("text-[#D7E2EA]/30");
          }}
          className="inline-block transition-colors duration-300 ease-out text-[#D7E2EA]/30 cursor-default mr-[0.24em]"
        >
          {word}
        </span>
      ))}
    </motion.p>
  );
}
