import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/landing/Hero'
import { CTA } from '@/components/landing/CTA'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <CTA />
      </main>
      <Footer />
    </div>
  )
} 