"use client"
import React from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import CountUp from './CountUp';

const platforms = [
  {
    name: "CodeForces",
    handle: "@Rub_y · @StrikingHard",
    stats: "Pupil rating (1200+)",
    metric: "550+ solved",
  },
  {
    name: "Vjudge",
    handle: "@Die_01",
    stats: "Cross-judge grinder",
    metric: "141 solved",
  },
  {
    name: "HackerRank",
    handle: "@jerinusrat001",
    stats: "3-star · Silver in Algorithms",
    metric: "Verified badges",
  },
  {
    name: "LeetCode",
    handle: "@striking_hard",
    stats: "Steady climber",
    metric: "35+ solved",
  },
];

const categories = [
  'Dynamic Programming', 'Graph Algorithms', 'Data Structures', 'String Processing',
  'Greedy Algorithms', 'Binary Search', 'Tree Algorithms', 'Number Theory'
];

const ProblemSolving = () => {
  return (
    <section id="problem-solving" className="section-padding bg-ink corps-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="104th Training Corps"
          title={<>Cadet <span className="text-crimson-bright">Rankings</span></>}
          subtitle="Every solved problem is a drill. Here's where that training has landed me, board-style — the way the Corps used to post results for everyone to see."
        />

        {/* Ranking board */}
        <Reveal className="plank-board rivets relative rounded-sm p-3 md:p-5 mb-16">
          <div className="space-y-2">
            {platforms.map((platform, index) => (
              <Reveal
                key={platform.name}
                delay={index * 100}
                className="group flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-6 bg-ink/40 hover:bg-ink/70 border border-gold/15 hover:border-gold/40 rounded-sm px-4 md:px-6 py-4 transition-colors duration-300"
              >
                <span
                  className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-none text-transparent shrink-0 w-[1.2em] sm:w-[1.4em] text-center"
                  style={{ WebkitTextStroke: '1.5px #b8924c' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0 basis-40">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-lg md:text-xl font-bold text-parchment">{platform.name}</h3>
                    <span className="text-parchment-dim text-sm font-label tracking-wide">{platform.handle}</span>
                  </div>
                  <p className="text-parchment-dim text-sm mt-1">{platform.stats}</p>
                </div>
                <span className="font-label text-xs md:text-sm tracking-[0.1em] uppercase text-gold border border-gold/30 rounded-full px-3 py-1.5 whitespace-nowrap group-hover:bg-gold/10 transition-colors ml-[3.4em] sm:ml-0">
                  {platform.metric}
                </span>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Combat specialties */}
          <Reveal>
            <h3 className="font-display text-3xl font-bold text-parchment mb-8">Combat Specialties</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="tag-label bg-ink-soft border border-gold/20 pl-5 pr-4 py-2 text-sm font-medium text-parchment-dim transition-all duration-300 hover:border-gold/50 hover:text-parchment hover:-translate-y-0.5"
                >
                  {category}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Field evaluation report */}
          <Reveal delay={150} className="relative dossier-card rounded-sm p-8">
            <span className="stamp absolute top-4 right-4 text-corps-green text-xs border-corps-green/70">
              Verified
            </span>
            <h3 className="font-display text-2xl font-bold text-parchment mb-6">Field Evaluation Report</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-display text-3xl md:text-4xl font-bold text-gold" style={{ textShadow: '0 0 18px rgba(184,146,76,0.4)' }}>
                  <CountUp value={60} suffix="+" />
                </div>
                <div className="text-parchment-dim font-label tracking-wide uppercase text-xs mt-1">Contests</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl font-bold text-gold" style={{ textShadow: '0 0 18px rgba(184,146,76,0.4)' }}>
                  <CountUp value={500} suffix="+" />
                </div>
                <div className="text-parchment-dim font-label tracking-wide uppercase text-xs mt-1">Problems</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl font-bold text-gold" style={{ textShadow: '0 0 18px rgba(184,146,76,0.4)' }}>
                  <CountUp value={25} suffix="+" />
                </div>
                <div className="text-parchment-dim font-label tracking-wide uppercase text-xs mt-1">Top 50%</div>
              </div>
            </div>
            <p className="text-parchment-dim text-sm mt-6 leading-relaxed">
              Also fielded multiple ACM-ICPC regional contests as part of standard Corps deployment.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
