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
          {/* Map Placeholder */}
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted lg:aspect-auto lg:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              className="size-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HomeStay PG Location"
            />
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
