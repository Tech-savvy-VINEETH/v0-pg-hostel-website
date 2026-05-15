import { ScrollReveal } from '@/components/scroll-reveal'
import {
  Utensils, Shield, Wifi, Sparkles, Zap, Shirt,
  Coffee, Camera, Lock, BookOpen, Dumbbell, Droplets,
} from 'lucide-react'

const amenityCategories = [
  {
    title: 'Essentials',
    items: [
      { icon: Zap, label: '24/7 Power Backup', detail: 'Uninterrupted supply with generator backup' },
      { icon: Droplets, label: 'RO Purified Water', detail: 'Safe drinking water on every floor' },
      { icon: Sparkles, label: 'Furnished Rooms', detail: 'Bed, wardrobe, study table, and mirror included' },
    ],
  },
  {
    title: 'Food & Dining',
    items: [
      { icon: Utensils, label: '3 Homely Meals Daily', detail: 'Freshly cooked breakfast, lunch, and dinner' },
      { icon: Coffee, label: 'Tea & Snacks', detail: 'Evening tea with snacks available daily' },
      { icon: Utensils, label: 'Weekend Specials', detail: 'Regional cuisine and special dishes every weekend' },
    ],
  },
  {
    title: 'Safety & Security',
    items: [
      { icon: Lock, label: 'Biometric Access', detail: 'Fingerprint-controlled entry for residents only' },
      { icon: Camera, label: 'CCTV Surveillance', detail: 'Round-the-clock monitoring at all entry points' },
      { icon: Shield, label: 'Security Guards', detail: 'Trained personnel on premises 24/7' },
    ],
  },
  {
    title: 'Work & Study',
    items: [
      { icon: Wifi, label: 'High-Speed Wi-Fi', detail: '100 Mbps fiber internet in every room' },
      { icon: BookOpen, label: 'Study Lounge', detail: 'Quiet, air-conditioned common study area' },
      { icon: Zap, label: 'Power Outlets', detail: 'Multiple charging points at every desk' },
    ],
  },
  {
    title: 'Housekeeping & Maintenance',
    items: [
      { icon: Sparkles, label: 'Daily Room Cleaning', detail: 'Professional housekeeping every morning' },
      { icon: Shirt, label: 'Laundry Service', detail: 'Washing and ironing available on-site' },
      { icon: Sparkles, label: 'Pest Control', detail: 'Monthly scheduled pest management' },
    ],
  },
  {
    title: 'Lifestyle & Comfort',
    items: [
      { icon: Dumbbell, label: 'Fitness Area', detail: 'Basic gym equipment for daily workouts' },
      { icon: Coffee, label: 'Common Lounge', detail: 'Spacious area for socializing and relaxation' },
      { icon: Sparkles, label: 'Terrace Access', detail: 'Open terrace space for fresh air and views' },
    ],
  },
]

export function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-white border-y border-border/50 py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <ScrollReveal animation="fade-up" className="mb-16 md:mb-20 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">What&apos;s Included</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Everything You Need, <span className="text-primary italic">Nothing You Don&apos;t</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Every amenity is designed around one principle: your daily comfort should never require a second thought.
          </p>
        </ScrollReveal>

        <div className="grid gap-12 md:gap-16 md:grid-cols-2 lg:grid-cols-3">
          {amenityCategories.map((category, catIndex) => (
            <ScrollReveal key={category.title} animation="fade-up" delay={catIndex * 80}>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-6 pb-3 border-b-2 border-primary/20">
                  {category.title}
                </h3>
                <ul className="space-y-5">
                  {category.items.map((item) => {
                    const Icon = item.icon
                    return (
                      <li key={item.label} className="flex items-start gap-3 group">
                        <div className="flex size-9 items-center justify-center rounded-lg bg-primary/8 text-primary shrink-0 mt-0.5 transition-colors group-hover:bg-primary/15">
                          <Icon className="size-4.5" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{item.label}</p>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.detail}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
