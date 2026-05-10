import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const quickLinks = [
  { href: '/rooms', label: 'Our Rooms' },
  { href: '/amenities', label: 'Amenities' },
  { href: '/gallery', label: 'Photo Gallery' },
  { href: '/booking', label: 'Book a Room' },
  { href: '/contact', label: 'Contact Us' },
]

const socialLinks = [
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Twitter, label: 'Twitter' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-serif font-bold text-lg">
                H
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight">HomeStay</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Premium PG</span>
              </div>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Your home away from home. Premium paying guest accommodation designed 
              for comfort and community.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground" 
                  aria-label={social.label}
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold">Quick Links</h3>
            <nav className="mt-6 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <ArrowRight className="mr-2 size-3 opacity-0 transition-all group-hover:opacity-100" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold">Contact Us</h3>
            <div className="mt-6 flex flex-col gap-4">
              <a href="tel:+919876543210" className="group flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <Phone className="size-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p>+91 98765 43210</p>
                </div>
              </a>
              <a href="mailto:info@homestaypg.com" className="group flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <Mail className="size-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p>info@homestaypg.com</p>
                </div>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Address</p>
                  <p>123 Green Avenue, Near Central Mall, City Center - 560001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-semibold">Stay Updated</h3>
            <p className="mt-6 text-sm text-muted-foreground">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form className="mt-4 flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="h-10"
              />
              <Button type="submit" size="sm" className="h-10 px-4">
                <ArrowRight className="size-4" />
              </Button>
            </form>
            <div className="mt-6">
              <p className="text-sm font-medium text-foreground">Office Hours</p>
              <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-center text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} HomeStay PG. All rights reserved.</p>
          <div className="flex gap-6">
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
