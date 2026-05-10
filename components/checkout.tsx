'use client'

import { useState } from 'react'
import Script from 'next/script'
import { createRazorpayOrder, verifyRazorpayPayment } from '@/app/actions/razorpay'
import { Button } from '@/components/ui/button'
import { Loader2, CreditCard, CheckCircle2, AlertCircle } from 'lucide-react'

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance
  }
}

interface RazorpayOptions {
  key: string
  amount: number
  currency: string
  name: string
  description: string
  order_id: string
  handler: (response: RazorpayResponse) => void
  prefill?: {
    name?: string
    email?: string
    contact?: string
  }
  theme?: {
    color?: string
  }
  modal?: {
    ondismiss?: () => void
  }
}

interface RazorpayInstance {
  open: () => void
  on: (event: string, callback: () => void) => void
}

interface RazorpayResponse {
  razorpay_payment_id: string
  razorpay_order_id: string
  razorpay_signature: string
}

interface CheckoutProps {
  roomId: string
  roomName: string
  amount: number
}

export function Checkout({ roomId, roomName, amount }: CheckoutProps) {
  const [loading, setLoading] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [paymentId, setPaymentId] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handlePayment = async () => {
    if (!scriptLoaded) {
      setErrorMessage('Payment system is loading. Please try again.')
      return
    }

    setLoading(true)
    setErrorMessage(null)
    
    try {
      const orderData = await createRazorpayOrder(roomId)

      const options: RazorpayOptions = {
        key: orderData.keyId,
        amount: orderData.amount as number,
        currency: orderData.currency,
        name: 'HomeStay PG',
        description: `Security Deposit - ${roomName}`,
        order_id: orderData.orderId,
        handler: async function (response: RazorpayResponse) {
          try {
            const verification = await verifyRazorpayPayment(
              response.razorpay_order_id,
              response.razorpay_payment_id,
              response.razorpay_signature
            )

            if (verification.success) {
              setPaymentStatus('success')
              setPaymentId(verification.paymentId || null)
            } else {
              setPaymentStatus('error')
              setErrorMessage(verification.error || 'Payment verification failed')
            }
          } catch {
            setPaymentStatus('error')
            setErrorMessage('Payment verification failed. Please contact support.')
          }
        },
        prefill: {
          name: '',
          email: '',
          contact: '',
        },
        theme: {
          color: '#996633',
        },
        modal: {
          ondismiss: function () {
            setLoading(false)
          },
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
      setLoading(false)
    } catch (error) {
      console.error('Payment error:', error)
      setErrorMessage('Failed to initiate payment. Please try again.')
      setLoading(false)
      setPaymentStatus('error')
    }
  }

  if (paymentStatus === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="mb-4 rounded-full bg-green-100 p-3">
          <CheckCircle2 className="size-12 text-green-600" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-green-700">Payment Successful!</h3>
        <p className="mt-2 text-muted-foreground">
          Your booking has been confirmed. We&apos;ll send you a confirmation email shortly.
        </p>
        {paymentId && (
          <p className="mt-2 text-sm text-muted-foreground">
            Payment ID: <span className="font-mono">{paymentId}</span>
          </p>
        )}
        <Button className="mt-6" asChild>
          <a href="/">Return to Home</a>
        </Button>
      </div>
    )
  }

  if (paymentStatus === 'error') {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="mb-4 rounded-full bg-red-100 p-3">
          <AlertCircle className="size-12 text-red-600" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-red-700">Payment Failed</h3>
        <p className="mt-2 text-muted-foreground">
          {errorMessage || 'Something went wrong. Please try again.'}
        </p>
        <Button className="mt-6" onClick={() => setPaymentStatus('idle')}>
          Try Again
        </Button>
      </div>
    )
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => setScriptLoaded(true)}
        onError={() => setErrorMessage('Failed to load payment system')}
      />
      <div className="flex flex-col gap-6">
        <div className="rounded-lg border border-dashed border-muted-foreground/30 bg-muted/30 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-2">
              <CreditCard className="size-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Secure Payment via Razorpay</p>
              <p className="text-sm text-muted-foreground">
                Pay securely using UPI, Cards, Net Banking, or Wallets
              </p>
            </div>
          </div>
        </div>

        {errorMessage && (
          <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        <Button 
          size="lg" 
          className="w-full gap-2" 
          onClick={handlePayment}
          disabled={loading || !scriptLoaded}
        >
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <CreditCard className="size-4" />
              Pay ₹{(amount / 100).toLocaleString('en-IN')} Securely
            </>
          )}
        </Button>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            100% Secure
          </span>
          <span className="flex items-center gap-1">
            <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
            </svg>
            SSL Encrypted
          </span>
          <span className="flex items-center gap-1">
            <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            Instant Confirmation
          </span>
        </div>
      </div>
    </>
  )
}
