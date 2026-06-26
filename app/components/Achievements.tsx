"use client"
import React from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { Medal } from './Motifs';

const achievements = [
  { title: "Supervised Machine Learning", issuer: "Coursera", date: "2025" },
  { title: "HackerRank Intermediate Database", issuer: "HackerRank", date: "2025" },
  { title: "EDGE - Python & Data Science", issuer: "ICT Ministry of Bangladesh", date: "2024" },
];

const competitions = [
  { title: "NASA SpaceApp Challenge Finalist", year: "2024" },
  { title: "Leading University Hackathon", year: "2024" },
  { title: "Therap Javafest 2025", year: "2025" },
  { title: "University Innovation Hub", year: "2023" },
  { title: "Exgeris-1.0", year: "2022" }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding bg-ink corps-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="Wall Of Honor"
          title={<>Commendations & <span className="text-crimson-bright">Medals</span></>}
          subtitle="Certifications earned and competitions fought — mounted here the way a Corps mess hall keeps its honors."
        />

        {/* Medal wall */}
        <div className="plank-board rivets relative rounded-sm p-6 md:p-10 mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Reveal key={index} delay={index * 100} className="flex flex-col items-center text-center">
                <Medal className="w-16 h-20 text-gold mb-3 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-110 hover:-rotate-3" />
                <h3 className="font-display text-base font-bold text-parchment leading-snug">{achievement.title}</h3>
                <p className="text-gold text-sm font-medium mt-1">{achievement.issuer}</p>
                <p className="text-parchment-dim text-xs">{achievement.date}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Campaign ribbons */}
        <div>
          <h3 className="font-display text-3xl font-bold text-center text-parchment mb-8">
            Campaign Record
          </h3>
          <div className="space-y-3 max-w-3xl mx-auto">
            {competitions.map((competition, index) => (
              <Reveal key={index} delay={index * 80}>
                <div className="flex items-center gap-0 dossier-card rounded-sm overflow-hidden">
                  <div className="w-2.5 self-stretch bg-gradient-to-b from-crimson-bright via-gold to-corps-green" />
                  <div className="flex-1 flex flex-wrap items-baseline justify-between gap-2 px-6 py-4">
                    <h4 className="font-display text-lg md:text-xl font-bold text-parchment">{competition.title}</h4>
                    <span className="font-label text-sm tracking-wide text-gold">{competition.year}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
