'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from './AuthProvider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { signIn, signInWithGoogle } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await signIn(email, password)
    
    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/dashboard')
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError('')

    const { error } = await signInWithGoogle()
    
    if (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md animate-entrance">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Enter your email and password to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-body font-medium text-secondary-navy">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-body font-medium text-secondary-navy">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <div className="text-body text-functional-error bg-functional-error/10 p-3 rounded-input border border-functional-error/20">
              {error}
            </div>
          )}
          <Button type="submit" variant="primary" className="w-full" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-accent-soft-gray" />
          </div>
          <div className="relative flex justify-center text-caption uppercase">
            <span className="bg-primary-white px-2 text-input-placeholder">
              Or continue with
            </span>
          </div>
        </div>

        <Button
          variant="secondary"
          className="w-full"
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          Continue with Google
        </Button>
      </CardContent>
    </Card>
  )
} 