"use client";

import React from "react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Career", href: "#career" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId) || document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof window !== "undefined") {
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <header className="fixed top-3 sm:top-6 inset-x-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none select-none">
      <nav
        aria-label="Primary navigation"
        className="pointer-events-auto flex items-center px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-[#111111]/80 backdrop-blur-md border border-[#D7E2EA]/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.08)] max-w-full"
      >
        <ul className="flex items-center gap-0.5 sm:gap-1 list-none m-0 p-0" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-2 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-sm font-medium tracking-normal sm:tracking-wide text-[#D7E2EA]/75 hover:text-white hover:bg-white/[0.08] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:text-white focus-visible:outline-none inline-block whitespace-nowrap cursor-pointer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
