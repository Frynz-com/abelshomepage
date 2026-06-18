import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LegalFormNotice } from "@/components/legal-form-notice"

export default function BewertungRedirect() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <section className="px-6 pt-40 pb-24">
        <div className="mx-auto max-w-2xl">
          <p className="mb-5 text-[11px] uppercase tracking-[0.24em] text-gold">
            Immobilienbewertung
          </p>
          <h1 className="mb-6 font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.02em]">
            Kostenlose Bewertung unverbindlich anfragen
          </h1>
          <p className="mb-8 text-[16px] leading-relaxed text-graphite">
            Sie öffnen im nächsten Schritt unser externes Bewertungstool. Die dortige Anfrage dient ausschließlich einer ersten Werteinschätzung und Kontaktaufnahme.
          </p>
          <LegalFormNotice variant="valuation" className="mb-8" />
          <a
            href="https://immowert.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink px-8 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-cream transition-colors hover:bg-graphite"
          >
            Bewertungstool öffnen
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <div className="mt-8">
            <Link href="/kontakt" className="text-[13px] text-stone underline underline-offset-4 hover:text-ink">
              Oder direkte Anfrage über das Kontaktformular senden
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
