"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Erstgespräch",
    description: "Kostenfreies Kennenlernen. Wir besprechen Ihre Ziele, Wünsche und den Zeitrahmen für den Verkauf."
  },
  {
    number: "02",
    title: "Bewertung",
    description: "Vor-Ort-Besichtigung und professionelle Wertermittlung. Sie erhalten eine fundierte, marktgerechte Preiseinschätzung."
  },
  {
    number: "03",
    title: "Strategie",
    description: "Gemeinsam legen wir die Vermarktungsstrategie fest — diskret, öffentlich oder kombiniert. Ganz nach Ihren Wünschen."
  },
  {
    number: "04",
    title: "Vermarktung",
    description: "Professionelle Fotos, hochwertiges Exposé, gezielte Ansprache qualifizierter Kaufinteressenten. Wir präsentieren Ihre Immobilie optimal."
  },
  {
    number: "05",
    title: "Verhandlung",
    description: "Preisverhandlung in Ihrem Interesse. Wir erzielen den optimalen Preis und sichern faire Vertragskonditionen."
  },
  {
    number: "06",
    title: "Abschluss",
    description: "Notartermin, Vertragsabwicklung, Schlüsselübergabe. Wir begleiten Sie bis zum erfolgreichen Abschluss und darüber hinaus."
  }
]

export function DuesseldorfProcessSection() {
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
            Ihr Verkaufsprozess
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-ink leading-[1.1] mb-6 max-w-[700px]">
            In sechs Schritten zum erfolgreichen Verkauf
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="text-gold/30 font-serif text-6xl lg:text-7xl absolute -top-4 -left-2">
                {step.number}
              </span>
              <div className="pt-10">
                <h3 className="font-serif text-xl text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-graphite text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
