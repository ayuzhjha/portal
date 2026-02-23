'use client';

import { vendors } from '@/lib/data';
import { MapPin, Clock, Phone, DollarSign, Download } from 'lucide-react';
import { SectionHeader } from './section-header';

export function VendorsSection() {
  return (
    <section
      className="py-16 sm:py-20 relative halftone-red"
      style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #120208 50%, #0D0D0D 100%)' }}
    >
      <div className="comic-divider" />

      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 pt-10">
        <SectionHeader
          title="Vendors & Refuel"
          subtitle="Fuel up between battles — premium food stalls &amp; exclusive merch await."
          emoji="🍽️"
        />

        {/* ── Food Vendors ── */}
        <div className="mb-12">
          {/* Sub-section label */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="font-bangers text-[#FFD700] tracking-widest"
              style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', textShadow: '2px 2px 0 #111' }}
            >
              🍕 FOOD VENDORS
            </span>
            <div className="flex-1 h-0.5 bg-[#E8192C]/40" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {vendors.food.map((vendor, index) => (
              <div
                key={vendor.id}
                className="comic-panel hover-lift group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Diagonal stripe header */}
                <div className="stripe-header px-5 py-4 border-b-2 border-[#111]">
                  <h4 className="font-bangers text-[#FFD700] tracking-wide"
                    style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
                  >
                    {vendor.name}
                  </h4>
                  <p className="font-oswald text-[#F5F5F0]/70 text-xs uppercase tracking-widest">
                    {vendor.category}
                  </p>
                </div>

                {/* Details */}
                <div className="p-4 sm:p-5 space-y-2.5">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#A0A0A0]">
                    <MapPin className="w-4 h-4 text-[#E8192C] flex-shrink-0" />
                    <span className="font-oswald">{vendor.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#A0A0A0]">
                    <Clock className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                    <span className="font-oswald">{vendor.hours}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm">
                    <Phone className="w-4 h-4 text-[#F5F5F0] flex-shrink-0" />
                    <a
                      href={`tel:${vendor.phone}`}
                      className="font-oswald text-[#E8192C] hover:text-[#FFD700] transition-colors"
                    >
                      {vendor.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#A0A0A0] border-t-2 border-[#333] pt-2.5">
                    <DollarSign className="w-4 h-4 text-[#4CAF50] flex-shrink-0" />
                    <span className="font-oswald">Min Order: {vendor.minOrder}</span>
                  </div>

                  {/* Special offer badge */}
                  {vendor.specialOffer && (
                    <div
                      className="border-2 border-[#FFD700] bg-[#FFD700]/10 rounded p-2.5 mt-1"
                    >
                      <p className="font-oswald font-semibold text-[#FFD700] text-xs uppercase tracking-wider">
                        ⭐ {vendor.specialOffer}
                      </p>
                    </div>
                  )}
                </div>

                {/* Download button */}
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <a
                    href={vendor.menuLink}
                    download
                    className="action-btn w-full justify-center text-xs sm:text-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Menu
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Merchandise ── */}
        {vendors.other.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="font-bangers text-[#E8192C] tracking-widest"
                style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', textShadow: '2px 2px 0 #111' }}
              >
                🎮 MERCHANDISE
              </span>
              <div className="flex-1 h-0.5 bg-[#FFD700]/40" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {vendors.other.map((vendor: (typeof vendors.other)[number], index: number) => (
                <div
                  key={vendor.id}
                  className="comic-panel hover-lift group overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className="px-5 py-4 border-b-2 border-[#111]"
                    style={{
                      background: 'repeating-linear-gradient(-45deg, #1a0040, #1a0040 8px, #0d0028 8px, #0d0028 16px)',
                    }}
                  >
                    <h4 className="font-bangers text-[#FFD700] tracking-wide"
                      style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
                    >
                      {vendor.name}
                    </h4>
                    <p className="font-oswald text-[#F5F5F0]/70 text-xs uppercase tracking-widest">
                      {vendor.category}
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 space-y-2.5">
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-[#A0A0A0]">
                      <MapPin className="w-4 h-4 text-[#E8192C] flex-shrink-0" />
                      <span className="font-oswald">{vendor.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-[#A0A0A0]">
                      <Clock className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                      <span className="font-oswald">{vendor.hours}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs sm:text-sm">
                      <Phone className="w-4 h-4 text-[#F5F5F0] flex-shrink-0" />
                      <a href={`tel:${vendor.phone}`} className="font-oswald text-[#E8192C] hover:text-[#FFD700] transition-colors">
                        {vendor.phone}
                      </a>
                    </div>
                    {vendor.specialOffer && (
                      <div className="border-2 border-[#FFD700] bg-[#FFD700]/10 rounded p-2.5">
                        <p className="font-oswald font-semibold text-[#FFD700] text-xs uppercase tracking-wider">
                          ⭐ {vendor.specialOffer}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                    <a
                      href={vendor.menuLink}
                      download
                      className="action-btn w-full justify-center text-xs sm:text-sm"
                      style={{ background: '#9333ea' }}
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download Catalogue
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="comic-divider mt-10" />
    </section>
  );
}
