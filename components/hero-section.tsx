'use client';

import { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { ArcReactor } from './arc-reactor';
import { JarvisAssistant } from './jarvis-assistant';

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center action-lines halftone-bg"
      style={{ background: 'linear-gradient(160deg, #0D0D0D 0%, #1A0408 40%, #0D0D0D 100%)' }}
    >
      {/* ── Action lines (conic radial burst) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-conic-gradient(from 0deg at 50% 50%, rgba(232,25,44,0.05) 0deg, transparent 3deg, transparent 12deg, rgba(255,215,0,0.03) 12deg, transparent 15deg)',
          transform: `rotate(${scrollY * 0.02}deg)`,
          zIndex: 0,
        }}
      />

      {/* ── Halftone dot field ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(232,25,44,0.12) 1.2px, transparent 1.2px)',
          backgroundSize: '20px 20px',
          transform: `translateY(${scrollY * 0.1}px)`,
          zIndex: 0,
        }}
      />

      {/* ── Glowing orbs (parallax) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,25,44,0.18) 0%, transparent 65%)',
          top: '-15%', left: '-10%',
          transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.1}px)`,
          zIndex: 0,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,215,0,0.12) 0%, transparent 65%)',
          bottom: '-10%', right: '-8%',
          transform: `translate(-${scrollY * 0.15}px, -${scrollY * 0.08}px)`,
          zIndex: 0,
        }}
      />

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 py-24 sm:py-28">

        {/* Chapter tag */}
        {mounted && (
          <div className="flex justify-center mb-6 float-up">
            <span className="chapter-tag text-sm tracking-[0.2em]">
              ★ ISSUE #4 — SYNCHRONIZE UNIVERSE ★
            </span>
          </div>
        )}

        {/* Two-column: headline + reactor */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── LEFT: Headline ── */}
          <div className={`space-y-6 ${mounted ? 'slide-in-left' : ''}`}>

            {/* Giant title */}
            <div>
              <h1
                className="font-bangers leading-none text-[#F5F5F0]"
                style={{
                  fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                  textShadow: '4px 4px 0 #E8192C, 8px 8px 0 #111',
                  letterSpacing: '0.05em',
                }}
              >
                SYNCHRONIZE
              </h1>
              <div className="flex items-end gap-4">
                <h2
                  className="font-bangers leading-none text-[#FFD700]"
                  style={{
                    fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                    textShadow: '3px 3px 0 #111',
                    letterSpacing: '0.05em',
                  }}
                >
                  4.0
                </h2>
                <div className="pb-2 space-y-0.5">
                  <p className="font-oswald font-semibold text-[#E8192C] uppercase tracking-widest text-sm">
                    Annual Technical Fest
                  </p>
                  <p className="font-oswald text-[#A0A0A0] text-xs tracking-wider">
                    SCSE · XIM University · 26–28 Feb 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Comic panel divider */}
            <div className="comic-divider w-full" />

            {/* JARVIS Quote — speech bubble */}
            <div className="speech-bubble max-w-md speech-wobble">
              <p className="font-oswald text-[#111] text-sm sm:text-base leading-relaxed">
                "If you are nothing without the suit, then you shouldn't have it.
                But with <strong>Synchronize 4.0</strong>, you'll have everything you need."
              </p>
              <p className="font-bangers text-[#E8192C] text-xs mt-2 tracking-wider">— JARVIS PROTOCOL</p>
            </div>

            {/* Stats — comic badge grid */}
            <div className="grid grid-cols-3 gap-3 max-w-xs">
              {[
                { value: '3', label: 'EPIC DAYS', color: '#E8192C' },
                { value: '12+', label: 'EVENTS', color: '#FFD700' },
                { value: '∞', label: 'POSSIBILITIES', color: '#F5F5F0' },
              ].map(({ value, label, color }) => (
                <div
                  key={label}
                  className="comic-panel text-center py-3 px-2 hover-lift cursor-default"
                  style={{ background: '#1A1A1A' }}
                >
                  <p
                    className="font-bangers text-2xl sm:text-3xl leading-none"
                    style={{ color, textShadow: `2px 2px 0 #111` }}
                  >
                    {value}
                  </p>
                  <p className="font-oswald text-[8px] sm:text-[10px] text-[#A0A0A0] uppercase tracking-widest mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#events" className="action-btn text-base px-6 py-3">
                ⚡ View Events
              </a>
              <a href="https://synchronize-xim.in/#schedule" className="action-btn action-btn-gold text-base px-6 py-3">
                📅 Schedule
              </a>
            </div>
          </div>

          {/* ── RIGHT: Arc Reactor + JARVIS in comic frame ── */}
          <div className={`flex flex-col items-center gap-6 ${mounted ? 'slide-in-right' : ''}`}>
            {/* Framed arc reactor */}
            <div
              className="comic-frame p-4 sm:p-6 relative"
              style={{ background: '#0D0D0D', width: 'fit-content' }}
            >
              {/* Panel label */}
              <span className="absolute -top-3 left-4 chapter-tag text-xs">ARC REACTOR ONLINE</span>
              <ArcReactor />
            </div>

            {/* JARVIS assistant panel */}
            <div
              className="comic-panel w-full max-w-md"
              style={{ background: '#111' }}
            >
              <div className="stripe-header px-4 py-2 border-b-2 border-[#111]">
                <p className="font-bangers text-[#FFD700] text-lg tracking-widest">
                  📡 J.A.R.V.I.S. INTERFACE
                </p>
              </div>
              <div className="p-4">
                <JarvisAssistant />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce z-10"
      >
        <span className="font-bangers text-[#E8192C] text-xs tracking-widest">SCROLL</span>
        <ChevronDown className="w-6 h-6 text-[#E8192C]" />
      </div>

      {/* ── Bottom comic-divider strip ── */}
      <div className="absolute bottom-0 left-0 right-0 comic-divider z-10" />
    </div>
  );
}
