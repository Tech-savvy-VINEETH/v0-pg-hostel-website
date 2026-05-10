import Link from 'next/link'
import { Users, Maximize, Check, X } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
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
    <Card className="group overflow-hidden transition-all hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={room.images[0]}
          alt={room.name}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3 flex gap-2">
          {room.available ? (
            <Badge className="bg-accent text-accent-foreground">Available</Badge>
          ) : (
            <Badge variant="secondary">Occupied</Badge>
          )}
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-xl font-semibold">{room.name}</h3>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Users className="size-4" />
            {occupancyLabels[room.occupancy]}
          </span>
          <span className="flex items-center gap-1">
            <Maximize className="size-4" />
            {room.size}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{room.description}</p>
        <div className="flex flex-wrap gap-2">
          {room.amenities.slice(0, 4).map((amenity) => (
            <Badge key={amenity} variant="outline" className="text-xs">
              {amenity}
            </Badge>
          ))}
          {room.amenities.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{room.amenities.length - 4} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-4">
        <div>
          <p className="font-serif text-2xl font-bold text-primary">
            ₹{room.pricePerMonth.toLocaleString('en-IN')}
          </p>
          <p className="text-xs text-muted-foreground">per month</p>
        </div>
        <Button asChild disabled={!room.available}>
          {room.available ? (
            <Link href={`/booking?room=${room.id}`}>Book Now</Link>
          ) : (
            <span>Not Available</span>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
