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
      }, 60);
    }
  }

  const selectedData = eventCategories.find((c) => c.id === selectedCategory);

  return (
    <section
      className="py-16 sm:py-20 relative halftone-bg"
      style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #140508 50%, #0D0D0D 100%)' }}
    >
      {/* Top divider */}
      <div className="comic-divider" />

      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 pt-10">
        <SectionHeader
          title="Command Center"
          subtitle="7 categories · 12+ events across 3 epic days. Choose your battle arc."
          emoji="⚡"
        />

        {/* ── Category Grid ── */}
        <div
          className="w-full overflow-x-auto mb-8 sm:mb-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-3 sm:gap-4 pb-2 w-max mx-auto">
            {eventCategories.map((category, index) => {
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`pow-burst relative flex-none overflow-hidden transition-all duration-200
                    ${isActive
                      ? 'comic-panel-red scale-105'
                      : 'comic-panel hover-lift'
                    }`}
                  style={{
                    width: '110px',
                    height: '110px',
                    animationDelay: `${index * 0.08}s`,
                  }}
                >
                  {/* Active: gold accent top-bar */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FFD700]" />
                  )}
                  <div className="flex flex-col items-center justify-center h-full gap-1.5 p-2">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className={`font-oswald font-bold text-xs uppercase tracking-wider text-center leading-tight ${isActive ? 'text-[#FFD700]' : 'text-[#F5F5F0]'}`}>
                      {category.name}
                    </h3>
                    <span className="font-oswald text-[10px] text-[#A0A0A0]">
                      {category.events.length} event{category.events.length > 1 ? 's' : ''}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Selected Category Events ── */}
        {selectedData && (
          <div ref={detailsRef} className="scale-in scroll-mt-24">
            {/* Panel header */}
            <div className="comic-frame mb-4" style={{ background: '#0D0D0D' }}>
              <div className="stripe-header px-5 py-3 border-b-3 border-[#111]">
                <h3 className="font-bangers text-[#FFD700] tracking-widest"
                  style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)' }}
                >
                  {selectedData.icon} &nbsp;{selectedData.name.toUpperCase()}
                </h3>
              </div>

              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedData.events.map((event, index) => (
                    <div
                      key={event.id}
                      className="comic-panel hover-lift group"
                      style={{
                        background: '#111',
                        animationDelay: `${index * 0.08}s`,
                      }}
                    >
                      {/* Card title bar */}
                      <div className="bg-[#1A1A1A] border-b-2 border-[#333] px-4 py-3">
                        <h4 className="font-oswald font-semibold text-sm sm:text-base text-[#F5F5F0] group-hover:text-[#FFD700] transition-colors">
                          {event.name}
                        </h4>
                        {event.mode && (
                          <span className="inline-block font-oswald text-[10px] uppercase tracking-wider text-[#E8192C] mt-0.5">
                            {event.mode}
                          </span>
                        )}
                      </div>

                      {/* Info rows */}
                      <div className="p-4 space-y-2 text-xs sm:text-sm">
                        {event.date && (
                          <div className="flex items-start gap-2 text-[#A0A0A0]">
                            <Calendar className="w-3.5 h-3.5 text-[#E8192C] flex-shrink-0 mt-0.5" />
                            <span>{event.date}</span>
                          </div>
                        )}
                        {event.timing && (
                          <div className="flex items-start gap-2 text-[#A0A0A0]">
                            <Clock className="w-3.5 h-3.5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                            <span>{event.timing}</span>
                          </div>
                        )}
                        {event.venue && (
                          <div className="flex items-start gap-2 text-[#A0A0A0]">
                            <MapPin className="w-3.5 h-3.5 text-[#F5F5F0] flex-shrink-0 mt-0.5" />
                            <span>{event.venue}</span>
                          </div>
                        )}
                      </div>

                      {/* Rulebook button */}
                      {event.rulebookLink && (
                        <div className="px-4 pb-4">
                          <a
                            href={event.rulebookLink}
                            download
                            className="action-btn text-xs w-full justify-center"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            Download Rulebook
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Empty state ── */}
        {!selectedCategory && (
          <div className="flex justify-center py-8">
            <div className="speech-bubble max-w-sm text-center">
              <p className="font-oswald text-[#333] text-sm sm:text-base mb-1">
                Select a category above to reveal your mission briefing!
              </p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-[#E8192C] animate-pulse" />
                <span className="font-bangers text-[#E8192C] text-sm tracking-wider">
                  ALL REGISTRATIONS OPEN
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom divider */}
      <div className="comic-divider mt-10" />
    </section>
  );
}
