"use client"

import { motion } from "framer-motion"

const whyAbels = [
  {
    title: "Persönliche Betreuung",
    text: "Wir begleiten Eigentümer persönlich und mit klarer Kommunikation durch alle Phasen des Verkaufs.",
  },
  {
    title: "Lokales Marktverständnis",
    text: "Frankfurt ist ein Markt mit sehr unterschiedlichen Mikrolagen. Genau diese Unterschiede fließen in unsere Einschätzung und Vermarktung ein.",
  },
  {
    title: "Hochwertige Präsentation",
    text: "Eine gute Immobilie verdient eine Darstellung, die ihrem Anspruch gerecht wird – sachlich, hochwertig und überzeugend.",
  },
  {
    title: "Diskretion",
    text: "Gerade im gehobenen Segment ist Diskretion häufig ein entscheidender Faktor. Wir berücksichtigen diesen Anspruch konsequent.",
  },
  {
    title: "Qualifizierte Käuferansprache",
    text: "Nicht maximale Reichweite ist immer das Ziel, sondern die richtige Zielgruppe mit echter Abschlusswahrscheinlichkeit.",
  },
  {
    title: "Strukturierter Verkaufsprozess",
    text: "Vom Erstgespräch bis zum Notartermin sorgen wir für klare Abläufe und eine professionelle Begleitung.",
  },
]

export function FrankfurtWhyAbelsSection() {
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
          <h2 className="font-serif text-4xl lg:text-5xl text-ink mb-8">
            Warum Eigentümer in Frankfurt mit Abels Immobilien arbeiten
          </h2>
          <p className="text-graphite leading-relaxed max-w-[720px]">
            Wir sind vor Ort. Der Verkauf einer Immobilie ist kein Standardprozess. Entscheidend ist, wie präzise Lage, Zielgruppe, Marktumfeld und Vermarktung zusammengeführt werden.
          </p>
        </motion.div>

        {/* Why-Abels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {whyAbels.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="bg-white border border-line/30 rounded-sm p-8 h-full hover:border-gold/40 hover:shadow-sm transition-all duration-300">
                <h3 className="font-serif text-2xl text-ink mb-4">{item.title}</h3>
                <p className="text-graphite text-sm leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
