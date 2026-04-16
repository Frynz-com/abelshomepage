"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"

const steps = [
  {
    number: "01",
    title: "Kostenlose Bewertung",
    text: "Wir analysieren Lage, Objektart, Zustand und aktuelle Marktdaten. Innerhalb von 72 Stunden erhalten Sie eine fundierte Einschätzung — kostenfrei und ohne Verpflichtung.",
  },
  {
    number: "02",
    title: "Strategische Positionierung",
    text: "Gemeinsam legen wir den optimalen Angebotspreis, die Vermarktungsstrategie und die Zielgruppe fest. Auf Wunsch vollständig diskret — ohne öffentliche Ausschreibung.",
  },
  {
    number: "03",
    title: "Professionelle Präsentation",
    text: "Hochwertige Fotografie, präzise Objektbeschreibung und gezielte Ansprache vorgemerkter Kaufinteressenten. Ihre Immobilie verdient mehr als ein Standard-Exposé.",
  },
  {
    number: "04",
    title: "Qualifizierte Besichtigungen",
    text: "Wir führen ausschließlich mit verifizierten, solventen Interessenten Besichtigungen durch. Keine Massenbesichtigungen, keine Zeitverschwendung.",
  },
  {
    number: "05",
    title: "Verhandlung & Abschluss",
    text: "Wir verhandeln souverän in Ihrem Interesse und begleiten den gesamten Kaufvertragsprozess bis zur notariellen Beurkundung.",
  },
  {
    number: "06",
    title: "Übergabe & Nachbetreuung",
    text: "Auch nach dem Notartermin stehen wir für Fragen zur Verfügung. Ein erfolgreicher Verkauf endet nicht mit der Unterschrift.",
  },
]

const advantages = [
  "Keine Massenanbieter — inhabergeführt seit 1999",
  "Lokale Marktkenntnis an 7 Standorten",
  "Diskrete Vermarktung auf ausdrücklichen Wunsch",
  "Vorgemerkter Käuferpool für Off-Market-Abschlüsse",
  "IHK-zertifiziert, §34c GewO",
  "Persönlicher Ansprechpartner von Anfang bis Ende",
]

export default function VerkaufenPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />

      {/* Hero */}
      <section className="relative bg-ink text-cream overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-interior.jpg"
            alt="Immobilie verkaufen mit Abels Immobilien"
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/70" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 pt-44 pb-28 lg:pt-52 lg:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Immobilie verkaufen</span>
            </div>
            <h1 className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] text-cream leading-[0.96] tracking-[-0.02em] max-w-[780px] mb-8">
              Verkaufen Sie Ihre<br />
              <span className="text-cream/55">Immobilie mit Plan.</span>
            </h1>
            <p className="text-[17px] text-cream/60 leading-[1.75] max-w-[520px] mb-10">
              Ein Immobilienverkauf ist eine der bedeutendsten Entscheidungen Ihres Lebens. Wir begleiten Sie dabei — strukturiert, diskret und mit dem Anspruch, das bestmögliche Ergebnis für Sie zu erzielen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bewertung"
                className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-gold-soft transition-colors group"
              >
                Kostenlose Bewertung
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 border border-cream/20 text-cream px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-medium hover:bg-cream/8 hover:border-cream/35 transition-all duration-300"
              >
                Beratung anfragen
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 lg:py-36 bg-cream border-b border-line/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Der Verkaufsprozess</span>
            </div>
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] text-ink leading-[1.08] tracking-[-0.01em] lg:col-span-6">
                Sechs Schritte zum<br />optimalen Ergebnis.
              </h2>
              <p className="text-[15px] text-graphite leading-[1.75] lg:col-span-5 lg:col-start-8">
                Jeder Immobilienverkauf folgt einem klaren, bewährten Ablauf — und gleichzeitig ist jedes Objekt einzigartig. Wir kombinieren Struktur mit Flexibilität.
              </p>
            </div>
          </motion.div>

          <div className="border-t border-line/50">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-12 gap-8 py-10 border-b border-line/50 group hover:bg-bone/50 transition-colors duration-300 px-4 -mx-4"
              >
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold/70 lg:col-span-1 pt-1">{step.number}</span>
                <h3 className="font-serif text-[22px] lg:text-[24px] text-ink lg:col-span-3 group-hover:text-gold transition-colors duration-300 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[15px] text-graphite leading-[1.75] lg:col-span-7">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile / Why Abels */}
      <section className="py-24 lg:py-36 bg-bone border-b border-line/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-gold/60" />
                <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Warum Abels</span>
              </div>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-ink leading-[1.08] tracking-[-0.01em] mb-6">
                Was uns von anderen Maklern unterscheidet.
              </h2>
              <p className="text-[15px] text-graphite leading-[1.75] mb-10">
                Immobilien zu verkaufen beherrschen viele. Hochwertige Immobilien diskret, präzise und mit nachweislich guten Ergebnissen zu verkaufen — das erfordert Erfahrung, Netzwerk und den Willen, wirklich für den Mandanten da zu sein.
              </p>
              <Link
                href="/bewertung"
                className="inline-flex items-center gap-2 bg-gold text-ink px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-gold-soft transition-colors group"
              >
                Jetzt Wert ermitteln
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-6 lg:col-start-7"
            >
              <div className="space-y-0 border-t border-line/50">
                {advantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-4 py-5 border-b border-line/50">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span className="text-[15px] text-graphite leading-[1.6]">{adv}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-ink text-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-[clamp(2rem,4vw,3.6rem)] text-cream leading-[0.97] tracking-[-0.02em] mb-4">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="text-[16px] text-cream/55 leading-[1.75]">
                Vereinbaren Sie ein unverbindliches Erstgespräch. Wir analysieren Ihre Situation und erläutern, welche Strategie für Ihre Immobilie die richtige ist.
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
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 border border-cream/20 text-cream px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-medium hover:bg-cream/8 hover:border-cream/35 transition-all duration-300"
              >
                Persönliche Beratung anfragen
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}
