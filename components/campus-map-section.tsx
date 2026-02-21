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
    <section className="min-h-screen bg-gradient-to-b from-background via-slate-900/30 to-background py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header with Marvel Quote */}
        <SectionHeader
          title="Battlefield Layout"
          subtitle="Navigate the campus and find your event venues. Know the terrain, master the strategy."
          emoji="🗺️"
        />

        {/* Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Image */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl overflow-hidden hover-lift">
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

          {/* Venues List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Venues</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {venues.map((venue) => (
                <button
                  key={venue.id}
                  onClick={() =>
                    setSelectedVenue(
                      selectedVenue === venue.id ? null : venue.id
                    )
                  }
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 glass hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 ${selectedVenue === venue.id
                    ? 'border-pink-500 shadow-lg shadow-pink-500/20'
                    : 'border-slate-700'
                    }`}
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">
                        {venue.name}
                      </p>
                      {selectedVenue === venue.id && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {venueInfo[venue.id]?.description}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Venue Details */}
        {selectedVenue && venueInfo[selectedVenue] && (
          <div className="mt-12 scale-in">
            <div className="glass rounded-2xl p-8 border-l-4 border-pink-500">
              <div className="flex items-start gap-4 mb-6">
                <Info className="w-6 h-6 text-pink-400 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {venues.find((v) => v.id === selectedVenue)?.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {venueInfo[selectedVenue].description}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {venueInfo[selectedVenue].facilities.map((facility, i) => (
                      <div
                        key={i}
                        className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3 text-center"
                      >
                        <p className="text-sm text-cyan-400 font-semibold">
                          {facility}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Campus Guide */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass rounded-xl p-6">
            <h4 className="text-xl font-bold text-cyan-400 mb-4">Getting Around</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Campus shuttle available every 15 minutes</li>
              <li>✓ Free WiFi throughout the campus</li>
              <li>✓ Parking available at designated areas</li>
              <li>✓ First Aid centers at all major venues</li>
            </ul>
          </div>
          <div className="glass rounded-xl p-6">
            <h4 className="text-xl font-bold text-pink-400 mb-4">Quick Tips</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Arrive 30 minutes early for your events</li>
              <li>✓ Download the campus map for offline access</li>
              <li>✓ Check the schedule for venue changes</li>
              <li>✓ Ask volunteers for directions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
