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
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-primary/5 lg:aspect-auto lg:h-full lg:min-h-[400px]">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="size-8" />
              </div>
              <h3 className="font-serif text-xl font-bold">HomeStay PG</h3>
              <p className="mt-2 text-muted-foreground">
                123 Green Avenue, City Center
              </p>
              <a
                href="https://maps.google.com/?q=12.9716,77.5946"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Bus className="size-4" />
                Open in Google Maps
              </a>
            </div>
            {/* Decorative grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
          </div>

          {/* Nearby Places */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="size-5 text-primary" />
              <h3 className="font-serif text-xl font-semibold">Nearby Places</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {NEARBY_PLACES.map((place) => (
                <Card key={place.name}>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {typeIcons[place.type]}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{place.name}</p>
                      <p className="text-sm text-muted-foreground">{place.distance} away</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="mt-4 border-primary/20 bg-primary/5">
              <CardContent className="p-4">
                <h4 className="mb-2 font-semibold">Our Address</h4>
                <p className="text-muted-foreground">
                  123 Green Avenue, Near Central Mall,<br />
                  City Center, Pin - 560001
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Landmark: Opposite City Park
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
