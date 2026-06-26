import React from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}

const SectionHeading = ({ eyebrow, title, subtitle }: SectionHeadingProps) => (
  <Reveal className="text-center mb-16">
    <div className="inline-flex items-center gap-3.5 mb-5">
      <span className="w-9 h-[2px] bg-gold" />
      <span className="font-label text-[13px] tracking-[0.32em] uppercase text-gold font-medium">
        {eyebrow}
      </span>
      <span className="w-9 h-[2px] bg-gold" />
    </div>
    <h2 className="font-display text-4xl md:text-5xl font-bold text-parchment mb-6">
      {title}
    </h2>
    <div className="w-24 h-1 rounded-full divider-shimmer mx-auto" />
    {subtitle && (
      <p className="text-lg text-parchment-dim max-w-3xl mx-auto mt-6">{subtitle}</p>
    )}
  </Reveal>
);

export default SectionHeading;
