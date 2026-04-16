import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RatgeberVerkaufenHeroSection } from "@/components/ratgeber/verkaufen/hero-section"
import { RatgeberVerkaufenIntroSection } from "@/components/ratgeber/verkaufen/intro-section"
import { RatgeberVerkaufenErfolgsfaktorenSection } from "@/components/ratgeber/verkaufen/erfolgsfaktoren-section"
import { RatgeberVerkaufenAblaufSection } from "@/components/ratgeber/verkaufen/ablauf-section"
import { RatgeberVerkaufenFehlerSection } from "@/components/ratgeber/verkaufen/fehler-section"
import { RatgeberVerkaufenMaklerSection } from "@/components/ratgeber/verkaufen/makler-section"
import { RatgeberVerkaufenUnterlagenSection } from "@/components/ratgeber/verkaufen/unterlagen-section"
import { RatgeberVerkaufenPreisfindungSection } from "@/components/ratgeber/verkaufen/preisfindung-section"
import { RatgeberVerkaufenFaqSection } from "@/components/ratgeber/verkaufen/faq-section"
import { RatgeberVerkaufenClosingCtaSection } from "@/components/ratgeber/verkaufen/closing-cta-section"

export const metadata: Metadata = {
  title: "Immobilie verkaufen: Der vollständige Ratgeber für Eigentümer | Abels Immobilien",
  description: "Immobilie verkaufen leicht gemacht: Ablauf, Tipps, Fehler vermeiden. Erfahren Sie alles über Preisfindung, Makler vs. privat, benötigte Unterlagen und den kompletten Verkaufsprozess.",
  keywords: [
    "Immobilie verkaufen",
    "Haus verkaufen",
    "Wohnung verkaufen",
    "Immobilienverkauf Ablauf",
    "Immobilie verkaufen Tipps",
    "Immobilie verkaufen mit Makler",
    "Immobilie privat verkaufen",
    "Verkaufspreis Immobilie"
  ],
  openGraph: {
    title: "Immobilie verkaufen: Der vollständige Ratgeber für Eigentümer",
    description: "Von der Vorbereitung bis zum Notartermin — alles, was Sie wissen müssen, um Ihre Immobilie erfolgreich zu verkaufen.",
    type: "article"
  }
}

export default function ImmobilieVerkaufenPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <RatgeberVerkaufenHeroSection />
      <RatgeberVerkaufenIntroSection />
      <RatgeberVerkaufenErfolgsfaktorenSection />
      <RatgeberVerkaufenAblaufSection />
      <RatgeberVerkaufenFehlerSection />
      <RatgeberVerkaufenMaklerSection />
      <RatgeberVerkaufenUnterlagenSection />
      <RatgeberVerkaufenPreisfindungSection />
      <RatgeberVerkaufenFaqSection />
      <RatgeberVerkaufenClosingCtaSection />
      <Footer />
    </main>
  )
}
