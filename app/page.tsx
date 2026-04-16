import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero-section"
import { TrustSection } from "@/components/sections/trust-section"
import { PositioningSection } from "@/components/sections/positioning-section"
import { ServicesSection } from "@/components/sections/services-section"
import { MarketSection } from "@/components/sections/market-section"
import { CitiesSection } from "@/components/sections/cities-section"
import { ProcessSection } from "@/components/sections/process-section"
import { FaqSection } from "@/components/sections/faq-section"
import { FinalCtaSection } from "@/components/sections/final-cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Immobilienmakler Düsseldorf | Immobilie verkaufen | Abels Immobilien",
  description: "Abels Immobilien: Premium-Makler für den Verkauf von Wohnungen, Häusern und Villen in Düsseldorf, München, Hamburg, Frankfurt, Essen und Stuttgart. Kostenfreie Bewertung in 72 Stunden.",
  keywords: [
    "Immobilienmakler Düsseldorf",
    "Immobilie verkaufen Düsseldorf",
    "Immobilienbewertung Düsseldorf",
    "Haus verkaufen",
    "Wohnung verkaufen",
    "Villa verkaufen",
    "Luxusimmobilien verkaufen",
    "Off-Market Immobilien"
  ],
  openGraph: {
    title: "Immobilienmakler Düsseldorf | Abels Immobilien",
    description: "Verkaufen Sie Ihre hochwertige Immobilie mit einem erfahrenen Makler. Seit 1999 inhabergefuhrt. Diskret. Persönlich. Professionell.",
    url: "https://abels-immobilien.de",
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <HeroSection />
      <TrustSection />
      <PositioningSection />
      <ServicesSection />
      <MarketSection />
      <CitiesSection />
      <ProcessSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
