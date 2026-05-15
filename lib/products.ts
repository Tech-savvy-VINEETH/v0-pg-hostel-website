export interface Room {
  id: string
  name: string
  description: string
  priceInCents: number
  pricePerMonth: number
  deposit: number
  occupancy: 'single' | 'double' | 'triple'
  ac: boolean
  amenities: string[]
  inclusions: string[]
  images: string[]
  available: boolean
  availableCount: number
  size: string
  bestFor: string
}

// Room catalog - source of truth for all rooms
export const ROOMS: Room[] = [
  {
    id: 'single-ac',
    name: 'Single AC Room',
    description: 'Spacious single occupancy room with split AC, attached bathroom, ergonomic study table, and full-size wardrobe. Ideal for professionals who value privacy and focused work.',
    priceInCents: 1200000,
    pricePerMonth: 12000,
    deposit: 24000,
    occupancy: 'single',
    ac: true,
    amenities: ['Split AC', 'Attached Bathroom', 'Study Table', 'Wardrobe', 'Wi-Fi', 'Power Backup'],
    inclusions: ['3 Meals/Day', 'Housekeeping', 'Laundry', 'Wi-Fi', 'Electricity', 'Water'],
    images: ['/images/single-ac-1.jpg', '/images/single-ac-2.jpg'],
    available: true,
    availableCount: 2,
    size: '120 sq ft',
    bestFor: 'Working Professionals',
  },
  {
    id: 'single-non-ac',
    name: 'Single Non-AC Room',
    description: 'Comfortable single occupancy room with high-speed ceiling fan, attached bathroom, and all essential furniture. Smart choice for budget-conscious residents.',
    priceInCents: 800000,
    pricePerMonth: 8000,
    deposit: 16000,
    occupancy: 'single',
    ac: false,
    amenities: ['Ceiling Fan', 'Attached Bathroom', 'Study Table', 'Wardrobe', 'Wi-Fi', 'Power Backup'],
    inclusions: ['3 Meals/Day', 'Housekeeping', 'Wi-Fi', 'Electricity', 'Water'],
    images: ['/images/single-nonac-1.jpg', '/images/single-nonac-2.jpg'],
    available: true,
    availableCount: 3,
    size: '100 sq ft',
    bestFor: 'Students',
  },
  {
    id: 'double-ac',
    name: 'Double Sharing AC Room',
    description: 'Well-designed double sharing room with split AC, individual beds with personal storage, dedicated study areas, and attached bathroom. Great for sociable residents.',
    priceInCents: 900000,
    pricePerMonth: 9000,
    deposit: 18000,
    occupancy: 'double',
    ac: true,
    amenities: ['Split AC', 'Attached Bathroom', 'Individual Beds', 'Study Tables', 'Wi-Fi', 'Power Backup'],
    inclusions: ['3 Meals/Day', 'Housekeeping', 'Laundry', 'Wi-Fi', 'Electricity', 'Water'],
    images: ['/images/double-ac-1.jpg', '/images/double-ac-2.jpg'],
    available: true,
    availableCount: 1,
    size: '180 sq ft',
    bestFor: 'Students & Professionals',
  },
  {
    id: 'double-non-ac',
    name: 'Double Sharing Non-AC Room',
    description: 'Spacious double sharing room with ceiling fans, individual beds, and study areas. The perfect balance of comfort and value.',
    priceInCents: 600000,
    pricePerMonth: 6000,
    deposit: 12000,
    occupancy: 'double',
    ac: false,
    amenities: ['Ceiling Fan', 'Attached Bathroom', 'Individual Beds', 'Study Tables', 'Wi-Fi', 'Power Backup'],
    inclusions: ['3 Meals/Day', 'Housekeeping', 'Wi-Fi', 'Electricity', 'Water'],
    images: ['/images/double-nonac-1.jpg', '/images/double-nonac-2.jpg'],
    available: true,
    availableCount: 4,
    size: '160 sq ft',
    bestFor: 'Students',
  },
  {
    id: 'triple-ac',
    name: 'Triple Sharing AC Room',
    description: 'Large triple sharing room with split AC, individual beds, personal storage lockers, and attached bathroom. The most economical AC option available.',
    priceInCents: 700000,
    pricePerMonth: 7000,
    deposit: 14000,
    occupancy: 'triple',
    ac: true,
    amenities: ['Split AC', 'Attached Bathroom', 'Individual Beds', 'Personal Lockers', 'Wi-Fi', 'Power Backup'],
    inclusions: ['3 Meals/Day', 'Housekeeping', 'Wi-Fi', 'Electricity', 'Water'],
    images: ['/images/triple-ac-1.jpg', '/images/triple-ac-2.jpg'],
    available: false,
    availableCount: 0,
    size: '220 sq ft',
    bestFor: 'Students',
  },
  {
    id: 'triple-non-ac',
    name: 'Triple Sharing Non-AC Room',
    description: 'Comfortable triple sharing room with ceiling fans, individual beds, and a common study area. Best value for money accommodation.',
    priceInCents: 500000,
    pricePerMonth: 5000,
    deposit: 10000,
    occupancy: 'triple',
    ac: false,
    amenities: ['Ceiling Fans', 'Attached Bathroom', 'Individual Beds', 'Personal Storage', 'Wi-Fi', 'Power Backup'],
    inclusions: ['3 Meals/Day', 'Housekeeping', 'Wi-Fi', 'Electricity', 'Water'],
    images: ['/images/triple-nonac-1.jpg', '/images/triple-nonac-2.jpg'],
    available: true,
    availableCount: 5,
    size: '200 sq ft',
    bestFor: 'Students',
  },
]

// For Stripe checkout - using room id
export const PRODUCTS = ROOMS.map(room => ({
  id: room.id,
  name: room.name,
  description: room.description,
  priceInCents: room.priceInCents,
}))
