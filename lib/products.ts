export interface Room {
  id: string
  name: string
  description: string
  priceInCents: number
  pricePerMonth: number
  occupancy: 'single' | 'double' | 'triple'
  amenities: string[]
  images: string[]
  available: boolean
  size: string
}

// Room catalog - source of truth for all rooms
export const ROOMS: Room[] = [
  {
    id: 'single-ac',
    name: 'Single AC Room',
    description: 'Spacious single occupancy room with air conditioning, attached bathroom, study table, and wardrobe. Perfect for students and professionals who value privacy.',
    priceInCents: 1200000, // ₹12,000 deposit
    pricePerMonth: 12000,
    occupancy: 'single',
    amenities: ['Air Conditioning', 'Attached Bathroom', 'Study Table', 'Wardrobe', 'Wi-Fi', 'Power Backup'],
    images: ['/images/rooms/single-ac.jpg', '/images/gallery/room-1.jpg'],
    available: true,
    size: '120 sq ft',
  },
  {
    id: 'single-non-ac',
    name: 'Single Non-AC Room',
    description: 'Comfortable single occupancy room with ceiling fan, attached bathroom, and all essential furniture. An affordable choice for budget-conscious residents.',
    priceInCents: 800000, // ₹8,000 deposit
    pricePerMonth: 8000,
    occupancy: 'single',
    amenities: ['Ceiling Fan', 'Attached Bathroom', 'Study Table', 'Wardrobe', 'Wi-Fi', 'Power Backup'],
    images: ['/images/rooms/single-non-ac.jpg', '/images/gallery/room-5.jpg'],
    available: true,
    size: '100 sq ft',
  },
  {
    id: 'double-ac',
    name: 'Double Sharing AC Room',
    description: 'Well-designed double sharing room with air conditioning, individual beds, study areas, and attached bathroom. Great for those who enjoy company.',
    priceInCents: 900000, // ₹9,000 deposit per person
    pricePerMonth: 9000,
    occupancy: 'double',
    amenities: ['Air Conditioning', 'Attached Bathroom', 'Individual Beds', 'Study Tables', 'Wi-Fi', 'Power Backup'],
    images: ['/images/rooms/double-ac.jpg', '/images/gallery/room-2.jpg'],
    available: true,
    size: '180 sq ft',
  },
  {
    id: 'double-non-ac',
    name: 'Double Sharing Non-AC Room',
    description: 'Spacious double sharing room with ceiling fan, individual beds, and study areas. Perfect balance of comfort and affordability.',
    priceInCents: 600000, // ₹6,000 deposit per person
    pricePerMonth: 6000,
    occupancy: 'double',
    amenities: ['Ceiling Fan', 'Attached Bathroom', 'Individual Beds', 'Study Tables', 'Wi-Fi', 'Power Backup'],
    images: ['/images/rooms/double-non-ac.jpg', '/images/gallery/room-4.jpg'],
    available: true,
    size: '160 sq ft',
  },
  {
    id: 'triple-ac',
    name: 'Triple Sharing AC Room',
    description: 'Large triple sharing room with air conditioning, individual beds, personal storage, and attached bathroom. Most economical AC option.',
    priceInCents: 700000, // ₹7,000 deposit per person
    pricePerMonth: 7000,
    occupancy: 'triple',
    amenities: ['Air Conditioning', 'Attached Bathroom', 'Individual Beds', 'Personal Storage', 'Wi-Fi', 'Power Backup'],
    images: ['/images/rooms/triple-ac.jpg', '/images/gallery/room-3.jpg'],
    available: false,
    size: '220 sq ft',
  },
  {
    id: 'triple-non-ac',
    name: 'Triple Sharing Non-AC Room',
    description: 'Comfortable triple sharing room with ceiling fans, individual beds, and common study area. Best value for money.',
    priceInCents: 500000, // ₹5,000 deposit per person
    pricePerMonth: 5000,
    occupancy: 'triple',
    amenities: ['Ceiling Fans', 'Attached Bathroom', 'Individual Beds', 'Personal Storage', 'Wi-Fi', 'Power Backup'],
    images: ['/images/rooms/triple-non-ac.jpg', '/images/gallery/room-6.jpg'],
    available: true,
    size: '200 sq ft',
  },
]

// For Stripe checkout - using room id
export const PRODUCTS = ROOMS.map(room => ({
  id: room.id,
  name: room.name,
  description: room.description,
  priceInCents: room.priceInCents,
}))
