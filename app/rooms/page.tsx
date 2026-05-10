import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { RoomCard } from '@/components/room-card'
import { CTASection } from '@/components/cta-section'
import { ROOMS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Our Rooms | HomeStay PG',
  description: 'Explore our range of single, double, and triple sharing rooms with AC and non-AC options. Find the perfect accommodation for your needs.',
}

export default function RoomsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary/50 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
              Our Rooms
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Choose from a variety of room options designed to suit your lifestyle and budget. 
              All rooms come with essential amenities for a comfortable stay.
            </p>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ROOMS.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>
        </section>

        {/* Included in All Rooms */}
        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center font-serif text-2xl font-bold md:text-3xl">
              Included in All Rooms
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Daily Housekeeping', desc: 'Rooms cleaned every day' },
                { title: 'High-Speed Wi-Fi', desc: 'Unlimited internet access' },
                { title: 'Power Backup', desc: 'Uninterrupted electricity' },
                { title: '3 Meals/Day', desc: 'Breakfast, lunch & dinner' },
                { title: 'RO Water', desc: 'Purified drinking water' },
                { title: '24/7 Security', desc: 'CCTV & guard on duty' },
                { title: 'Laundry Service', desc: 'Weekly wash included' },
                { title: 'Maintenance', desc: 'Quick repairs & support' },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-border bg-card p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
