import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { QrCode, Users, Globe, Star, Check, X } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background-white">
      {/* Header */}
      <header className="border-b border-accent-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-secondary-warm-orange rounded-lg flex items-center justify-center">
                <span className="text-primary-white font-bold text-sm">D</span>
              </div>
              <span className="ml-2 text-xl font-bold text-primary-charcoal">DebutHub</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-secondary-navy hover:text-primary-charcoal">Features</a>
              <a href="#" className="text-secondary-navy hover:text-primary-charcoal">Pricing</a>
              <a href="#" className="text-secondary-navy hover:text-primary-charcoal">Examples</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-secondary-navy">Sign in</Button>
              <Button className="bg-secondary-warm-orange hover:bg-orange-600">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-secondary-blush-pale-orange text-secondary-warm-orange border-secondary-warm-orange">
            ⭐ Trusted by 10,000+ Indian Professionals
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-primary-charcoal mb-6">
            Your Digital <br />
            <span className="text-secondary-warm-orange">Portfolio</span> <br />
            Starts Here
          </h1>
          
          <p className="text-xl text-secondary-navy mb-8 max-w-2xl mx-auto leading-relaxed">
            Create stunning professional profiles in minutes. Showcase your work, connect 
            with opportunities, and share your story with a unique QR code. Perfect for 
            India's growing creative economy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary-warm-orange hover:bg-orange-600 px-8 py-4 text-lg">
              ✨ Create Your Profile
            </Button>
            <Button variant="outline" size="lg" className="border-secondary-warm-orange text-secondary-warm-orange hover:bg-secondary-warm-orange hover:text-white px-8 py-4 text-lg">
              📱 View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-warm-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-charcoal mb-2">QR Code Sharing</h3>
              <p className="text-secondary-navy">Instant networking with downloadable QR codes for seamless profile sharing.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-warm-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-charcoal mb-2">Built for India</h3>
              <p className="text-secondary-navy">Designed for Indian professionals with local insights and cultural understanding.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-warm-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-charcoal mb-2">Global Reach</h3>
              <p className="text-secondary-navy">Share your profile worldwide with custom domains and international accessibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Builder Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-charcoal mb-4">
              Build Your <span className="text-secondary-warm-orange">Profile</span>
            </h2>
            <p className="text-xl text-secondary-navy">
              Create your professional digital presence in minutes. Try our live editor below.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Profile Form */}
            <div className="space-y-6">
              <div className="flex space-x-4 mb-6">
                <Button className="bg-secondary-warm-orange text-white">Edit</Button>
                <Button variant="outline" className="border-gray-300">Preview</Button>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-charcoal mb-6">Profile Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-navy mb-2">Full Name *</label>
                    <Input placeholder="Your full name" className="w-full" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-navy mb-2">Professional Headline *</label>
                    <Input placeholder="e.g., Graphic Designer & Brand Architect" className="w-full" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-navy mb-2">Professional Summary</label>
                    <textarea 
                      className="w-full p-3 border border-input-border rounded-input bg-input-background text-input-text placeholder:text-input-placeholder focus:outline-none focus:border-input-focus focus:ring-1 focus:ring-input-focus"
                      rows={3}
                      placeholder="Tell your professional story in a few sentences..."
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary-navy mb-2">Email</label>
                      <Input placeholder="you@email@example.com" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-navy mb-2">Phone</label>
                      <Input placeholder="+91 98765 43210" className="w-full" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-navy mb-2">Professional Links (Max 3 - Free Tier)</label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Input placeholder="https://" className="flex-1" />
                        <Button variant="outline" size="sm" className="text-secondary-warm-orange border-secondary-warm-orange">+ Add Link</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-navy mb-2">Video/Project Links (1 - Free Tier)</label>
                    <Input placeholder="https://..." className="w-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Preview */}
            <div className="lg:sticky lg:top-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-charcoal mb-6">Profile Preview</h3>
                <Card className="p-6 bg-white shadow-lg">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-bold text-primary-charcoal">Your Name</h3>
                    <p className="text-secondary-navy mb-4">Professional Headline</p>
                    <p className="text-sm text-secondary-navy mb-6">Professional summary will appear here...</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center space-x-2">
                        <span>📧</span>
                        <span className="text-secondary-navy">you@email.com</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span>📱</span>
                        <span className="text-secondary-navy">+91 98765 43210</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-charcoal mb-4">
            Share Your <span className="text-secondary-warm-orange">Digital Identity</span>
          </h2>
          <p className="text-xl text-secondary-navy mb-12">
            Instant professional networking with QR codes that make lasting impressions.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="w-48 h-48 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <div className="w-40 h-40 bg-white rounded grid grid-cols-8 gap-1 p-2">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-full h-full ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'} rounded-sm`}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-secondary-warm-orange hover:bg-orange-600">
                📥 Download QR Code
              </Button>
              <Button variant="outline" className="border-secondary-warm-orange text-secondary-warm-orange">
                🔗 Share Profile
              </Button>
            </div>
          </div>
          
          <div className="mt-8 text-left max-w-md mx-auto">
            <p className="font-semibold text-primary-charcoal mb-2">How To Use:</p>
            <div className="space-y-2 text-sm text-secondary-navy">
              <div className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-secondary-warm-orange rounded-full mt-2"></span>
                <span><strong>Print:</strong> Add to business cards & portfolios</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-secondary-warm-orange rounded-full mt-2"></span>
                <span><strong>Network:</strong> Share instantly at events</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-secondary-warm-orange rounded-full mt-2"></span>
                <span><strong>Professional:</strong> Include in email signatures</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-charcoal mb-4">
              Simple <span className="text-secondary-warm-orange">Pricing</span>
            </h2>
            <p className="text-xl text-secondary-navy mb-6">
              Start free and upgrade as you grow. All plans include our core features with no hidden fees.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-secondary-navy">Monthly billing</span>
              <div className="relative">
                <input type="checkbox" className="sr-only" />
                <div className="w-10 h-6 bg-gray-300 rounded-full shadow-inner"></div>
                <div className="absolute w-4 h-4 bg-white rounded-full shadow left-1 top-1 transition"></div>
              </div>
              <span className="text-secondary-navy">Yearly (2 months free!)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="p-8 relative">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary-charcoal mb-2">Free</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-charcoal">₹0</span>
                  <span className="text-secondary-navy">/forever</span>
                </div>
                <p className="text-secondary-navy mb-6">Perfect for getting started</p>
                
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">1 image upload</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">3 professional links</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">1 video embed</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">Unique slug URL</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">Downloadable QR code</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">Basic profile sharing</span>
                  </li>
                </ul>
                
                <Button variant="outline" className="w-full border-secondary-warm-orange text-secondary-warm-orange">
                  Get Started Free
                </Button>
              </div>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 relative border-2 border-secondary-warm-orange">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-secondary-warm-orange text-white px-4 py-1">Most Popular</Badge>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary-charcoal mb-2">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-charcoal">₹499</span>
                  <span className="text-secondary-navy">/per month</span>
                </div>
                <p className="text-secondary-navy mb-6">For serious professionals</p>
                
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">5 image uploads</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">8 professional links</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">3 video embeds</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">3 premium templates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">Custom domain mapping</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">Detailed analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">Priority support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">Device & browser insights</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-secondary-warm-orange hover:bg-orange-600">
                  Upgrade to Pro
                </Button>
              </div>
            </Card>

            {/* Business Plan */}
            <Card className="p-8 relative">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary-charcoal mb-2">Business</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-charcoal">₹999</span>
                  <span className="text-secondary-navy">/per month</span>
                </div>
                <p className="text-secondary-navy mb-6">For teams & agencies</p>
                
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">Everything in Pro</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">Unlimited uploads</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">Unlimited links</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">All premium templates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">Custom branding</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">Advanced analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">Heatmaps & session tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">Dedicated support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-navy">Priority support</span>
                  </li>
                </ul>
                
                <Button variant="outline" className="w-full border-secondary-warm-orange text-secondary-warm-orange">
                  Contact Business
                </Button>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-secondary-navy">
              Need a custom solution for your organization? 
              <a href="#" className="text-secondary-warm-orange hover:underline ml-1">Contact Sales</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-charcoal text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-secondary-warm-orange rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span className="ml-2 text-xl font-bold">DebutHub</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering Indian professionals to showcase their talent and connect with opportunities worldwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">📘</a>
                <a href="#" className="text-gray-400 hover:text-white">🐦</a>
                <a href="#" className="text-gray-400 hover:text-white">📷</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Templates</a></li>
                <li><a href="#" className="hover:text-white">Examples</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 DebutHub. Made with ❤️ in India</p>
            <p className="text-gray-400 mt-4 md:mt-0">🔒 Proudly Secure • 🌱 Built for Growth</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 