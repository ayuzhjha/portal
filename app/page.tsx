import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { EventsSection } from '@/components/events-section';
import { VendorsSection } from '@/components/vendors-section';
import { CampusMapSection } from '@/components/campus-map-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background">
      <Navigation />

      {/* Hero */}
      <section id="hero" className="pt-[calc(2.5rem+1.75rem)] sm:pt-[calc(2.5rem+2rem)]">
        <HeroSection />
      </section>

      {/* Events */}
      <section id="events">
        <EventsSection />
      </section>

      {/* Vendors */}
      <section id="vendors">
        <VendorsSection />
      </section>

      {/* Timeline CTA */}
      <section
        id="schedule"
        className="py-10 sm:py-14 px-4 flex justify-center relative"
        style={{ background: 'linear-gradient(180deg, #0D0D0D, #140508, #0D0D0D)' }}
      >
        {/* Background dots */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(232,25,44,0.1) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />
        <div className="relative z-10 text-center space-y-4">
          <p className="font-bangers text-[#A0A0A0] tracking-[0.2em] text-sm">
            — YOUR MISSION AWAITS —
          </p>
          <a
            href="/timeline"
            className="action-btn text-base sm:text-lg px-7 sm:px-10 py-3 sm:py-4 inline-flex"
          >
            ⏰ View Full Event Timeline →
          </a>
          <p className="font-oswald text-xs text-[#A0A0A0] tracking-wider">
            3 days · 12+ events · One legendary techfest
          </p>
        </div>
      </section>

      {/* Campus Map */}
      <section id="map">
        <CampusMapSection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
