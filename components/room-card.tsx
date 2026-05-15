'use client'

import Link from 'next/link'
import { Users, Maximize, Snowflake, Fan, Calendar, ShieldCheck, CheckCircle2, Info } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import type { Room } from '@/lib/products'

interface RoomCardProps {
  room: Room
}

const occupancyLabels = {
  single: 'Single Occupancy',
  double: 'Double Sharing',
  triple: 'Triple Sharing',
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <Card className="group flex flex-col p-0 pb-0 overflow-hidden border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20 relative">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={room.images[0]}
          alt={room.name}
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {room.ac ? (
            <Badge className="bg-blue-600 text-white border-0 gap-1 shadow-sm font-medium">
              <Snowflake className="size-3" /> AC
            </Badge>
          ) : (
            <Badge variant="secondary" className="bg-white/95 text-foreground border-0 gap-1 shadow-sm font-medium">
              <Fan className="size-3" /> Non-AC
            </Badge>
          )}
        </div>
        <div className="absolute right-3 top-3">
          {room.available ? (
            room.availableCount <= 2 ? (
              <Badge className="bg-red-600 text-white border-0 animate-pulse shadow-sm font-medium">
                Only {room.availableCount} left
              </Badge>
            ) : (
              <Badge className="bg-green-600 text-white border-0 shadow-sm font-medium">Available</Badge>
            )
          ) : (
            <Badge variant="secondary" className="bg-neutral-800 text-white border-0 shadow-sm font-medium">Fully Occupied</Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <CardHeader className="pb-2 pt-5 px-6">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-serif text-xl font-bold tracking-tight text-foreground">{room.name}</h3>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5 font-medium">
            <Users className="size-3.5 text-primary" />
            {occupancyLabels[room.occupancy]}
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Maximize className="size-3.5 text-primary" />
            {room.size}
          </span>
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-5 flex-1">
        {/* We moved description and amenities to the drawer to keep the card clean */}
        
        {/* Detail Drawer Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-sm font-semibold text-primary flex items-center gap-1.5 hover:underline underline-offset-4 mt-2 transition-colors focus:outline-none">
              <Info className="size-4" />
              View Room Details & Inclusions
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto pt-10">
            <SheetHeader className="text-left mb-6">
              <div className="flex gap-2 mb-3">
                 <Badge variant="outline">{room.bestFor}</Badge>
                 {room.ac ? <Badge variant="secondary">AC</Badge> : <Badge variant="secondary">Non-AC</Badge>}
              </div>
              <SheetTitle className="font-serif text-2xl">{room.name}</SheetTitle>
              <p className="text-muted-foreground text-sm leading-relaxed mt-2">{room.description}</p>
            </SheetHeader>
            
            <div className="space-y-8 pb-10">
              <div>
                <h4 className="font-serif text-lg font-bold mb-3 border-b pb-2">Rent & Deposit</h4>
                <div className="bg-secondary/30 rounded-xl p-4 flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">₹{room.pricePerMonth.toLocaleString('en-IN')}<span className="text-sm text-muted-foreground font-normal">/mo</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Deposit</p>
                    <p className="text-sm text-muted-foreground">₹{room.deposit.toLocaleString('en-IN')}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-lg font-bold mb-3 border-b pb-2">Room Amenities</h4>
                <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                  {room.amenities.map(amenity => (
                    <div key={amenity} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="size-1.5 rounded-full bg-primary/40 shrink-0" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-serif text-lg font-bold mb-3 border-b pb-2">Included in Rent</h4>
                <div className="flex flex-col gap-3">
                  {room.inclusions.map(inc => (
                    <div key={inc} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="size-4 text-green-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-foreground/80">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border/50">
                <Button className="w-full h-12 text-base font-bold transition-all hover:-translate-y-0.5" asChild disabled={!room.available}>
                  {room.available ? (
                    <Link href="#contact">Schedule a Visit to Book</Link>
                  ) : (
                    <span>Currently Unavailable</span>
                  )}
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-3">No hidden charges. 100% refundable deposit.</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>

      {/* Pricing & Primary CTA */}
      <CardFooter className="flex flex-col gap-4 border-t bg-secondary/10 px-6 py-5">
        <div className="flex items-end justify-between w-full">
          <div>
            <p className="font-serif text-3xl font-bold text-foreground tracking-tight">
              ₹{room.pricePerMonth.toLocaleString('en-IN')}
            </p>
            <p className="text-xs font-medium text-muted-foreground mt-1 tracking-wide uppercase">per month</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-2.5 w-full">
          <Button className="w-full rounded-xl h-12 font-bold text-[15px] transition-all hover:-translate-y-0.5" asChild>
            <Link href="#contact">
              <Calendar className="size-4 mr-2" />
              Schedule a Visit
            </Link>
          </Button>
          
          <div className="flex justify-center w-full">
             <Link 
               href={`/booking?room=${room.id}&action=book`} 
               className={`text-xs font-semibold text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline ${!room.available ? 'pointer-events-none opacity-50' : ''}`}
             >
               Or book this room directly
             </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
