import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: 'light' | 'dark' | 'color';
}

export default function Logo({ className = "h-10", iconOnly = false, variant = 'color' }: LogoProps) {
  const isLight = variant === 'light';

  const purpleColor = isLight ? "#FFFFFF" : "#19013b";
  const goldColor = "#D4AF37";
  const textColor = isLight ? "#FFFFFF" : "#19013b";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Emblem SVG */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto aspect-square flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Shield / Crown Emblem */}
        {/* Crown Peaks (Gold) */}
        <path
          d="M 20 35 L 35 20 L 50 30 L 65 20 L 80 35 L 72 40 L 50 28 L 28 40 Z"
          fill={goldColor}
        />
        
        {/* Left Pillar (H Left Vertical Bar) */}
        <path
          d="M 22 42 L 35 42 L 35 85 L 22 85 Z"
          fill={purpleColor}
          rx="2"
        />

        {/* Right Pillar (H Right Vertical Bar) */}
        <path
          d="M 65 42 L 78 42 L 78 85 L 65 85 Z"
          fill={purpleColor}
          rx="2"
        />

        {/* Center Tech Monolith / Crossbar (H Interlock) */}
        <path
          d="M 35 58 L 65 58 L 65 67 L 35 67 Z"
          fill={purpleColor}
        />

        {/* Gold Architectural Arch & Horizon Line */}
        <path
          d="M 35 52 Q 50 44 65 52 L 65 56 Q 50 48 35 56 Z"
          fill={goldColor}
        />

        {/* Center Empire Crown Spire */}
        <polygon
          points="50,34 44,52 56,52"
          fill={goldColor}
        />
      </svg>

      {/* Brand Text Lockup */}
      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none">
          <span
            className="font-display font-extrabold tracking-wider text-base md:text-lg"
            style={{ color: textColor }}
          >
            HARTITUDEH
          </span>
          <span
            className="font-display font-semibold tracking-[0.25em] text-[10px] md:text-[11px] uppercase mt-0.5"
            style={{ color: goldColor }}
          >
            EMPIRE
          </span>
        </div>
      )}
    </div>
  );
}
