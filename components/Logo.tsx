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
      </defs>
      
      {/* Smart & Simple Concept: The Hexagonal Node */}
      {/* Represents stability (hexagon), data (center point), and flow (lines) */}
      
      {/* Outer Hexagon Stroke */}
      <path 
        d="M50 15 L85 35 V75 L50 95 L15 75 V35 Z" 
        stroke="url(#logoGradient)" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Central Core (Smart Intelligence) */}
      <circle cx="50" cy="55" r="10" fill="url(#logoGradient)" />
      
      {/* Data Ingress/Egress */}
      <path d="M50 15 V35" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
      
    </svg>
  );
};