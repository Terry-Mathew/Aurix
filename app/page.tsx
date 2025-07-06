"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Sparkles, 
  Play, 
  Users, 
  Globe, 
  Shield, 
  Zap,
  CheckCircle,
  Star,
  Menu,
  X,
  ArrowRight,
  Eye,
  Share2,
  BarChart3,
  Palette,
  Code,
  Briefcase,
  GraduationCap,
  Camera,
  Pen,
  Heart,
  Target,
  Award,
  TrendingUp,
  MessageCircle,
  Clock,
  Smartphone
} from 'lucide-react'

// Animation Component
function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <div 
      className="animate-fade-in-up opacity-0" 
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  )
}

// Custom animations in globals.css
const animationStyles = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out;
  }
`

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('edit')
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-header">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-brand-button rounded-lg flex items-center justify-center shadow-subtle">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900 tracking-tight">Aurix</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium tracking-wide">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium tracking-wide">
                Pricing
              </a>
              <a href="#companies" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium tracking-wide">
                Companies
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 font-medium">
                Sign In
              </Button>
              <Button className="bg-brand-button hover:shadow-button-hover text-white shadow-button transition-all duration-200 font-semibold">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-3 space-y-3">
              <a href="#features" className="block text-gray-700 hover:text-gray-900 font-medium">Features</a>
              <a href="#pricing" className="block text-gray-700 hover:text-gray-900 font-medium">Pricing</a>
              <a href="#companies" className="block text-gray-700 hover:text-gray-900 font-medium">Companies</a>
              <div className="pt-3 border-t border-gray-100">
                <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-gray-900 font-medium mb-2">
                  Sign In
                </Button>
                <Button className="w-full bg-brand-button hover:shadow-button-hover text-white shadow-button transition-all duration-200 font-semibold">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto text-center max-w-4xl">
          <AnimatedSection delay={100}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              Your Digital <br />
              <span className="text-brand-orange">Portfolio</span> <br />
              Starts Here
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Create stunning professional portfolios in minutes. Showcase your work, connect 
              with opportunities, and share your story with <span className="text-brand-orange font-semibold">Aurix</span>.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-brand-button hover:shadow-button-hover text-white px-10 py-4 text-lg font-semibold shadow-button transition-all duration-200 transform hover:scale-105 rounded-lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Create Your Portfolio
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:shadow-card px-10 py-4 text-lg font-semibold transition-all duration-200 rounded-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                View Demo
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Aurix Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Why Choose <span className="text-brand-orange">Aurix</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                The modern way to showcase your professional story and connect with opportunities
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-brand-orange" />,
                title: "Lightning Fast Setup",
                description: "Create your professional portfolio in under 5 minutes with our intuitive builder"
              },
              {
                icon: <Palette className="w-8 h-8 text-brand-orange" />,
                title: "Beautiful Templates",
                description: "Choose from professionally designed templates that make your work shine"
              },
              {
                icon: <Share2 className="w-8 h-8 text-brand-orange" />,
                title: "Easy Sharing",
                description: "Share your portfolio with a custom URL and QR code for instant access"
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-brand-orange" />,
                title: "Analytics Insights",
                description: "Track who views your portfolio and understand your audience better"
              },
              {
                icon: <Shield className="w-8 h-8 text-brand-orange" />,
                title: "Privacy First",
                description: "Full control over who sees your work with advanced privacy settings"
              },
              {
                icon: <Globe className="w-8 h-8 text-brand-orange" />,
                title: "Global Reach",
                description: "Connect with opportunities worldwide and expand your professional network"
              }
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={200 + index * 100}>
                <Card className="h-full hover:shadow-card-hover transition-all duration-200 border-0 shadow-card">
                  <CardContent className="p-8">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is Aurix For Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Who Is <span className="text-brand-orange">Aurix</span> For?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                Perfect for professionals and creatives who want to stand out
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8 text-brand-orange" />,
                title: "Developers",
                description: "Showcase your coding projects, GitHub contributions, and technical skills"
              },
              {
                icon: <Palette className="w-8 h-8 text-brand-orange" />,
                title: "Designers",
                description: "Display your creative work, design process, and visual storytelling"
              },
              {
                icon: <Camera className="w-8 h-8 text-brand-orange" />,
                title: "Photographers",
                description: "Create stunning galleries that highlight your photography portfolio"
              },
              {
                icon: <Pen className="w-8 h-8 text-brand-orange" />,
                title: "Writers",
                description: "Share your articles, stories, and writing samples in one place"
              },
              {
                icon: <Briefcase className="w-8 h-8 text-brand-orange" />,
                title: "Consultants",
                description: "Build credibility with case studies and professional achievements"
              },
              {
                icon: <GraduationCap className="w-8 h-8 text-brand-orange" />,
                title: "Students",
                description: "Stand out in job applications with your academic and project work"
              },
              {
                icon: <Heart className="w-8 h-8 text-brand-orange" />,
                title: "Freelancers",
                description: "Attract clients with a professional portfolio that converts"
              },
              {
                icon: <Target className="w-8 h-8 text-brand-orange" />,
                title: "Job Seekers",
                description: "Make a lasting impression with recruiters and hiring managers"
              }
            ].map((audience, index) => (
              <AnimatedSection key={index} delay={200 + index * 100}>
                <Card className="h-full hover:shadow-card-hover transition-all duration-200 border-0 shadow-card text-center">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">{audience.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{audience.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{audience.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Simple <span className="text-brand-orange">Pricing</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                Choose the plan that fits your needs. Start free, upgrade when you're ready.
              </p>
            </div>
          </AnimatedSection>

          {/* Billing Toggle */}
          <AnimatedSection delay={200}>
            <div className="flex justify-center mb-12">
              <div className="bg-white p-2 rounded-lg shadow-card border border-gray-200">
                <div className="flex items-center">
                  <button
                    className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                      !isYearly 
                        ? 'bg-brand-button text-white shadow-button' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setIsYearly(false)}
                  >
                    Monthly
                  </button>
                  <button
                    className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                      isYearly 
                        ? 'bg-brand-button text-white shadow-button' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setIsYearly(true)}
                  >
                    Yearly
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Save 20%
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Free",
                price: "₹0",
                period: "forever",
                description: "Perfect for getting started",
                features: [
                  "1 Portfolio",
                  "Basic Templates",
                  "Custom URL",
                  "Basic Analytics",
                  "Email Support"
                ],
                cta: "Get Started",
                popular: false
              },
              {
                name: "Pro",
                price: isYearly ? "₹199" : "₹249",
                period: isYearly ? "per month" : "per month",
                description: "For serious professionals",
                features: [
                  "Unlimited Portfolios",
                  "Premium Templates",
                  "Custom Domain",
                  "Advanced Analytics",
                  "Priority Support",
                  "QR Code Generator",
                  "PDF Export"
                ],
                cta: "Start Pro Trial",
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "pricing",
                description: "For teams and organizations",
                features: [
                  "Everything in Pro",
                  "Team Management",
                  "Brand Customization",
                  "API Access",
                  "Dedicated Support",
                  "Custom Integrations"
                ],
                cta: "Contact Sales",
                popular: false
              }
            ].map((plan, index) => (
              <AnimatedSection key={index} delay={300 + index * 100}>
                <Card className={`h-full relative ${plan.popular ? 'ring-2 ring-brand-orange shadow-card-hover' : 'shadow-card'} hover:shadow-card-hover transition-all duration-200`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-brand-button text-white shadow-button px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-2">{plan.period}</span>
                      </div>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-brand-button hover:shadow-button-hover text-white shadow-button' 
                          : 'bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:shadow-card'
                      } transition-all duration-200 font-semibold`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* See How Portfolios Look Section */}
      <section id="companies" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                See How <span className="text-brand-orange">Portfolios</span> Look
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                Real portfolios from professionals who chose Aurix to showcase their work
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "UX Designer",
                company: "Flipkart",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&crop=face",
                views: "2.4K",
                rating: 4.9
              },
              {
                name: "Arjun Patel",
                role: "Full Stack Developer",
                company: "Zomato",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
                views: "3.1K",
                rating: 4.8
              },
              {
                name: "Kavya Reddy",
                role: "Product Manager",
                company: "Paytm",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
                views: "1.8K",
                rating: 4.9
              },
              {
                name: "Rohit Kumar",
                role: "Data Scientist",
                company: "Swiggy",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
                views: "2.7K",
                rating: 4.7
              },
              {
                name: "Sneha Gupta",
                role: "Marketing Manager",
                company: "Byju's",
                image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
                views: "2.2K",
                rating: 4.8
              },
              {
                name: "Vikram Singh",
                role: "Creative Director",
                company: "OYO",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
                views: "3.5K",
                rating: 4.9
              }
            ].map((portfolio, index) => (
              <AnimatedSection key={index} delay={200 + index * 100}>
                <Card className="hover:shadow-card-hover transition-all duration-200 border-0 shadow-card overflow-hidden">
                  <div className="relative">
                    <img 
                      src={portfolio.image} 
                      alt={portfolio.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                      <Eye className="w-4 h-4 text-gray-600 mr-1" />
                      <span className="text-sm font-medium text-gray-700">{portfolio.views}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{portfolio.name}</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{portfolio.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-1">{portfolio.role}</p>
                    <p className="text-sm text-brand-orange font-medium">{portfolio.company}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={800}>
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-brand-button hover:shadow-button-hover text-white px-10 py-4 text-lg font-semibold shadow-button transition-all duration-200 transform hover:scale-105"
              >
                View All Portfolios
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection delay={100}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Ready to Build Your <span className="text-brand-orange">Portfolio</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Join thousands of professionals who trust Aurix to showcase their work and connect with opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-brand-button hover:shadow-button-hover text-white px-10 py-4 text-lg font-semibold shadow-button transition-all duration-200 transform hover:scale-105"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Building Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:shadow-card px-10 py-4 text-lg font-semibold transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Talk to Sales
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-brand-button rounded-lg flex items-center justify-center shadow-subtle">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="ml-2 text-xl font-bold">Aurix</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed font-medium">
                Empowering Indian professionals to showcase their talent and connect with opportunities worldwide.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">📘</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">🐦</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">📷</a>
              </div>
            </div>
            
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Templates", "Examples", "API"]
              },
              {
                title: "Company", 
                links: ["About", "Blog", "Careers", "Press", "Contact"]
              },
              {
                title: "Support",
                links: ["Help Center", "Community", "Privacy Policy", "Terms of Service", "Refund Policy"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-bold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-medium">© 2024 Aurix. Made with ❤️ in India</p>
            <p className="text-gray-400 mt-4 md:mt-0 text-sm font-medium">🔒 Proudly Secure • 🌱 Built for Growth</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 