'use client';

import { vendors } from '@/lib/data';
import { MapPin, Clock, Phone, DollarSign, Download } from 'lucide-react';
import { SectionHeader } from './section-header';

export function VendorsSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-background via-slate-900/30 to-background py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <SectionHeader
          title="Vendors & Refuel"
          subtitle="Fuel your day with amazing food and exclusive merchandise from our premium partners"
          emoji="🍽️"
        />

        {/* Food Vendors */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-cyan-400 mb-8 ml-4">🍕 Food Vendors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.food.map((vendor, index) => (
              <div
                key={vendor.id}
                className="glass rounded-xl overflow-hidden hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-orange-600/20 to-pink-600/20 border-b border-slate-700 p-6">
                  <h4 className="text-2xl font-bold text-foreground mb-2">{vendor.name}</h4>
                  <p className="text-sm text-muted-foreground">{vendor.category}</p>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-foreground">{vendor.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-pink-400 flex-shrink-0" />
                    <span className="text-foreground">{vendor.hours}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <a href={`tel:${vendor.phone}`} className="text-cyan-400 hover:text-pink-400">
                      {vendor.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm pt-2 border-t border-slate-700">
                    <DollarSign className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-foreground">Min: {vendor.minOrder}</span>
                  </div>
                  {vendor.specialOffer && (
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mt-4">
                      <p className="text-yellow-400 text-sm font-semibold">⭐ {vendor.specialOffer}</p>
                    </div>
                  )}
                </div>
                <div className="px-6 pb-6">
                  <a
                    href={vendor.menuLink}
                    download
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-cyan-400 border border-cyan-500/30 hover:border-pink-500/30 hover:text-pink-400 transition-all duration-300 font-semibold"
                  >
                    <Download className="w-4 h-4" />
                    Download Menu
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Merchandise */}
        <div>
          <h3 className="text-3xl font-bold text-purple-400 mb-8 ml-4">🎮 Merchandise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.other.map((vendor, index) => (
              <div
                key={vendor.id}
                className="glass rounded-xl overflow-hidden hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-slate-700 p-6">
                  <h4 className="text-2xl font-bold text-foreground mb-2">{vendor.name}</h4>
                  <p className="text-sm text-muted-foreground">{vendor.category}</p>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-foreground">{vendor.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-pink-400 flex-shrink-0" />
                    <span className="text-foreground">{vendor.hours}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <a href={`tel:${vendor.phone}`} className="text-cyan-400 hover:text-pink-400">
                      {vendor.phone}
                    </a>
                  </div>
                  {vendor.specialOffer && (
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mt-4">
                      <p className="text-yellow-400 text-sm font-semibold">⭐ {vendor.specialOffer}</p>
                    </div>
                  )}
                </div>
                <div className="px-6 pb-6">
                  <a
                    href={vendor.menuLink}
                    download
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border border-purple-500/30 hover:border-pink-500/30 hover:text-pink-400 transition-all duration-300 font-semibold"
                  >
                    <Download className="w-4 h-4" />
                    Download Catalogue
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
