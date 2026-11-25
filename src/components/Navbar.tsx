import React from "react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-3 sm:top-6 inset-x-0 z-40 flex justify-center px-2 sm:px-4 pointer-events-none select-none">
      <nav
        aria-label="Primary navigation"
        className="pointer-events-auto flex items-center px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-[#111111]/80 backdrop-blur-md border border-[#D7E2EA]/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#7C3AED]/40 hover:shadow-[0_8px_32px_rgba(124,58,237,0.15)] max-w-full"
      >
        <ul className="flex items-center gap-0.5 sm:gap-1 list-none m-0 p-0" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-2 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-sm font-medium tracking-normal sm:tracking-wide text-[#D7E2EA]/75 hover:text-white hover:bg-white/[0.06] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:text-white focus-visible:outline-none inline-block whitespace-nowrap"
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
