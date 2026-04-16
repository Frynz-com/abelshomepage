"use client"

import { motion } from "framer-motion"

export function FrankfurtPositioningSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl lg:text-5xl text-ink mb-8">
              Ihr Ansprechpartner für den Immobilienverkauf in Frankfurt
            </h2>
            <p className="text-graphite leading-relaxed">
              Frankfurt zählt zu den dynamischsten Wohnimmobilienmärkten in Deutschland. Entsprechend hoch sind die Erwartungen von Eigentümern an Marktkenntnis, Vermarktungsqualität und Verhandlungssicherheit. Abels Immobilien begleitet Verkäufe in Frankfurt mit einem strukturierten, persönlichen und diskreten Ansatz – von der fundierten Wertermittlung bis zum Notartermin.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-graphite leading-relaxed mb-6">
              Ob hochwertige Wohnung im Westend, Familienhaus in Sachsenhausen, exklusive Immobilie im Nordend oder repräsentatives Objekt in einer bevorzugten Lage: Entscheidend ist eine Vermarktung, die zur Lage, zur Zielgruppe und zum Charakter der Immobilie passt. Genau darauf ist unser Ansatz ausgerichtet.
            </p>
            <p className="text-graphite leading-relaxed">
              Wir verstehen den Frankfurter Markt nicht als einfache Summe von Objekten, sondern als ein differenziertes Gefüge aus Mikrolagen, Käuferprofilen und Marktdynamiken. Diese Differenzierung bestimmt unsere Strategie.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
