"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const openPositions = [
  {
    title: "Immobilienberater (m/w/d)",
    location: "Düsseldorf",
    type: "Vollzeit",
    description: "Beratung und Vermittlung von Premium-Wohnimmobilien im Großraum Düsseldorf. Idealerweise erste Erfahrungen im Immobilienvertrieb.",
  },
  {
    title: "Junior Immobilienberater (m/w/d)",
    location: "München",
    type: "Vollzeit",
    description: "Einstieg in die Premium-Immobilienvermittlung. Intensive Einarbeitung und Coaching durch erfahrene Berater.",
  },
  {
    title: "Marketing & Content Manager (m/w/d)",
    location: "Düsseldorf",
    type: "Vollzeit / Teilzeit",
    description: "Verantwortung für digitale Kommunikation, Content-Strategie und Markenauftritt. Erfahrung im Luxury- oder Immobilienbereich von Vorteil.",
  },
  {
    title: "Werkstudent Immobilien (m/w/d)",
    location: "Düsseldorf oder Remote",
    type: "Werkstudent",
    description: "Unterstützung des Beratungsteams in Recherche, Objektaufbereitung und Kundenkommunikation. Für Studierende der Wirtschafts- oder Rechtswissenschaften.",
  },
]

const benefits = [
  { title: "Attraktive Vergütung", text: "Fixgehalt plus leistungsorientierte Provision — transparent und fair." },
  { title: "Exklusives Portfolio", text: "Arbeit mit außergewöhnlichen Immobilien in den besten Lagen Deutschlands." },
  { title: "Weiterbildung", text: "Regelmäßige Schulungen, Zertifizierungen und Zugang zu Branchennetzwerken." },
  { title: "Flache Hierarchien", text: "Direkte Kommunikation, schnelle Entscheidungen, echter Gestaltungsspielraum." },
  { title: "7 Standorte", text: "Flexibles Arbeiten zwischen unseren Büros in Düsseldorf, München, Hamburg und mehr." },
  { title: "Sinnvolle Arbeit", text: "Wir begleiten Menschen bei einer der bedeutendsten Entscheidungen ihres Lebens." },
]

export default function KarrierePage() {
  return (
    <>
      <Header />
      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="relative bg-bone pt-[120px] pb-24 lg:pb-32 border-b border-line/40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(180,145,80,0.07),transparent_60%)]" />
          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-gold text-[11px] uppercase tracking-[0.28em] mb-6">Karriere</p>
              <h1 className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] text-ink leading-[1.02] mb-6 max-w-[760px]">
                Gestalten Sie die<br />
                <span className="text-ink/60">Zukunft des Premium-Marktes.</span>
              </h1>
              <p className="text-graphite text-[16px] lg:text-[17px] leading-relaxed max-w-[520px]">
                Bei Abels Immobilien arbeiten Sie an außergewöhnlichen Objekten, mit anspruchsvollen Kunden und in einem Team, das hohe Standards lebt.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-12">Was wir bieten</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
              {benefits.map((b) => (
                <div key={b.title}>
                  <div className="w-8 h-px bg-gold mb-5" />
                  <p className="text-[11px] uppercase tracking-[0.22em] text-gold mb-3">{b.title}</p>
                  <p className="text-graphite text-[14px] leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Open Positions */}
        <section className="border-t border-line/40 bg-bone">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-12">Offene Stellen</p>
              <div className="space-y-px bg-line/40">
                {openPositions.map((pos) => (
                  <div key={pos.title} className="bg-cream p-8 lg:p-10 group">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="text-[11px] uppercase tracking-[0.18em] text-stone bg-bone border border-line px-2.5 py-1">
                            {pos.type}
                          </span>
                          <span className="flex items-center gap-1 text-[11px] text-stone">
                            <MapPin className="w-3 h-3" />
                            {pos.location}
                          </span>
                        </div>
                        <h3 className="font-serif text-[1.4rem] text-ink mb-3">{pos.title}</h3>
                        <p className="text-graphite text-[14px] leading-relaxed max-w-[560px]">{pos.description}</p>
                      </div>
                      <a
                        href={`mailto:info@abels-immobilien.com?subject=${encodeURIComponent("Bewerbung: " + pos.title)}`}
                        className="shrink-0 inline-flex items-center gap-2 bg-ink text-cream px-7 py-3.5 text-[10px] uppercase tracking-[0.16em] hover:bg-graphite transition-colors self-start"
                      >
                        Bewerben
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Spontaneous Application */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-24 border-t border-line/40">
          <div className="max-w-[680px]">
            <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-6">Initiativbewerbung</p>
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] text-ink leading-tight mb-5">
              Keine passende Stelle dabei?
            </h2>
            <p className="text-graphite text-[15px] leading-relaxed mb-8">
              Wir sind immer auf der Suche nach außergewöhnlichen Menschen. Schicken Sie uns Ihre Initiativbewerbung — wir melden uns persönlich.
            </p>
            <a
              href="mailto:info@abels-immobilien.com?subject=Initiativbewerbung"
              className="inline-flex items-center gap-2.5 bg-ink text-cream px-10 py-4 text-[11px] uppercase tracking-[0.16em] hover:bg-graphite transition-colors"
            >
              Initiativbewerbung senden
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
