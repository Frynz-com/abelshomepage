"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FrankfurtHeroSection } from "@/components/frankfurt/hero-section"
import { FrankfurtPositioningSection } from "@/components/frankfurt/positioning-section"
import { FrankfurtMarketPricesSection } from "@/components/frankfurt/market-prices-section"
import { FrankfurtNeighborhoodsSection } from "@/components/frankfurt/neighborhoods-section"
import { FrankfurtPropertyTypesSection } from "@/components/frankfurt/property-types-section"
import { FrankfurtServicesSection } from "@/components/frankfurt/services-section"
import { FrankfurtWhyAbelsSection } from "@/components/frankfurt/why-abels-section"
import { FrankfurtProcessSection } from "@/components/frankfurt/process-section"
import { FrankfurtFAQSection } from "@/components/frankfurt/faq-section"
import { FrankfurtClosingCtaSection } from "@/components/frankfurt/closing-cta-section"

export default function FrankfurtPage() {
  return (
    <>
      <Header />
      <main>
        <FrankfurtHeroSection />
        <FrankfurtPositioningSection />
        <FrankfurtMarketPricesSection />
        <FrankfurtNeighborhoodsSection />
        <FrankfurtPropertyTypesSection />
        <FrankfurtServicesSection />
        <FrankfurtWhyAbelsSection />
        <FrankfurtProcessSection />
        <FrankfurtFAQSection />
        <FrankfurtClosingCtaSection />
      </main>
      <Footer />
    </>
  )
}
