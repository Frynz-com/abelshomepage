"use client"

import { motion } from "framer-motion"

const leistungen = [
  {
    title: "Vertragsentwurf und Beratung",
    description: "Der Notar erstellt den Kaufvertragsentwurf, pruft alle rechtlichen Aspekte und berat beide Parteien neutral uber die Vertragsbestandteile und deren Konsequenzen."
  },
  {
    title: "Beurkundung des Kaufvertrags",
    description: "Der Notar verliest den Vertrag, klart offene Fragen und beurkundet die Unterschriften. Erst dadurch wird der Vertrag rechtswirksam."
  },
  {
    title: "Abwicklung und Koordination",
    description: "Der Notar koordiniert alle Schritte: Einholung von Genehmigungen, Kommunikation mit Banken, Grundbuchamt und Finanzamt bis zur vollstandigen Abwicklung."
  },
  {
    title: "Eigentumsumschreibung",
    description: "Der Notar beantragt die Auflassungsvormerkung und spater die Eigentumsumschreibung im Grundbuch. Erst mit der Eintragung wird der Kaufer neuer Eigentumer."
  }
]

export function NotarkostenLeistungenSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Subtle Section Divider */}
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="text-gold text-sm tracking-[0.15em] uppercase block mb-4">
            Leistungsumfang
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-tight mb-6">
            Was macht der Notar eigentlich?
          </h2>
          <p className="text-lg text-graphite leading-relaxed">
            Die Notargebuhren decken ein umfassendes Leistungspaket ab - 
            von der ersten Beratung bis zur vollstandigen Abwicklung 
            des Immobilienverkaufs.
          </p>
        </motion.div>

        {/* Leistungen Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {leistungen.map((leistung, index) => (
            <motion.div
              key={leistung.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface p-8 lg:p-10"
            >
              <h3 className="font-serif text-xl text-ink mb-4">{leistung.title}</h3>
              <p className="text-graphite leading-relaxed">{leistung.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
