"use client"

import { motion } from "framer-motion"

const whyArguments = [
  {
    title: "Persönliche Betreuung",
    description: "Wir begleiten Eigentümer persönlich und mit klarer Kommunikation durch alle Phasen des Verkaufs."
  },
  {
    title: "Lokales Marktverständnis",
    description: "München ist ein Markt mit sehr unterschiedlichen Mikrolagen. Genau diese Unterschiede fließen in unsere Einschätzung und Vermarktung ein."
  },
  {
    title: "Hochwertige Präsentation",
    description: "Eine gute Immobilie verdient eine Darstellung, die ihrem Anspruch gerecht wird – sachlich, hochwertig und überzeugend."
  },
  {
    title: "Diskretion",
    description: "Gerade im gehobenen Segment ist Diskretion häufig ein entscheidender Faktor. Wir berücksichtigen diesen Anspruch konsequent."
  },
  {
    title: "Qualifizierte Käuferansprache",
    description: "Nicht maximale Reichweite ist immer das Ziel, sondern die richtige Zielgruppe mit echter Abschlusswahrscheinlichkeit."
  },
  {
    title: "Strukturierter Verkaufsprozess",
    description: "Vom Erstgespräch bis zum Notartermin sorgen wir für klare Abläufe und eine professionelle Begleitung."
  }
]

export function MunichWhyAbelsSection() {
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
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-ink leading-[1.08] mb-8">
            Warum Eigentümer in München mit Abels Immobilien arbeiten
          </h2>
          <p className="text-lg text-graphite leading-relaxed max-w-[900px]">
            Wir sind bekannt und werden regelmäßig weiterempfohlen. Wir kennen den Immobilienmarkt genau und sind vor Ort.<br /><br />
            Mit klarer Strategie und präziser Positionierung erreichen wir die richtigen Käufer – und erzielen so den bestmöglichen Preis.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyArguments.map((arg, index) => (
            <motion.div
              key={arg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="bg-white border border-gold/10 p-8 hover:border-gold/40 hover:shadow-lg transition-all duration-500"
            >
              <h3 className="font-serif text-xl lg:text-2xl text-ink mb-4">
                {arg.title}
              </h3>
              <p className="text-base text-graphite leading-relaxed">
                {arg.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
