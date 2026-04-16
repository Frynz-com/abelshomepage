"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GruenwaldHeroSection } from "@/components/gruenwald/hero-section"
import { GruenwaldPositioningSection } from "@/components/gruenwald/positioning-section"
import { GruenwaldMarketPricesSection } from "@/components/gruenwald/market-prices-section"
import { GruenwaldNeighborhoodsSection, GruenwaldPropertyTypesSection } from "@/components/gruenwald/neighborhoods-property-types-section"
import { GruenwaldServicesSection, GruenwaldWhyAbelsSection } from "@/components/gruenwald/services-why-section"
import { GruenwaldProcessSection, GruenwaldFaqSection } from "@/components/gruenwald/process-faq-section"
import { GruenwaldClosingCtaSection } from "@/components/gruenwald/closing-cta-section"

export default function GruenwaldPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <GruenwaldHeroSection />
      <GruenwaldPositioningSection />
      <GruenwaldMarketPricesSection />
      <GruenwaldNeighborhoodsSection />
      <GruenwaldPropertyTypesSection />
      <GruenwaldServicesSection />
      <GruenwaldWhyAbelsSection />
      <GruenwaldProcessSection />
      <GruenwaldFaqSection />
      <GruenwaldClosingCtaSection />
      <Footer />
    </main>
  )
}
