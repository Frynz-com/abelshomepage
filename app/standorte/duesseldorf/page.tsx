"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DuesseldorfHeroSection } from "@/components/duesseldorf/hero-section"
import { DuesseldorfPositioningSection } from "@/components/duesseldorf/positioning-section"
import { DuesseldorfMarketPricesSection } from "@/components/duesseldorf/market-prices-section"
import { DuesseldorfNeighborhoodsSection } from "@/components/duesseldorf/neighborhoods-section"
import { DuesseldorfPropertyTypesSection } from "@/components/duesseldorf/property-types-section"
import { DuesseldorfServicesSection } from "@/components/duesseldorf/services-section"
import { DuesseldorfWhyAbelsSection } from "@/components/duesseldorf/why-abels-section"
import { DuesseldorfProcessSection } from "@/components/duesseldorf/process-section"
import { DuesseldorfFaqSection } from "@/components/duesseldorf/faq-section"
import { DuesseldorfClosingCtaSection } from "@/components/duesseldorf/closing-cta-section"

export default function DuesseldorfPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <DuesseldorfHeroSection />
      <DuesseldorfPositioningSection />
      <DuesseldorfMarketPricesSection />
      <DuesseldorfNeighborhoodsSection />
      <DuesseldorfPropertyTypesSection />
      <DuesseldorfServicesSection />
      <DuesseldorfWhyAbelsSection />
      <DuesseldorfProcessSection />
      <DuesseldorfFaqSection />
      <DuesseldorfClosingCtaSection />
      <Footer />
    </main>
  )
}
