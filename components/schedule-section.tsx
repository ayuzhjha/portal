'use client';

import { schedule } from '@/lib/data';
import { Clock, MapPin } from 'lucide-react';
import { SectionHeader } from './section-header';

export function ScheduleSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-background via-slate-900/30 to-background py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header with Marvel Quote */}
        <SectionHeader
          title="Battle Timeline"
          subtitle="March 14-16, 2025 • Non-stop action, competition, and glory await"
          emoji="⏰"
        />

        {/* Timeline */}
        <div className="space-y-12">
          {schedule.map((day, dayIndex) => (
            <div key={day.day} className="relative">
              {/* Day Header */}
              <div className="mb-8 float-up" style={{ animationDelay: `${dayIndex * 0.1}s` }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {dayIndex + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {day.day}
                    </h3>
                    <p className="text-muted-foreground">{day.date}</p>
                  </div>
                </div>
              </div>

              {/* Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:ml-16">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={`${day.day}-${eventIndex}`}
                    className="glass rounded-xl p-6 hover-lift border-l-4 border-cyan-500/50 hover:border-pink-500/50 transition-colors"
                    style={{
                      animationDelay: `${eventIndex * 0.05}s`,
                    }}
                  >
                    {/* Time */}
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="font-mono text-sm text-cyan-400">
                        {event.time}
                      </span>
                    </div>

                    {/* Event Name */}
                    <h4 className="text-lg font-bold text-foreground mb-3">
                      {event.event}
                    </h4>

                    {/* Venue */}
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-pink-400 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {event.venue}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              {dayIndex < schedule.length - 1 && (
                <div className="my-12 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 rounded-full" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 glass rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Don't Miss Out!
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Mark your calendars and register for your favorite events to secure your spot.
          </p>
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}
