'use client';

import { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

const jarvisGreetings = [
  "Good day, Sir or Madam. I am JARVIS - Just A Rather Very Intelligent System for Synchronize 4.0.",
  "Welcome, sir/madam. I trust you're prepared for an extraordinary techfest experience.",
  "Initializing Synchronize 4.0 interface. Ready to assist with your event needs.",
  "Greetings. Shall we begin this technological journey together?",
  "Access granted. I am at your service for all Synchronize 4.0 inquiries.",
];

const jarvisQuotes = [
  "\"I am afraid, sir, that you lack the vocabulary to describe what you are seeing.\" - Let me help you explore the events instead.",
  "\"It seems we have a problem, sir.\" - No events? Impossible! Let me guide you through them.",
  "\"Very well, sir. As you wish.\" - Your command is my wish.",
  "\"I'm quite sure there isn't a problem, sir.\" - Except finding which event you want to join!",
  "\"Shall I prepare the workshop for you?\" - Let's explore what we have here.",
];

export function JarvisAssistant() {
  const [currentGreeting, setCurrentGreeting] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const greeting =
      jarvisGreetings[Math.floor(Math.random() * jarvisGreetings.length)];
    setCurrentGreeting(greeting);
  }, []);

  useEffect(() => {
    if (!currentGreeting) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= currentGreeting.length) {
        setDisplayedText(currentGreeting.substring(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [currentGreeting]);

  const randomQuote =
    jarvisQuotes[Math.floor(Math.random() * jarvisQuotes.length)];

  return (
    <div className="space-y-6 w-full">
      {/* JARVIS Interface Box */}
      <div className="glass rounded-2xl p-6 md:p-8 border border-cyan-500/30 relative overflow-hidden">
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-cyan-400 to-transparent opacity-50" />
        </div>

        <div className="relative z-10 space-y-4">
          {/* JARVIS Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-mono text-sm font-bold tracking-widest">
              J.A.R.V.I.S. PROTOCOL ACTIVATED
            </span>
          </div>

          {/* Greeting Text with Typing Effect */}
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
            {displayedText}
            {isTyping && (
              <span className="ml-1 animate-pulse text-cyan-400">▊</span>
            )}
          </p>

          {/* Marvel Easter Egg Quote */}
          {!isTyping && (
            <button
              onClick={() => setShowQuote(!showQuote)}
              className="mt-4 text-sm text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-2 group"
            >
              <Zap className="w-4 h-4" />
              {showQuote ? 'Hide' : 'Show'} JARVIS wisdom
            </button>
          )}

          {showQuote && !isTyping && (
            <p className="text-sm text-cyan-300 italic border-l-2 border-cyan-400 pl-4 py-2">
              {randomQuote}
            </p>
          )}
        </div>
      </div>

      {/* Quick Command Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'View Events', icon: '📋', href: '#events' },
          { label: 'Schedule', icon: '⏰', href: '#schedule' },
          { label: 'Vendors', icon: '🍽️', href: '#vendors' },
          { label: 'Campus Map', icon: '🗺️', href: '#map' },
        ].map((cmd) => (
          <a
            key={cmd.label}
            href={cmd.href}
            className="glass rounded-xl p-4 hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300 group text-center"
          >
            <div className="text-2xl mb-2 group-hover:scale-125 transition-transform">
              {cmd.icon}
            </div>
            <p className="text-xs md:text-sm font-semibold text-foreground group-hover:text-cyan-400 transition-colors">
              {cmd.label}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
