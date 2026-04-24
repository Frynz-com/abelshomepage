"use client"

import { motion } from "framer-motion"

const reasons = [
  {
    number: "01",
    title: "Rechtssicherheit fur beide Parteien",
    description: "Der Notar pruft die Identitat der Vertragsparteien, klart uber rechtliche Konsequenzen auf und stellt sicher, dass beide Seiten den Vertrag verstehen. Er ist zur Neutralitat verpflichtet."
  },
  {
    number: "02",
    title: "Schutz vor ubereilten Entscheidungen",
    description: "Durch die Pflicht zur notariellen Beurkundung werden Immobilienkaufe nicht leichtfertig abgeschlossen. Der formelle Rahmen gibt beiden Seiten Zeit, die Tragweite der Entscheidung zu erfassen."
  },
  {
    number: "03",
    title: "Rechtswirksame Eigentumsübertragung",
    description: "Nur durch die notarielle Beurkundung und anschliessende Eintragung ins Grundbuch wird der Eigentumswechsel rechtswirksam. Der Notar koordiniert den gesamten Ablauf bis zur Umschreibung."
  }
]

export function NotarkostenWarumNotarSection() {
  return (
    <section className="py-24 lg:py-32 bg-bone border-t border-line/40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-gold text-sm tracking-[0.15em] uppercase mb-6 block">
              Hintergrund
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-tight mb-6">
              Warum braucht man uberhaupt einen Notar?
            </h2>
            <p className="text-graphite leading-relaxed">
              In Deutschland ist die notarielle Beurkundung bei
              Immobilienverkaufen gesetzlich vorgeschrieben. Das mag
              zunachst wie ein burokratischer Aufwand erscheinen -
              dient aber dem Schutz aller Beteiligten.
            </p>
          </motion.div>

          {/* Right Column - Reasons */}
          <div className="lg:col-span-7 space-y-10">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <span className="text-gold/60 font-serif text-2xl">{reason.number}</span>
                <div>
                  <h3 className="font-serif text-xl text-ink mb-3">{reason.title}</h3>
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
