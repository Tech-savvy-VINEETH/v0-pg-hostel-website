import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'

const galleryImages = [
  { src: '/images/gallery/room-1.jpg', alt: 'Premium furnished room with study desk', caption: 'Fully Furnished Rooms', className: 'md:col-span-2 md:row-span-2' },
  { src: '/images/gallery/common-1.jpg', alt: 'Clean dining area with fresh meals', caption: 'Hygienic Dining Area' },
  { src: '/images/gallery/room-3.jpg', alt: 'Quiet study lounge with AC', caption: 'Dedicated Study Lounge' },
  { src: '/images/gallery/exterior-1.jpg', alt: 'Building entrance with biometric access', caption: 'Secure Biometric Entry' },
  { src: '/images/gallery/facility-2.jpg', alt: 'Clean attached bathroom', caption: 'Spotless Bathrooms' },
  { src: '/images/gallery/common-2.jpg', alt: 'Common area for socializing', caption: 'Community Lounge', className: 'md:col-span-2' },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollReveal animation="fade-up" className="mb-12 md:mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">See for Yourself</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            A Glimpse Into <span className="text-primary italic">Daily Living</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Real spaces, real quality. Every image is from our actual property—no stock photos, no filters.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
              <div key={index} className={`relative group overflow-hidden rounded-2xl bg-muted h-full min-h-[200px] md:min-h-[240px] ${image.className || ''}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-semibold">{image.caption}</p>
                </div>
              </div>
          ))}
        </div>

        <ScrollReveal animation="fade-in" delay={400} className="mt-12 text-center">
          <Button variant="outline" size="lg" className="rounded-full h-12 px-8 font-semibold transition-all hover:scale-105 hover:bg-primary/5 hover:border-primary/30" asChild>
            <Link href="#gallery" className="flex items-center gap-2">
              View Full Gallery
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
