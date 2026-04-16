"use client"

import { motion } from "framer-motion"

export function MunichPositioningSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Divider */}
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-ink leading-[1.08] max-w-[700px] mb-12">
            Ihr Ansprechpartner für den Immobilienverkauf in München
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-[900px]">
            {/* Para 1 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-graphite leading-relaxed"
            >
              München zählt seit Jahren zu den stärksten und sensibelsten Wohnimmobilienmärkten in Deutschland. Entsprechend hoch sind die Erwartungen von Eigentümern an Marktkenntnis, Vermarktungsqualität und Verhandlungssicherheit. Abels Immobilien begleitet Verkäufe in München mit einem strukturierten, persönlichen und diskreten Ansatz – von der fundierten Wertermittlung bis zum Notartermin.
            </motion.p>

            {/* Para 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-graphite leading-relaxed"
            >
              Ob Altbauwohnung in Schwabing, Familienhaus in Bogenhausen, Stadtwohnung in Maxvorstadt oder hochwertige Immobilie in Nymphenburg: Entscheidend ist eine Vermarktung, die zur Lage, zur Zielgruppe und zum Charakter der Immobilie passt. Genau darauf ist unser Ansatz ausgerichtet.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
