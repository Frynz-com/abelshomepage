"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EssenHeroSection } from "@/components/essen/hero-section"
import { EssenPositioningSection } from "@/components/essen/positioning-section"
import { EssenMarketPricesSection } from "@/components/essen/market-prices-section"
import { EssenNeighborhoodsSection } from "@/components/essen/neighborhoods-section"
import { EssenPropertyTypesSection } from "@/components/essen/property-types-section"
import { EssenServicesSection } from "@/components/essen/services-section"
import { EssenWhyAbelsSection } from "@/components/essen/why-abels-section"
import { EssenProcessSection } from "@/components/essen/process-section"
import { EssenFaqSection } from "@/components/essen/faq-section"
import { EssenClosingCtaSection } from "@/components/essen/closing-cta-section"

export default function EssenPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <EssenHeroSection />
      <EssenPositioningSection />
      <EssenMarketPricesSection />
      <EssenNeighborhoodsSection />
      <EssenPropertyTypesSection />
      <EssenServicesSection />
      <EssenWhyAbelsSection />
      <EssenProcessSection />
      <EssenFaqSection />
      <EssenClosingCtaSection />
      <Footer />
    </main>
  )
}
