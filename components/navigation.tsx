'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - JARVIS Style */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center animate-pulse">
              <span className="text-white font-bold text-xs">J.</span>
            </div>
            <span className="hidden sm:inline font-mono text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors font-bold tracking-wider">
              PORTAL
            </span>
          </a>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Status Indicator */}
          <div className="hidden md:flex items-center gap-2 mr-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs text-cyan-300 font-mono">SYSTEM ONLINE</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-cyan-400 hover:text-cyan-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-3 border-t border-cyan-500/20 pt-6 animate-slide-in-down">
            <p className="text-xs text-cyan-400 font-mono px-2 mb-4">
              // COMMAND CENTER
            </p>
            <a
              href="#events"
              className="block text-foreground hover:text-cyan-400 transition-colors font-medium py-2 px-2 hover:bg-cyan-500/10 rounded"
              onClick={() => setIsOpen(false)}
            >
              📋 View Events
            </a>
            <a
              href="#schedule"
              className="block text-foreground hover:text-cyan-400 transition-colors font-medium py-2 px-2 hover:bg-cyan-500/10 rounded"
              onClick={() => setIsOpen(false)}
            >
              ⏰ Schedule
            </a>
            <a
              href="#vendors"
              className="block text-foreground hover:text-cyan-400 transition-colors font-medium py-2 px-2 hover:bg-cyan-500/10 rounded"
              onClick={() => setIsOpen(false)}
            >
              🍽️ Vendors
            </a>
            <a
              href="#map"
              className="block text-foreground hover:text-cyan-400 transition-colors font-medium py-2 px-2 hover:bg-cyan-500/10 rounded"
              onClick={() => setIsOpen(false)}
            >
              🗺️ Campus Map
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
