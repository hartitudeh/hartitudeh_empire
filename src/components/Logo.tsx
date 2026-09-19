import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: 'light' | 'dark' | 'color';
}

export default function Logo({ className = "h-10", iconOnly = false, variant = 'color' }: LogoProps) {
  const isLight = variant === 'light';

  const purpleColor = isLight ? "#FFFFFF" : "#19013b";
  const goldColor = "#C5A059";
  const textColor = isLight ? "#FFFFFF" : "#19013b";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Vector Emblem SVG */}
      <svg
        viewBox="0 0 120 120"
        className="h-full w-auto aspect-square flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Crown (Gold Geometric Crown Line Art) */}
        <path
          d="M 22 46 L 22 28 L 36 38 L 60 14 L 84 38 L 98 28 L 98 46 L 86 38 L 74 52 L 60 36 L 46 52 L 34 38 Z"
          fill={goldColor}
        />

        {/* Outer Base Footings */}
        <path
          d="M 14 86 L 110 86 L 110 92 L 14 92 Z"
          fill={purpleColor}
        />

        {/* Left 'H' Outer Column */}
        <path
          d="M 20 50 L 32 50 L 32 86 L 20 86 Z"
          fill={purpleColor}
        />

        {/* Right 'H' Outer Column */}
        <path
          d="M 88 50 L 100 50 L 100 86 L 88 86 Z"
          fill={purpleColor}
        />

        {/* Left Inner Tall Spires */}
        <path
          d="M 44 32 L 54 32 L 54 86 L 44 86 Z"
          fill={purpleColor}
        />

        {/* Right Inner Tall Spires */}
        <path
          d="M 66 32 L 76 32 L 76 86 L 66 86 Z"
          fill={purpleColor}
        />

        {/* Central Geometric Gold H Crossbar */}
        <path
          d="M 32 60 L 88 60 L 88 68 L 32 68 Z"
          fill={goldColor}
        />
        <path
          d="M 38 64 L 82 64 L 82 68 L 38 68 Z"
          fill={purpleColor}
        />

        {/* Bottom Inner Doorway Portal Cutout */}
        <path
          d="M 54 74 L 66 74 L 66 86 L 54 86 Z"
          fill={isLight ? "#19013b" : "#FFFFFF"}
        />
      </svg>

      {/* Brand Text Lockup */}
      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none">
          <span
            className="font-display font-black tracking-wider text-base md:text-lg"
            style={{ color: textColor }}
          >
            HARTITUDEH
          </span>
          <span
            className="font-display font-semibold tracking-[0.32em] text-[10px] md:text-[11px] uppercase mt-1"
            style={{ color: goldColor }}
          >
            EMPIRE
          </span>
        </div>
      )}
    </div>
  );
}
