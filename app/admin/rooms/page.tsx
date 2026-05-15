'use client'

import { useState, useMemo } from 'react'
import {
  Search,
  Filter,
  BedDouble,
  Snowflake,
  Fan,
  User,
  Wrench,
  CheckCircle2,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { ADMIN_ROOMS, BRANCHES } from '@/lib/admin-data'
import { cn } from '@/lib/utils'

export default function RoomsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [branchFilter, setBranchFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')

  const filteredRooms = useMemo(() => {
    return ADMIN_ROOMS.filter((room) => {
      const matchesSearch =
        room.roomNumber.includes(searchQuery) ||
        room.branchName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (room.residentName && room.residentName.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesBranch = branchFilter === 'all' || room.branchId === branchFilter
      const matchesStatus = statusFilter === 'all' || room.status === statusFilter
      const matchesType = typeFilter === 'all' || room.type === typeFilter
      return matchesSearch && matchesBranch && matchesStatus && matchesType
    })
  }, [searchQuery, branchFilter, statusFilter, typeFilter])

  const statusIcons: Record<string, typeof CheckCircle2> = {
    available: CheckCircle2,
    occupied: User,
    maintenance: Wrench,
  }

  const statusColors: Record<string, string> = {
    available: 'bg-emerald-100 text-emerald-700',
    occupied: 'bg-blue-100 text-blue-700',
    maintenance: 'bg-amber-100 text-amber-700',
  }

  const statusBadgeColors: Record<string, string> = {
    available: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    occupied: 'bg-blue-100 text-blue-700 border-blue-200',
    maintenance: 'bg-amber-100 text-amber-700 border-amber-200',
  }

  // Summary stats
  const totalAvailable = ADMIN_ROOMS.filter(r => r.status === 'available').length
  const totalOccupied = ADMIN_ROOMS.filter(r => r.status === 'occupied').length
  const totalMaintenance = ADMIN_ROOMS.filter(r => r.status === 'maintenance').length

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold font-serif text-foreground tracking-tight">
          Room Inventory
        </h1>
        <p className="text-muted-foreground mt-1">
          View and manage rooms across all branches
        </p>
      </div>

      {/* Summary Chips */}
      <div className="flex flex-wrap gap-3">
        <Card className="flex-1 min-w-[140px]">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="size-10 rounded-xl bg-muted flex items-center justify-center">
              <BedDouble className="size-5 text-foreground" />
            </div>
            <div>
              <p className="text-xl font-bold">{ADMIN_ROOMS.length}</p>
              <p className="text-xs text-muted-foreground">Total Rooms</p>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1 min-w-[140px]">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="size-10 rounded-xl bg-emerald-50 flex items-center justify-center">
              <CheckCircle2 className="size-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xl font-bold text-emerald-600">{totalAvailable}</p>
              <p className="text-xs text-muted-foreground">Available</p>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1 min-w-[140px]">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="size-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <User className="size-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xl font-bold text-blue-600">{totalOccupied}</p>
              <p className="text-xs text-muted-foreground">Occupied</p>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1 min-w-[140px]">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="size-10 rounded-xl bg-amber-50 flex items-center justify-center">
              <Wrench className="size-5 text-amber-600" />
            </div>
            <div>
              <p className="text-xl font-bold text-amber-600">{totalMaintenance}</p>
              <p className="text-xs text-muted-foreground">Maintenance</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search by room #, branch, or resident..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-xl h-11"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <select
            value={branchFilter}
            onChange={(e) => setBranchFilter(e.target.value)}
            className="h-11 rounded-xl border border-border bg-background px-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="all">All Branches</option>
            {BRANCHES.filter(b => b.status === 'active').map(b => (
              <option key={b.id} value={b.id}>{b.name.replace('HomeStay PG — ', '')}</option>
            ))}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-11 rounded-xl border border-border bg-background px-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="all">All Status</option>
            <option value="available">Available</option>
            <option value="occupied">Occupied</option>
            <option value="maintenance">Maintenance</option>
          </select>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="h-11 rounded-xl border border-border bg-background px-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="all">All Types</option>
            <option value="Single">Single</option>
            <option value="Double Sharing">Double Sharing</option>
            <option value="Triple Sharing">Triple Sharing</option>
          </select>
        </div>
      </div>

      {/* Rooms Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50 bg-muted/30">
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Room #</th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Branch</th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">AC</th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Floor</th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Price</th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Status</th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Resident</th>
                </tr>
              </thead>
              <tbody>
                {filteredRooms.map((room) => {
                  const StatusIcon = statusIcons[room.status]
                  return (
                    <tr key={room.id} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                      <td className="px-4 py-3.5 font-bold text-foreground">{room.roomNumber}</td>
                      <td className="px-4 py-3.5">
                        <span className="text-foreground font-medium">{room.branchName}</span>
                      </td>
                      <td className="px-4 py-3.5 text-muted-foreground">{room.type}</td>
                      <td className="px-4 py-3.5">
                        {room.ac ? (
                          <span className="inline-flex items-center gap-1 text-blue-600 text-xs font-semibold">
                            <Snowflake className="size-3.5" /> AC
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-muted-foreground text-xs font-semibold">
                            <Fan className="size-3.5" /> Non-AC
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-muted-foreground">Floor {room.floor}</td>
                      <td className="px-4 py-3.5 font-semibold text-foreground">₹{room.pricePerMonth.toLocaleString('en-IN')}</td>
                      <td className="px-4 py-3.5">
                        <Badge className={cn('gap-1 text-[10px] border', statusBadgeColors[room.status])}>
                          <StatusIcon className="size-3" />
                          {room.status.charAt(0).toUpperCase() + room.status.slice(1)}
                        </Badge>
                      </td>
                      <td className="px-4 py-3.5 text-muted-foreground">{room.residentName || '—'}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          {filteredRooms.length === 0 && (
            <div className="py-16 text-center text-muted-foreground">
              No rooms match your filters.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
