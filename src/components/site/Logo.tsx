export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" className={`flex items-center gap-2 group ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-gold">
        <path
          d="M12 2c4 4 6 8 6 12a6 6 0 1 1-12 0c0-4 2-8 6-12z"
          fill="currentColor"
          opacity="0.95"
        />
        <path d="M12 6v15" stroke="#0C0B13" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <span className="font-display italic text-xl text-cream tracking-wide">
        urva <span className="text-gold-gradient not-italic font-semibold">event</span> planners
      </span>
    </a>
  );
}
