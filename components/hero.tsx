import Link from 'next/link'
import { ArrowRight, MapPin, Users, Shield, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 size-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col gap-8">
            {/* Premium badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm font-medium tracking-wide text-muted-foreground">
                Premium Accommodation
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
                Where Comfort
                <span className="block text-primary">Meets Home</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Experience the perfect blend of luxury and warmth. Our thoughtfully designed spaces 
                offer you a sanctuary in the heart of the city.
              </p>
            </div>
            
            {/* Features */}
            <div className="flex flex-wrap gap-8 border-y border-border py-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="size-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Prime Location</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                  <Users className="size-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Vibrant Community</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="size-5 text-primary" />
                </div>
                <span className="text-sm font-medium">24/7 Security</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="group h-14 px-8 text-base" asChild>
                <Link href="/rooms" className="flex items-center gap-2">
                  Explore Rooms
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-base" asChild>
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-12 pt-4">
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-primary">50+</p>
                <p className="mt-1 text-sm text-muted-foreground">Happy Residents</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-primary">5+</p>
                <p className="mt-1 text-sm text-muted-foreground">Years of Trust</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-primary">4.8</p>
                <p className="mt-1 text-sm text-muted-foreground">Google Rating</p>
              </div>
            </div>
          </div>

          {/* Image Grid - Premium asymmetric layout */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main large image */}
              <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/images/hero-1.jpg" 
                  alt="Elegant PG room interior" 
                  className="size-full object-cover"
                />
              </div>
              
              {/* Overlapping smaller image */}
              <div className="absolute -bottom-8 -left-12 aspect-square w-48 overflow-hidden rounded-2xl border-4 border-background shadow-xl">
                <img 
                  src="/images/hero-2.jpg" 
                  alt="Cozy common area" 
                  className="size-full object-cover"
                />
              </div>
              
              {/* Floating card */}
              <div className="absolute -right-6 top-1/3 rounded-xl bg-card p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-full bg-accent/20">
                    <Star className="size-6 fill-accent text-accent" />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-bold">Excellent</p>
                    <p className="text-xs text-muted-foreground">Based on 120+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
