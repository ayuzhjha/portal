'use client';

import { useRef, useState } from 'react';
import { eventCategories } from '@/lib/data';
import { Calendar, Clock, MapPin, BookOpen } from 'lucide-react';
import { SectionHeader } from './section-header';

export function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  function handleCategoryClick(id: string) {
    const next = selectedCategory === id ? null : id;
    setSelectedCategory(next);
    if (next) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-background via-slate-900/50 to-background py-16">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Command Center"
          subtitle="7 categories, 12+ events across 3 days"
          emoji="⚡"
        />

        {/* Category Row — horizontal scroll, hidden scrollbar */}
        <div
          className="w-full overflow-x-auto mb-8 sm:mb-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-3 sm:gap-4 pb-2 w-max mx-auto">
            {eventCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`group relative flex-none overflow-hidden rounded-xl transition-all duration-300 border-2 ${selectedCategory === category.id
                    ? 'border-cyan-500 bg-slate-800/50 shadow-lg shadow-cyan-500/50'
                    : 'border-slate-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20'
                  }`}
                style={{ width: '110px', height: '110px', animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-1 p-2">
                  <p className="text-3xl">{category.icon}</p>
                  <h3 className="text-xs font-bold text-foreground text-center leading-tight">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.events.length} events</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Events Display */}
        {selectedCategory && (
          <div ref={detailsRef} className="scale-in scroll-mt-20">
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-cyan-400 mb-4 sm:mb-6">
                {eventCategories.find((c) => c.id === selectedCategory)?.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {eventCategories
                  .find((c) => c.id === selectedCategory)
                  ?.events.map((event, index) => (
                    <div
                      key={event.id}
                      className="glass rounded-lg p-4 sm:p-5 hover-lift group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <h4 className="text-sm sm:text-base md:text-lg font-bold text-foreground group-hover:text-cyan-400 transition-colors mb-3">
                        {event.name}
                      </h4>

                      <div className="space-y-1.5 text-xs sm:text-sm mb-4">
                        {event.date && (
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>{event.date}</span>
                          </div>
                        )}
                        {event.timing && (
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                            <span>{event.timing}</span>
                          </div>
                        )}
                        {event.venue && (
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span>{event.venue}</span>
                          </div>
                        )}
                        {event.mode && (
                          <p className="text-xs text-pink-400">{event.mode}</p>
                        )}
                      </div>

                      {event.rulebookLink && (
                        <a
                          href={event.rulebookLink}
                          download
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-cyan-400 hover:text-pink-400 border border-cyan-500/30 hover:border-pink-500/30 transition-all duration-300 text-xs font-semibold"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          Download Rulebook
                        </a>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {!selectedCategory && (
          <div className="glass rounded-2xl p-8 sm:p-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Select a category above to see events and details
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              All registrations open now!
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
