"use client";
import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { WallArcs } from "./Motifs";

// Scout Corps wax-seal emblem — a fixed-size SVG so it can never drift off
// the section regardless of content reflow. Centering is handled by the
// flex wrapper around it, not by percentage offsets on the SVG itself.
// Each ring/wing draws in on its own delay for a more deliberate, ceremonial reveal.
const ScoutSeal = () => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full animate-emblem-drift"
  >
    <circle cx="100" cy="100" r="92" stroke="#b8924c" strokeWidth="1.5" pathLength="1" className="animate-draw-wing" style={{ animationDelay: "0.1s" }} />
    <circle cx="100" cy="100" r="78" stroke="#b8924c" strokeWidth="1" strokeOpacity="0.5" pathLength="1" className="animate-draw-wing" style={{ animationDelay: "0.35s" }} />
    <g stroke="#b8924c" strokeWidth="2" strokeLinecap="round">
      <path d="M100 55 C70 62, 48 60, 28 42 C42 78, 38 102, 22 120 C50 114, 72 126, 84 150" pathLength="1" className="animate-draw-wing" style={{ animationDelay: "0.6s" }} />
      <path d="M100 55 C130 62, 152 60, 172 42 C158 78, 162 102, 178 120 C150 114, 128 126, 116 150" pathLength="1" className="animate-draw-wing" style={{ animationDelay: "0.6s" }} />
    </g>
    <path d="M100 60 L100 150 M78 95 L122 95" stroke="#8a2424" strokeWidth="3" strokeLinecap="round" pathLength="1" className="animate-draw-wing" style={{ animationDelay: "1.1s" }} />
  </svg>
);

