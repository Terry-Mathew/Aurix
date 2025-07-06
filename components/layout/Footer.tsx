import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background-footer-dark text-primary-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-h3 mb-4">DebutHub</h3>
            <p className="text-body text-gray-300">
              Your digital identity as dynamic as you.
            </p>
          </div>
          
          <div>
            <h4 className="text-body font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-body text-gray-300">
              <li><Link href="/features" className="hover:text-primary-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-primary-white transition-colors">Pricing</Link></li>
              <li><Link href="/examples" className="hover:text-primary-white transition-colors">Examples</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-body font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-body text-gray-300">
              <li><Link href="/about" className="hover:text-primary-white transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-primary-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-body font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-body text-gray-300">
              <li><Link href="/privacy" className="hover:text-primary-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-caption text-gray-400">
          <p>&copy; 2024 DebutHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 