"use client"
import React from 'react';
import { Users, Eye, MessageSquare, Compass as CompassIcon } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { CompassRose } from './Motifs';

const focusAreas = [
  {
    title: "Human-Centered Design",
    description: "Designing software around how people actually think, behave, and make mistakes — not just what's technically convenient to build.",
    icon: Users
  },
  {
    title: "Usability Evaluation",
    description: "Studying how real users interact with interfaces to find friction points that metrics and code review alone can't surface.",
    icon: Eye
  },
  {
    title: "Human-AI Interaction",
    description: "Exploring how people build trust in, understand, and collaborate with AI-powered features — relevant to several of my own AI-assisted projects.",
    icon: MessageSquare
  },
  {
    title: "Accessibility & Inclusive Design",
    description: "Investigating how to make interfaces usable for people across different abilities, contexts, and levels of technical familiarity.",
    icon: CompassIcon
  }
];

const HCIResearch = () => {
  return (
    <section id="research" className="section-padding bg-ink-soft corps-texture relative overflow-hidden">
      <CompassRose className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 w-72 h-72 text-gold opacity-[0.05] rotate-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="torn-edge dossier-card rounded-none p-8 md:p-12 mb-12">
          <span className="stamp absolute top-6 right-6 text-gold text-xs border-gold/60 hidden sm:inline-block">
            Uncharted
          </span>
          <SectionHeading
            eyebrow="Scouting New Frontiers"
            title={<>Research Interest <span className="text-crimson-bright">— HCI</span></>}
            subtitle="Beyond shipping features, I'm drawn to understanding the human side of the systems we build — how people perceive, trust, and struggle with software."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <Reveal key={index} delay={index * 100} className="bg-ink/40 border border-gold/15 rounded-sm p-6 transition-all duration-300 hover:border-gold/40 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-6">
                  <area.icon className="text-gold" size={26} />
                </div>
                <h3 className="font-display text-lg font-bold text-parchment mb-2">{area.title}</h3>
                <p className="text-parchment-dim text-sm leading-relaxed">{area.description}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200} className="dossier-card rounded-sm p-8 text-center max-w-3xl mx-auto">
          <p className="text-parchment-dim leading-relaxed">
            As a Software Engineering undergraduate, my engineering work keeps surfacing the same
            question: <span className="text-parchment font-medium">why do well-built systems still fail their users?</span>{' '}
            That question is pulling me toward HCI research — and I'm actively looking to get involved
            in studies, coursework, or collaborations in this space.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default HCIResearch;
