import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  BRANCHES,
  ADMIN_ROOMS,
  BOOKING_REQUESTS,
  VISIT_REQUESTS,
  RESIDENTS,
  REVENUE_DATA,
  RECENT_ACTIVITY,
  Branch,
  AdminRoom,
  BookingRequest,
  VisitRequest,
  Resident,
  RevenueData,
  ActivityItem
} from './admin-data'

interface AdminState {
  isAuthenticated: boolean
  branches: Branch[]
  rooms: AdminRoom[]
  bookingRequests: BookingRequest[]
  visitRequests: VisitRequest[]
  residents: Resident[]
  revenueData: RevenueData[]
  recentActivity: ActivityItem[]

  // Auth actions
  login: () => void
  logout: () => void

  // Data actions
  addBranch: (branch: Branch) => void
  deleteBranch: (id: string) => void
  addResident: (resident: Resident) => void
  addVisitRequest: (request: Omit<VisitRequest, 'id' | 'status'>) => void
  addBookingRequest: (request: Omit<BookingRequest, 'id' | 'status'>) => void
}

export const useAdminStore = create<AdminState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      branches: BRANCHES,
      rooms: ADMIN_ROOMS,
      bookingRequests: BOOKING_REQUESTS,
      visitRequests: VISIT_REQUESTS,
      residents: RESIDENTS,
      revenueData: REVENUE_DATA,
      recentActivity: RECENT_ACTIVITY,

      login: () => set({ isAuthenticated: true }),
      logout: () => set({ isAuthenticated: false }),

      addBranch: (branch) =>
        set((state) => ({
          branches: [...state.branches, branch],
        })),

      deleteBranch: (id) =>
        set((state) => ({
          branches: state.branches.filter((b) => b.id !== id),
        })),

      addResident: (resident) =>
        set((state) => ({
          residents: [...state.residents, resident],
        })),

      addVisitRequest: (request) =>
        set((state) => {
          const newRequest: VisitRequest = {
            ...request,
            id: `vr-${Date.now()}`,
            status: 'pending',
          }
          const newActivity: ActivityItem = {
            id: `act-${Date.now()}`,
            type: 'visit',
            message: `New visit request from ${request.name} (${request.branchPreference})`,
            timestamp: 'Just now',
          }
          return {
            visitRequests: [newRequest, ...state.visitRequests],
            recentActivity: [newActivity, ...state.recentActivity],
          }
        }),

      addBookingRequest: (request) =>
        set((state) => {
          const newRequest: BookingRequest = {
            ...request,
            id: `bk-${Date.now()}`,
            status: 'pending',
          }
          const newActivity: ActivityItem = {
            id: `act-${Date.now()}`,
            type: 'booking',
            message: `New booking request from ${request.name} (${request.branchPreference})`,
            timestamp: 'Just now',
          }
          return {
            bookingRequests: [newRequest, ...state.bookingRequests],
            recentActivity: [newActivity, ...state.recentActivity],
          }
        }),
    }),
    {
      name: 'admin-store', // name of item in the storage (must be unique)
    }
  )
)

// Helper function to replace the one in admin-data.ts
export function useTotalStats() {
  const branches = useAdminStore((state) => state.branches)
  const bookingRequests = useAdminStore((state) => state.bookingRequests)
  const visitRequests = useAdminStore((state) => state.visitRequests)
  const residents = useAdminStore((state) => state.residents)

  const activeBranches = branches.filter((b) => b.status === 'active')
  const totalRooms = activeBranches.reduce((sum, b) => sum + b.totalRooms, 0)
  const occupiedRooms = activeBranches.reduce((sum, b) => sum + b.occupiedRooms, 0)
  const totalRevenue = activeBranches.reduce((sum, b) => sum + b.monthlyRevenue, 0)
  const pendingRequests =
    bookingRequests.filter((b) => b.status === 'pending').length +
    visitRequests.filter((v) => v.status === 'pending').length

  return {
    totalRooms,
    occupiedRooms,
    occupancyRate: totalRooms ? Math.round((occupiedRooms / totalRooms) * 100) : 0,
    totalRevenue,
    totalResidents: residents.length,
    pendingRequests,
    activeBranches: activeBranches.length,
  }
}
