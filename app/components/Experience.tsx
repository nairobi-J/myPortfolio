"use client"
import React from 'react';
import { MapPin, Calendar, Flag } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { WallArcs } from './Motifs';

const experiences = [
  {
    title: "Junior Software Developer",
    company: "Supplyr",
    location: "Remote",
    duration: "January 2024 - April 2024",
    description: "First Worked on frontend development tasks using VueJs and then started working as full stack developer. Gained hands-on experience in professional development environment.",
    achievements: [
      "Developed responsive UI components used across the application",
      "Fixed bugs and improved user experience based on feedback",
      "Collaborated with fellow developers using Git and Agile methodologies"
    ]
  },
  {
    title: "Junior Software Engineer",
    company: "Dynamic Solution Innovators (DSi)",
    location: "On-Site",
    duration: "December 2025 - Present",
    description: "Contributing to enterprise financial software by developing and maintaining secure document processing, automation, and workflow solutions within an Agile development environment.",
    achievements: [
      "Develop and enhance enterprise software features and document processing workflows",
      "Maintain and optimize legacy systems using Bash, Perl, Python, and proprietary enterprise tools",
      "Collaborate with cross-functional teams to deliver secure, scalable, and high-quality software solutions"
    ]
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-ink-soft corps-texture relative overflow-hidden">
      <WallArcs className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[140%] max-w-none h-auto text-gold opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="Expedition Log"
          title={<>Beyond The <span className="text-crimson-bright">Walls</span></>}
          subtitle="Every posting is a waypoint on the route — logged, dated, and reported back to HQ."
        />

        <div className="relative">
          {/* Route line — dashed, like a marked expedition path */}
          <div className="absolute left-8 top-3 bottom-3 w-0.5 border-l-2 border-dashed border-gold/50 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <Reveal key={index} delay={index * 120} className="relative">
                {/* Waypoint marker */}
                <div className="absolute left-2.5 w-11 h-11 bg-ink-soft border-2 border-gold rounded-full shadow-lg hidden md:flex items-center justify-center z-10">
                  <Flag size={16} className="text-crimson-bright" />
                </div>

                <div className="md:ml-20 dossier-card rounded-sm p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <span className="font-label text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-1 block">
                        Waypoint {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-parchment mb-2">{experience.title}</h3>
                      <h4 className="font-label text-lg tracking-wide uppercase text-gold mb-2">{experience.company}</h4>
                    </div>
                    <div className="flex flex-col md:text-right text-parchment-dim">
                      <div className="flex items-center gap-2 mb-1 md:justify-end">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-2 md:justify-end">
                        <Calendar size={16} />
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-parchment-dim mb-6 leading-relaxed">{experience.description}</p>

                  <div>
                    <h5 className="font-label text-sm tracking-wide uppercase text-parchment mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-crimson-bright rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-parchment-dim">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
