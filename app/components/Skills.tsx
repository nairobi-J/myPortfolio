"use client"

import React from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { TwinBlades } from './Motifs';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["Next.js", "React.js", "TypeScript", "Vue.js", "HTML/CSS", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "SpringBoot", "Python", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git/GitHub", "Docker", "Azure", "Figma", "Flask", "Supabase", "Java-Swing", "SFML", "Flutter"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-ink-soft corps-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-center mb-3">
          <TwinBlades className="w-12 h-12 text-gold" />
        </div>
        <SectionHeading
          eyebrow="ODM Gear Loadout"
          title={<>Equipment <span className="text-crimson-bright">Rack</span></>}
          subtitle="Standard issue for any engagement — the blades, gas canisters, and gear every cadet keeps sharpened."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={categoryIndex} delay={categoryIndex * 120} className="relative dossier-card rounded-sm overflow-hidden">
              <div className="hazard-stripe h-1.5" />
              <div className="tag-label bg-crimson/90 pl-6 pr-4 py-3 -mt-px">
                <h3 className="font-label text-sm tracking-[0.12em] uppercase font-semibold text-parchment">
                  {category.title}
                </h3>
              </div>
              <div className="p-6 pt-5 space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group flex items-center justify-between border-b border-gold/10 last:border-b-0 pb-3 last:pb-0"
                  >
                    <span className="font-medium text-parchment-dim group-hover:text-parchment transition-colors">{skill}</span>
                    <span className="w-2 h-2 rounded-full bg-gold/40 group-hover:bg-gold group-hover:scale-150 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Programming Languages */}
        <Reveal className="mt-16">
          <h3 className="font-display text-3xl font-bold text-center text-parchment mb-8">
            Standard-Issue Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript'].map((lang, index) => (
              <span
                key={index}
                className="bg-ink px-6 py-3 rounded-full border border-gold/25 text-parchment font-medium transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-[0_8px_20px_-8px_rgba(184,146,76,0.5)]"
              >
                {lang}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
