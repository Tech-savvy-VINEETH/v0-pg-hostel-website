import { ScrollReveal } from '@/components/scroll-reveal'
import { ClipboardList, Calendar, Home, Key } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Choose Your Room',
    description:
      "Browse our room options online. Filter by occupancy, AC, and budget. Compare inclusions side by side so you know exactly what you're getting.",
    detail: '~5 minutes',
  },
  {
    icon: Calendar,
    step: '02',
    title: 'Schedule a Visit',
    description:
      'Book a free in-person or virtual tour. Our team will walk you through the property, show you sample rooms, and answer every question.',
    detail: 'Same-day slots available',
  },
  {
    icon: Home,
    step: '03',
    title: 'Confirm & Pay Deposit',
    description:
      "Once you're happy, reserve your room with a one-month refundable security deposit. No hidden charges. Transparent, written agreement.",
    detail: 'Fully refundable deposit',
  },
  {
    icon: Key,
    step: '04',
    title: 'Move In & Settle',
    description:
      'Pick your move-in date. Our team sets up your room, gives you a full orientation, and makes sure your first day feels like home.',
    detail: 'Flexible move-in dates',
  },
]

export function BookingProcessSection() {
  return (
    <section className="bg-secondary/20 py-16 md:py-24" id="booking-process">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Simple Process
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              From Browsing to Moving In — <br className="hidden md:block" />
              <span className="text-primary">4 Effortless Steps</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              We've removed every friction point. No confusing paperwork, no
              surprise costs. Just a clear, honest path to your new home.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-14 hidden h-px bg-border lg:block" aria-hidden="true" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <ScrollReveal key={step.step} delay={idx * 100}>
                  <div className="relative flex flex-col items-center text-center">
                    {/* Step number bubble */}
                    <div className="relative z-10 mb-6 flex size-28 flex-col items-center justify-center rounded-full border-2 border-primary/20 bg-background shadow-lg ring-4 ring-background">
                      <span className="text-xs font-bold tracking-widest text-muted-foreground">
                        STEP {step.step}
                      </span>
                      <Icon className="mt-1 size-8 text-primary" />
                    </div>
                    <h3 className="mb-2 font-serif text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {step.detail}
                    </span>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        {/* Policy Strip */}
        <ScrollReveal>
          <div className="mt-14 grid gap-4 rounded-2xl border border-border bg-background p-6 text-sm text-muted-foreground sm:grid-cols-3">
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="text-xl font-bold text-foreground">₹0</span>
              <span>Booking Fee</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="text-xl font-bold text-foreground">100%</span>
              <span>Refundable Deposit</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="text-xl font-bold text-foreground">24 hrs</span>
              <span>Room Hold After Visit</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
