'use server'

import { razorpay } from '@/lib/razorpay'
import { ROOMS } from '@/lib/products'

export async function createRazorpayOrder(roomId: string) {
  const room = ROOMS.find((r) => r.id === roomId)
  if (!room) {
    throw new Error(`Room with id "${roomId}" not found`)
  }

  // Create an order
  const options = {
    amount: room.priceInCents, // Razorpay takes amount in paise, same as Stripe's cents
    currency: 'INR',
    receipt: `rcpt_${Date.now().toString().slice(-8)}`,
    notes: {
      roomName: room.name,
      description: `Security deposit for ${room.name}`,
    },
  }

  try {
    const order = await razorpay.orders.create(options)
    return {
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      roomName: room.name,
      roomDesc: `Security deposit for ${room.name}. Monthly rent: ₹${room.pricePerMonth.toLocaleString('en-IN')}/month`,
    }
  } catch (error) {
    console.error("Razorpay order creation error:", error)
    throw new Error("Failed to create Razorpay order")
  }
}
