"use client"

import { motion } from "framer-motion"

const services = [
  {
    number: "01",
    title: "Immobilienbewertung Frankfurt",
    text: "Eine fundierte Wertermittlung ist die Grundlage jeder erfolgreichen Verkaufsstrategie. Wir betrachten Lage, Objektqualität, Zielgruppe und Marktumfeld, um eine realistische und marktorientierte Einordnung vorzunehmen.",
  },
  {
    number: "02",
    title: "Verkaufsstrategie und Positionierung",
    text: "Jede Immobilie braucht eine Vermarktung, die zu Lage, Segment und Käufergruppe passt. Deshalb entwickeln wir für jedes Objekt eine individuelle Strategie statt standardisierter Vermarktung.",
  },
  {
    number: "03",
    title: "Exposé und hochwertige Präsentation",
    text: "Die Präsentation entscheidet maßgeblich über Wahrnehmung und Nachfrage. Wir legen Wert auf eine hochwertige Darstellung, klare Kommunikation und ein professionelles Gesamtbild.",
  },
  {
    number: "04",
    title: "Diskrete Vermarktung",
    text: "Für ausgewählte Immobilien kann ein diskreter Vermarktungsansatz sinnvoll sein. In diesen Fällen erfolgt die Ansprache gezielt und kontrolliert statt breit gestreut.",
  },
  {
    number: "05",
    title: "Interessentenprüfung",
    text: "Nicht jede Anfrage ist automatisch relevant. Wir achten auf eine qualifizierte Vorauswahl und strukturierte Kommunikation mit passenden Interessenten.",
  },
  {
    number: "06",
    title: "Besichtigungen und Verhandlungen",
    text: "Besichtigungen und Preisverhandlungen sind sensible Phasen im Verkaufsprozess. Wir begleiten diese Schritte mit professioneller Vorbereitung und klarer Kommunikation.",
  },
  {
    number: "07",
    title: "Begleitung bis zum Notartermin",
    text: "Auch in der Abschlussphase sorgen wir für Struktur, Verlässlichkeit und einen reibungslosen Prozess bis zur notariellen Beurkundung und Übergabe.",
  },
]

export function FrankfurtServicesSection() {
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
            Unsere Leistungen für Eigentümer in Frankfurt
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="bg-white border border-line/30 rounded-sm p-8 h-full hover:border-gold/40 hover:shadow-sm transition-all duration-300">
                <p className="text-gold text-sm tracking-widest mb-4 font-light">{service.number}</p>
                <h3 className="font-serif text-2xl text-ink mb-4">{service.title}</h3>
                <p className="text-graphite text-sm leading-relaxed">{service.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
