"use client"

import { motion } from "framer-motion"

const punkte = [
  {
    number: "01",
    title: "Transparente Provisionsregelung",
    description: "Der Provisionssatz sollte klar im Maklervertrag stehen — inklusive MwSt. und Fälligkeit. Achten Sie darauf, dass keine versteckten Zusatzkosten vereinbart werden."
  },
  {
    number: "02",
    title: "Klarer Leistungskatalog",
    description: "Lassen Sie sich schriftlich bestätigen, welche Leistungen in der Provision enthalten sind: Fotografie, Exposé, Portale, Besichtigungen, Vertragsbegleitung."
  },
  {
    number: "03",
    title: "Lokale Marktexpertise",
    description: "Ein guter Makler kennt Ihren lokalen Markt — Preise, Käuferstruktur, Vermarktungszeiten. Fragen Sie nach Referenzen in Ihrer Region."
  },
  {
    number: "04",
    title: "Realistische Preiseinschätzung",
    description: "Vorsicht vor überhöhten Preisversprechen. Ein seriöser Makler nennt einen marktgerechten Preis — auch wenn er nicht der höchste ist."
  }
]

export function WoraufAchtenSection() {
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
            Checkliste
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-snug mb-6">
            Worauf Sie bei der Maklerwahl achten sollten
          </h2>
          <p className="text-graphite leading-relaxed">
            Nicht jeder Makler ist gleich. Diese vier Punkte helfen Ihnen, 
            einen seriösen Partner zu erkennen — und schwarze Schafe zu vermeiden.
          </p>
        </motion.div>

        {/* 4 Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {punkte.map((punkt, index) => (
            <motion.div
              key={punkt.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <span className="text-5xl lg:text-6xl font-serif text-gold/20 leading-none">
                {punkt.number}
              </span>
              <div>
                <h3 className="font-serif text-xl text-ink mb-3">
                  {punkt.title}
                </h3>
                <p className="text-graphite leading-relaxed">
                  {punkt.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warning Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-ink text-cream"
        >
          <h4 className="font-serif text-lg text-cream mb-4">Warnsignale erkennen</h4>
          <div className="grid md:grid-cols-2 gap-6 text-cream/80">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-gold">×</span>
                <span>Unrealistisch hohe Preisversprechen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">×</span>
                <span>Druck zur schnellen Vertragsunterschrift</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-gold">×</span>
                <span>Unklare Provisionsregelungen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">×</span>
                <span>Fehlende lokale Referenzen</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
