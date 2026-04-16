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
    type: "article"
  }
}

export default function EnergieausweisRatgeberPage() {
  return (
    <>
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
