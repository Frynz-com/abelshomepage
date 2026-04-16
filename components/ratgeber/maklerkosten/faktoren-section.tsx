"use client"

import { motion } from "framer-motion"

const faktoren = [
  {
    number: "01",
    title: "Region & Marktlage",
    description: "In Ballungsräumen wie München, Hamburg oder Düsseldorf sind die Provisionssätze oft standardisiert. In ländlichen Regionen kann es Abweichungen geben."
  },
  {
    number: "02",
    title: "Objektwert",
    description: "Bei hochpreisigen Immobilien (ab ca. 2 Mio. EUR) sind manchmal gestaffelte Provisionsmodelle oder reduzierte Sätze verhandelbar."
  },
  {
    number: "03",
    title: "Vermarktungsaufwand",
    description: "Objekte mit Besonderheiten (Denkmalschutz, ungewöhnliche Lagen, spezielle Zielgruppen) erfordern mehr Aufwand, was sich im Service widerspiegelt."
  },
  {
    number: "04",
    title: "Leistungsumfang",
    description: "Full-Service-Makler mit professioneller Fotografie, Home Staging, 3D-Rundgängen und intensiver Käuferbetreuung bieten mehr Wert als reine Vermittler."
  },
  {
    number: "05",
    title: "Exklusivität",
    description: "Ein Alleinauftrag ermöglicht dem Makler gezielte Investitionen in die Vermarktung. Ohne Exklusivität ist der Aufwand oft reduziert."
  }
]

export function FaktorenSection() {
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
            Einflussfaktoren
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-snug mb-6">
            Wovon hängt die Provisionshöhe ab?
          </h2>
          <p className="text-graphite leading-relaxed">
            Die Maklerprovision ist nicht gesetzlich festgelegt, sondern frei verhandelbar. 
            Dennoch haben sich in den meisten Regionen Marktstandards etabliert. Diese 
            Faktoren beeinflussen die konkrete Höhe:
          </p>
        </motion.div>

        {/* Faktoren Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {faktoren.map((faktor, index) => (
            <motion.div
              key={faktor.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group p-8 bg-bone hover:bg-surface transition-colors duration-300"
            >
              <span className="text-gold text-sm tracking-[0.1em] mb-4 block">
                {faktor.number}
              </span>
              <h3 className="font-serif text-xl text-ink mb-4 group-hover:text-gold transition-colors">
                {faktor.title}
              </h3>
              <p className="text-graphite leading-relaxed text-sm">
                {faktor.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tip Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-bone border-l-2 border-gold"
        >
          <p className="text-graphite leading-relaxed">
            <strong className="text-ink">Unser Rat:</strong> Achten Sie weniger auf 
            Provisionsrabatte als auf die tatsächliche Leistung. Ein Makler, der 
            durch professionelle Vermarktung einen höheren Verkaufspreis erzielt, 
            ist wirtschaftlich sinnvoller als ein günstiger Makler mit 
            durchschnittlichen Ergebnissen.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
