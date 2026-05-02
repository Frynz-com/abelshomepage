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
    <section className="py-28 lg:py-40 bg-bone">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-28"
        >
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gold/70" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-gold">
                Ihr Verkaufsprozess
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.6rem)] text-ink leading-[1.04] tracking-[-0.015em]">
              Sechs Schritte zum<br />erfolgreichen Verkauf
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-[15px] text-graphite leading-[1.8]">
              Transparent, strukturiert und persönlich begleitet — von der ersten Begegnung bis zur Schlüsselübergabe.
            </p>
          </div>
        </motion.div>

        {/* Steps — two-column editorial list */}
        <div className="grid lg:grid-cols-2 gap-0 border-t border-line/50">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              viewport={{ once: true }}
              className={`py-10 lg:py-12 border-b border-line/50 ${
                index % 2 === 0 ? "lg:pr-20 lg:border-r lg:border-line/50" : "lg:pl-20"
              }`}
            >
              <div className="flex gap-8 items-start">
                {/* Number */}
                <span className="font-serif text-[48px] lg:text-[56px] text-gold/55 leading-none tracking-[-0.02em] font-bold shrink-0 mt-[-4px]">
                  {step.number}
                </span>
                {/* Content */}
                <div className="pt-2">
                  <h3 className="font-serif text-[20px] lg:text-[22px] text-ink mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-graphite leading-[1.8]">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-[14px] text-stone leading-relaxed max-w-[480px]">
            Das Erstgespräch ist für Sie kostenfrei und unverbindlich.
            Wir nehmen uns die Zeit, die Ihre Immobilie verdient.
          </p>
          <Link
            href="/bewertung"
            className="inline-flex items-center gap-2.5 text-[10px] uppercase tracking-[0.22em] text-ink font-semibold hover:text-gold transition-colors duration-200 group shrink-0"
          >
            Jetzt Termin vereinbaren
            <ArrowRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
