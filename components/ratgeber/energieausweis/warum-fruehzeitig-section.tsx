"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const reasons = [
  {
    number: "01",
    title: "Zeitpuffer einplanen",
    description: "Je nach Ausweisart und Verfugbarkeit von Energieberatern kann die Erstellung mehrere Wochen dauern. Wer fruhzeitig handelt, vermeidet Zeitdruck kurz vor der Vermarktung."
  },
  {
    number: "02",
    title: "Anzeigenpflicht erfullen",
    description: "Bereits in der ersten Immobilienanzeige mussen die Energiekennwerte angegeben werden. Ohne gultigen Ausweis konnen Sie Ihre Immobilie nicht rechtssicher inserieren."
  },
  {
    number: "03",
    title: "Besichtigungen vorbereiten",
    description: "Spatestens bei der ersten Besichtigung muss der Energieausweis vorgelegt werden konnen. Fehlende Unterlagen wirken unprofessionell und konnen Interessenten abschrecken."
  }
]

export function WarumFruehzeitigSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-gold text-sm tracking-[0.15em] uppercase mb-4 block">
              Unsere Empfehlung
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink mb-6 leading-tight">
              Warum Sie fruhzeitig handeln sollten
            </h2>
            <p className="text-xl text-graphite leading-relaxed mb-8">
              Wer den Energieausweis erst im letzten Moment beantragt, riskiert Verzogerungen im Verkaufsprozess.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-ink font-medium hover:text-gold transition-colors"
            >
              Wir unterstutzen Sie dabei
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

          {/* Right Column - Reasons */}
          <div className="lg:col-span-7 space-y-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <span className="text-gold text-sm tracking-[0.1em] shrink-0 pt-1">{reason.number}</span>
                <div>
                  <h3 className="font-serif text-xl text-ink mb-2">{reason.title}</h3>
                  <p className="text-graphite leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
