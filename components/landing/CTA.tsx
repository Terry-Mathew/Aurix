import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="py-12 px-4 bg-background-light">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-h2 mb-4">
          Ready to Create Your Digital Identity?
        </h2>
        
        <p className="text-body-large text-secondary-navy mb-8">
          Join thousands of professionals who are already showcasing their unique stories.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth/signup">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Start Building Free
            </Button>
          </Link>
          <Link href="/examples">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              See Examples
            </Button>
          </Link>
        </div>
        
        <div className="mt-6 text-caption text-input-placeholder">
          <p>No credit card required • Free tier available • 2-minute setup</p>
        </div>
      </div>
    </section>
  )
} 