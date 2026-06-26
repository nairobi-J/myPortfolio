import React from 'react';

interface MotifProps {
  className?: string;
  style?: React.CSSProperties;
}

// Three concentric wall arcs — Maria, Rose, Sina — used as a faint backdrop
// watermark. Decorative only; labels are optional.
export const WallArcs = ({ className = '', style }: MotifProps) => (
  <svg viewBox="0 0 600 300" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 300 A 300 300 0 0 1 600 300" stroke="#b8924c" strokeWidth="1.5" />
    <path d="M70 300 A 230 230 0 0 1 530 300" stroke="#b8924c" strokeWidth="1.5" strokeOpacity="0.7" />
    <path d="M150 300 A 150 150 0 0 1 450 300" stroke="#b8924c" strokeWidth="1.5" strokeOpacity="0.5" />
  </svg>
);

export const CompassRose = ({ className = '', style }: MotifProps) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1" />
    <circle cx="50" cy="50" r="2.5" fill="currentColor" />
    <path d="M50 6 L57 44 L50 50 L43 44 Z" fill="currentColor" />
    <path d="M50 94 L57 56 L50 50 L43 56 Z" fill="currentColor" opacity="0.5" />
    <path d="M6 50 L44 43 L50 50 L44 57 Z" fill="currentColor" opacity="0.5" />
    <path d="M94 50 L56 43 L50 50 L56 57 Z" fill="currentColor" opacity="0.5" />
  </svg>
);

// A signal flare's smoke trail — used in Contact ("fire a flare to reach HQ").
export const FlareTrail = ({ className = '', style }: MotifProps) => (
  <svg viewBox="0 0 60 140" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30 140 C 26 110, 36 95, 28 70 C 22 50, 38 38, 30 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path d="M30 14 L36 0 M30 14 L24 0 M30 14 L30 -2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="30" cy="10" r="5" fill="currentColor" />
  </svg>
);

// Campaign medal with a ribbon tail — Achievements wall.
export const Medal = ({ className = '', style }: MotifProps) => (
  <svg viewBox="0 0 80 110" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 0 L34 38 L24 38 Z" fill="currentColor" opacity="0.5" />
    <path d="M52 0 L46 38 L56 38 Z" fill="currentColor" opacity="0.5" />
    <circle cx="40" cy="62" r="26" stroke="currentColor" strokeWidth="3" />
    <circle cx="40" cy="62" r="17" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <path d="M40 50 L45 60 L56 61 L47 68 L50 79 L40 73 L30 79 L33 68 L24 61 L35 60 Z" fill="currentColor" />
  </svg>
);

// Twin training-blade glyph — Skills / ODM gear loadout sticker.
export const TwinBlades = ({ className = '', style }: MotifProps) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 80 L70 30 M70 30 L60 30 M70 30 L70 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M80 80 L30 30 M30 30 L40 30 M30 30 L30 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
