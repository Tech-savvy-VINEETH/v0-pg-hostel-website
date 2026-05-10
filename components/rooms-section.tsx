import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RoomCard } from '@/components/room-card'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ROOMS } from '@/lib/products'

export function RoomsSection() {
  const featuredRooms = ROOMS.slice(0, 3)

  return (
    <section className="bg-secondary/30 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-up" className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Accommodation</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Choose Your Perfect Room
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From single occupancy to shared rooms, find the perfect space that fits your lifestyle and budget.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredRooms.map((room, index) => (
            <ScrollReveal key={room.id} animation="fade-up" delay={index * 150}>
              <RoomCard room={room} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in" delay={400} className="mt-12 text-center">
          <Button size="lg" className="transition-all hover:scale-105 shadow-md hover:shadow-primary/20" asChild>
            <Link href="/rooms" className="flex items-center gap-2">
              View All Rooms
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
