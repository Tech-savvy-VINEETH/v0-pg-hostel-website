'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, Home, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/amenities', label: 'Amenities' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50 py-1' 
          : 'bg-background/0 border-b border-transparent py-3'
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md group-hover:shadow-primary/30">
            <Home className="size-5 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary">HomeStay PG</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button variant="outline" size="sm" className="transition-all hover:scale-105 hover:bg-primary/5 hover:border-primary/50" asChild>
            <Link href="tel:+919876543210" className="flex items-center gap-2">
              <Phone className="size-4" />
              Call Us
            </Link>
          </Button>
          <Button size="sm" className="transition-all hover:scale-105 shadow-md hover:shadow-primary/20" asChild>
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
              <Menu className="size-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] border-l border-border/50 bg-background/95 backdrop-blur-lg">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-8 pt-8">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Home className="size-5" />
                </div>
                <span className="font-serif text-xl font-bold">HomeStay PG</span>
              </Link>
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-muted-foreground transition-all hover:text-primary hover:translate-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-4 pt-6 border-t border-border/50">
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link href="tel:+919876543210" className="flex items-center justify-center gap-2">
                    <Phone className="size-4" />
                    Call Us
                  </Link>
                </Button>
                <Button size="lg" className="w-full shadow-md" asChild>
                  <Link href="/booking" onClick={() => setIsOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
