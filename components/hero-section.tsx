'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ArcReactor } from './arc-reactor';
import { JarvisAssistant } from './jarvis-assistant';

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-background to-slate-950 flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-15 transition-transform"
          style={{
            background: 'radial-gradient(circle, #00d9ff 0%, transparent 70%)',
            transform: `translate(${scrollY * 0.5}px, -${scrollY * 0.2}px)`,
            top: '10%',
            left: '10%',
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-15 transition-transform"
          style={{
            background: 'radial-gradient(circle, #ff0080 0%, transparent 70%)',
            transform: `translate(-${scrollY * 0.3}px, ${scrollY * 0.4}px)`,
            bottom: '10%',
            right: '10%',
          }}
        />
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, 0.15) 25%, rgba(0, 217, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.15) 75%, rgba(0, 217, 255, 0.15) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, 0.15) 25%, rgba(0, 217, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.15) 75%, rgba(0, 217, 255, 0.15) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="space-y-12 float-up">
          {/* Title */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                SYNCHRONIZE 4.0
              </span>
            </h1>
            <p className="text-lg md:text-xl text-cyan-300 font-mono">
              // Initializing Ultimate Techfest Experience...
            </p>
          </div>

          {/* Arc Reactor Center */}
          <div className="flex justify-center">
            <ArcReactor />
          </div>

          {/* JARVIS Assistant */}
          <div className="max-w-3xl mx-auto">
            <JarvisAssistant />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="glass rounded-lg p-4 text-center hover:border-cyan-400/50 transition-colors">
              <p className="text-2xl font-bold text-cyan-400">7</p>
              <p className="text-sm text-muted-foreground">Event Types</p>
            </div>
            <div className="glass rounded-lg p-4 text-center hover:border-cyan-400/50 transition-colors">
              <p className="text-2xl font-bold text-pink-400">20+</p>
              <p className="text-sm text-muted-foreground">Competitions</p>
            </div>
            <div className="glass rounded-lg p-4 text-center hover:border-cyan-400/50 transition-colors">
              <p className="text-2xl font-bold text-purple-400">₹2L+</p>
              <p className="text-sm text-muted-foreground">Prizes</p>
            </div>
          </div>

          {/* Marvel Quote */}
          <div className="text-center space-y-2">
            <p className="text-sm md:text-base text-cyan-300 italic">
              "If you are nothing without the suit, then you shouldn't have it."
            </p>
            <p className="text-xs text-muted-foreground">
              But with us, you'll have everything you need. Welcome, hero.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </div>
      </div>
    </div>
  );
}
