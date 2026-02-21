// Event Categories and Registration Links
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
        registrationLink: 'https://forms.gle/bucfrzwknF9FWgxq7',
      },
      {
        id: 'dsa-coding',
        name: 'DSA-Based Coding Competition',
        registrationLink: 'https://forms.gle/ZLLZPvpWt9PVf8yx7',
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
        id: 'sumo-war',
        name: 'Sumo War',
        registrationLink: 'https://forms.gle/fg7D1SMM4vBr6K2E9',
      },
      {
        id: 'line-follower',
        name: 'Robo Line Follower',
        registrationLink: 'https://forms.gle/JCW1b5EwXkna69ji6',
      },
      {
        id: 'soccer',
        name: 'Robo Soccer',
        registrationLink: 'https://forms.gle/5ihbjN1XMPE5pA2h7',
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
        id: 'singing',
        name: 'Singing',
        registrationLink: 'https://forms.gle/uusYXgbEUE1CFSiE8',
      },
      {
        id: 'dancing',
        name: 'Dancing',
        registrationLink: 'https://forms.gle/ME2iBpZysaXRK42K6',
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
        id: 'bgmi',
        name: 'BGMI Tournament',
        registrationLink: 'https://forms.gle/WeP6kywxrRHzcCS67',
      },
      {
        id: 'fifa',
        name: 'FIFA',
        registrationLink: 'https://forms.gle/aXVQ1rNacywMUM449',
      },
      {
        id: 'freefire',
        name: 'Free Fire',
        registrationLink: 'https://forms.gle/vo5vci1soma9SaSZA',
      },
    ],
  },
  {
    id: 'nontechnical',
    name: 'Non-Technical Events',
    icon: '🎪',
    color: 'from-yellow-500 to-orange-600',
    events: [
      {
        id: 'treasure-hunt',
        name: 'Treasure Hunt',
        registrationLink: 'https://forms.gle/FaKweSfLLVxs8Xdw7',
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
        id: 'futsal',
        name: 'Futsal Tournament',
        registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfn2DQWpyzadiZzy8QQRbfLTunZYGqoNwwkvyrmatYTEF5eUQ/viewform?usp=header',
      },
    ],
  },
  {
    id: 'entrepreneurship',
    name: 'Entrepreneurship Events',
    icon: '💡',
    color: 'from-pink-500 to-rose-600',
    events: [
      {
        id: 'poster-presentation',
        name: 'Poster Presentation',
        registrationLink: 'https://forms.gle/yQRN7T6bmLafXY4X6',
      },
    ],
  },
];

// Vendor Data
export const vendors = {
  food: [
    {
      id: 'pizzahut',
      name: 'Pizza Hut',
      category: 'Italian',
      location: 'Student Center - North Wing',
      phone: '+91-9876543210',
      hours: '10:00 AM - 10:00 PM',
      minOrder: '₹299',
      deliveryTime: '20-30 mins',
      menu: [
        { item: 'Margherita Pizza (Regular)', price: '₹399' },
        { item: 'Pepperoni Pizza (Large)', price: '₹699' },
        { item: 'Veggie Supreme (Medium)', price: '₹549' },
        { item: 'Cheese Garlic Bread', price: '₹199' },
        { item: 'Coca Cola (250ml)', price: '₹49' },
      ],
      menuLink: '#pizza-menu',
      specialOffer: '20% off on orders above ₹500',
    },
    {
      id: 'kfc',
      name: 'KFC',
      category: 'Fast Food',
      location: 'Auditorium Plaza - Ground Floor',
      phone: '+91-8765432109',
      hours: '10:00 AM - 11:00 PM',
      minOrder: '₹199',
      deliveryTime: '15-25 mins',
      menu: [
        { item: 'Crispy Chicken Bucket (4 pcs)', price: '₹249' },
        { item: 'Spicy Wings (6 pcs)', price: '₹189' },
        { item: 'Zinger Burger', price: '₹159' },
        { item: 'Fries (Regular)', price: '₹79' },
        { item: 'Pepsi (350ml)', price: '₹50' },
      ],
      menuLink: '#kfc-menu',
      specialOffer: 'Buy 1 Get 1 Free on Zinger Burgers',
    },
    {
      id: 'wow-momos',
      name: 'Wow Momos',
      category: 'Asian',
      location: 'Faculty Hostel - Near Entrance',
      phone: '+91-7654321098',
      hours: '11:00 AM - 9:00 PM',
      minOrder: '₹149',
      deliveryTime: '10-20 mins',
      menu: [
        { item: 'Chicken Momos (6 pcs)', price: '₹89' },
        { item: 'Veg Momos (8 pcs)', price: '₹79' },
        { item: 'Paneer Momos (6 pcs)', price: '₹99' },
        { item: 'Momo Fried Rice', price: '₹129' },
        { item: 'Ginger Tea', price: '₹30' },
      ],
      menuLink: '#momos-menu',
      specialOffer: 'Free Ginger Tea with every order',
    },
  ],
  other: [
    {
      id: 'anime-store',
      name: 'Anime Paradise',
      category: 'Anime Figurines & Merchandise',
      location: 'Student Center - South Wing',
      phone: '+91-6543210987',
      hours: '9:00 AM - 11:00 PM',
      minOrder: 'None',
      deliveryTime: 'On-Spot',
      products: [
        { item: 'Pop Figure (Standard)', price: '₹299-₹499' },
        { item: 'Anime Poster Collection', price: '₹99-₹299' },
        { item: 'Manga Series Vol 1-3', price: '₹299-₹399' },
        { item: 'Collectible Card Packs', price: '₹49-₹149' },
        { item: 'Anime T-Shirts', price: '₹499-₹699' },
      ],
      menuLink: '#anime-products',
      specialOffer: 'Buy 2 items, Get 15% discount',
    },
  ],
};

