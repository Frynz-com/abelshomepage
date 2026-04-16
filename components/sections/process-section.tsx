"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Erstgespräch",
    description: "Persönliches Kennenlernen, Analyse Ihrer Situation und Ziele. Kostenfrei und unverbindlich — in Ihren eigenen vier Wänden oder bei uns.",
  },
  {
    number: "02",
    title: "Bewertung",
    description: "Professionelle Vor-Ort-Besichtigung mit marktgerechter, belastbarer Wertermittlung. Innerhalb 72 Stunden erhalten Sie unser fundiertes Ergebnis.",
  },
  {
    number: "03",
    title: "Strategie",
    description: "Individuelle Vermarktungsstrategie — diskret oder öffentlich, auf Ihre Ziele zugeschnitten. Wir empfehlen, was wirklich zu Ihrer Immobilie passt.",
  },
  {
    number: "04",
    title: "Präsentation",
    description: "Professionelle Architekturfotografie, hochwertige Exposés und gezielte Ansprache qualifizierter Kaufinteressenten aus unserem Netzwerk.",
  },
  {
    number: "05",
    title: "Verhandlung",
    description: "Erfahrene Preisverhandlung in Ihrem Interesse. Wir erzielen den optimalen Verkaufspreis und sichern faire, rechtssichere Konditionen.",
  },
  {
    number: "06",
    title: "Abschluss",
    description: "Notartermin, Kaufvertragsabwicklung und Schlüsselübergabe. Wir bleiben bis zum letzten Schritt an Ihrer Seite — ohne Überraschungen.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-28 lg:py-40 bg-bone border-t border-line/50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-24"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-gold">
                Ihr Verkaufsprozess
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] text-ink leading-[1.06] tracking-[-0.01em]">
              Sechs Schritte zum<br />erfolgreichen Verkauf
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-[15px] text-graphite leading-[1.7]">
              Wir begleiten Sie transparent durch jeden Schritt — von der ersten Begegnung bis zur Übergabe.
            </p>
          </div>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-line">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`p-8 lg:p-10 border-b border-line group hover:bg-cream transition-colors duration-300 ${
                // Right border for all except last in each row
                index % 3 !== 2 ? "lg:border-r" : ""
              } ${
                index % 2 !== 1 ? "md:border-r lg:border-r-0" : "md:border-r-0"
              } ${
                // Apply right border correctly for 3-col
                index === 0 || index === 1 || index === 3 || index === 4 ? "lg:border-r border-line" : "lg:border-r-0"
              }`}
            >
              {/* Number */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-serif text-[56px] lg:text-[64px] text-gold/25 leading-none tracking-[-0.02em] group-hover:text-gold/40 transition-colors duration-300">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-serif text-[22px] lg:text-[24px] text-ink mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-[14px] text-graphite leading-[1.7]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-[14px] text-stone">
            Bereit für den ersten Schritt? Das Erstgespräch ist kostenfrei und unverbindlich.
          </p>
          <Link
            href="/bewertung"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-ink font-semibold hover:text-gold transition-colors group shrink-0"
          >
            Jetzt Termin vereinbaren
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-gold" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
