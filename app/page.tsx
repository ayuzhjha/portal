import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { EventsSection } from '@/components/events-section';
import { VendorsSection } from '@/components/vendors-section';
import { CampusMapSection } from '@/components/campus-map-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="pt-16">
        <HeroSection />
      </section>

      {/* Events Section */}
      <section id="events">
        <EventsSection />
      </section>

      {/* Vendors Section */}
      <section id="vendors">
        <VendorsSection />
      </section>

      {/* Timeline Link */}
      <section id="schedule" className="py-12 px-4 flex justify-center">
        <a
          href="/timeline"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
        >
          ⏰ View Full Event Timeline →
        </a>
      </section>

      {/* Campus Map Section */}
      <section id="map">
        <CampusMapSection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
