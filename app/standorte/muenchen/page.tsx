"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MunichHeroSection } from "@/components/munich/hero-section"
import { MunichPositioningSection } from "@/components/munich/positioning-section"
import { MunichMarketPricesSection } from "@/components/munich/market-prices-section"
import { MunichNeighborhoodsSection } from "@/components/munich/neighborhoods-section"
import { MunichPropertyTypesSection } from "@/components/munich/property-types-section"
import { MunichServicesSection } from "@/components/munich/services-section"
import { MunichWhyAbelsSection } from "@/components/munich/why-abels-section"
import { MunichProcessSection } from "@/components/munich/process-section"
import { MunichFaqSection } from "@/components/munich/faq-section"
import { MunichClosingCtaSection } from "@/components/munich/closing-cta-section"

export default function MunichPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <MunichHeroSection />
      <MunichPositioningSection />
      <MunichMarketPricesSection />
      <MunichNeighborhoodsSection />
      <MunichPropertyTypesSection />
      <MunichServicesSection />
      <MunichWhyAbelsSection />
      <MunichProcessSection />
      <MunichFaqSection />
      <MunichClosingCtaSection />
      <Footer />
    </main>
  )
}
