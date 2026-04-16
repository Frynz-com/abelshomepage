import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NotarkostenHeroSection } from "@/components/ratgeber/notarkosten/hero-section"
import { NotarkostenEinstiegSection } from "@/components/ratgeber/notarkosten/einstieg-section"
import { NotarkostenWarumNotarSection } from "@/components/ratgeber/notarkosten/warum-notar-section"
import { NotarkostenWasSindKostenSection } from "@/components/ratgeber/notarkosten/was-sind-kosten-section"
import { NotarkostenWerTraegtSection } from "@/components/ratgeber/notarkosten/wer-traegt-section"
import { NotarkostenLeistungenSection } from "@/components/ratgeber/notarkosten/leistungen-section"
import { NotarkostenEinordnungSection } from "@/components/ratgeber/notarkosten/einordnung-section"
import { NotarkostenWoraufAchtenSection } from "@/components/ratgeber/notarkosten/worauf-achten-section"
import { NotarkostenFaqSection } from "@/components/ratgeber/notarkosten/faq-section"
import { NotarkostenClosingCtaSection } from "@/components/ratgeber/notarkosten/closing-cta-section"

export const metadata: Metadata = {
  title: "Notarkosten beim Immobilienverkauf | Ratgeber | Abels Immobilien",
  description: "Notarkosten beim Hausverkauf: Was kostet der Notar? Wer zahlt? Wie bereite ich den Termin vor? Alle Infos zu Gebuehren, Leistungen und Ablauf.",
  keywords: [
    "Notarkosten",
    "Notarkosten Hausverkauf",
    "Notarkosten Immobilienverkauf",
    "Notar Gebuehren",
    "Wer zahlt Notar",
    "Notartermin Vorbereitung",
    "Grundbuchkosten"
  ],
  openGraph: {
    title: "Notarkosten beim Immobilienverkauf - Was Sie wissen muessen",
    description: "Alle Informationen zu Notarkosten, Gebuehren und Ablauf beim Immobilienverkauf. Inkl. Beispielrechnung und Praxis-Tipps.",
    type: "article"
  }
}

export default function NotarkostenRatgeberPage() {
  return (
    <>
      <Header />
      <main>
        <NotarkostenHeroSection />
        <NotarkostenEinstiegSection />
        <NotarkostenWarumNotarSection />
        <NotarkostenWasSindKostenSection />
        <NotarkostenWerTraegtSection />
        <NotarkostenLeistungenSection />
        <NotarkostenEinordnungSection />
        <NotarkostenWoraufAchtenSection />
        <NotarkostenFaqSection />
        <NotarkostenClosingCtaSection />
      </main>
      <Footer />
    </>
  )
}
