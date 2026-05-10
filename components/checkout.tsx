'use client'

import { useCallback, useState } from 'react'
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { startCheckoutSession } from '@/app/actions/stripe'
import { Skeleton } from '@/components/ui/skeleton'
import { AlertCircle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface CheckoutProps {
  roomId: string
}

function CheckoutLoading() {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-3">
        <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-sm text-muted-foreground">Loading secure payment form...</p>
      </div>
      <div className="w-full max-w-md space-y-4">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-14 w-full" />
      </div>
    </div>
  )
}

function CheckoutError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 rounded-lg border border-destructive/20 bg-destructive/5 p-8 text-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
        <AlertCircle className="size-8" />
      </div>
      <div>
        <h3 className="font-serif text-lg font-semibold">Payment Form Unavailable</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          We couldn&apos;t load the secure payment form. This might be due to a network issue. 
          Please try again or contact us for assistance.
        </p>
      </div>
      <Button onClick={onRetry} variant="outline" className="mt-2">
        <RefreshCw className="mr-2 size-4" />
        Try Again
      </Button>
    </div>
  )
}

export function Checkout({ roomId }: CheckoutProps) {
  const [error, setError] = useState(false)
  const [key, setKey] = useState(0)

  const fetchClientSecret = useCallback(async () => {
    try {
      setError(false)
      const clientSecret = await startCheckoutSession(roomId)
      if (!clientSecret) {
        throw new Error('Failed to create checkout session')
      }
      return clientSecret
    } catch (err) {
      console.error('[v0] Checkout session error:', err)
      setError(true)
      throw err
    }
  }, [roomId])

  const handleRetry = () => {
    setError(false)
    setKey((prev) => prev + 1)
  }

  if (error) {
    return <CheckoutError onRetry={handleRetry} />
  }

  return (
    <div id="checkout" className="min-h-[500px]">
      <EmbeddedCheckoutProvider
        key={key}
        stripe={stripePromise}
        options={{ fetchClientSecret }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
