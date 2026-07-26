"use client";

interface LiveProjectButtonProps {
  href?: string;
  label?: string;
  onClick?: () => void;
  className?: string;
}

export default function LiveProjectButton({ href, label = "Live Project", onClick, className = "" }: LiveProjectButtonProps) {
  const content = (
    <span className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-colors duration-200 hover:bg-[#D7E2EA]/10 px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm ${className}`}>
      {label}
    </span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className="inline-block focus-visible:outline-none">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block focus-visible:outline-none">
      {content}
    </button>
  );
}
