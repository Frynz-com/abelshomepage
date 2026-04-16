"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Erstgespräch",
    description: "Persönliches Kennenlernen, Analyse Ihrer Situation und Ziele. Kostenfrei und unverbindlich."
  },
  {
    number: "02",
    title: "Bewertung",
    description: "Professionelle Vor-Ort-Besichtigung mit marktgerechter, fundierter Wertermittlung."
  },
  {
    number: "03",
    title: "Strategie",
    description: "Individuelle Vermarktungsstrategie — diskret oder öffentlich, auf Ihre Bedürfnisse zugeschnitten."
  },
  {
    number: "04",
    title: "Präsentation",
    description: "Premium-Exposé, hochwertige Fotos und gezielte Ansprache qualifizierter Kaufinteressenten."
  },
  {
    number: "05",
    title: "Verhandlung",
    description: "Professionelle Preisverhandlung in Ihrem Interesse. Optimaler Verkaufspreis."
  },
  {
    number: "06",
    title: "Abschluss",
    description: "Notartermin, Vertragsabwicklung und Schlüsselübergabe. Wir bleiben an Ihrer Seite."
  }
]

export function HamburgProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
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
            Ihr Verkaufsprozess
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-ink leading-[1.1] max-w-[700px]">
            In sechs Schritten zum erfolgreichen Verkauf
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <span className="font-serif text-6xl lg:text-7xl text-gold/20 block mb-4">
                {step.number}
              </span>
              <h3 className="font-serif text-xl text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-graphite leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
