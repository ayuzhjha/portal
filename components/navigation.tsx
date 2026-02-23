'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#events', label: 'Events' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#vendors', label: 'Vendors' },
  { href: '#map', label: 'Campus Map' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled
        ? 'bg-[#0D0D0D] border-b-4 border-[#E8192C]'
        : 'bg-[#0D0D0D]/90 border-b-4 border-[#E8192C]/60'
        }`}
      style={{ boxShadow: scrolled ? '0 4px 0 #111' : 'none' }}
    >
      {/* Red-gold marquee ticker at very top */}
      <div className="w-full overflow-hidden bg-[#E8192C] border-b-2 border-[#111] py-0.5">
        <div className="marquee-inner gap-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-bangers text-[#FFD700] text-xs tracking-widest px-8"
            >
              ⚡ SYNCHRONIZE 4.0 &nbsp;·&nbsp; 26–28 FEB 2025 &nbsp;·&nbsp; XIM UNIVERSITY &nbsp;·&nbsp; SCSE &nbsp;·&nbsp; THE ULTIMATE TECHFEST &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="w-full px-3 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Logo */}
          <a href="https://synchronize-xim.in" className="flex items-center gap-3 group flex-shrink-0">
            <img
              src="/synclogo.png"
              alt="Synchronize 4.0"
              className="h-9 sm:h-12 w-auto object-contain"
            />

          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="relative font-oswald font-semibold uppercase tracking-wider text-sm text-[#F5F5F0] px-4 py-2 transition-all duration-200 group hover:text-[#FFD700]"
              >
                <span className="relative z-10">{label}</span>
                {/* red underline on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E8192C] group-hover:w-full transition-all duration-200" />
              </a>
            ))}

            {/* CTA Badge */}
            <a
              href="https://synchronize-xim.in"
              className="action-btn ml-4 text-sm py-2 px-5"
            >
              JOIN NOW
            </a>
          </div>

          {/* Status — tablet */}
          <div className="hidden sm:flex md:hidden items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E8192C] animate-pulse" />
            <span className="font-oswald text-xs text-[#E8192C] uppercase tracking-widest">Live</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#E8192C] hover:text-[#FFD700] transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-2 border-[#E8192C]/40 slide-in-left">
            {/* Chapter label */}
            <p className="font-bangers text-[#FFD700] text-base tracking-widest mb-3 px-2">
              — COMMAND CENTER —
            </p>
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-3 font-oswald font-semibold uppercase tracking-wider text-sm text-[#F5F5F0] py-3 px-3 hover:bg-[#E8192C]/15 hover:text-[#FFD700] transition-colors rounded border-b border-[#333] last:border-0"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-[#E8192C]">▶</span>
                {label}
              </a>
            ))}
            <div className="px-3 pt-4">
              <a
                href="#events"
                className="action-btn w-full justify-center text-sm"
                onClick={() => setIsOpen(false)}
              >
                JOIN THE BATTLE
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
