"use client"

import { motion } from "framer-motion"

const services = [
  { title: "Immobilienbewertung Grünwald", text: "Eine fundierte Wertermittlung ist die Grundlage jeder erfolgreichen Verkaufsstrategie. Wir betrachten Lage, Objektqualität, Grundstück, Zielgruppe und Marktumfeld, um eine realistische und marktorientierte Einordnung vorzunehmen." },
  { title: "Verkaufsstrategie und Positionierung", text: "Jede Immobilie braucht eine Vermarktung, die zu Lage, Segment und Käufergruppe passt. Deshalb entwickeln wir für jedes Objekt eine individuelle Strategie statt standardisierter Vermarktung." },
  { title: "Exposé und hochwertige Präsentation", text: "Die Präsentation entscheidet maßgeblich über Wahrnehmung und Nachfrage. Wir legen Wert auf eine hochwertige Darstellung, klare Kommunikation und ein professionelles Gesamtbild." },
  { title: "Diskrete Vermarktung", text: "Für ausgewählte Immobilien kann ein diskreter Vermarktungsansatz sinnvoll sein. In diesen Fällen erfolgt die Ansprache gezielt und kontrolliert statt breit gestreut." },
  { title: "Besichtigungen und Verhandlungen", text: "Besichtigungen und Preisverhandlungen sind sensible Phasen im Verkaufsprozess. Wir begleiten diese Schritte mit professioneller Vorbereitung und klarer Kommunikation." },
  { title: "Begleitung bis zum Notartermin", text: "Auch in der Abschlussphase sorgen wir für Struktur, Verlässlichkeit und einen reibungslosen Prozess bis zur notariellen Beurkundung und Übergabe." }
]

const whyAbels = [
  { title: "Persönliche Betreuung", text: "Wir begleiten Eigentümer persönlich und mit klarer Kommunikation durch alle Phasen des Verkaufs." },
  { title: "Lokales Marktverständnis", text: "Grünwald ist ein kleiner, exklusiver Markt mit sehr unterschiedlichen Mikrolagen und Käuferprofilen. Genau diese Unterschiede fließen in unsere Einschätzung und Vermarktung ein." },
  { title: "Hochwertige Präsentation", text: "Eine gute Immobilie verdient eine Darstellung, die ihrem Anspruch gerecht wird – sachlich, hochwertig und überzeugend." },
  { title: "Diskretion", text: "Gerade im gehobenen Segment ist Diskretion häufig ein entscheidender Faktor. Wir berücksichtigen diesen Anspruch konsequent." },
  { title: "Qualifizierte Käuferansprache", text: "Nicht maximale Reichweite ist immer das Ziel, sondern die richtige Zielgruppe mit echter Abschlusswahrscheinlichkeit." },
  { title: "Strukturierter Verkaufsprozess", text: "Vom Erstgespräch bis zum Notartermin sorgen wir für klare Abläufe und eine professionelle Begleitung." }
]

export function GruenwaldServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            Leistungen
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[1.08] mb-6">
            Unsere Leistungen für Eigentümer in Grünwald
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line/40 border border-line/40">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="bg-cream hover:bg-bone transition-colors duration-300 p-7 lg:p-9 group"
            >
              <span className="font-serif text-5xl lg:text-6xl text-gold/60 block mb-6 leading-none font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-lg text-ink mb-3 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-graphite/70 text-sm leading-relaxed">
                {service.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GruenwaldWhyAbelsSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            Differenzierung
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[1.08] mb-6 max-w-[800px]">
            Warum Eigentümer in Grünwald mit Abels Immobilien arbeiten
          </h2>
          <p className="text-graphite leading-relaxed max-w-[780px]">
            Wir sind bekannt und werden oft empfohlen. Der Verkauf einer Immobilie ist kein Standardprozess. Entscheidend ist, wie präzise Lage, Zielgruppe, Marktumfeld und Vermarktung zusammengeführt werden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {whyAbels.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-xl text-ink mb-4">
                {item.title}
              </h3>
              <p className="text-graphite leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
