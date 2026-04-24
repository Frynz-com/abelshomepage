import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Immobilienrechner | Abels Immobilien",
  description: "Berechnen Sie den Wert Ihrer Immobilie, Finanzierungskosten und mehr mit unseren kostenlosen Immobilienrechnern.",
}

export default function RechnerPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-gold">
              Online-Tools
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1]">
              Immobilienrechner
            </h1>
            <p className="mt-6 text-lg text-stone leading-relaxed">
              Nutzen Sie unsere kostenlosen Rechner, um den Wert Ihrer Immobilie einzuschätzen, 
              Finanzierungsoptionen zu berechnen oder die Kaufnebenkosten zu ermitteln.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Embed */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="bg-cream border border-line">
            <iframe
              src="https://immorechnerabels.netlify.app"
              className="w-full h-[800px] lg:h-[900px] border-0"
              title="Abels Immobilienrechner"
              loading="lazy"
              allow="clipboard-write"
            />
          </div>
          
          {/* Info Box */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-cream border border-line">
              <span className="text-gold text-2xl font-serif">01</span>
              <h3 className="mt-4 font-serif text-xl text-ink">Wertermittlung</h3>
              <p className="mt-3 text-stone text-sm leading-relaxed">
                Erhalten Sie eine erste Einschätzung zum Marktwert Ihrer Immobilie basierend auf aktuellen Marktdaten.
              </p>
            </div>
            <div className="p-8 bg-cream border border-line">
              <span className="text-gold text-2xl font-serif">02</span>
              <h3 className="mt-4 font-serif text-xl text-ink">Finanzierung</h3>
              <p className="mt-3 text-stone text-sm leading-relaxed">
                Berechnen Sie monatliche Raten, Zinsen und die optimale Tilgung für Ihre Immobilienfinanzierung.
              </p>
            </div>
            <div className="p-8 bg-cream border border-line">
              <span className="text-gold text-2xl font-serif">03</span>
              <h3 className="mt-4 font-serif text-xl text-ink">Nebenkosten</h3>
              <p className="mt-3 text-stone text-sm leading-relaxed">
                Ermitteln Sie alle Kaufnebenkosten wie Grunderwerbsteuer, Notar- und Maklergebühren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-bone border-t border-line/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">
            Sie wünschen eine professionelle Bewertung?
          </h2>
          <p className="mt-4 text-graphite max-w-2xl mx-auto">
            Unsere Experten erstellen Ihnen eine fundierte Marktpreiseinschätzung,
            persönlich und kostenlos.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/bewertung"
              className="inline-block bg-gold text-ink px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold/90 transition-colors"
            >
              Kostenlose Bewertung anfordern
            </a>
            <a
              href="tel:+4921112345678"
              className="inline-block border border-line text-graphite px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-cream transition-colors"
            >
              0211 123 456 78
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
