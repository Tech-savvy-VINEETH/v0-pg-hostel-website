'use server'

import { razorpay } from '@/lib/razorpay'
import { ROOMS } from '@/lib/products'
import crypto from 'crypto'

export async function createRazorpayOrder(roomId: string) {
  const room = ROOMS.find((r) => r.id === roomId)
  if (!room) {
    throw new Error(`Room with id "${roomId}" not found`)
  }

  const options = {
    amount: room.priceInCents, // Amount in paise
    currency: 'INR',
    receipt: `receipt_${Date.now()}`,
    notes: {
      roomId: room.id,
      roomName: room.name,
      description: `Security deposit for ${room.name}. Monthly rent: ₹${room.pricePerMonth.toLocaleString('en-IN')}/month`,
    },
  }

  try {
    const order = await razorpay.orders.create(options)
    return {
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID!,
    }
  } catch (error) {
    console.error('Error creating Razorpay order:', error)
    throw new Error('Failed to create payment order')
  }
}

export async function verifyRazorpayPayment(
  razorpay_order_id: string,
  razorpay_payment_id: string,
  razorpay_signature: string
) {
  const body = razorpay_order_id + '|' + razorpay_payment_id
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
    .update(body.toString())
    .digest('hex')

  const isAuthentic = expectedSignature === razorpay_signature

  if (isAuthentic) {
    // Here you can save the payment details to your database
    // For now, we'll just return success
    return { success: true, paymentId: razorpay_payment_id }
  } else {
    return { success: false, error: 'Payment verification failed' }
  }
}
