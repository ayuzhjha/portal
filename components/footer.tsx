'use client';

import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer
      className="relative halftone-bg"
      style={{ background: '#0D0D0D', borderTop: '5px solid #E8192C' }}
    >
      {/* Decorative action lines at top */}
      <div className="comic-divider" />

      <div className="container mx-auto px-4 py-14">
        {/* ── 4-column comic strip grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-10">

          {/* Panel 1 — Branding */}
          <div className="comic-panel md:col-span-1" style={{ background: '#1A1A1A' }}>
            <div className="stripe-header px-4 py-3 border-b-2 border-[#111]">
              <h3
                className="font-bangers text-[#FFD700] tracking-widest leading-none"
                style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', textShadow: '2px 2px 0 #111' }}
              >
                SYNCHRONIZE<br />
                <span className="text-[#E8192C]">4.0</span>
              </h3>
            </div>
            <div className="p-4">
              <p className="font-oswald text-[#A0A0A0] text-sm">
                The ultimate techfest where innovation meets competition. Three days. One universe.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-[#E8192C] animate-pulse" />
                <span className="font-oswald text-xs text-[#E8192C] uppercase tracking-widest">Registrations Open</span>
              </div>
            </div>
          </div>

          {/* Panel 2 — Quick Links */}
          <div className="comic-panel" style={{ background: '#1A1A1A' }}>
            <div className="bg-[#1A1A1A] border-b-2 border-[#333] px-4 py-3">
              <h4 className="font-bangers text-[#F5F5F0] tracking-widest text-base">
                ⚡ QUICK LINKS
              </h4>
            </div>
            <ul className="p-4 space-y-2">
              {[
                { href: '#events', label: 'Events' },
                { href: '#schedule', label: 'Schedule' },
                { href: '#vendors', label: 'Vendors' },
                { href: '#map', label: 'Campus Map' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="flex items-center gap-2 font-oswald text-sm text-[#A0A0A0] hover:text-[#FFD700] transition-colors group"
                  >
                    <span className="text-[#E8192C] group-hover:text-[#FFD700] transition-colors">▶</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Panel 3 — Contact */}
          <div className="comic-panel" style={{ background: '#1A1A1A' }}>
            <div className="bg-[#1A1A1A] border-b-2 border-[#333] px-4 py-3">
              <h4 className="font-bangers text-[#F5F5F0] tracking-widest text-base">
                📡 CONTACT US
              </h4>
            </div>
            <ul className="p-4 space-y-3">
              <li className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#E8192C] transition-colors">
                <Mail className="w-4 h-4 text-[#E8192C] flex-shrink-0" />
                <a href="mailto:info@synchronize.tech" className="font-oswald text-sm">
                  info@synchronize.tech
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#FFD700] transition-colors">
                <Phone className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                <a href="tel:+918800000000" className="font-oswald text-sm">
                  +91 8800000000
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#A0A0A0]">
                <MapPin className="w-4 h-4 text-[#F5F5F0] flex-shrink-0 mt-0.5" />
                <span className="font-oswald text-sm">SCSE, XIM University</span>
              </li>
            </ul>
          </div>

          {/* Panel 4 — Follow */}
          <div className="comic-panel" style={{ background: '#1A1A1A' }}>
            <div className="bg-[#1A1A1A] border-b-2 border-[#333] px-4 py-3">
              <h4 className="font-bangers text-[#F5F5F0] tracking-widest text-base">
                🌐 FOLLOW US
              </h4>
            </div>
            <div className="p-4 space-y-2.5">
              {[
                { label: 'Instagram', icon: MessageCircle },
                { label: 'Twitter', icon: MessageCircle },
                { label: 'LinkedIn', icon: MessageCircle },
              ].map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  className="flex items-center gap-2 font-oswald text-sm text-[#A0A0A0] hover:text-[#FFD700] transition-colors group"
                >
                  <Icon className="w-4 h-4 text-[#E8192C] group-hover:text-[#FFD700] transition-colors" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── JARVIS Command CTA — speech bubble style ── */}
        <div
          className="comic-frame mb-8 border-l-8"
          style={{ background: '#111', borderLeftColor: '#FFD700' }}
        >
          <div className="stripe-header px-5 py-3 border-b-2 border-[#111]">
            <h4 className="font-bangers text-[#FFD700] tracking-widest text-lg sm:text-xl">
              📡 JARVIS COMMAND CENTER
            </h4>
          </div>
          <div className="p-5 flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="font-oswald text-[#A0A0A0] italic text-sm sm:text-base max-w-lg">
              "I am here to assist. If you encounter any difficulties, my support protocols are standing by 24/7, sir."
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <button className="action-btn text-sm py-2.5 px-5">
                <MessageCircle className="w-4 h-4" />
                Chat Support
              </button>
              <button className="action-btn action-btn-gold text-sm py-2.5 px-5">
                <Mail className="w-4 h-4" />
                Email Us
              </button>
            </div>
          </div>
        </div>

        {/* ── Marvel Quote ── */}
        <div className="thought-bubble text-center mb-8">
          <p className="font-oswald italic text-[#333] text-sm sm:text-base">
            "If you are nothing without the suit, then you shouldn't have it. But with JARVIS and Synchronize 4.0, you'll have everything you need."
          </p>
          <p className="font-bangers text-[#E8192C] text-xs mt-2 tracking-wider">— JARVIS PROTOCOL</p>
        </div>

        {/* ── Bottom bar ── */}
        <div className="comic-divider mb-5" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#A0A0A0] font-oswald">
          <p>© 2025 SYNCHRONIZE 4.0 | Powered by J.A.R.V.I.S.</p>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms of Service', 'FAQ'].map((link) => (
              <a key={link} href="#" className="hover:text-[#FFD700] transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
