"use client"
import React from 'react';
import { Code, Coffee, Lightbulb } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import CountUp from './CountUp';

const traits = [
  { icon: Code, label: 'Clean Code', bg: 'bg-gold/10 border-gold/30', color: 'text-gold' },
  { icon: Coffee, label: 'Tea Lover', bg: 'bg-corps-green/20 border-corps-green/50', color: 'text-parchment' },
  { icon: Lightbulb, label: 'Problem Solver', bg: 'bg-crimson/15 border-crimson-bright/40', color: 'text-crimson-bright' },
];

const stats = [
  { label: 'Personal Projects', value: 20 },
  { label: 'Years of Learning', value: 3 },
  { label: 'Courses Completed', value: 30 },
  { label: 'Technologies Learned', value: 10 },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-ink corps-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="Personnel File"
          title={<>About <span className="text-crimson-bright">the Cadet</span></>}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-lg text-parchment-dim mb-6 leading-relaxed">
              Im a passionate Software Engineering undergraduate student with a strong interest in
              software development and web technologies. I love learning new technologies and
              turning complex problems into simple, elegant solutions.
            </p>
            <p className="text-lg text-parchment-dim mb-6 leading-relaxed">
              My journey in programming started with problem solving, and it has
              evolved into a deep passion for creating innovative applications — and, more
              recently, for understanding how people actually experience the software we build.
            </p>
            <p className="text-lg text-parchment-dim mb-8 leading-relaxed">
              When Im not studying or coding, you can find me exploring new technologies,
              participating in coding competitions, or working on personal projects to enhance my skills.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {traits.map((trait, index) => (
                <Reveal key={trait.label} delay={index * 100} className="text-center">
                  <div className={`${trait.bg} border w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300 hover:scale-110 hover:rotate-6`}>
                    <trait.icon className={trait.color} size={28} />
                  </div>
                  <h3 className="font-label text-sm tracking-wide uppercase text-parchment">{trait.label}</h3>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Survey Corps ID card */}
          <Reveal delay={150} className="relative">
            <div className="dossier-card rounded-sm p-1 relative">
              <span className="stamp absolute top-3 right-3 z-10 text-crimson-bright text-[10px] border-crimson-bright/70">
                Active Duty
              </span>
              <div className="bg-ink-soft rounded-sm p-6 md:p-8">
                <div className="flex items-center justify-between border-b border-gold/15 pb-3 mb-5">
                  <span className="font-label text-[11px] tracking-[0.18em] uppercase text-gold">Survey Corps</span>
                  <span className="font-label text-[11px] tracking-[0.18em] uppercase text-parchment-dim">Software Division</span>
                </div>

                <div className="flex items-center gap-5 mb-6">
                  {/* Drop a real photo in here — replace this placeholder with an <img> tag */}
                  <div className="w-20 h-20 shrink-0 rounded-sm border-2 border-dashed border-gold/40 bg-ink flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-gold">NJJ</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-parchment leading-tight">Nusrat Jahan Jerin</h3>
                    <p className="font-label text-sm tracking-wide uppercase text-gold mt-1">Software Engineering Cadet</p>
                    <p className="text-parchment-dim text-sm mt-1">File No. 104</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`flex justify-between items-center ${index < stats.length - 1 ? 'border-b border-gold/10 pb-3' : ''}`}
                    >
                      <span className="font-label text-sm tracking-wide uppercase text-parchment-dim">{stat.label}</span>
                      <span className="font-display text-2xl font-bold text-gold" style={{ textShadow: '0 0 18px rgba(184,146,76,0.4)' }}>
                        <CountUp value={stat.value} suffix="+" />
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative barcode strip */}
                <div
                  className="h-6 mt-6 rounded-sm opacity-50"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, #e9dcc2 0px, #e9dcc2 2px, transparent 2px, transparent 5px, #e9dcc2 5px, #e9dcc2 6px, transparent 6px, transparent 10px)"
                  }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
