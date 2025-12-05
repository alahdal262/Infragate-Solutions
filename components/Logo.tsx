import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Minimalist Gateway Concept */}
      {/* Vertical Pillars representing Structure */}
      <rect x="28" y="20" width="10" height="60" rx="3" fill="url(#logoGradient)" />
      <rect x="62" y="20" width="10" height="60" rx="3" fill="url(#logoGradient)" />
      
      {/* Central Intelligence Node */}
      <circle cx="50" cy="50" r="6" fill="#e0f2fe" filter="url(#softGlow)" />
      
      {/* Digital Connection Beams */}
      <path d="M38 50 L44 50" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M56 50 L62 50" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Subtle Arch/Overhead Data Flow */}
      <path 
        d="M33 20 C 33 10, 67 10, 67 20" 
        stroke="url(#logoGradient)" 
        strokeWidth="2" 
        strokeOpacity="0.5"
        fill="none"
      />
    </svg>
  );
};