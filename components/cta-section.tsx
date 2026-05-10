import Link from 'next/link'
import { Phone, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
          Ready to Make HomeStay Your Home?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
          Schedule a visit today and experience our warm, welcoming environment firsthand. 
          Our team is ready to help you find the perfect room.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/booking" className="flex items-center gap-2">
              <Calendar className="size-5" />
              Book a Room
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
            <Link href="tel:+919876543210" className="flex items-center gap-2">
              <Phone className="size-5" />
              Call Now: +91 98765 43210
            </Link>
          </Button>
        </div>
        <p className="mt-6 text-sm text-primary-foreground/60">
          No booking fee. Flexible move-in dates. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