// Schedule Data
export const schedule = [
  {
    day: 'Day 1: Friday',
    date: 'March 14, 2025',
    events: [
      {
        time: '9:00 AM - 10:00 AM',
        event: 'Registration & Welcome',
        venue: 'Student Center',
      },
      {
        time: '10:00 AM - 12:00 PM',
        event: 'Technical Events Begin',
        venue: 'Academic Block-1',
      },
      {
        time: '1:00 PM - 2:00 PM',
        event: 'Lunch Break',
        venue: 'All Venues',
      },
      {
        time: '2:00 PM - 6:00 PM',
        event: 'Robotics Competition',
        venue: 'Sports Ground',
      },
      {
        time: '6:00 PM - 8:00 PM',
        event: 'Cultural Events - Singing Round 1',
        venue: 'Auditorium',
      },
    ],
  },
  {
    day: 'Day 2: Saturday',
    date: 'March 15, 2025',
    events: [
      {
        time: '9:00 AM - 1:00 PM',
        event: '24-Hour Hackathon (Continues)',
        venue: 'Academic Block-2',
      },
      {
        time: '11:00 AM - 4:00 PM',
        event: 'Esports Tournament - BGMI Qualifiers',
        venue: 'Gaming Arena',
      },
      {
        time: '2:00 PM - 3:00 PM',
        event: 'Lunch Break',
        venue: 'All Venues',
      },
      {
        time: '5:00 PM - 8:00 PM',
        event: 'Treasure Hunt',
        venue: 'Campus Grounds',
      },
      {
        time: '8:00 PM - 10:00 PM',
        event: 'Cultural Events - Dancing',
        venue: 'Auditorium',
      },
    ],
  },
  {
    day: 'Day 3: Sunday',
    date: 'March 16, 2025',
    events: [
      {
        time: '9:00 AM - 12:00 PM',
        event: 'Hackathon Final Presentations',
        venue: 'Student Center',
      },
      {
        time: '10:00 AM - 4:00 PM',
        event: 'Futsal Tournament Finals',
        venue: 'Sports Ground',
      },
      {
        time: '12:30 PM - 1:30 PM',
        event: 'Lunch Break',
        venue: 'All Venues',
      },
      {
        time: '2:00 PM - 5:00 PM',
        event: 'Esports Finals - FIFA & Free Fire',
        venue: 'Gaming Arena',
      },
      {
        time: '5:00 PM - 7:00 PM',
        event: 'Entrepreneurship - Poster Judging',
        venue: 'Auditorium',
      },
      {
        time: '7:00 PM - 9:00 PM',
        event: 'Closing Ceremony & Prize Distribution',
        venue: 'Auditorium',
      },
    ],
  },
];

// Campus Venues
export const venues = [
  { name: 'Student Center', id: 'student-center' },
  { name: 'Auditorium', id: 'auditorium' },
  { name: 'Academic Block-1', id: 'academic-block-1' },
  { name: 'Academic Block-2', id: 'academic-block-2' },
  { name: 'Sports Ground', id: 'sports-ground' },
  { name: 'Gaming Arena', id: 'gaming-arena' },
  { name: 'Faculty Hostel', id: 'faculty-hostel' },
  { name: 'Campus Grounds', id: 'campus-grounds' },
];
