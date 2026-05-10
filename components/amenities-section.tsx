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
import { Card, CardContent } from '@/components/ui/card'
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
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">What We Offer</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Modern Amenities for Comfortable Living
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We provide everything you need for a comfortable stay, from high-speed internet to homely meals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayAmenities.map((amenity) => (
            <Card key={amenity.id} className="group transition-all hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {iconMap[amenity.icon]}
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold">{amenity.name}</h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/amenities" className="flex items-center gap-2">
              View All Amenities
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
