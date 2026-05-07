"use client"

import { motion } from "framer-motion"

const arguments_ = [
  {
    title: "Lokale Marktkenntnis",
    description: "25 Jahre Erfahrung in Düsseldorf. Wir kennen die Preisstrukturen, Käuferprofile und Besonderheiten jedes Stadtteils."
  },
  {
    title: "Qualifiziertes Käufernetzwerk",
    description: "Sorgfältig aufgebautes Netzwerk vorgemerkter, geprüfter Kaufinteressenten. Viele Objekte verkaufen wir, bevor sie öffentlich erscheinen."
  },
  {
    title: "Inhabergeführt & persönlich",
    description: "Kein anonymes Maklerbüro. Sie arbeiten direkt mit erfahrenen Immobilienexperten, die persönlich für Ihren Erfolg einstehen."
  },
  {
    title: "Transparente Kommunikation",
    description: "Regelmäßige Updates, ehrliche Einschätzungen, keine leeren Versprechen. Sie wissen immer, wo Ihr Verkauf steht."
  },
  {
    title: "Langjährige Erfahrung",
    description: "Seit 1995 inhabergeführt und an 7 Standorten in Deutschland aktiv. Solide Erfahrung statt leerer Versprechen."
  },
  {
    title: "Diskretion garantiert",
    description: "Off-Market-Verkauf, vertrauliche Behandlung, keine öffentlichen Exposés — wenn Sie es wünschen, bleibt Ihr Verkauf privat."
  }
]

export function DuesseldorfWhyAbelsSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            Warum Abels
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-ink leading-[1.1] mb-6 max-w-[700px]">
            Was uns von anderen Maklern unterscheidet
          </h2>
        </motion.div>

        {/* Arguments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {arguments_.map((arg, index) => (
            <motion.div
              key={arg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-xl text-ink mb-3">
                {arg.title}
              </h3>
              <p className="text-graphite text-sm leading-relaxed">
                {arg.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
