import Link from 'next/link'
import { Users, Maximize, ArrowRight, Check } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
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
    <Card className="group card-premium overflow-hidden border-0 bg-card">
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.name}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Status badge */}
        <div className="absolute right-4 top-4">
          {room.available ? (
            <Badge className="bg-accent/90 text-accent-foreground backdrop-blur-sm">
              Available
            </Badge>
          ) : (
            <Badge variant="secondary" className="backdrop-blur-sm">
              Occupied
            </Badge>
          )}
        </div>
        
        {/* Price overlay on hover */}
        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div>
            <p className="font-serif text-3xl font-bold text-white">
              ₹{room.pricePerMonth.toLocaleString('en-IN')}
            </p>
            <p className="text-sm text-white/80">per month</p>
          </div>
          {room.available && (
            <Button size="sm" className="bg-white text-foreground hover:bg-white/90" asChild>
              <Link href={`/booking?room=${room.id}`} className="flex items-center gap-1">
                Book
                <ArrowRight className="size-3" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      <CardContent className="p-6">
        {/* Room name and meta */}
        <div className="mb-4">
          <h3 className="font-serif text-xl font-semibold tracking-tight">{room.name}</h3>
          <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Users className="size-4" />
              {occupancyLabels[room.occupancy]}
            </span>
            <span className="flex items-center gap-1.5">
              <Maximize className="size-4" />
              {room.size}
            </span>
          </div>
        </div>
        
        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {room.description}
        </p>
        
        {/* Amenities as check list */}
        <div className="space-y-2">
          {room.amenities.slice(0, 3).map((amenity) => (
            <div key={amenity} className="flex items-center gap-2 text-sm">
              <Check className="size-4 text-accent" />
              <span className="text-muted-foreground">{amenity}</span>
            </div>
          ))}
          {room.amenities.length > 3 && (
            <p className="text-sm font-medium text-primary">
              +{room.amenities.length - 3} more amenities
            </p>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-border bg-muted/30 p-6">
        <div>
          <p className="font-serif text-2xl font-bold text-primary">
            ₹{room.pricePerMonth.toLocaleString('en-IN')}
          </p>
          <p className="text-xs text-muted-foreground">per month</p>
        </div>
        <Button className="group/btn" asChild disabled={!room.available}>
          {room.available ? (
            <Link href={`/booking?room=${room.id}`} className="flex items-center gap-2">
              Book Now
              <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          ) : (
            <span>Not Available</span>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
