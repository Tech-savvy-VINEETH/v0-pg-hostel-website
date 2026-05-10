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
import { ScrollReveal } from '@/components/scroll-reveal'
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
    <section className="bg-background py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="fade-up" className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">What We Offer</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Modern Amenities for Comfortable Living
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We provide everything you need for a comfortable stay, from high-speed internet to homely meals.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayAmenities.map((amenity, index) => (
            <ScrollReveal key={amenity.id} animation="fade-up" delay={index * 100}>
              <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/40 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                <CardContent className="flex flex-col items-center p-8 text-center relative z-10">
                  <div className="mb-5 flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/20">
                    {iconMap[amenity.icon]}
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">{amenity.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{amenity.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in" delay={400} className="mt-12 text-center">
          <Button variant="outline" size="lg" className="transition-all hover:scale-105 hover:bg-primary/5 hover:border-primary/50" asChild>
            <Link href="/amenities" className="flex items-center gap-2">
              View All Amenities
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
