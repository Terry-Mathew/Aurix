'use client'

import Link from 'next/link'
import { useAuth } from '@/components/auth/AuthProvider'
import { Button } from '@/components/ui/button'

export function Header() {
  const { user, signOut } = useAuth()

  return (
    <header className="border-b border-accent-soft-gray bg-primary-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-h3 text-secondary-navy font-bold">
          Aurix
        </Link>
        
        <nav className="flex items-center space-x-4">
          {user ? (
            <>
              <Link href="/dashboard" className="text-body text-secondary-navy hover:text-secondary-warm-orange transition-colors">
                Dashboard
              </Link>
              <Button variant="secondary" onClick={signOut} size="sm">
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/signin" className="text-body text-secondary-navy hover:text-secondary-warm-orange transition-colors">
                Sign In
              </Link>
              <Link href="/auth/signup">
                <Button variant="primary" size="sm">Get Started</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
} 