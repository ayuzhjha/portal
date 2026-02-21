import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { EventsSection } from '@/components/events-section';
import { VendorsSection } from '@/components/vendors-section';
import { ScheduleSection } from '@/components/schedule-section';
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

      {/* Schedule Section */}
      <section id="schedule">
        <ScheduleSection />
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
