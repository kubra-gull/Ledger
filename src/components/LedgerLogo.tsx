import React from 'react';

interface LedgerLogoProps {
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
  className?: string;
}

export const LedgerLogo: React.FC<LedgerLogoProps> = ({
  showTagline = true,
  size = 'md',
  theme = 'light',
  className = '',
}) => {
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 52 : 40;
  const titleSize = size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-3xl' : 'text-2xl';
  const tagSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[11px]';

  const textColor = theme === 'dark' ? 'text-white' : 'text-slate-950';
  const tagColor = theme === 'dark' ? 'text-slate-300' : 'text-slate-700';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Exact Diamond Glyph in Rounded Squircle matching Ledger.LOGO.PNG.png */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-xs"
        aria-hidden="true"
      >
        {/* Black squircle container */}
        <rect width="100" height="100" rx="26" fill="#000000" />
        
        {/* Outer White Diamond */}
        <rect
          x="23"
          y="23"
          width="54"
          height="54"
          rx="4"
          transform="rotate(45 50 50)"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="7"
        />

        {/* Inner Concentric White Diamond */}
        <rect
          x="35"
          y="35"
          width="30"
          height="30"
          rx="2"
          transform="rotate(45 50 50)"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="5"
        />
      </svg>

      {/* Brand Text */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-serif font-bold tracking-tight ${titleSize} ${textColor}`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Ledger
        </span>
        {showTagline && (
          <span
            className={`font-sans font-medium tracking-wide mt-1 ${tagSize} ${tagColor}`}
          >
            Micro POS · Smart Ledger
          </span>
        )}
      </div>
    </div>
  );
};
