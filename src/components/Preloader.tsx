"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let fadeTimer: NodeJS.Timeout;
    let removeTimer: NodeJS.Timeout;

    const handleDismiss = () => {
      setFadeOut(true);
      removeTimer = setTimeout(() => {
        setVisible(false);
      }, 500);
    };

    // Fast fallback timer (1.0s) so portfolio loading feels instant
    fadeTimer = setTimeout(handleDismiss, 1000);

    if (document.readyState === "complete") {
      handleDismiss();
    } else {
      window.addEventListener("load", handleDismiss, { once: true });
    }

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      window.removeEventListener("load", handleDismiss);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#0C0C0C] z-[9999] flex flex-col items-center justify-center gap-6 px-6 transition-opacity duration-500 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Dino Runner Platform */}
      <div className="dino-loader select-none pointer-events-none">
        <div className="dino-runner" />
        <div className="dino-obstacle" />
        <div className="dino-ground" />
      </div>

      {/* Loader Message */}
      <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-mono animate-pulse mt-4">
        Initializing Sathyanesar&apos;s Portfolio...
      </span>
    </div>
  );
}
