import { MapPin, Train, GraduationCap, Building2, Hospital, ShoppingBag, Bus } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { NEARBY_PLACES } from '@/lib/amenities'

const typeIcons: Record<string, React.ReactNode> = {
  transport: <Train className="size-5" />,
  education: <GraduationCap className="size-5" />,
  office: <Building2 className="size-5" />,
  healthcare: <Hospital className="size-5" />,
  shopping: <ShoppingBag className="size-5" />,
}

export function LocationSection() {
  return (
    <section className="bg-secondary/30 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Location</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Prime Location, Easy Access
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Strategically located near major educational institutions, tech parks, and transport hubs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map Visual */}
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl lg:aspect-auto lg:h-full lg:min-h-[450px] animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both delay-200">
            {/* Real Google Map iframe embedded as background */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.896781442111!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1625550000000!5m2!1sen!2sin" 
              className="absolute inset-0 size-full border-0 opacity-60 transition-opacity duration-500 group-hover:opacity-80" 
              loading="lazy" 
              style={{ filter: "grayscale(20%) contrast(1.1)" }}
            />
            {/* Overlay to catch clicks and style the container */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent pointer-events-none" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 pointer-events-none">
              
              {/* Pulsing Animated Map Marker */}
              <div className="relative mb-4 flex size-20 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping duration-1000" />
                <div className="absolute inset-2 rounded-full bg-primary/30 animate-pulse" />
                <div className="relative flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/50">
                  <MapPin className="size-7 animate-bounce" style={{ animationDuration: '2s' }} />
                </div>
              </div>

              <div className="bg-background/80 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-border/50 pointer-events-auto transition-transform duration-300 hover:scale-105">
                <h3 className="font-serif text-xl font-bold text-foreground">HomeStay PG</h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  123 Green Avenue, City Center
                </p>
                <a
                  href="https://maps.google.com/?q=12.9716,77.5946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95"
                >
                  <MapPin className="size-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Nearby Places */}
          <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-right-8 duration-1000 fill-mode-both delay-300">
            <div className="flex items-center gap-2 text-foreground mb-2">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <MapPin className="size-5" />
              </div>
              <h3 className="font-serif text-2xl font-semibold">Nearby Places</h3>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {NEARBY_PLACES.map((place, index) => (
                <Card 
                  key={place.name} 
                  className="group overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
                  style={{ animationDelay: `${400 + (index * 100)}ms` }}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      {typeIcons[place.type]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground truncate">{place.name}</p>
                      <p className="text-sm text-primary font-medium">{place.distance} away</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-2 border-primary/20 bg-primary/5 shadow-inner transition-all duration-300 hover:shadow-md">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Building2 className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Our Address</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      123 Green Avenue, Near Central Mall,<br />
                      City Center, Pin - 560001
                    </p>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      <MapPin className="size-3.5" />
                      Landmark: Opposite City Park
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
