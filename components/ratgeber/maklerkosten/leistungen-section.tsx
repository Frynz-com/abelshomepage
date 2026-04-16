"use client"

import { motion } from "framer-motion"

const leistungen = [
  {
    number: "01",
    title: "Marktgerechte Bewertung",
    description: "Fundierte Wertermittlung auf Basis aktueller Marktdaten, vergleichbarer Verkäufe und lokaler Expertise. Keine Online-Schätzung, sondern echte Analyse."
  },
  {
    number: "02",
    title: "Professionelle Vermarktung",
    description: "Hochwertige Fotografie, 3D-Rundgänge, ansprechende Exposés, zielgerichtete Anzeigen auf relevanten Portalen und ggf. Social-Media-Marketing."
  },
  {
    number: "03",
    title: "Käuferqualifizierung",
    description: "Bonitätsprüfung, Finanzierungsbestätigung und Vorauswahl seriöser Interessenten. So vermeiden Sie Zeitverlust durch unqualifizierte Anfragen."
  },
  {
    number: "04",
    title: "Besichtigungsmanagement",
    description: "Organisation und Durchführung aller Besichtigungen. Professionelle Präsentation Ihrer Immobilie und kompetente Beantwortung aller Käuferfragen."
  },
  {
    number: "05",
    title: "Verhandlung & Vertragsbegleitung",
    description: "Preisverhandlung im Interesse des Verkäufers, Koordination mit Notar, Prüfung des Kaufvertragsentwurfs, Begleitung bis zur Schlüsselübergabe."
  }
]

export function LeistungenSection() {
  return (
    <section className="py-24 lg:py-32 bg-bone">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="text-gold text-sm tracking-[0.15em] uppercase mb-4 block">
            Leistungsumfang
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-snug mb-6">
            Was ein guter Makler leistet
          </h2>
          <p className="text-graphite leading-relaxed">
            Die Provision ist eine Investition in professionelle Dienstleistung. 
            Ein qualifizierter Makler bietet weit mehr als nur die Vermittlung — 
            er begleitet Sie durch den gesamten Verkaufsprozess.
          </p>
        </motion.div>

        {/* Leistungen Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line/30">
          {leistungen.map((leistung, index) => (
            <motion.div
              key={leistung.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-bone p-8 lg:p-10"
            >
              <span className="text-gold text-sm tracking-[0.1em] mb-4 block">
                {leistung.number}
              </span>
              <h3 className="font-serif text-xl text-ink mb-4">
                {leistung.title}
              </h3>
              <p className="text-graphite leading-relaxed text-sm">
                {leistung.description}
              </p>
            </motion.div>
          ))}
          
          {/* Empty cell for grid balance */}
          <div className="hidden lg:block bg-bone" />
        </div>
      </div>
    </section>
  )
}
