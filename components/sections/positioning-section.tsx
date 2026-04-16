"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const keyPoints = [
  {
    title: "Kein Massengeschäft",
    text: "Wir betreuen eine überschaubare Anzahl ausgewählter Objekte – mit voller Aufmerksamkeit für jedes einzelne Mandat.",
  },
  {
    title: "Echte Marktkenntnis",
    text: "Unsere Berater leben und arbeiten vor Ort. Sie kennen nicht nur Preise, sondern auch Käufergruppen, Mikro­lagen und verborgene Potenziale.",
  },
  {
    title: "Persönliche Betreuung",
    text: "Ein fester Ansprechpartner begleitet Sie von der ersten Bewertung bis zur Schlüsselübergabe – verlässlich und diskret.",
  },
]

export function PositioningSection() {
  return (
    <section className="py-28 lg:py-40 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-gold">
                Wer wir sind
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.8rem)] text-ink leading-[1.06] tracking-[-0.01em] mb-8">
              Persönlich.<br />
              Diskret.<br />
              Seit über<br />25 Jahren.
            </h2>

            <div className="w-12 h-px bg-gold/40 mb-8" />

            <div className="space-y-5 text-[15px] text-graphite leading-[1.75]">
              <p>
                Abels Immobilien ist kein Franchise, kein Konzern. Wir sind ein inhabergeführtes Maklerunternehmen mit Hauptsitz in Düsseldorf und persönlicher Verantwortung für jeden Verkauf.
              </p>
              <p>
                Seit 1999 vermitteln wir hochwertige Wohnimmobilien, Villen und Kapitalanlagen für Eigentümer, die Diskretion, Marktkenntnis und messbare Ergebnisse erwarten.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/ueber-uns"
                className="inline-flex items-center gap-2 text-[13px] text-ink font-medium hover:text-gold transition-colors group"
              >
                Mehr über uns erfahren
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-gold" />
              </Link>
            </div>
          </motion.div>

          {/* Vertical divider */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-px h-full bg-line/60" />
          </div>

          {/* Right column: Key points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="space-y-0">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-line py-8 last:border-b-0 group"
                >
                  <div className="flex gap-6 items-start">
                    <span className="text-[11px] font-medium text-gold/60 tracking-[0.12em] mt-1 shrink-0 w-8">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-[20px] lg:text-[22px] text-ink mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
                        {point.title}
                      </h3>
                      <p className="text-[14px] text-graphite leading-[1.7]">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
