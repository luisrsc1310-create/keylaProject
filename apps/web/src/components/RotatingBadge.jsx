import React from 'react';

export default function RotatingBadge({ className = '' }) {
  return (
    <div className={`relative h-28 w-28 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 128 128" className="animate-spin-slow h-full w-full">
        <circle cx="64" cy="64" r="64" className="fill-primary" />
        <circle cx="64" cy="64" r="63" fill="none" className="stroke-foreground" strokeWidth="1" />
        <defs>
          <path
            id="badge-circle"
            d="M 64,64 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
          />
        </defs>
        <text className="fill-primary-foreground font-display" fontSize="11.5" letterSpacing="2.6">
          <textPath href="#badge-circle">PORTUGUÊS · ENGLISH · 日本語 ·</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-display text-2xl font-medium text-primary-foreground">
        訳
      </span>
    </div>
  );
}
