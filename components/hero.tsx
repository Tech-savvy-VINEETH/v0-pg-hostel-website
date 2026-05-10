import Link from 'next/link'
import { ArrowRight, MapPin, Users, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col gap-6">
            <Badge variant="secondary" className="w-fit animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
              Premium PG Accommodation
            </Badge>
            <h1 className="text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both delay-150">
              Your Home <span className="text-primary">Away</span> From Home
            </h1>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both delay-300">
              Experience comfortable living with homely food, modern amenities, and a caring community. 
              Perfect for students and working professionals seeking quality accommodation.
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap gap-6 text-sm animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both delay-500">
              <div className="flex items-center gap-2 transition-transform hover:-translate-y-1">
                <MapPin className="size-5 text-primary" />
                <span>Prime Location</span>
              </div>
              <div className="flex items-center gap-2 transition-transform hover:-translate-y-1">
                <Users className="size-5 text-primary" />
                <span>Friendly Community</span>
              </div>
              <div className="flex items-center gap-2 transition-transform hover:-translate-y-1">
                <Shield className="size-5 text-primary" />
                <span>24/7 Security</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both delay-700">
              <Button size="lg" className="transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20" asChild>
                <Link href="/rooms" className="flex items-center gap-2">
                  Explore Rooms
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="transition-all hover:scale-105 hover:bg-primary/5" asChild>
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-border animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both delay-1000">
              <div className="group">
                <p className="font-serif text-3xl font-bold text-primary transition-transform group-hover:scale-110 origin-left">50+</p>
                <p className="text-sm text-muted-foreground">Happy Residents</p>
              </div>
              <div className="group">
                <p className="font-serif text-3xl font-bold text-primary transition-transform group-hover:scale-110 origin-left">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="group">
                <p className="font-serif text-3xl font-bold text-primary transition-transform group-hover:scale-110 origin-left">4.8</p>
                <p className="text-sm text-muted-foreground">Google Rating</p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative hidden lg:block animate-in fade-in zoom-in-95 duration-1000 fill-mode-both delay-500">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-muted shadow-lg transition-transform hover:scale-105 duration-500">
                  <img 
                    src="/images/hero-1.jpg" 
                    alt="Comfortable PG room interior" 
                    className="size-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted shadow-lg transition-transform hover:scale-105 duration-500">
                  <img 
                    src="/images/hero-2.jpg" 
                    alt="Common dining area" 
                    className="size-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted shadow-lg transition-transform hover:scale-105 duration-500">
                  <img 
                    src="/images/hero-3.jpg" 
                    alt="Study area with desk" 
                    className="size-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-muted shadow-lg transition-transform hover:scale-105 duration-500">
                  <img 
                    src="/images/hero-4.jpg" 
                    alt="Clean bathroom facilities" 
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -right-4 -top-4 -z-10 size-72 rounded-full bg-primary/20 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute -bottom-4 -left-4 -z-10 size-72 rounded-full bg-accent/20 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
