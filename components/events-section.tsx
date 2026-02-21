'use client';

import { useState } from 'react';
import { eventCategories } from '@/lib/data';
import { ExternalLink } from 'lucide-react';
import { SectionHeader } from './section-header';

export function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-background via-slate-900/50 to-background py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header with Marvel Quote */}
        <SectionHeader
          title="Command Center"
          subtitle="7 categories, 20+ events, and unlimited opportunities to showcase your skills"
          emoji="⚡"
        />

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {eventCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )
              }
              className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 border-2 ${
                selectedCategory === category.id
                  ? 'border-cyan-500 bg-slate-800/50 shadow-lg shadow-cyan-500/50'
                  : 'border-slate-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
              <div className="relative z-10">
                <p className="text-4xl mb-2">{category.icon}</p>
                <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {category.events.length} events
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Events Display */}
        {selectedCategory && (
          <div className="scale-in">
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-cyan-400 mb-8">
                {eventCategories.find((c) => c.id === selectedCategory)?.name}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {eventCategories
                  .find((c) => c.id === selectedCategory)
                  ?.events.map((event, index) => (
                    <div
                      key={event.id}
                      className="glass rounded-lg p-6 hover-lift group"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors">
                            {event.name}
                          </h4>
                          {event.mode && (
                            <p className="text-sm text-pink-400 mt-1">
                              {event.mode}
                            </p>
                          )}
                        </div>
                      </div>

                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-cyan-400 hover:text-pink-400 border border-cyan-500/30 hover:border-pink-500/30 transition-all duration-300 text-sm font-semibold mt-4"
                      >
                        Register Now
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Quick Registration Links */}
        {!selectedCategory && (
          <div className="glass rounded-2xl p-12 text-center">
            <p className="text-muted-foreground mb-6">
              Select a category above to see events and registration links
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              All registrations open now!
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
