"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HamburgHeroSection } from "@/components/hamburg/hero-section"
import { HamburgPositioningSection } from "@/components/hamburg/positioning-section"
import { HamburgMarketPricesSection } from "@/components/hamburg/market-prices-section"
import { HamburgNeighborhoodsSection } from "@/components/hamburg/neighborhoods-section"
import { HamburgPropertyTypesSection } from "@/components/hamburg/property-types-section"
import { HamburgServicesSection } from "@/components/hamburg/services-section"
import { HamburgWhyAbelsSection } from "@/components/hamburg/why-abels-section"
import { HamburgProcessSection } from "@/components/hamburg/process-section"
import { HamburgFaqSection } from "@/components/hamburg/faq-section"
import { HamburgClosingCtaSection } from "@/components/hamburg/closing-cta-section"

export default function HamburgStandortPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <HamburgHeroSection />
      <HamburgPositioningSection />
      <HamburgMarketPricesSection />
      <HamburgNeighborhoodsSection />
      <HamburgPropertyTypesSection />
      <HamburgServicesSection />
      <HamburgWhyAbelsSection />
      <HamburgProcessSection />
      <HamburgFaqSection />
      <HamburgClosingCtaSection />
      <Footer />
    </main>
  )
}
