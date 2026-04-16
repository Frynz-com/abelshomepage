"use client"

import { motion } from "framer-motion"

const processSteps = [
  {
    number: "01",
    title: "Erstgespräch",
    text: "Im ersten Gespräch klären wir Ausgangssituation, Immobilientyp, Ziele und Zeitrahmen.",
  },
  {
    number: "02",
    title: "Wertermittlung",
    text: "Anschließend erfolgt eine fundierte Einordnung des Objekts im aktuellen Frankfurter Marktumfeld.",
  },
  {
    number: "03",
    title: "Unterlagen und Vermarktungskonzept",
    text: "Wir strukturieren die relevanten Unterlagen und entwickeln ein zur Immobilie passendes Vermarktungskonzept.",
  },
  {
    number: "04",
    title: "Vermarktung",
    text: "Je nach Objekt erfolgt die Vermarktung offen oder diskret – immer mit passender Ansprache und hochwertiger Präsentation.",
  },
  {
    number: "05",
    title: "Besichtigungen und Verhandlungen",
    text: "Wir koordinieren Besichtigungen, qualifizieren Interessenten und begleiten Verhandlungen mit klarem Blick auf Ziel und Markt.",
  },
  {
    number: "06",
    title: "Notartermin und Übergabe",
    text: "Zum Abschluss begleiten wir den Prozess bis zur notariellen Beurkundung und sorgen für einen strukturierten Übergang.",
  },
]

export function FrankfurtProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="font-serif text-4xl lg:text-5xl text-ink mb-6">
            So läuft der Immobilienverkauf in Frankfurt ab
          </h2>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="bg-white border border-line/30 rounded-sm p-8 h-full hover:border-gold/40 hover:shadow-sm transition-all duration-300">
                <p className="text-gold text-4xl lg:text-5xl font-light mb-4 opacity-60">
                  {step.number}
                </p>
                <h3 className="font-serif text-2xl text-ink mb-4">{step.title}</h3>
                <p className="text-graphite text-sm leading-relaxed">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
