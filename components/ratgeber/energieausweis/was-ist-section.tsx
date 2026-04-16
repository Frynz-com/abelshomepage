"use client"

import { motion } from "framer-motion"

const points = [
  {
    number: "01",
    title: "Informationsdokument",
    description: "Der Energieausweis dokumentiert die energetische Qualitat eines Gebaudes und ermoglicht Interessenten einen Vergleich verschiedener Immobilien hinsichtlich ihrer Energieeffizienz."
  },
  {
    number: "02",
    title: "Gesetzliche Pflicht",
    description: "Bei Verkauf, Vermietung oder Verpachtung von Immobilien ist der Energieausweis seit 2014 verpflichtend. Er muss spatestens bei der ersten Besichtigung vorgelegt werden konnen."
  },
  {
    number: "03",
    title: "Standardisiertes Format",
    description: "Der Ausweis folgt einem bundesweit einheitlichen Format mit Farbskala von A+ (sehr effizient, grun) bis H (wenig effizient, rot) — vergleichbar mit Haushaltsgeraten."
  }
]

export function WasIstSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="text-gold text-sm tracking-[0.15em] uppercase mb-4 block">
            Grundlagen
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-ink mb-6 leading-tight">
            Was ist ein Energieausweis?
          </h2>
          <p className="text-xl text-graphite leading-relaxed">
            Ein amtliches Dokument, das die Energieeffizienz Ihrer Immobilie bewertet und fur potenzielle Kaufer oder Mieter transparent macht.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {points.map((point, index) => (
            <motion.div
              key={point.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <span className="text-gold text-sm tracking-[0.1em] mb-4 block">{point.number}</span>
              <h3 className="font-serif text-xl text-ink mb-3">{point.title}</h3>
              <p className="text-graphite leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
