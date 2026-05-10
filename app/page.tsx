import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { AmenitiesSection } from '@/components/amenities-section'
import { RoomsSection } from '@/components/rooms-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { LocationSection } from '@/components/location-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <AmenitiesSection />
        <RoomsSection />
        <TestimonialsSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
