"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Search, Shield, HandshakeIcon } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"

const services = [
  {
    number: "01",
    title: "Bedarfsanalyse",
    text: "Wir hören zuerst zu. Was suchen Sie? Welche Lage, welcher Objekttyp, welches Budget — und was soll die neue Immobilie in Ihrem Leben bedeuten? Erst danach suchen wir.",
  },
  {
    number: "02",
    title: "Zugang zum Off-Market-Markt",
    text: "Ein Großteil der hochwertigen Objekte wird nie öffentlich inseriert. Als registrierter Kaufinteressent erhalten Sie Zugang zu unserem vorgemerkten Portfolio — diskret und exklusiv.",
  },
  {
    number: "03",
    title: "Besichtigungen & Prüfung",
    text: "Wir begleiten jede Besichtigung und analysieren das Objekt kritisch: Lage, Bausubstanz, Erschließung, rechtliche Situation — alles, was Sie wissen müssen, bevor Sie eine Entscheidung treffen.",
  },
  {
    number: "04",
    title: "Verhandlung in Ihrem Interesse",
    text: "Als Ihr Vertreter verhandeln wir den Kaufpreis und die Konditionen — mit dem Ziel, das beste Ergebnis für Sie zu erzielen. Nicht für den Verkäufer.",
  },
  {
    number: "05",
    title: "Kaufvertragsbegleitung",
    text: "Vom Notartermin bis zur Schlüsselübergabe — wir begleiten Sie durch alle formalen Schritte und stehen für Fragen jederzeit zur Verfügung.",
  },
]

const standorte = [
  { city: "Düsseldorf", slug: "duesseldorf" },
  { city: "München", slug: "muenchen" },
  { city: "Hamburg", slug: "hamburg" },
  { city: "Frankfurt", slug: "frankfurt" },
  { city: "Stuttgart", slug: "stuttgart" },
  { city: "Essen", slug: "essen" },
  { city: "Grünwald", slug: "gruenwald" },
]

export default function KaufenPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line/40">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-zoom">
          <Image
            src="/images/wohnen.jpg"
            alt="Immobilie kaufen mit Abels Immobilien"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          </div>
          <div className="absolute inset-0 bg-ink/18" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/15 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 pt-44 pb-28 lg:pt-52 lg:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] text-white leading-[0.96] tracking-[-0.02em] max-w-[780px] mb-8">
              Die richtige Immobilie<br />
              <span className="text-white/60">verdient die richtige Begleitung.</span>
            </h1>
            <p className="text-[17px] text-white/65 leading-[1.75] max-w-[520px] mb-10">
              Als Käufer navigieren Sie durch einen komplexen Markt. Wir helfen Ihnen, die Immobilie zu finden, die nicht nur zu Ihrem Budget, sondern zu Ihrem Leben passt.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-gold-soft transition-colors group"
              >
                Suchanfrage stellen
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <span className="inline-flex items-center justify-center gap-2 border border-white/25 text-white/60 px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-medium cursor-default select-none">
                Vielfältiges Angebot
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
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
              <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Unsere Leistungen</span>
            </div>
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] text-ink leading-[1.08] tracking-[-0.01em] lg:col-span-6">
                Käuferbetreuung auf<br />höchstem Niveau.
              </h2>
              <p className="text-[15px] text-graphite leading-[1.75] lg:col-span-5 lg:col-start-8">
                Wir vertreten Ihre Interessen — nicht die des Verkäufers. Als Ihre Makler auf der Käuferseite bringen wir Marktkenntnis, Netzwerk und Verhandlungsstärke.
              </p>
            </div>
          </motion.div>

          <div className="border-t border-line/50">
            {services.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-12 gap-8 py-10 border-b border-line/50 group hover:bg-bone/50 transition-colors duration-300 px-4 -mx-4"
              >
                <span className="font-serif text-[42px] lg:text-[52px] text-gold font-bold leading-none lg:col-span-1 shrink-0">{s.number}</span>
                <h3 className="font-serif text-[22px] lg:text-[24px] text-ink lg:col-span-3 group-hover:text-gold transition-colors duration-300 leading-tight">
                  {s.title}
                </h3>
                <p className="text-[15px] text-graphite leading-[1.75] lg:col-span-7">
                  {s.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standorte grid */}
      <section className="py-24 lg:py-36 bg-bone border-b border-line/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Unsere Märkte</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-ink leading-[1.08] tracking-[-0.01em]">
              In diesen Städten<br />suchen wir für Sie.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-line/50">
            {standorte.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/standorte/${s.slug}`}
                  className="flex flex-col items-center justify-center py-10 bg-cream hover:bg-gold/5 transition-colors duration-300 group text-center"
                >
                  <span className="font-serif text-[18px] text-ink group-hover:text-gold transition-colors duration-300">
                    {s.city}
                  </span>
                  <div className="w-4 h-px bg-gold/0 group-hover:bg-gold/60 mt-3 transition-all duration-300 group-hover:w-8" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bone border-t border-line/40 py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-[clamp(2rem,4vw,3.6rem)] text-ink leading-[0.97] tracking-[-0.02em] mb-4">
                Sie suchen etwas Besonderes?
              </h2>
              <p className="text-[16px] text-graphite leading-[1.75]">
                Registrieren Sie sich als Kaufinteressent und erhalten Sie als Erstes Zugang zu neuen Objekten — auch vor der öffentlichen Vermarktung.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-gold-soft transition-colors group"
              >
                Kaufprofil anlegen
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <span className="inline-flex items-center justify-center gap-2 border border-line text-ink/40 px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-medium cursor-default select-none">
                Vielfältiges Angebot
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}