const embers = [
  { left: "8%", delay: "0s", duration: "7s" },
  { left: "18%", delay: "2.2s", duration: "8s" },
  { left: "33%", delay: "4.1s", duration: "6.5s" },
  { left: "52%", delay: "1.3s", duration: "9s" },
  { left: "67%", delay: "3.4s", duration: "7.5s" },
  { left: "81%", delay: "0.8s", duration: "8.5s" },
  { left: "92%", delay: "5s", duration: "7s" },
];

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [leviLoaded, setLeviLoaded] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 90% 70% at 75% 50%, rgba(138,36,36,0.10), transparent 60%), radial-gradient(ellipse 60% 80% at 10% 100%, rgba(51,80,62,0.12), transparent 60%), linear-gradient(180deg, #15110d 0%, #100d0a 100%)",
      }}
    >
      {/* Scanline texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, transparent 1px, transparent 2px)",
        }}
      />

      {/* Far background layer — the walls on the horizon, deepest parallax */}
      <WallArcs
        className="absolute left-1/2 bottom-0 w-[160%] max-w-none h-auto text-gold opacity-[0.07] pointer-events-none"
        style={{
          transform: `translate(calc(-50% + ${mouse.x * -8}px), ${scrollY * 0.06 + mouse.y * -4}px)`,
        }}
      />

      {/* Levi — full-bleed faded background art. Drop your image at /public/levi.png;
          it's masked at the edges and tinted to sit inside the dossier palette rather
          than reading as a pasted-in rectangle. Silently disappears if the file is missing. */}
      {leviLoaded && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            transform: `translate(${mouse.x * -6}px, ${scrollY * 0.04 + mouse.y * -4}px)`,
          }}
        >
          <img
            src="/levi.webp"
            alt=""
            onError={() => setLeviLoaded(false)}
            className="absolute right-0 bottom-0 h-[55%] sm:h-[75%] md:h-[90%] lg:h-[105%] w-auto max-w-none object-contain object-bottom opacity-40 sm:opacity-50"
            style={{
              filter: "grayscale(0.55) contrast(1.1) brightness(0.85) sepia(0.15)",
              WebkitMaskImage:
                "radial-gradient(ellipse 65% 85% at 78% 65%, black 35%, transparent 88%)",
              maskImage:
                "radial-gradient(ellipse 65% 85% at 78% 65%, black 35%, transparent 88%)",
            }}
          />
          {/* Tint overlay so the art reads as part of the gold/crimson dossier palette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, #15110d 15%, transparent 55%), linear-gradient(0deg, #15110d 5%, transparent 45%)",
              mixBlendMode: "multiply",
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(138,36,36,0.08)", mixBlendMode: "color" }}
          />
        </div>
      )}

      {/* One-time searchlight sweep on load */}
      <div className="light-sweep absolute inset-y-0 left-0 w-1/3 pointer-events-none"
        style={{ background: "linear-gradient(100deg, transparent, rgba(233,220,194,0.18), transparent)" }} />

      {/* Torch vignette — flickers gently like firelight */}
      <div
        className="absolute inset-0 pointer-events-none animate-flicker"
        style={{ boxShadow: "inset 0 0 220px 60px rgba(0,0,0,0.75)" }}
      />

      {/* Drifting embers — atmosphere from the torches lining the walls */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {embers.map((ember, index) => (
          <span
            key={index}
            className="ember"
            style={{ left: ember.left, bottom: "-10px", animationDelay: ember.delay, animationDuration: ember.duration }}
          />
        ))}
      </div>

      {/* Emblem layer — pinned to the right half, vertically centered by flex
          (not by top/translate percentages), sized in fixed px steps per
          breakpoint so it can't be pushed off-canvas by a reflow. Parallax
          combines scroll position with cursor position for a sense of depth. */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none select-none">
        <div
          className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[460px] lg:h-[460px] mr-[-6%] opacity-[0.18]"
          style={{ transform: `translate(${mouse.x * 12}px, ${scrollY * 0.15 + mouse.y * 10}px)` }}
        >
          <ScoutSeal />
        </div>
      </div>

      {/* Cadet patch sticker — outer div handles entrance, inner div handles cursor parallax
          (animations win over inline transforms, so these can't share one element). */}
      <div className="reveal hidden md:flex absolute top-28 right-10 lg:right-16 w-20 h-20 items-center justify-center pointer-events-none"
        style={{ animationDelay: "1.2s" }}>
        <div className="relative w-full h-full" style={{ transform: `translate(${mouse.x * 18}px, ${mouse.y * 18}px)` }}>
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold/50 rotate-slow" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <span className="block font-display text-2xl font-black text-gold leading-none">104</span>
              <span className="block font-label text-[8px] tracking-[0.15em] uppercase text-parchment-dim mt-0.5">Cadet Corps</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full">
        {/* Eyebrow */}
        <div className="reveal flex flex-wrap items-center gap-2 sm:gap-3.5 mb-5"
          style={{ animationDelay: "0.15s" }}>
          <span className="hidden sm:inline-block w-11 h-[2px] bg-gold" />
          <span className="font-label text-[11px] sm:text-[13px] tracking-[0.16em] sm:tracking-[0.32em] uppercase text-gold font-medium">
            Survey Corps <span className="text-crimson-bright">&middot;</span> Recruit File No. 104
          </span>
        </div>

        {/* Name */}
        <h1
          className="reveal font-display font-black leading-[1.02] mb-2 text-parchment"
          style={{
            fontSize: "clamp(44px, 7vw, 88px)",
            animationDelay: "0.3s",
          }}
        >
          <span className="text-glow-pulse">
          Nusrat Jahan
          <br />
          <span
            className="text-crimson-bright"
            style={{ WebkitTextStroke: "0.5px rgba(184,36,36,0.3)" }}
          >
            Jerin
          </span>
          </span>
        </h1>

        {/* Role line */}
        <p className="reveal flex flex-wrap items-center gap-2.5 font-label text-[13px] sm:text-[15px] md:text-[18px] tracking-[0.04em] sm:tracking-[0.06em] uppercase text-gold font-medium mb-8"
          style={{ animationDelay: "0.45s" }}>
          <span
            className="w-2 h-2 inline-block bg-crimson-bright shrink-0"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
          Software Engineering Cadet &middot; HCI Researcher in training
        </p>

        {/* Dossier bio block */}
        <div
          className="reveal relative max-w-2xl mb-10 px-7 py-5 border-l-[3px] border-[#8a6f3d]"
          style={{
            animationDelay: "0.6s",
            background:
              "linear-gradient(135deg, rgba(233,220,194,0.05), rgba(233,220,194,0.02))",
          }}
        >
          <p className="text-base leading-[1.75] text-parchment-dim m-0">
            Undergraduate Software Engineering student, sworn to the pursuit of
            clean code, human-centered design, and the elimination of complex
            bugs beyond the walls.
          </p>
          <span className="block mt-2.5 font-label text-lg text-parchment font-medium">
            Shahjalal University of Science and Technology
          </span>
        </div>

        {/* CTAs */}
        <div className="reveal flex flex-wrap gap-4 mb-12"
          style={{ animationDelay: "0.75s" }}>
          <a href="/JerinerCV.pdf" download="JerinerCV.pdf">
            <button
              className="glow-pulse inline-flex items-center gap-2.5 px-8 py-4 font-label text-sm tracking-[0.08em] uppercase font-medium text-[#f4e9d8] bg-crimson transition-all duration-300 hover:bg-crimson-bright hover:-translate-y-0.5"
              style={{
                clipPath:
                  "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
              }}
            >
              <Download size={18} />
              Download resume
            </button>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 font-label text-sm tracking-[0.08em] uppercase font-medium text-parchment border-[1.5px] border-[#8a6f3d] transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:-translate-y-0.5"
            style={{
              clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
            }}
          >
            Get in touch
          </a>
        </div>

        {/* Socials */}
        <div className="reveal flex gap-3.5"
          style={{ animationDelay: "0.9s" }}>
          <a
            href="https://github.com/nairobi-J"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[46px] h-[46px] flex items-center justify-center bg-parchment/[0.04] border border-gold/30 text-parchment-dim transition-all duration-300 hover:border-gold hover:text-gold hover:bg-gold/10 hover:-translate-y-1"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/nairobi-nusrat/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[46px] h-[46px] flex items-center justify-center bg-parchment/[0.04] border border-gold/30 text-parchment-dim transition-all duration-300 hover:border-gold hover:text-gold hover:bg-gold/10 hover:-translate-y-1"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:jerinusrat001@gmail.com"
            className="w-[46px] h-[46px] flex items-center justify-center bg-parchment/[0.04] border border-gold/30 text-parchment-dim transition-all duration-300 hover:border-gold hover:text-gold hover:bg-gold/10 hover:-translate-y-1"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
