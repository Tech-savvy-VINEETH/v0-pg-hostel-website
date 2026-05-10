import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RoomCard } from '@/components/room-card'
import { ROOMS } from '@/lib/products'

export function RoomsSection() {
  const featuredRooms = ROOMS.slice(0, 3)

  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Accommodation</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Choose Your Perfect Room
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From single occupancy to shared rooms, find the perfect space that fits your lifestyle and budget.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" asChild>
            <Link href="/rooms" className="flex items-center gap-2">
              View All Rooms
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
