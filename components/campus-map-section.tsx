'use client';

import Image from 'next/image';
import { useState } from 'react';
import { MapPin, Info } from 'lucide-react';
import { venues } from '@/lib/data';
import { SectionHeader } from './section-header';

export function CampusMapSection() {
  const [selectedVenue, setSelectedVenue] = useState<string | null>(null);

  const venueInfo: Record<string, { description: string; facilities: string[] }> = {
    'mini-auditorium': {
      description: 'Inauguration Ceremony (Day 1) & Cultural Events + Closing Ceremony (Day 3)',
      facilities: ['Main Stage', 'Sound System', 'AC', 'Seating'],
    },
    'scse-classrooms': {
      description: '24-Hour Hackathon venue — Day 1 start (02:00 PM) through Day 2 conclusion (02:00 PM)',
      facilities: ['Workstations', 'Power Sockets', 'WiFi', 'Whiteboard'],
    },
    'scse-lab': {
      description: 'Coding Event on Day 1 (02:30 PM – 05:00 PM)',
      facilities: ['Computer Lab', 'Projector', 'WiFi', 'AC'],
    },
    'boys-common-room': {
      description: 'Robo Line Follower (Day 1) & Poster Presentation (Day 2)',
      facilities: ['Open Floor', 'Seating', 'Power Points', 'WiFi'],
    },
    'quadrangle': {
      description: 'Startup Showcase & Photo Booth across all 3 days',
      facilities: ['Open Area', 'Stall Space', 'Photo Booth', 'Seating'],
    },
    'amphitheatre': {
      description: 'Robo Sumo & Robo Obstacles on Day 2 (10:00 AM – 05:00 PM)',
      facilities: ['Arena Space', 'Seating', 'Viewing Stands'],
    },
    'football-ground': {
      description: 'Futsal Tournament on Day 2 & Day 3',
      facilities: ['Football Turf', 'Equipment', 'Viewing Area', 'First Aid'],
    },
    'cr-315': {
      description: 'FIFA Tournament (Esports) on Day 2 (02:00 PM – 05:00 PM)',
      facilities: ['Gaming Setup', 'High-Speed Internet', 'AC', 'Chairs'],
    },
    'eh2-nab': {
      description: 'Esports Event on Day 3 (09:00 AM – 02:00 PM)',
      facilities: ['Gaming PCs', 'High-Speed Internet', 'AC'],
    },
    'food-stalls': {
      description: 'Food Vendor Stalls for all participants & attendees (All 3 Days, 10 AM – 7:30 PM)',
      facilities: ['Multiple Stalls', 'Seating Area', 'Restrooms'],
    },
    'main-auditorium-staircase': {
      description: 'Jamming Session on Day 1 (07:00 PM – 08:00 PM)',
      facilities: ['Open Space', 'Sound Setup', 'Ambient Lighting'],
    },
    'help-desk': {
      description: 'Help & Registration Desk available all 3 days (09:00 AM – 05:00 PM)',
      facilities: ['Registration', 'Information', 'Volunteer Support'],
    },
  };

  return (
    <section
      className="py-16 sm:py-20 relative"
      style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #0a1208 50%, #0D0D0D 100%)' }}
    >
      <div className="comic-divider" />

      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 pt-10">
        <SectionHeader
          title="Battlefield Layout"
          subtitle="Navigate the campus — know the terrain before the battle begins."
          emoji="🗺️"
        />

        {/* ── Map + Venues grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

          {/* Map image — heavy comic frame */}
          <div className="lg:col-span-2">
            <div
              className="comic-frame overflow-hidden hover-lift"
              style={{ background: '#0D0D0D' }}
            >
              {/* Panel header */}
              <div className="stripe-header px-4 py-2 border-b-2 border-[#111]">
                <p className="font-bangers text-[#FFD700] tracking-widest text-base">
                  🗺️ CAMPUS MAP — XIM UNIVERSITY
                </p>
              </div>
              <Image
                src="/campus-map.png"
                alt="Campus Map"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Venue list */}
          <div>
            <h3 className="font-bangers text-[#FFD700] tracking-widest mb-4"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', textShadow: '2px 2px 0 #111' }}
            >
              ⚑ VENUES
            </h3>
            <div
              className="space-y-2 max-h-[480px] overflow-y-auto"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {venues.map((venue) => {
                const isActive = selectedVenue === venue.id;
                return (
                  <button
                    key={venue.id}
                    onClick={() => setSelectedVenue(selectedVenue === venue.id ? null : venue.id)}
                    className={`w-full text-left p-3 sm:p-4 transition-all duration-200 border-2 group
                      ${isActive
                        ? 'border-[#E8192C] bg-[#E8192C]/10 shadow-[3px_3px_0_#E8192C]'
                        : 'border-[#333] bg-[#1A1A1A] hover:border-[#FFD700] hover:shadow-[3px_3px_0_#FFD700]'
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      <MapPin
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-colors ${isActive ? 'text-[#E8192C]' : 'text-[#A0A0A0] group-hover:text-[#FFD700]'}`}
                      />
                      <div className="flex-1">
                        <p className={`font-oswald font-semibold text-sm transition-colors ${isActive ? 'text-[#F5F5F0]' : 'text-[#A0A0A0] group-hover:text-[#F5F5F0]'}`}>
                          {venue.name}
                        </p>
                        {isActive && venueInfo[venue.id] && (
                          <p className="font-oswald text-xs text-[#A0A0A0] mt-1 leading-relaxed">
                            {venueInfo[venue.id].description}
                          </p>
                        )}
                      </div>
                      {isActive && <span className="text-[#E8192C] text-xs font-bangers">▶</span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Selected Venue Details ── */}
        {selectedVenue && venueInfo[selectedVenue] && (
          <div className="mt-8 sm:mt-10 scale-in">
            <div
              className="comic-frame border-l-8"
              style={{ background: '#111', borderLeftColor: '#E8192C' }}
            >
              <div className="stripe-header px-4 sm:px-6 py-3 border-b-2 border-[#111]">
                <div className="flex items-center gap-3">
                  <Info className="w-5 h-5 text-[#FFD700]" />
                  <h3
                    className="font-bangers text-[#FFD700] tracking-widest"
                    style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}
                  >
                    {venues.find((v) => v.id === selectedVenue)?.name.toUpperCase()}
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="font-oswald text-[#A0A0A0] mb-5 text-sm sm:text-base">
                  {venueInfo[selectedVenue].description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {venueInfo[selectedVenue].facilities.map((facility, i) => (
                    <div
                      key={i}
                      className="comic-panel text-center py-3 px-2"
                      style={{ background: '#1A1A1A' }}
                    >
                      <p className="font-oswald font-semibold text-xs sm:text-sm text-[#FFD700]">
                        {facility}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Info panels — Getting Around & Quick Tips ── */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <div className="comic-panel" style={{ background: '#111' }}>
            <div className="bg-[#1A6EBF] px-4 py-3 border-b-2 border-[#111]">
              <h4 className="font-bangers text-[#FFD700] tracking-widest text-lg">
                🧭 GETTING AROUND
              </h4>
            </div>
            <ul className="p-4 space-y-2.5">
              {[
                'Campus shuttle available every 15 minutes',
                'Free WiFi throughout the campus',
                'Parking available at designated areas',
                'First Aid centers at all major venues',
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2 font-oswald text-sm text-[#A0A0A0]">
                  <span className="text-[#E8192C] font-bold mt-0.5">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="comic-panel" style={{ background: '#111' }}>
            <div className="bg-[#E8192C] px-4 py-3 border-b-2 border-[#111]">
              <h4 className="font-bangers text-[#FFD700] tracking-widest text-lg">
                ⚡ QUICK TIPS
              </h4>
            </div>
            <ul className="p-4 space-y-2.5">
              {[
                'Arrive 30 minutes early for your events',
                'Download the campus map for offline access',
                'Check the schedule for venue changes',
                'Ask volunteers for directions',
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2 font-oswald text-sm text-[#A0A0A0]">
                  <span className="text-[#FFD700] font-bold mt-0.5">★</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="comic-divider mt-10" />
    </section>
  );
}
