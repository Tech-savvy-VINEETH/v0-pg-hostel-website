'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Check, Users, Maximize } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Checkout } from '@/components/checkout'
import { ROOMS } from '@/lib/products'

const occupancyLabels = {
  single: 'Single Occupancy',
  double: 'Double Sharing',
  triple: 'Triple Sharing',
}

function BookingContent() {
  const searchParams = useSearchParams()
  const roomId = searchParams.get('room')
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(roomId)

  const selectedRoom = selectedRoomId ? ROOMS.find(r => r.id === selectedRoomId) : null
  const availableRooms = ROOMS.filter(r => r.available)

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/rooms" className="mb-8 inline-flex items-center gap-2 text-muted-foreground hover:text-primary">
        <ArrowLeft className="size-4" />
        Back to Rooms
      </Link>

      <h1 className="font-serif text-3xl font-bold md:text-4xl">
        Book Your Room
      </h1>
      <p className="mt-2 text-muted-foreground">
        Select a room and complete your booking with secure payment.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Room Selection */}
        <div className="lg:col-span-1">
          <h2 className="mb-4 font-serif text-xl font-semibold">Select a Room</h2>
          <div className="flex flex-col gap-3">
            {availableRooms.map((room) => (
              <Card 
                key={room.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedRoomId === room.id ? 'border-primary ring-2 ring-primary/20' : ''
                }`}
                onClick={() => setSelectedRoomId(room.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h3 className="font-semibold">{room.name}</h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="size-3" />
                          {occupancyLabels[room.occupancy]}
                        </span>
                        <span className="flex items-center gap-1">
                          <Maximize className="size-3" />
                          {room.size}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-serif font-bold text-primary">
                        ₹{room.pricePerMonth.toLocaleString('en-IN')}
                      </p>
                      <p className="text-xs text-muted-foreground">/month</p>
                    </div>
                  </div>
                  {selectedRoomId === room.id && (
                    <div className="mt-2 flex items-center gap-1 text-sm text-primary">
                      <Check className="size-4" />
                      Selected
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Checkout Section */}
        <div className="lg:col-span-2">
          {selectedRoom ? (
            <div className="flex flex-col gap-6">
              {/* Selected Room Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{selectedRoom.name}</h3>
                        <p className="text-sm text-muted-foreground">{selectedRoom.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedRoom.amenities.map((amenity) => (
                        <Badge key={amenity} variant="outline" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Monthly Rent</span>
                        <span>₹{selectedRoom.pricePerMonth.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="mt-2 flex justify-between font-semibold">
                        <span>Security Deposit (One-time)</span>
                        <span className="text-primary">₹{(selectedRoom.priceInCents / 100).toLocaleString('en-IN')}</span>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        * Security deposit is refundable at the end of your stay
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stripe Checkout */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Secure Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <Checkout roomId={selectedRoom.id} />
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card className="flex h-full items-center justify-center p-12">
              <div className="text-center">
                <h3 className="font-serif text-xl font-semibold">Select a Room</h3>
                <p className="mt-2 text-muted-foreground">
                  Choose a room from the list to proceed with booking.
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

function BookingFallback() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Skeleton className="mb-8 h-6 w-32" />
      <Skeleton className="h-10 w-64" />
      <Skeleton className="mt-2 h-6 w-96" />
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Skeleton className="mb-4 h-8 w-32" />
          <div className="flex flex-col gap-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-24 w-full" />
            ))}
          </div>
        </div>
        <div className="lg:col-span-2">
          <Skeleton className="h-96 w-full" />
        </div>
      </div>
    </div>
  )
}

export default function BookingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <Suspense fallback={<BookingFallback />}>
          <BookingContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
