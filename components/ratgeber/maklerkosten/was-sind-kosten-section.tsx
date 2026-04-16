"use client"

import { motion } from "framer-motion"

const kostenpunkte = [
  {
    number: "01",
    title: "Provision",
    description: "Die eigentliche Vergütung für die Vermittlungsleistung. In Deutschland üblich: 3-3,57% vom Kaufpreis (je Seite). Bei Abels & Partner: 3,57% inkl. MwSt."
  },
  {
    number: "02",
    title: "Inklusivleistungen",
    description: "Professionelle Fotografie, Exposé-Erstellung, Vermarktung auf Portalen, Besichtigungsorganisation, Bonitätsprüfung der Käufer, Vertragsbegleitung."
  },
  {
    number: "03",
    title: "Keine versteckten Kosten",
    description: "Bei seriösen Maklern sind alle Leistungen im Provisionsmodell enthalten. Vorsicht bei Zusatzkosten für Fotos, Exposés oder Anzeigen — das ist nicht marktüblich."
  }
]

export function WasSindKostenSection() {
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
          <span className="text-gold text-sm tracking-[0.15em] uppercase mb-4 block">
            Grundlagen
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-snug mb-6">
            Was beinhalten Maklerkosten?
          </h2>
          <p className="text-graphite leading-relaxed">
            Die Maklerprovision ist eine erfolgsabhängige Vergütung. Das bedeutet: 
            Sie zahlen nur, wenn der Verkauf tatsächlich zustande kommt. Doch was 
            genau ist in dieser Provision enthalten?
          </p>
        </motion.div>

        {/* Three Points Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {kostenpunkte.map((punkt, index) => (
            <motion.div
              key={punkt.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <span className="text-gold/60 text-sm tracking-[0.1em] mb-4 block">
                {punkt.number}
              </span>
              <h3 className="font-serif text-xl lg:text-2xl text-ink mb-4">
                {punkt.title}
              </h3>
              <p className="text-graphite leading-relaxed">
                {punkt.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-bone border-l-2 border-gold"
        >
          <p className="text-graphite leading-relaxed">
            <strong className="text-ink">Gut zu wissen:</strong> Die Provision wird erst 
            nach notarieller Beurkundung des Kaufvertrags fällig — nicht bei 
            Vertragsabschluss mit dem Makler. So ist sichergestellt, dass Sie nur 
            bei erfolgreichem Verkauf zahlen.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
