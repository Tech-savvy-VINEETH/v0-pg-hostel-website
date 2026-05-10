'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const galleryImages = {
  rooms: [
    { src: '/images/gallery/room-1.jpg', alt: 'Single AC room with study area' },
    { src: '/images/gallery/room-2.jpg', alt: 'Double sharing room interior' },
    { src: '/images/gallery/room-3.jpg', alt: 'Triple sharing room beds' },
    { src: '/images/gallery/room-4.jpg', alt: 'Room with wardrobe and desk' },
    { src: '/images/gallery/room-5.jpg', alt: 'Premium single room' },
    { src: '/images/gallery/room-6.jpg', alt: 'Cozy room corner' },
  ],
  common: [
    { src: '/images/gallery/common-1.jpg', alt: 'Common room with TV' },
    { src: '/images/gallery/common-2.jpg', alt: 'Reading corner' },
    { src: '/images/gallery/common-3.jpg', alt: 'Dining area' },
    { src: '/images/gallery/common-4.jpg', alt: 'Recreation space' },
  ],
  facilities: [
    { src: '/images/gallery/facility-1.jpg', alt: 'Clean bathroom' },
    { src: '/images/gallery/facility-2.jpg', alt: 'Laundry area' },
    { src: '/images/gallery/facility-3.jpg', alt: 'Kitchen space' },
    { src: '/images/gallery/facility-4.jpg', alt: 'Parking area' },
  ],
  exterior: [
    { src: '/images/gallery/exterior-1.jpg', alt: 'Building front view' },
    { src: '/images/gallery/exterior-2.jpg', alt: 'Entrance gate' },
    { src: '/images/gallery/exterior-3.jpg', alt: 'Garden area' },
  ],
}

type GalleryCategory = keyof typeof galleryImages

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  const [activeTab, setActiveTab] = useState<GalleryCategory>('rooms')

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary/50 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
              Photo Gallery
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Take a virtual tour of our premises. Explore our rooms, common areas, 
              facilities, and the surrounding environment.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as GalleryCategory)} className="w-full">
              <TabsList className="mb-8 flex w-full justify-center">
                <TabsTrigger value="rooms">Rooms</TabsTrigger>
                <TabsTrigger value="common">Common Areas</TabsTrigger>
                <TabsTrigger value="facilities">Facilities</TabsTrigger>
                <TabsTrigger value="exterior">Exterior</TabsTrigger>
              </TabsList>

              {Object.entries(galleryImages).map(([category, images]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                          <p className="text-sm text-white">{image.alt}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Virtual Tour CTA */}
        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl font-bold md:text-3xl">
              Want to See More?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Schedule an in-person visit to experience our accommodation firsthand. 
              Our team will be happy to show you around.
            </p>
            <Button size="lg" className="mt-6" asChild>
              <a href="/contact">Schedule a Visit</a>
            </Button>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">
            {selectedImage?.alt || 'Gallery Image'}
          </DialogTitle>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -right-2 -top-10 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="size-6" />
              <span className="sr-only">Close</span>
            </Button>
            {selectedImage && (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
