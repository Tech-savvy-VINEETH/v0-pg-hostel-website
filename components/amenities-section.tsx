import Link from 'next/link'
import { 
  Wifi, 
  Utensils, 
  Shirt, 
  Shield, 
  Sparkles, 
  Zap, 
  Droplets, 
  Car,
  Sofa,
  Dumbbell,
  ArrowRight 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AMENITIES } from '@/lib/amenities'

const iconMap: Record<string, React.ReactNode> = {
  wifi: <Wifi className="size-6" />,
  utensils: <Utensils className="size-6" />,
  shirt: <Shirt className="size-6" />,
  shield: <Shield className="size-6" />,
  sparkles: <Sparkles className="size-6" />,
  zap: <Zap className="size-6" />,
  droplets: <Droplets className="size-6" />,
  car: <Car className="size-6" />,
  sofa: <Sofa className="size-6" />,
  dumbbell: <Dumbbell className="size-6" />,
}

export function AmenitiesSection() {
  const displayAmenities = AMENITIES.slice(0, 6)

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Amenities
          </span>
          <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Everything You Need
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We&apos;ve thought of every detail to make your stay comfortable and convenient.
          </p>
        </div>

        {/* Amenities grid - Bento style */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayAmenities.map((amenity, index) => (
            <div 
              key={amenity.id} 
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 ${
                index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative">
                {/* Icon */}
                <div className="mb-6 inline-flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  {iconMap[amenity.icon]}
                </div>
                
                {/* Content */}
                <h3 className="mb-3 font-serif text-xl font-semibold tracking-tight">
                  {amenity.name}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="group h-14 px-8 text-base" asChild>
            <Link href="/amenities" className="flex items-center gap-2">
              Explore All Amenities
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
