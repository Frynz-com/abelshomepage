"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const guides = [
  {
    slug: "immobilie-verkaufen",
    category: "Verkaufen",
    title: "Immobilie verkaufen: Der vollständige Leitfaden",
    excerpt: "Was Sie wissen müssen, bevor Sie Ihre Immobilie auf den Markt bringen — von der Bewertung bis zur Vertragsunterzeichnung.",
    readTime: "10 Min.",
  },
  {
    slug: "immobilienbewertung",
    category: "Bewertung",
    title: "Immobilienbewertung: Wie wird der Wert ermittelt?",
    excerpt: "Vergleichswert-, Sachwert- und Ertragswertverfahren erklärt — und warum der richtige Angebotspreis entscheidend ist.",
    readTime: "8 Min.",
  },
  {
    slug: "maklerkosten",
    category: "Kosten",
    title: "Maklerkosten: Was kostet ein Immobilienmakler?",
    excerpt: "Seit 2020 gilt die neue Maklerprovision. Wir erklären, wer was zahlt — und warum ein guter Makler die Kosten mehr als kompensiert.",
    readTime: "6 Min.",
  },
  {
    slug: "off-market-verkauf",
    category: "Off-Market",
    title: "Off-Market Immobilienverkauf: Diskret zum Erfolg",
    excerpt: "Warum viele hochwertige Immobilien nie öffentlich inseriert werden — und wie Off-Market-Transaktionen funktionieren.",
    readTime: "7 Min.",
  },
  {
    slug: "energieausweis",
    category: "Rechtliches",
    title: "Energieausweis beim Immobilienverkauf",
    excerpt: "Welche Pflichten Sie als Verkäufer haben, welche Arten es gibt und wie Sie einen Energieausweis schnell und korrekt erstellen lassen.",
    readTime: "5 Min.",
  },
  {
    slug: "notarkosten",
    category: "Kosten",
    title: "Notarkosten beim Immobilienverkauf",
    excerpt: "Eine transparente Übersicht der anfallenden Notargebühren — und wer für was aufkommt.",
    readTime: "5 Min.",
  },
]

const categories = ["Alle", "Verkaufen", "Bewertung", "Kosten", "Off-Market", "Rechtliches"]

export default function RatgeberPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 border-b border-line/50 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Wissen für Eigentümer</span>
            </div>
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-6">
                <h1 className="font-serif text-[clamp(2.6rem,5.5vw,5rem)] text-ink leading-[0.97] tracking-[-0.02em]">
                  Immobilien-<br />
                  <span className="text-graphite">Ratgeber.</span>
                </h1>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-[16px] text-graphite leading-[1.75]">
                  Fundiertes Wissen rund um Bewertung, Verkauf und rechtliche Grundlagen. Praxisnah formuliert, ohne Fachjargon — von Experten, die täglich im Markt aktiv sind.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line/50">
            {guides.map((guide, i) => (
              <motion.div
                key={guide.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/ratgeber/${guide.slug}`}
                  className="group flex flex-col h-full bg-cream hover:bg-bone transition-colors duration-300 p-8 lg:p-10"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-gold border border-gold/30 px-3 py-1.5">
                      {guide.category}
                    </span>
                    <span className="text-[11px] text-stone">{guide.readTime}</span>
                  </div>
                  <h2 className="font-serif text-[20px] lg:text-[22px] text-ink leading-[1.25] tracking-[-0.01em] mb-4 group-hover:text-gold transition-colors duration-300 flex-1">
                    {guide.title}
                  </h2>
                  <p className="text-[14px] text-graphite leading-[1.7] mb-8">
                    {guide.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-gold/70 group-hover:text-gold transition-colors">
                    <span>Zum Ratgeber</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-bone border-t border-line/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] text-ink leading-[1.08] tracking-[-0.01em] mb-4">
                Fragen, die kein Ratgeber beantwortet?
              </h2>
              <p className="text-[15px] text-graphite leading-[1.75]">
                Sprechen Sie direkt mit einem Experten. Wir analysieren Ihre Situation und geben Ihnen eine ehrliche, fundierte Einschätzung — unverbindlich und kostenlos.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-3">
              <Link
                href="/bewertung"
                className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-gold-soft transition-colors group"
              >
                Kostenlose Bewertung
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="tel:+492115591751"
                className="inline-flex items-center justify-center gap-2 border border-line text-ink px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-medium hover:border-gold/50 hover:text-gold transition-all duration-300"
              >
                +49 211 5591751
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
