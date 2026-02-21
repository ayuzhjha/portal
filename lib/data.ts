// Event Categories — Synchronize 4.0 (26–28 Feb, XIM University)
export const eventCategories = [
  {
    id: 'technical',
    name: 'Technical Events',
    icon: '⚙️',
    color: 'from-cyan-500 to-blue-600',
    events: [
      {
        id: 'hackathon',
        name: '24-Hour Hackathon',
        mode: 'Hybrid Mode',
        date: '26 Feb – 27 Feb 2025',
        timing: '02:00 PM (26 Feb) → 02:00 PM (27 Feb)',
        venue: '3rd Floor Classrooms, SCSE',
        rulebookLink: '#',
      },
      {
        id: 'coding',
        name: 'Coding Event',
        date: '26 February 2025',
        timing: '02:30 PM – 05:00 PM',
        venue: '3rd Floor Lab, SCSE',
        rulebookLink: '#',
      },
    ],
  },
  {
    id: 'robotics',
    name: 'Robotics Events',
    icon: '🤖',
    color: 'from-purple-500 to-pink-600',
    events: [
      {
        id: 'line-follower',
        name: 'Robo Line Follower',
        date: '26 February 2025',
        timing: '02:00 PM onwards',
        venue: 'Boys Common Room, Ground Floor NAB',
        rulebookLink: '#',
      },
      {
        id: 'robo-sumo',
        name: 'Robo Sumo',
        date: '27 February 2025',
        timing: '10:00 AM – 05:00 PM',
        venue: 'Amphitheatre',
        rulebookLink: '#',
      },
      {
        id: 'robo-obstacles',
        name: 'Robo Obstacles',
        date: '27 February 2025',
        timing: '10:00 AM – 05:00 PM',
        venue: 'Amphitheatre',
        rulebookLink: '#',
      },
    ],
  },
  {
    id: 'cultural',
    name: 'Cultural Events',
    icon: '🎭',
    color: 'from-orange-500 to-red-600',
    events: [
      {
        id: 'cultural-events',
        name: 'Cultural Events & Closing Ceremony',
        date: '28 February 2025',
        timing: '10:00 AM – 06:30 PM',
        venue: 'Mini Auditorium',
        rulebookLink: '#',
      },
      {
        id: 'jamming',
        name: 'Jamming Session',
        date: '26 February 2025',
        timing: '07:00 PM – 08:00 PM',
        venue: 'Main Auditorium Staircase Area',
        rulebookLink: '#',
      },
    ],
  },
  {
    id: 'esports',
    name: 'Esports Events',
    icon: '🎮',
    color: 'from-green-500 to-emerald-600',
    events: [
      {
        id: 'fifa',
        name: 'FIFA Tournament',
        date: '27 February 2025',
        timing: '02:00 PM – 05:00 PM',
        venue: 'CR 315, 3rd Floor NAB',
        rulebookLink: '#',
      },
      {
        id: 'esports-day3',
        name: 'Esports Event',
        date: '28 February 2025',
        timing: '09:00 AM – 02:00 PM',
        venue: 'E.H.2 – 4th Floor NAB',
        rulebookLink: '#',
      },
    ],
  },
  {
    id: 'entrepreneurship',
    name: 'Entrepreneurship',
    icon: '💡',
    color: 'from-yellow-500 to-orange-600',
    events: [
      {
        id: 'startup-showcase',
        name: 'Startup Showcase & Photo Booth',
        date: '26–27 Feb 2025',
        timing: '10:00 AM – 06:00 PM',
        venue: 'Quadrangle',
        rulebookLink: '#',
      },
      {
        id: 'startup-park',
        name: 'Startup Park & Engagement',
        date: '28 February 2025',
        timing: '10:00 AM – 05:00 PM',
        venue: 'Quadrangle',
        rulebookLink: '#',
      },
    ],
  },
  {
    id: 'sports',
    name: 'Sports Events',
    icon: '⚽',
    color: 'from-indigo-500 to-purple-600',
    events: [
      {
        id: 'futsal-day2',
        name: 'Futsal Tournament – Day 2',
        date: '27 February 2025',
        timing: '10:00 AM – 05:00 PM',
        venue: 'Football Ground',
        rulebookLink: '#',
      },
      {
        id: 'futsal-day3',
        name: 'Futsal Tournament – Day 3',
        date: '28 February 2025',
        timing: '10:00 AM – 04:00 PM',
        venue: 'Football Ground',
        rulebookLink: '#',
      },
    ],
  },
  {
    id: 'poster',
    name: 'Poster Presentation',
    icon: '📋',
    color: 'from-pink-500 to-rose-600',
    events: [
      {
        id: 'poster-presentation',
        name: 'Poster Presentation Event',
        date: '27 February 2025',
        timing: '10:00 AM – 02:00 PM',
        venue: 'Boys Common Room, Ground Floor NAB',
        rulebookLink: '#',
      },
    ],
  },
];

