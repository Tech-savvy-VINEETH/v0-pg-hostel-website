'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Home } from 'lucide-react'
import Link from 'next/link'
import { useAdminStore } from '@/lib/store'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const { login, isAuthenticated } = useAdminStore()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/admin')
    }
  }, [isAuthenticated, router])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'admin123') {
      login()
      router.push('/admin')
    } else {
      setError('Invalid password. Hint: admin123')
    }
  }

  // Prevent rendering login form if already authenticated, wait for redirect
  if (isAuthenticated) return null

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f2ebd9]">
      <div className="absolute top-8 left-8">
        <Link href="/" className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors">
          <Home className="w-5 h-5" />
          <span className="font-medium">Back to Website</span>
        </Link>
      </div>

      <Card className="w-full max-w-md shadow-xl border-stone-200">
        <CardHeader className="space-y-1 text-center">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Home className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-2xl font-serif text-stone-800 tracking-tight">Admin Login</CardTitle>
          <CardDescription className="text-stone-500">
            Enter the admin password to access the dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-stone-200 focus-visible:ring-emerald-600"
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
            <Button type="submit" className="w-full bg-stone-800 hover:bg-stone-900 text-white">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
