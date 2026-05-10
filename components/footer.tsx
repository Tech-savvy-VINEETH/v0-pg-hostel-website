import Link from 'next/link'
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Home className="size-6 text-primary" />
              <span className="font-serif text-xl font-bold">HomeStay PG</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your home away from home. Premium paying guest accommodation for students and working professionals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Facebook">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Instagram">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Twitter">
                <Twitter className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/rooms" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Our Rooms
              </Link>
              <Link href="/amenities" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Amenities
              </Link>
              <Link href="/gallery" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Photo Gallery
              </Link>
              <Link href="/booking" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Book a Room
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Phone className="size-4" />
                +91 98765 43210
              </a>
              <a href="mailto:info@homestaypg.com" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Mail className="size-4" />
                info@homestaypg.com
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 mt-0.5 shrink-0" />
                <span>123 Green Avenue, Near Central Mall, City Center - 560001</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold">Office Hours</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>Monday - Saturday</p>
              <p className="font-medium text-foreground">9:00 AM - 8:00 PM</p>
              <p className="mt-2">Sunday</p>
              <p className="font-medium text-foreground">10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} HomeStay PG. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
