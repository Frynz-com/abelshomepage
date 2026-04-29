"use client"

import { motion } from "framer-motion"

const propertyTypes = [
  {
    title: "Eigentumswohnungen",
    description: "Von der zentralen Stadtwohnung bis zur hochwertigen Altbauwohnung begleiten wir Eigentümer bei der strukturierten Vermarktung von Eigentumswohnungen in München."
  },
  {
    title: "Häuser",
    description: "Einfamilienhäuser und Stadthäuser erfordern eine andere Ansprache als klassische Wohnungsangebote. Gerade bei familienorientierten Zielgruppen ist eine präzise Positionierung entscheidend."
  },
  {
    title: "Villen und hochwertige Wohnimmobilien",
    description: "Im gehobenen Segment zählen Diskretion, Präsentationsqualität und passgenaue Käuferansprache besonders stark. Genau darauf ist unsere Vermarktung ausgerichtet."
  },
  {
    title: "Anlageimmobilien",
    description: "Auch bei Anlageobjekten kommt es auf Marktverständnis, Käuferprofil und eine realistische Einordnung der Renditeerwartung an."
  },
  {
    title: "Erbimmobilien",
    description: "Gerade bei geerbten Immobilien sind neben Marktpreis und Verkauf auch Abstimmung, Unterlagen und Entscheidungsstruktur wichtig. Wir begleiten diesen Prozess mit Klarheit und Ruhe."
  },
  {
    title: "Diskrete Off-Market-Verkäufe",
    description: "Nicht jede Immobilie soll öffentlich sichtbar vermarktet werden. Für ausgewählte Objekte bieten wir diskrete Vermarktungsansätze mit kontrollierter Käuferansprache."
  }
]

export function MunichPropertyTypesSection() {
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
            Was wir in München vermarkten
          </h2>
          <p className="text-lg text-graphite leading-relaxed max-w-[900px]">
            Nicht jede Immobilie braucht dieselbe Vermarktungsstrategie. Je nach Lage, Objektart, Zielgruppe und Diskretionsbedarf entwickeln wir einen passenden Verkaufsansatz.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="bg-white border border-gold/10 p-8 hover:border-gold/40 hover:shadow-lg transition-all duration-500"
            >
              <h3 className="font-serif text-xl lg:text-2xl text-ink mb-4">
                {type.title}
              </h3>
              <p className="text-base text-graphite leading-relaxed">
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
