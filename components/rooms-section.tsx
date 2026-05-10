import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RoomCard } from '@/components/room-card'
import { ROOMS } from '@/lib/products'

export function RoomsSection() {
  const featuredRooms = ROOMS.slice(0, 3)

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/30 to-background" />
      
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Accommodation
          </span>
          <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Find Your Perfect Space
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From private retreats to shared spaces, discover rooms designed for 
            comfort and productivity.
          </p>
        </div>

        {/* Room grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button size="lg" variant="outline" className="group h-14 px-8 text-base" asChild>
            <Link href="/rooms" className="flex items-center gap-2">
              View All Rooms
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
