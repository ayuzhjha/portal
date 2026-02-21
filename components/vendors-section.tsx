'use client';

import { useState } from 'react';
import { vendors } from '@/lib/data';
import { MapPin, Clock, Phone, DollarSign, ChevronDown } from 'lucide-react';
import { SectionHeader } from './section-header';

export function VendorsSection() {
  const [expandedVendor, setExpandedVendor] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-background via-slate-900/30 to-background py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header with Marvel Quote */}
        <SectionHeader
          title="Vendors & Refuel"
          subtitle="Fuel your day with amazing food and exclusive merchandise from our premium partners"
          emoji="🍽️"
        />

        {/* Food Vendors */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-cyan-400 mb-8 ml-4">
            🍕 Food Vendors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.food.map((vendor, index) => (
              <div
                key={vendor.id}
                className="glass rounded-xl overflow-hidden hover-lift group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-600/20 to-pink-600/20 border-b border-slate-700 p-6">
                  <h4 className="text-2xl font-bold text-foreground mb-2">
                    {vendor.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{vendor.category}</p>
                </div>

                {/* Quick Info */}
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
                    <a
                      href={`tel:${vendor.phone}`}
                      className="text-cyan-400 hover:text-pink-400"
                    >
                      {vendor.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-sm pt-2 border-t border-slate-700">
                    <DollarSign className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-foreground">Min: {vendor.minOrder}</span>
                  </div>

                  {vendor.specialOffer && (
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mt-4">
                      <p className="text-yellow-400 text-sm font-semibold">
                        ⭐ {vendor.specialOffer}
                      </p>
                    </div>
                  )}
                </div>

                {/* Expandable Menu */}
                <button
                  onClick={() =>
                    setExpandedVendor(
                      expandedVendor === vendor.id ? null : vendor.id
                    )
                  }
                  className="w-full px-6 py-3 bg-slate-800/50 border-t border-slate-700 text-cyan-400 font-semibold flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                >
                  <span>View Menu</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedVendor === vendor.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expanded Menu */}
                {expandedVendor === vendor.id && (
                  <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-700 space-y-2">
                    {vendor.menu.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-start gap-4 py-2 border-b border-slate-700/50 last:border-0"
                      >
                        <span className="text-foreground text-sm">
                          {item.item}
                        </span>
                        <span className="text-green-400 font-semibold text-sm">
                          {item.price}
                        </span>
                      </div>
                    ))}
                    <div className="pt-3 text-xs text-muted-foreground">
                      Delivery: {vendor.deliveryTime}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Other Vendors */}
        <div>
          <h3 className="text-3xl font-bold text-purple-400 mb-8 ml-4">
            🎮 Merchandise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.other.map((vendor, index) => (
              <div
                key={vendor.id}
                className="glass rounded-xl overflow-hidden hover-lift group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-slate-700 p-6">
                  <h4 className="text-2xl font-bold text-foreground mb-2">
                    {vendor.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{vendor.category}</p>
                </div>

                {/* Quick Info */}
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
                    <a
                      href={`tel:${vendor.phone}`}
                      className="text-cyan-400 hover:text-pink-400"
                    >
                      {vendor.phone}
                    </a>
                  </div>

                  {vendor.specialOffer && (
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mt-4">
                      <p className="text-yellow-400 text-sm font-semibold">
                        ⭐ {vendor.specialOffer}
                      </p>
                    </div>
                  )}
                </div>

                {/* Expandable Products */}
                <button
                  onClick={() =>
                    setExpandedVendor(
                      expandedVendor === vendor.id ? null : vendor.id
                    )
                  }
                  className="w-full px-6 py-3 bg-slate-800/50 border-t border-slate-700 text-purple-400 font-semibold flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                >
                  <span>View Products</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedVendor === vendor.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expanded Products */}
                {expandedVendor === vendor.id && (
                  <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-700 space-y-2">
                    {vendor.products.map((product, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-start gap-4 py-2 border-b border-slate-700/50 last:border-0"
                      >
                        <span className="text-foreground text-sm">
                          {product.item}
                        </span>
                        <span className="text-green-400 font-semibold text-sm">
                          {product.price}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
