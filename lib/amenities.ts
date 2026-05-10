export interface Amenity {
  id: string
  name: string
  description: string
  icon: string
}

export const AMENITIES: Amenity[] = [
  {
    id: 'wifi',
    name: 'High-Speed Wi-Fi',
    description: 'Unlimited high-speed internet connectivity throughout the premises for work and entertainment.',
    icon: 'wifi',
  },
  {
    id: 'meals',
    name: 'Homely Meals',
    description: 'Nutritious vegetarian meals prepared fresh daily - breakfast, lunch, and dinner included.',
    icon: 'utensils',
  },
  {
    id: 'laundry',
    name: 'Laundry Service',
    description: 'Weekly laundry service with wash, dry, and iron facilities available.',
    icon: 'shirt',
  },
  {
    id: 'security',
    name: '24/7 Security',
    description: 'Round-the-clock security with CCTV surveillance and secure entry systems.',
    icon: 'shield',
  },
  {
    id: 'housekeeping',
    name: 'Daily Housekeeping',
    description: 'Professional daily cleaning service for rooms and common areas.',
    icon: 'sparkles',
  },
  {
    id: 'power-backup',
    name: 'Power Backup',
    description: 'Uninterrupted power supply with generator backup during outages.',
    icon: 'zap',
  },
  {
    id: 'water',
    name: 'RO Water',
    description: 'Purified RO drinking water available 24/7 on every floor.',
    icon: 'droplets',
  },
  {
    id: 'parking',
    name: 'Parking Space',
    description: 'Dedicated parking for two-wheelers and limited car parking.',
    icon: 'car',
  },
  {
    id: 'common-area',
    name: 'Common Areas',
    description: 'Spacious common rooms with TV, recreational area, and reading corner.',
    icon: 'sofa',
  },
  {
    id: 'gym',
    name: 'Fitness Corner',
    description: 'Basic gym equipment for daily workouts and staying fit.',
    icon: 'dumbbell',
  },
]

export const NEARBY_PLACES = [
  { name: 'City Metro Station', distance: '500m', type: 'transport' },
  { name: 'Central University', distance: '1.2km', type: 'education' },
  { name: 'Tech Park Business Center', distance: '2km', type: 'office' },
  { name: 'City Hospital', distance: '1.5km', type: 'healthcare' },
  { name: 'Central Mall', distance: '800m', type: 'shopping' },
  { name: 'City Bus Stand', distance: '300m', type: 'transport' },
]
