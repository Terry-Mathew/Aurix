import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="py-12 px-4 text-center bg-secondary-blush-pale-orange">
      <div className="container mx-auto max-w-4xl animate-entrance">
        <h1 className="text-h1 mb-6">
          Your Digital Portfolio
          <br />
          <span className="text-secondary-warm-orange">Starts Here</span>
        </h1>
        
        <p className="text-body-large text-secondary-navy mb-8 max-w-2xl mx-auto">
          Create stunning professional portfolios in minutes. Showcase your work, connect 
          with opportunities, and share your story with <span className="text-secondary-warm-orange font-semibold">Aurix</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth/signup">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Get Started Free
            </Button>
          </Link>
          <Link href="/examples">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              View Examples
            </Button>
          </Link>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-secondary-warm-orange/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-secondary-warm-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-h3 mb-2">No-Code Builder</h3>
            <p className="text-body text-secondary-navy">Create your profile in minutes without any technical knowledge.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-functional-success/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-functional-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </div>
            <h3 className="text-h3 mb-2">Easy Sharing</h3>
            <p className="text-body text-secondary-navy">Share your profile with a simple link or QR code.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-functional-info/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-functional-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-h3 mb-2">Privacy First</h3>
            <p className="text-body text-secondary-navy">Your profile is private by default. You control who sees what.</p>
          </div>
        </div>
      </div>
    </section>
  )
} 