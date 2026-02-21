'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-cyan-500/20 w-full">
      <div className="w-full px-3 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <a href="#" className="flex items-center group flex-shrink-0">
            <img
              src="/logo.png"
              alt="Synchronize 4.0"
              className="h-6 sm:h-8 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </a>

          {/* Status Indicator — desktop only */}
          <div className="hidden md:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-base text-cyan-300 font-mono">SYSTEM ONLINE</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-cyan-400 hover:text-cyan-300 flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t border-cyan-500/20 pt-4 animate-slide-in-down">
            <p className="text-xs text-cyan-400 font-mono px-2 mb-3">// COMMAND CENTER</p>
            {[
              { href: '#events', label: '📋 View Events' },
              { href: '#schedule', label: '⏰ Schedule' },
              { href: '#vendors', label: '🍽️ Vendors' },
              { href: '#map', label: '🗺️ Campus Map' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="block text-foreground hover:text-cyan-400 transition-colors font-medium py-2 px-3 hover:bg-cyan-500/10 rounded text-sm"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
