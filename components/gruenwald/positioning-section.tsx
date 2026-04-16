"use client"

import { motion } from "framer-motion"

export function GruenwaldPositioningSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        <p className="text-gold text-xs uppercase tracking-[0.25em] mb-6">
          Ihr Ansprechpartner für den Immobilienverkauf
        </p>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[1.08] mb-8">
              Ihr Ansprechpartner für den Immobilienverkauf in Grünwald
            </h2>
            <p className="text-graphite leading-relaxed text-lg">
              Grünwald zählt zu den exklusivsten Wohnlagen im Großraum München. Entsprechend hoch sind die Erwartungen von Eigentümern an Diskretion, Marktkenntnis, Vermarktungsqualität und Verhandlungssicherheit. Abels Immobilien begleitet Verkäufe in Grünwald mit einem strukturierten, persönlichen und hochwertigen Ansatz – von der fundierten Wertermittlung bis zum Notartermin.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-graphite leading-relaxed text-lg">
              Ob hochwertige Eigentumswohnung, Familienhaus in bevorzugter Lage oder repräsentative Villa auf großzügigem Grundstück: Entscheidend ist eine Vermarktung, die zur Lage, zum Objekt und zur Zielgruppe passt. Genau darauf ist unser Ansatz ausgerichtet.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