// Vendor Data
export const vendors = {
  food: [
    {
      id: 'food-stalls',
      name: 'Food Vendor Stalls',
      category: 'All Food & Beverages',
      location: 'Back Side of IC',
      phone: 'TBA',
      hours: '10:00 AM – 07:30 PM (All 3 Days)',
      minOrder: 'N/A',
      deliveryTime: 'On-Spot',
      menu: [],
      menuLink: '#',
      specialOffer: 'Available all 3 days for participants, volunteers & attendees',
    },
  ],
  other: [],
};

// Schedule Data — Synchronize 4.0
export const schedule = [
  {
    day: 'Day 1 — Thursday',
    date: '26 February 2025',
    events: [
      {
        time: '08:30 AM – 02:00 PM',
        event: 'Inauguration Ceremony & Guest Address',
        venue: 'Mini Auditorium',
      },
      {
        time: '10:00 AM – 06:00 PM',
        event: 'Startup Showcase & Photo Booth',
        venue: 'Quadrangle',
      },
      {
        time: '02:00 PM',
        event: '24-Hour Hackathon (Day 1 Start)',
        venue: '3rd Floor Classrooms, SCSE',
      },
      {
        time: '02:30 PM – 05:00 PM',
        event: 'Coding Event',
        venue: '3rd Floor Lab, SCSE',
      },
      {
        time: '02:00 PM onwards',
        event: 'Robotics – Line Follower Event',
        venue: 'Boys Common Room (Ground Floor, NAB)',
      },
      {
        time: '07:00 PM – 08:00 PM',
        event: 'Jamming Session',
        venue: 'Main Auditorium Staircase Area',
      },
    ],
  },
  {
    day: 'Day 2 — Friday',
    date: '27 February 2025',
    events: [
      {
        time: '10:00 AM – 05:00 PM',
        event: 'Robotics – Robo Sumo',
        venue: 'Amphitheatre',
      },
      {
        time: '10:00 AM – 05:00 PM',
        event: 'Robotics – Robo Obstacles',
        venue: 'Amphitheatre',
      },
      {
        time: 'Till 02:00 PM',
        event: '24-Hour Hackathon (Concluding)',
        venue: '3rd Floor Classrooms, SCSE',
      },
      {
        time: '10:00 AM – 02:00 PM',
        event: 'Poster Presentation Event',
        venue: 'Boys Common Room (Ground Floor, NAB)',
      },
      {
        time: '10:00 AM – 05:00 PM',
        event: 'Futsal Tournament',
        venue: 'Football Ground',
      },
      {
        time: '02:00 PM – 05:00 PM',
        event: 'FIFA Tournament (Esports)',
        venue: 'CR 315, 3rd Floor NAB',
      },
      {
        time: '10:00 AM – 06:00 PM',
        event: 'Startup Showcase, Game Stalls & Photo Booth',
        venue: 'Quadrangle',
      },
    ],
  },
  {
    day: 'Day 3 — Saturday',
    date: '28 February 2025',
    events: [
      {
        time: '10:00 AM – 06:30 PM',
        event: 'Cultural Events & Closing Ceremony',
        venue: 'Mini Auditorium',
      },
      {
        time: '09:00 AM – 02:00 PM',
        event: 'Esports Event',
        venue: 'E.H.2 – 4th Floor NAB',
      },
      {
        time: '10:00 AM – 04:00 PM',
        event: 'Futsal Tournament (Finals)',
        venue: 'Football Ground',
      },
      {
        time: '10:00 AM – 05:00 PM',
        event: 'Startup Park, Photo Booth & Engagement',
        venue: 'Quadrangle',
      },
    ],
  },
];

// Campus Venues — actual event venues from Synchronize 4.0 schedule
export const venues = [
  { name: 'Mini Auditorium', id: 'mini-auditorium' },
  { name: '3rd Floor Classrooms, SCSE', id: 'scse-classrooms' },
  { name: '3rd Floor Lab, SCSE', id: 'scse-lab' },
  { name: 'Boys Common Room, Ground Floor NAB', id: 'boys-common-room' },
  { name: 'Quadrangle', id: 'quadrangle' },
  { name: 'Amphitheatre', id: 'amphitheatre' },
  { name: 'Football Ground', id: 'football-ground' },
  { name: 'CR 315, 3rd Floor NAB', id: 'cr-315' },
  { name: 'E.H.2 – 4th Floor NAB', id: 'eh2-nab' },
  { name: 'Back Side of IC (Food Stalls)', id: 'food-stalls' },
  { name: 'Main Auditorium Staircase Area', id: 'main-auditorium-staircase' },
  { name: 'Near Gandhi Statue (Help Desk)', id: 'help-desk' },
];
