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
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Outer Infrastructure Frame */}
      <path 
        d="M20 20 L20 80 L80 80 L80 20 L60 20 L60 30 L70 30 L70 70 L30 70 L30 30 L40 30 L40 20 Z" 
        fill="url(#logoGradient)" 
        opacity="0.9"
      />
      
      {/* Inner Digital Core/Circuit */}
      <circle cx="50" cy="50" r="8" fill="#e0f2fe" filter="url(#glow)" />
      
      {/* Connecting Lines */}
      <path d="M50 20 L50 35" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 65 L50 80" stroke="#4f46e5" strokeWidth="4" strokeLinecap="round" />
      <path d="M20 50 L35 50" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
      <path d="M65 50 L80 50" stroke="#4f46e5" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
};