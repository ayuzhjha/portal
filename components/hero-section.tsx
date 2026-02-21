'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ArcReactor } from './arc-reactor';
import { JarvisAssistant } from './jarvis-assistant';

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-background to-slate-950 flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, #00d9ff 0%, transparent 70%)',
            transform: `translate(${scrollY * 0.5}px, -${scrollY * 0.2}px)`,
            top: '10%', left: '5%',
          }}
        />
        <div
          className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, #ff0080 0%, transparent 70%)',
            transform: `translate(-${scrollY * 0.3}px, ${scrollY * 0.4}px)`,
            bottom: '10%', right: '5%',
          }}
        />
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(0deg,transparent 24%,rgba(0,217,255,.15) 25%,rgba(0,217,255,.15) 26%,transparent 27%,transparent 74%,rgba(0,217,255,.15) 75%,rgba(0,217,255,.15) 76%,transparent 77%,transparent),linear-gradient(90deg,transparent 24%,rgba(0,217,255,.15) 25%,rgba(0,217,255,.15) 26%,transparent 27%,transparent 74%,rgba(0,217,255,.15) 75%,rgba(0,217,255,.15) 76%,transparent 77%,transparent)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-lg mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 md:gap-10 py-20 sm:py-24">

          {/* Tagline */}
          <div className="text-center space-y-1 w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              Synchronize 4.0
            </h1>
            <p className="text-xs sm:text-sm md:text-base font-mono text-cyan-300">
              Annual Technical Fest — SCSE, XIM University
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              📅 26 February – 28 February 2025
            </p>
          </div>

          {/* Arc Reactor */}
          <div className="flex justify-center w-full">
            <ArcReactor />
          </div>

          {/* JARVIS Assistant */}
          <div className="w-full max-w-2xl mx-auto">
            <JarvisAssistant />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-sm sm:max-w-md mx-auto">
            <div className="glass rounded-lg p-2 sm:p-4 text-center">
              <p className="text-lg sm:text-2xl font-bold text-cyan-400">3</p>
              <p className="text-xs text-muted-foreground">Days</p>
            </div>
            <div className="glass rounded-lg p-2 sm:p-4 text-center">
              <p className="text-lg sm:text-2xl font-bold text-pink-400">12+</p>
              <p className="text-xs text-muted-foreground">Events</p>
            </div>
            <div className="glass rounded-lg p-2 sm:p-4 text-center">
              <p className="text-lg sm:text-2xl font-bold text-purple-400">SCSE</p>
              <p className="text-xs text-muted-foreground">XIM Univ.</p>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center space-y-1 px-2">
            <p className="text-xs sm:text-sm md:text-base text-cyan-300 italic">
              "If you are nothing without the suit, then you shouldn't have it."
            </p>
            <p className="text-xs text-muted-foreground">
              But with us, you'll have everything you need. Welcome, hero.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </div>
      </div>
    </div>
  );
}
