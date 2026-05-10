'use client'

import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { TESTIMONIALS } from '@/lib/testimonials'

export function TestimonialsSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-accent/5 blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Testimonials
          </span>
          <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Loved by Our Residents
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what our community has to say.
          </p>
        </div>

        {/* Testimonials carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-auto w-full max-w-6xl"
        >
          <CarouselContent className="-ml-4">
            {TESTIMONIALS.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2">
                <Card className="h-full border-0 bg-card shadow-lg">
                  <CardContent className="flex h-full flex-col p-8">
                    {/* Quote icon */}
                    <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-primary/10">
                      <Quote className="size-5 text-primary" />
                    </div>
                    
                    {/* Rating */}
                    <div className="mb-4 flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`size-5 ${
                            i < testimonial.rating 
                              ? 'fill-amber-400 text-amber-400' 
                              : 'fill-muted text-muted'
                          }`} 
                        />
                      ))}
                    </div>
                    
                    {/* Content */}
                    <blockquote className="mb-8 flex-1 text-lg leading-relaxed text-foreground">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4 border-t border-border pt-6">
                      <Avatar className="size-14 border-2 border-primary/20">
                        <AvatarFallback className="bg-primary/10 text-primary font-serif font-bold text-lg">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-serif text-lg font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-muted-foreground">
                          Resident for {testimonial.stayDuration}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center gap-4">
            <CarouselPrevious className="static size-12 translate-x-0 translate-y-0 border-2" />
            <CarouselNext className="static size-12 translate-x-0 translate-y-0 border-2" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
