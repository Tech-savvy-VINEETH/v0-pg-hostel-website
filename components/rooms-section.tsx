'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RoomCard } from '@/components/room-card'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ROOMS } from '@/lib/products'
import { cn } from '@/lib/utils'

const filters = [
  { label: 'All Rooms', value: 'all' },
  { label: 'Single', value: 'single' },
  { label: 'Shared', value: 'shared' },
  { label: 'AC', value: 'ac' },
  { label: 'Non-AC', value: 'non-ac' },
]

export function RoomsSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredRooms = ROOMS.filter((room) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'single') return room.occupancy === 'single'
    if (activeFilter === 'shared') return room.occupancy === 'double' || room.occupancy === 'triple'
    if (activeFilter === 'ac') return room.ac
    if (activeFilter === 'non-ac') return !room.ac
    return true
  })

  return (
    <section id="rooms" className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollReveal animation="fade-up" className="mb-12 md:mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Accommodation</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Find Your Ideal Room
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Compare room types side-by-side. Every price is fully transparent—meals, Wi-Fi, housekeeping, and utilities included.
          </p>
        </ScrollReveal>

        {/* Filter chips */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border",
                activeFilter === filter.value
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-background text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredRooms.map((room, index) => (
            <ScrollReveal key={room.id} animation="fade-up" delay={index * 100}>
              <RoomCard room={room} />
            </ScrollReveal>
          ))}
        </div>

        {filteredRooms.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No rooms match your filter. Try a different category.</p>
          </div>
        )}

        <ScrollReveal animation="fade-in" delay={300} className="mt-16 text-center">
          <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold transition-all hover:scale-105 shadow-lg shadow-primary/20" asChild>
            <Link href="/rooms" className="flex items-center gap-2">
              View All Room Details
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
