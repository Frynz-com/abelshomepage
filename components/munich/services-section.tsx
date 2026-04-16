"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    title: "Immobilienbewertung München",
    description: "Eine fundierte Wertermittlung ist die Grundlage jeder erfolgreichen Verkaufsstrategie. Wir betrachten Lage, Objektqualität, Zielgruppe und Marktumfeld, um eine realistische und marktorientierte Einordnung vorzunehmen."
  },
  {
    title: "Verkaufsstrategie und Positionierung",
    description: "Jede Immobilie braucht eine Vermarktung, die zu Lage, Segment und Käufergruppe passt. Deshalb entwickeln wir für jedes Objekt eine individuelle Strategie statt standardisierter Vermarktung."
  },
  {
    title: "Exposé und hochwertige Präsentation",
    description: "Die Präsentation entscheidet maßgeblich über Wahrnehmung und Nachfrage. Wir legen Wert auf eine hochwertige Darstellung, klare Kommunikation und ein professionelles Gesamtbild."
  },
  {
    title: "Diskrete Vermarktung",
    description: "Für ausgewählte Immobilien kann ein diskreter Vermarktungsansatz sinnvoll sein. In diesen Fällen erfolgt die Ansprache gezielt und kontrolliert statt breit gestreut."
  },
  {
    title: "Interessentenprüfung",
    description: "Nicht jede Anfrage ist automatisch relevant. Wir achten auf eine qualifizierte Vorauswahl und strukturierte Kommunikation mit passenden Interessenten."
  },
  {
    title: "Besichtigungen und Verhandlungen",
    description: "Besichtigungen und Preisverhandlungen sind sensible Phasen im Verkaufsprozess. Wir begleiten diese Schritte mit professioneller Vorbereitung und klarer Kommunikation."
  },
  {
    title: "Begleitung bis zum Notartermin",
    description: "Auch in der Abschlussphase sorgen wir für Struktur, Verlässlichkeit und einen reibungslosen Prozess bis zur notariellen Beurkundung und Übergabe."
  }
]

export function MunichServicesSection() {
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
            Unsere Leistungen für Eigentümer in München
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-gold/10 p-8 hover:border-gold/40 hover:shadow-lg transition-all duration-500"
            >
              <h3 className="font-serif text-xl lg:text-2xl text-ink mb-4">
                {service.title}
              </h3>
              <p className="text-base text-graphite leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
