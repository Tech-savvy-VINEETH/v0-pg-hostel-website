import Link from 'next/link'
import { Phone, Calendar, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const benefits = [
  'No booking fee',
  'Flexible move-in dates',
  'Cancel anytime',
]

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 -top-24 size-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -right-24 size-96 rounded-full bg-white/5" />
        <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Heading */}
          <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
            Ready to Make HomeStay
            <span className="block mt-2">Your New Home?</span>
          </h2>
          
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Experience the perfect blend of comfort and community. Schedule a visit 
            today and discover your ideal living space.
          </p>
          
          {/* Benefits */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <CheckCircle className="size-5 text-primary-foreground/80" />
                <span className="text-sm font-medium text-primary-foreground/90">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="group h-14 bg-primary-foreground px-8 text-base text-primary shadow-lg hover:bg-primary-foreground/90" 
              asChild
            >
              <Link href="/booking" className="flex items-center gap-2">
                <Calendar className="size-5" />
                Book a Room
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 border-2 border-primary-foreground bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground hover:text-primary" 
              asChild
            >
              <Link href="tel:+919876543210" className="flex items-center gap-2">
                <Phone className="size-5" />
                Call: +91 98765 43210
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
