import { MapPin, Train, GraduationCap, Building2, Hospital, ShoppingBag, ExternalLink, Navigation } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { NEARBY_PLACES } from '@/lib/amenities'

const typeIcons: Record<string, React.ReactNode> = {
  transport: <Train className="size-5" />,
  education: <GraduationCap className="size-5" />,
  office: <Building2 className="size-5" />,
  healthcare: <Hospital className="size-5" />,
  shopping: <ShoppingBag className="size-5" />,
}

const typeColors: Record<string, string> = {
  transport: 'bg-blue-100 text-blue-600',
  education: 'bg-amber-100 text-amber-600',
  office: 'bg-emerald-100 text-emerald-600',
  healthcare: 'bg-red-100 text-red-600',
  shopping: 'bg-purple-100 text-purple-600',
}

export function LocationSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Location
          </span>
          <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Prime Location, Easy Access
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Strategically located near major educational institutions, tech parks, and transport hubs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Map Visual */}
          <div className="lg:col-span-3">
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5">
              {/* Decorative map pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
              
              {/* Location marker card */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative">
                  {/* Pulse animation */}
                  <div className="absolute -inset-8 animate-ping rounded-full bg-primary/20" style={{ animationDuration: '3s' }} />
                  <div className="absolute -inset-4 rounded-full bg-primary/10" />
                  
                  {/* Location card */}
                  <Card className="relative border-0 bg-card shadow-2xl">
                    <CardContent className="flex flex-col items-center p-8 text-center">
                      <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <MapPin className="size-8" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold">HomeStay PG</h3>
                      <p className="mt-2 text-muted-foreground">
                        123 Green Avenue, City Center
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Pin Code - 560001
                      </p>
                      <Button className="mt-6 gap-2" asChild>
                        <a
                          href="https://maps.google.com/?q=12.9716,77.5946"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Navigation className="size-4" />
                          Get Directions
                          <ExternalLink className="size-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Places */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="mb-2">
              <h3 className="font-serif text-xl font-semibold">Nearby Landmarks</h3>
              <p className="text-sm text-muted-foreground">Everything within reach</p>
            </div>
            
            <div className="flex flex-col gap-3">
              {NEARBY_PLACES.map((place) => (
                <div 
                  key={place.name} 
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/20 hover:shadow-md"
                >
                  <div className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${typeColors[place.type] || 'bg-primary/10 text-primary'}`}>
                    {typeIcons[place.type]}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{place.name}</p>
                    <p className="text-sm text-muted-foreground">{place.distance} away</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Address card */}
            <Card className="mt-4 border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h4 className="font-serif text-lg font-semibold">Full Address</h4>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  123 Green Avenue,<br />
                  Near Central Mall,<br />
                  City Center - 560001
                </p>
                <p className="mt-3 flex items-center gap-2 text-sm font-medium text-primary">
                  <MapPin className="size-4" />
                  Opposite City Park
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
