import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/ratgeber/energieausweis/hero-section"
import { IntroSection } from "@/components/ratgeber/energieausweis/intro-section"
import { WasIstSection } from "@/components/ratgeber/energieausweis/was-ist-section"
import { WannRelevantSection } from "@/components/ratgeber/energieausweis/wann-relevant-section"
import { ArtenSection } from "@/components/ratgeber/energieausweis/arten-section"
import { WasEnthaltenSection } from "@/components/ratgeber/energieausweis/was-enthalten-section"
import { WarumFruehzeitigSection } from "@/components/ratgeber/energieausweis/warum-fruehzeitig-section"
import { WennFehltSection } from "@/components/ratgeber/energieausweis/wenn-fehlt-section"
import { UnterlagenSection } from "@/components/ratgeber/energieausweis/unterlagen-section"
import { FaqSection } from "@/components/ratgeber/energieausweis/faq-section"
import { ClosingCtaSection } from "@/components/ratgeber/energieausweis/closing-cta-section"

export const metadata: Metadata = {
  title: "Energieausweis beim Immobilienverkauf | Ratgeber | Abels Immobilien",
  description: "Alles zum Energieausweis beim Immobilienverkauf: Pflichten, Fristen, Kosten. Verbrauchsausweis vs. Bedarfsausweis erklärt. Kostenlose Beratung bei Abels Immobilien.",
  keywords: [
    "Energieausweis",
    "Energieausweis Immobilienverkauf",
    "Energieausweis Pflicht",
    "Verbrauchsausweis",
    "Bedarfsausweis",
    "Energieausweis Kosten",
    "GEG Energieausweis"
  ],
  openGraph: {
    title: "Energieausweis beim Immobilienverkauf | Abels Immobilien",
    description: "Was Eigentümer über den Energieausweis wissen müssen: Pflichten, Fristen und wie wir Sie dabei unterstützen.",
    type: "article",
    url: "https://abels-immobilien.de/ratgeber/energieausweis",
    locale: "de_DE",
    siteName: "Abels Immobilien",
  },
  alternates: {
    canonical: "https://abels-immobilien.de/ratgeber/energieausweis",
  },
}

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Energieausweis beim Immobilienverkauf',
  description: 'Alles zum Energieausweis beim Immobilienverkauf: Pflichten, Fristen, Kosten.',
  author: { '@type': 'Organization', name: 'Abels Immobilien GmbH', url: 'https://abels-immobilien.de' },
  publisher: { '@type': 'Organization', name: 'Abels Immobilien GmbH', url: 'https://abels-immobilien.de' },
  url: 'https://abels-immobilien.de/ratgeber/energieausweis',
  datePublished: '2024-01-01',
  dateModified: '2026-04-01',
  inLanguage: 'de-DE',
}

export default function EnergieausweisRatgeberPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <WasIstSection />
        <WannRelevantSection />
        <ArtenSection />
        <WasEnthaltenSection />
        <WarumFruehzeitigSection />
        <WennFehltSection />
        <UnterlagenSection />
        <FaqSection />
        <ClosingCtaSection />
      </main>
      <Footer />
    </>
  )
}
