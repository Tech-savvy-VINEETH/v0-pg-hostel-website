'use server'

import { stripe } from '@/lib/stripe'
import { ROOMS } from '@/lib/products'

export async function startCheckoutSession(roomId: string) {
  const room = ROOMS.find((r) => r.id === roomId)
  if (!room) {
    throw new Error(`Room with id "${roomId}" not found`)
  }

  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    redirect_on_completion: 'never',
    line_items: [
      {
        price_data: {
          currency: 'inr',
          product_data: {
            name: `${room.name} - Security Deposit`,
            description: `Security deposit for ${room.name}. Monthly rent: ₹${room.pricePerMonth.toLocaleString('en-IN')}/month`,
          },
          unit_amount: room.priceInCents, // Amount in paise
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    payment_method_types: ['card'],
  })

  return session.client_secret
}
