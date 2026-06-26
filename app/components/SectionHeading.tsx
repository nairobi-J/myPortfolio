import React from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}

const SectionHeading = ({ eyebrow, title, subtitle }: SectionHeadingProps) => (
  <Reveal className="text-center mb-16 px-2">
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 mb-5">
      <span className="hidden sm:inline-block w-9 h-[2px] bg-gold" />
      <span className="font-label text-[11px] sm:text-[13px] tracking-[0.18em] sm:tracking-[0.32em] uppercase text-gold font-medium">
        {eyebrow}
      </span>
      <span className="hidden sm:inline-block w-9 h-[2px] bg-gold" />
    </div>
    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-parchment mb-6">
      {title}
    </h2>
    <div className="w-24 h-1 rounded-full divider-shimmer mx-auto" />
    {subtitle && (
      <p className="text-lg text-parchment-dim max-w-3xl mx-auto mt-6">{subtitle}</p>
    )}
  </Reveal>
);

export default SectionHeading;
