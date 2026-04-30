"use client"

import { motion } from "framer-motion"

const reasons = [
  {
    title: "Lokale Marktkenntnis",
    description: "Wir kennen Hamburg: jede Lage, jedes Preissegment, jeden Käufertyp. Diese Expertise fließt in jede Bewertung und Vermarktung ein."
  },
  {
    title: "Inhabergeführt",
    description: "Bei uns sind Sie kein Aktenzeichen. Sie sprechen direkt mit erfahrenen Maklern, die persönlich Verantwortung übernehmen."
  },
  {
    title: "Qualifiziertes Käufernetzwerk",
    description: "Zugang zu vorgeprüften, solventen Kaufinteressenten — oft bevor eine Immobilie öffentlich inseriert wird."
  },
  {
    title: "Diskrete Vermarktung",
    description: "Off-Market-Verkäufe ohne Portalauftritt. Ihre Privatsphäre bleibt gewahrt, der Verkauf bleibt unter Kontrolle."
  },
  {
    title: "Realistische Preisfindung",
    description: "Keine überhöhten Schätzungen, um Aufträge zu gewinnen. Wir bewerten ehrlich und erzielen dennoch starke Preise."
  },
  {
    title: "Langjährige Erfahrung",
    description: "Seit 1999 inhabergeführt und an 7 Standorten in Deutschland aktiv. Solide Erfahrung statt leerer Versprechen."
  }
]

export function HamburgWhyAbelsSection() {
  return (
    <section className="py-24 lg:py-32 bg-bone">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            Warum Abels
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-ink leading-[1.1] max-w-[700px]">
            Was uns von anderen Maklern unterscheidet
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-xl text-ink mb-3">
                {item.title}
              </h3>
              <p className="text-graphite leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
