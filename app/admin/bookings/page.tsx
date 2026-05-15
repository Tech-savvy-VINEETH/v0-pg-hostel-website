'use client'

import { useState } from 'react'
import {
  CalendarCheck,
  Eye,
  Clock,
  CheckCircle2,
  XCircle,
  Search,
  Phone,
  Mail,
  Video,
  MapPin,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BOOKING_REQUESTS, VISIT_REQUESTS } from '@/lib/admin-data'
import { cn } from '@/lib/utils'

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState<'bookings' | 'visits'>('bookings')
  const [searchQuery, setSearchQuery] = useState('')

  const statusColors: Record<string, string> = {
    pending: 'bg-amber-100 text-amber-700 border-amber-200',
    confirmed: 'bg-blue-100 text-blue-700 border-blue-200',
    completed: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    cancelled: 'bg-red-100 text-red-700 border-red-200',
  }

  const statusIcons: Record<string, typeof Clock> = {
    pending: Clock,
    confirmed: CheckCircle2,
    completed: CheckCircle2,
    cancelled: XCircle,
  }

  const filteredBookings = BOOKING_REQUESTS.filter((b) =>
    b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.branchPreference.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredVisits = VISIT_REQUESTS.filter((v) =>
    v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.branchPreference.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const pendingBookings = BOOKING_REQUESTS.filter(b => b.status === 'pending').length
  const pendingVisits = VISIT_REQUESTS.filter(v => v.status === 'pending').length

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold font-serif text-foreground tracking-tight">
          Bookings & Visit Requests
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage incoming booking and visit tour requests
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-border/50 pb-0">
        <button
          onClick={() => setActiveTab('bookings')}
          className={cn(
            'px-5 py-3 text-sm font-semibold transition-all border-b-2 -mb-px',
            activeTab === 'bookings'
              ? 'text-primary border-primary'
              : 'text-muted-foreground border-transparent hover:text-foreground hover:border-border'
          )}
        >
          Booking Requests
          {pendingBookings > 0 && (
            <Badge className="ml-2 bg-amber-100 text-amber-700 border-amber-200 text-[10px] px-1.5">{pendingBookings}</Badge>
          )}
        </button>
        <button
          onClick={() => setActiveTab('visits')}
          className={cn(
            'px-5 py-3 text-sm font-semibold transition-all border-b-2 -mb-px',
            activeTab === 'visits'
              ? 'text-primary border-primary'
              : 'text-muted-foreground border-transparent hover:text-foreground hover:border-border'
          )}
        >
          Visit Requests
          {pendingVisits > 0 && (
            <Badge className="ml-2 bg-amber-100 text-amber-700 border-amber-200 text-[10px] px-1.5">{pendingVisits}</Badge>
          )}
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          placeholder={`Search ${activeTab}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 rounded-xl h-11"
        />
      </div>

      {/* Booking Requests Table */}
      {activeTab === 'bookings' && (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50 bg-muted/30">
                    <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Name</th>
                    <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Contact</th>
                    <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Room Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Branch</th>
                    <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Date</th>
                    <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Status</th>
                    <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking) => {
                    const StatusIcon = statusIcons[booking.status]
                    return (
                      <tr key={booking.id} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-3.5">
                          <p className="font-semibold text-foreground">{booking.name}</p>
                          {booking.notes && (
                            <p className="text-xs text-muted-foreground mt-0.5">{booking.notes}</p>
                          )}
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="flex flex-col gap-1">
                            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Phone className="size-3" />{booking.phone}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Mail className="size-3" />{booking.email}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3.5 text-foreground font-medium">{booking.roomType}</td>
                        <td className="px-4 py-3.5 text-muted-foreground">{booking.branchPreference}</td>
                        <td className="px-4 py-3.5 text-muted-foreground">{new Date(booking.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</td>
                        <td className="px-4 py-3.5">
                          <Badge className={cn('gap-1 text-[10px] border', statusColors[booking.status])}>
                            <StatusIcon className="size-3" />
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </Badge>
                        </td>
                        <td className="px-4 py-3.5">
                          {booking.status === 'pending' && (
                            <div className="flex gap-1.5">
                              <Button size="sm" variant="outline" className="h-7 text-xs rounded-lg px-2.5">Confirm</Button>
                              <Button size="sm" variant="ghost" className="h-7 text-xs rounded-lg px-2.5 text-red-600 hover:text-red-700 hover:bg-red-50">Reject</Button>
                            </div>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            {filteredBookings.length === 0 && (
              <div className="py-16 text-center text-muted-foreground">No booking requests found.</div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Visit Requests Table */}
      {activeTab === 'visits' && (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50 bg-muted/30">
                    <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Name</th>
                    <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Contact</th>
                    <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Visit Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Branch</th>
                    <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Date & Time</th>
                    <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Status</th>
                    <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVisits.map((visit) => {
                    const StatusIcon = statusIcons[visit.status]
                    return (
                      <tr key={visit.id} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-3.5 font-semibold text-foreground">{visit.name}</td>
                        <td className="px-4 py-3.5">
                          <div className="flex flex-col gap-1">
                            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Phone className="size-3" />{visit.phone}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Mail className="size-3" />{visit.email}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3.5">
                          <Badge variant="outline" className="gap-1 text-xs">
                            {visit.visitType === 'in-person' ? (
                              <><MapPin className="size-3" /> In-Person</>
                            ) : (
                              <><Video className="size-3" /> Virtual</>
                            )}
                          </Badge>
                        </td>
                        <td className="px-4 py-3.5 text-muted-foreground">{visit.branchPreference}</td>
                        <td className="px-4 py-3.5">
                          <p className="text-foreground font-medium">{new Date(visit.preferredDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</p>
                          <p className="text-xs text-muted-foreground">{visit.preferredTime}</p>
                        </td>
                        <td className="px-4 py-3.5">
                          <Badge className={cn('gap-1 text-[10px] border', statusColors[visit.status])}>
                            <StatusIcon className="size-3" />
                            {visit.status.charAt(0).toUpperCase() + visit.status.slice(1)}
                          </Badge>
                        </td>
                        <td className="px-4 py-3.5">
                          {visit.status === 'pending' && (
                            <div className="flex gap-1.5">
                              <Button size="sm" variant="outline" className="h-7 text-xs rounded-lg px-2.5">Confirm</Button>
                              <Button size="sm" variant="ghost" className="h-7 text-xs rounded-lg px-2.5 text-red-600 hover:text-red-700 hover:bg-red-50">Reject</Button>
                            </div>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            {filteredVisits.length === 0 && (
              <div className="py-16 text-center text-muted-foreground">No visit requests found.</div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
