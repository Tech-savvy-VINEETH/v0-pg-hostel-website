'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Field, FieldGroup, FieldLabel, FieldError } from '@/components/ui/field'
import { Spinner } from '@/components/ui/spinner'

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    // Indian phone number validation (10 digits, optionally with +91 or 0 prefix)
    const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/
    return phoneRegex.test(phone.replace(/[\s\-]/g, ''))
  }

  const validateField = (field: string, value: string): string | undefined => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Full name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        return undefined
      case 'email':
        if (!value.trim()) return 'Email is required'
        if (!validateEmail(value)) return 'Please enter a valid email address'
        return undefined
      case 'phone':
        if (!value.trim()) return 'Phone number is required'
        if (!validatePhone(value)) return 'Please enter a valid Indian phone number'
        return undefined
      case 'subject':
        if (!value) return 'Please select a subject'
        return undefined
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        return undefined
      default:
        return undefined
    }
  }

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const error = validateField(field, formData[field as keyof typeof formData])
    setErrors((prev) => ({ ...prev, [field]: error }))
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (touched[field]) {
      const error = validateField(field, value)
      setErrors((prev) => ({ ...prev, [field]: error }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field as keyof typeof formData])
      if (error) {
        newErrors[field as keyof FormErrors] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    })

    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form')
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast.success('Message sent successfully!', {
      description: 'We will get back to you within 24 hours.',
    })

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    setErrors({})
    setTouched({})
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input
            id="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={errors.name && touched.name ? 'border-destructive' : ''}
          />
          {errors.name && touched.name && (
            <FieldError id="name-error">{errors.name}</FieldError>
          )}
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={errors.email && touched.email ? 'border-destructive' : ''}
            />
            {errors.email && touched.email && (
              <FieldError id="email-error">{errors.email}</FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="phone">Phone</FieldLabel>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              onBlur={() => handleBlur('phone')}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={errors.phone && touched.phone ? 'border-destructive' : ''}
            />
            {errors.phone && touched.phone && (
              <FieldError id="phone-error">{errors.phone}</FieldError>
            )}
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="subject">Subject</FieldLabel>
          <Select
            value={formData.subject}
            onValueChange={(value) => {
              handleChange('subject', value)
              setTouched((prev) => ({ ...prev, subject: true }))
            }}
          >
            <SelectTrigger 
              id="subject"
              aria-invalid={!!errors.subject}
              className={errors.subject && touched.subject ? 'border-destructive' : ''}
            >
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="visit">Schedule a Visit</SelectItem>
                <SelectItem value="inquiry">Room Inquiry</SelectItem>
                <SelectItem value="booking">Booking Assistance</SelectItem>
                <SelectItem value="feedback">Feedback</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.subject && touched.subject && (
            <FieldError id="subject-error">{errors.subject}</FieldError>
          )}
        </Field>

        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            placeholder="Tell us how we can help you..."
            rows={5}
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            onBlur={() => handleBlur('message')}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={errors.message && touched.message ? 'border-destructive' : ''}
          />
          {errors.message && touched.message && (
            <FieldError id="message-error">{errors.message}</FieldError>
          )}
        </Field>

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Spinner className="size-4" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </FieldGroup>
    </form>
  )
}
