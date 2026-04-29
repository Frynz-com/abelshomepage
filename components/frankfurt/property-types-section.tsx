"use client"

import { motion } from "framer-motion"

const propertyTypes = [
  {
    title: "Eigentumswohnungen",
    text: "Von der zentralen Stadtwohnung bis zur hochwertigen Altbauwohnung begleiten wir Eigentümer bei der strukturierten Vermarktung von Eigentumswohnungen in Frankfurt.",
  },
  {
    title: "Häuser",
    text: "Einfamilienhäuser und Stadthäuser erfordern eine andere Ansprache als klassische Wohnungsangebote. Gerade bei familienorientierten Zielgruppen ist eine präzise Positionierung entscheidend.",
  },
  {
    title: "Villen und hochwertige Wohnimmobilien",
    text: "Im gehobenen Segment zählen Diskretion, Präsentationsqualität und passgenaue Käuferansprache besonders stark. Genau darauf ist unsere Vermarktung ausgerichtet.",
  },
  {
    title: "Anlageimmobilien",
    text: "Auch bei Anlageobjekten kommt es auf Marktverständnis, Käuferprofil und eine realistische Einordnung der Renditeerwartung an.",
  },
  {
    title: "Erbimmobilien",
    text: "Gerade bei geerbten Immobilien sind neben Marktpreis und Verkauf auch Abstimmung, Unterlagen und Entscheidungsstruktur wichtig. Wir begleiten diesen Prozess mit Klarheit und Ruhe.",
  },
  {
    title: "Diskrete Off-Market-Verkäufe",
    text: "Nicht jede Immobilie soll öffentlich sichtbar vermarktet werden. Für ausgewählte Objekte bieten wir diskrete Vermarktungsansätze mit kontrollierter Käuferansprache.",
  },
]

export function FrankfurtPropertyTypesSection() {
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
            Was wir in Frankfurt vermarkten
          </h2>
          <p className="text-graphite leading-relaxed max-w-[720px]">
            Nicht jede Immobilie braucht dieselbe Vermarktungsstrategie. Je nach Lage, Objektart, Zielgruppe und Diskretionsbedarf entwickeln wir einen passenden Verkaufsansatz.
          </p>
        </motion.div>

        {/* Property Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {propertyTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="bg-white border border-line/30 rounded-sm p-8 h-full hover:border-gold/40 hover:shadow-sm transition-all duration-300">
                <h3 className="font-serif text-2xl text-ink mb-4">{type.title}</h3>
                <p className="text-graphite text-sm leading-relaxed">{type.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
