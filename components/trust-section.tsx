import { CheckCircle2 } from 'lucide-react'

const trustPoints = [
  {
    title: 'Uncompromising Safety',
    description: '24/7 biometric access, CCTV surveillance, and verified professional guards ensure total peace of mind for residents and parents.',
  },
  {
    title: 'Hygienic, Homely Meals',
    description: 'Freshly prepared, nutritionally balanced meals cooked daily in our sanitized kitchen. We cater to diverse regional tastes.',
  },
  {
    title: 'Zero-Lag Wi-Fi',
    description: 'Enterprise-grade fiber internet in every room, so your late-night study sessions or remote work meetings never drop.',
  },
  {
    title: 'Immaculate Housekeeping',
    description: 'Daily professional cleaning of rooms and common areas, with regular deep-cleaning schedules to maintain a pristine environment.',
  },
  {
    title: 'Professional Management',
    description: 'On-site property managers and quick-response maintenance teams to resolve any issues within 24 hours.',
  },
  {
    title: 'Prime Connectivity',
    description: 'Strategically located near major IT parks, metro stations, and top universities to cut down your daily commute.',
  },
]

export function TrustSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.08),rgba(255,255,255,0))]" />
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Why Residents & Parents <span className="text-primary italic">Trust Us</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We’ve eliminated the typical compromises of PG living. Here, you get a premium, fully-managed lifestyle tailored for driven students and working professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {trustPoints.map((point, index) => (
            <div key={index} className="group relative">
              <div className="absolute -left-4 top-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full" />
              <div className="pl-4">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="size-6 text-primary shrink-0 mt-0.5" />
                  <h3 className="text-xl font-bold text-foreground tracking-tight">{point.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-9">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
