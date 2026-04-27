import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BewertungIframe } from "./bewertung-iframe"

export const metadata = {
  title: "Kostenlose Immobilienbewertung | In 72 Stunden | Abels Immobilien",
  description: "Kostenfreie, unverbindliche Bewertung Ihrer Immobilie durch Experten. Professionelle Marktanalyse in 72 Stunden — für Wohnungen, Häuser und Villen in 7 deutschen Städten.",
  keywords: [
    "Immobilienbewertung kostenlos", "Immobilie bewerten lassen", "Hausbewertung kostenlos",
    "Wohnungswert ermitteln", "Immobilienwert berechnen", "Marktwert Immobilie"
  ],
  openGraph: {
    title: "Kostenlose Immobilienbewertung — In 72 Stunden",
    description: "Was ist Ihre Immobilie wert? Professionelle Markteinschätzung kostenlos und unverbindlich.",
    url: "https://abels-immobilien.de/bewertung",
    type: "website",
    locale: "de_DE",
    siteName: "Abels Immobilien",
  },
  alternates: {
    canonical: "https://abels-immobilien.de/bewertung",
  },
}

export default function BewertungPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />

      {/* Hero */}
      <section className="pt-40 pb-16 bg-cream border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="text-gold text-xs uppercase tracking-[0.2em] mb-4">Kostenlos & Unverbindlich</p>
          <h1 className="font-serif text-4xl lg:text-6xl text-ink tracking-[-0.02em] leading-[1.05] mb-6 max-w-[720px]">
            Was ist Ihre Immobilie wert?
          </h1>
          <p className="text-graphite text-lg leading-relaxed max-w-[560px]">
            Erhalten Sie eine fundierte Markteinschätzung — innerhalb von 72 Stunden, kostenfrei und ohne Verpflichtung.
          </p>
        </div>
      </section>

      {/* Bewertungstool iFrame */}
      <section className="bg-bone py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="bg-cream border border-line overflow-hidden">
            <BewertungIframe />
          </div>
        </div>
      </section>

      {/* Vertrauen */}
      <section className="py-24 bg-cream border-t border-line">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-px bg-line">
            {[
              { number: "01", title: "Angaben machen", text: "Geben Sie die Eckdaten Ihrer Immobilie ein — Lage, Typ, Größe und Zustand." },
              { number: "02", title: "Analyse erhalten", text: "Unser Bewertungstool wertet aktuelle Marktdaten und Vergleichsobjekte aus." },
              { number: "03", title: "Persönlich beraten", text: "Ein Experte meldet sich innerhalb von 72 Stunden für ein unverbindliches Gespräch." },
            ].map((step) => (
              <div key={step.number} className="bg-cream p-8 lg:p-12">
                <span className="font-serif text-5xl text-gold block mb-6">{step.number}</span>
                <h3 className="font-serif text-xl text-ink mb-3">{step.title}</h3>
                <p className="text-graphite leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
