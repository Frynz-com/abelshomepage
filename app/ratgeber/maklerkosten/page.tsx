import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MaklerkostenHeroSection } from "@/components/ratgeber/maklerkosten/hero-section"
import { MaklerkostenIntroSection } from "@/components/ratgeber/maklerkosten/intro-section"
import { WasSindKostenSection } from "@/components/ratgeber/maklerkosten/was-sind-kosten-section"
import { WerZahltSection } from "@/components/ratgeber/maklerkosten/wer-zahlt-section"
import { FaktorenSection } from "@/components/ratgeber/maklerkosten/faktoren-section"
import { LeistungenSection } from "@/components/ratgeber/maklerkosten/leistungen-section"
import { LohntSichSection } from "@/components/ratgeber/maklerkosten/lohnt-sich-section"
import { WoraufAchtenSection } from "@/components/ratgeber/maklerkosten/worauf-achten-section"
import { MaklerkostenFaqSection } from "@/components/ratgeber/maklerkosten/faq-section"
import { MaklerkostenClosingCtaSection } from "@/components/ratgeber/maklerkosten/closing-cta-section"

export const metadata: Metadata = {
  title: "Maklerkosten beim Immobilienverkauf | Provision & Leistungen | Abels Immobilien",
  description: "Was kosten Makler beim Hausverkauf? Erfahren Sie alles über Provision, Kostenverteilung seit 2020, Leistungen und worauf Sie bei der Maklerwahl achten sollten.",
  keywords: [
    "Maklerkosten",
    "Maklerprovision",
    "Maklergebühren",
    "Wer zahlt Makler",
    "Provision Immobilienmakler",
    "Maklerkosten Hausverkauf",
    "Maklerkosten Wohnung verkaufen"
  ],
  openGraph: {
    title: "Maklerkosten beim Immobilienverkauf — Ratgeber",
    description: "Provision, Leistungen und worauf Eigentümer achten sollten. Ein ehrlicher Einblick in die Kostenstruktur beim Immobilienverkauf.",
    type: "article"
  }
}

export default function MaklerkostenRatgeberPage() {
  return (
    <>
      <Header />
      <main>
        <MaklerkostenHeroSection />
        <MaklerkostenIntroSection />
        <WasSindKostenSection />
        <WerZahltSection />
        <FaktorenSection />
        <LeistungenSection />
        <LohntSichSection />
        <WoraufAchtenSection />
        <MaklerkostenFaqSection />
        <MaklerkostenClosingCtaSection />
      </main>
      <Footer />
    </>
  )
}
