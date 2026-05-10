import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us | HomeStay PG',
  description: 'Get in touch with HomeStay PG. Schedule a visit, ask questions, or book your room today.',
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary/50 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Have questions? Want to schedule a visit? We&apos;re here to help you find your perfect home.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-serif text-xl">
                    <MessageCircle className="size-5 text-primary" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="flex flex-col gap-6">
                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <a href="tel:+919876543210" className="mt-1 block text-muted-foreground hover:text-primary">
                        +91 98765 43210
                      </a>
                      <a href="tel:+919876543211" className="block text-muted-foreground hover:text-primary">
                        +91 98765 43211
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href="mailto:info@homestaypg.com" className="mt-1 block text-muted-foreground hover:text-primary">
                        info@homestaypg.com
                      </a>
                      <a href="mailto:bookings@homestaypg.com" className="block text-muted-foreground hover:text-primary">
                        bookings@homestaypg.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="mt-1 text-muted-foreground">
                        123 Green Avenue, Near Central Mall,<br />
                        City Center, Pin - 560001
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Landmark: Opposite City Park
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Clock className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Office Hours</h3>
                      <p className="mt-1 text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 8:00 PM<br />
                        Sunday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center font-serif text-2xl font-bold md:text-3xl">
              Find Us
            </h2>
            <div className="aspect-[16/9] max-h-[400px] overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                className="size-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HomeStay PG Location"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
