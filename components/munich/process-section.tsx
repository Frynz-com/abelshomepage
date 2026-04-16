"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Erstgespräch",
    description: "Im ersten Gespräch klären wir Ausgangssituation, Immobilientyp, Ziele und Zeitrahmen."
  },
  {
    number: "02",
    title: "Wertermittlung",
    description: "Anschließend erfolgt eine fundierte Einordnung des Objekts im aktuellen Münchner Marktumfeld."
  },
  {
    number: "03",
    title: "Unterlagen und Vermarktungskonzept",
    description: "Wir strukturieren die relevanten Unterlagen und entwickeln ein zur Immobilie passendes Vermarktungskonzept."
  },
  {
    number: "04",
    title: "Vermarktung",
    description: "Je nach Objekt erfolgt die Vermarktung offen oder diskret – immer mit passender Ansprache und hochwertiger Präsentation."
  },
  {
    number: "05",
    title: "Besichtigungen und Verhandlungen",
    description: "Wir koordinieren Besichtigungen, qualifizieren Interessenten und begleiten Verhandlungen mit klarem Blick auf Ziel und Markt."
  },
  {
    number: "06",
    title: "Notartermin und Übergabe",
    description: "Zum Abschluss begleiten wir den Prozess bis zur notariellen Beurkundung und sorgen für einen strukturierten Übergang."
  }
]

export function MunichProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Divider */}
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-ink leading-[1.08]">
            So läuft der Immobilienverkauf in München ab
          </h2>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="bg-white border border-gold/10 p-8 hover:border-gold/40 hover:shadow-lg transition-all duration-500"
            >
              <span className="text-gold text-4xl font-serif mb-4 block">{step.number}</span>
              <h3 className="font-serif text-xl lg:text-2xl text-ink mb-4">
                {step.title}
              </h3>
              <p className="text-base text-graphite leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
