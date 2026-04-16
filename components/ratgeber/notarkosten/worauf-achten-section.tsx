"use client"

import { motion } from "framer-motion"

const tipps = [
  {
    number: "01",
    title: "Vertragsentwurf grundlich prufen",
    description: "Nehmen Sie sich Zeit, den Vertragsentwurf vor dem Termin zu lesen. Notieren Sie Fragen und klaren Sie Unklarheiten vorab mit dem Notar oder Ihrem Makler."
  },
  {
    number: "02",
    title: "Alle Unterlagen bereithalten",
    description: "Stellen Sie sicher, dass Grundbuchauszug, Energieausweis, Flurkarte und alle relevanten Dokumente vollstandig vorliegen. Das beschleunigt den Prozess erheblich."
  },
  {
    number: "03",
    title: "Fristen beachten",
    description: "Der Notar ist verpflichtet, den Vertragsentwurf mindestens zwei Wochen vor dem Termin zu ubersenden. Nutzen Sie diese Zeit zur grundlichen Prufung."
  },
  {
    number: "04",
    title: "Offene Fragen klaren",
    description: "Beim Notartermin haben Sie das Recht, alle Fragen zu stellen. Der Notar ist zur Neutralitat verpflichtet und muss beide Seiten gleichermassen beraten."
  }
]

export function NotarkostenWoraufAchtenSection() {
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
            Praxis-Tipps
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-tight mb-6">
            Worauf sollten Sie beim Notartermin achten?
          </h2>
          <p className="text-lg text-graphite leading-relaxed">
            Ein gut vorbereiteter Notartermin spart Zeit und verhindert 
            Verzögerungen. Diese Punkte helfen Ihnen, den Termin 
            optimal vorzubereiten.
          </p>
        </motion.div>

        {/* Tipps Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {tipps.map((tipp, index) => (
            <motion.div
              key={tipp.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <span className="text-gold/40 font-serif text-4xl leading-none">{tipp.number}</span>
              <div>
                <h3 className="font-serif text-xl text-ink mb-3">{tipp.title}</h3>
                <p className="text-graphite leading-relaxed">{tipp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
