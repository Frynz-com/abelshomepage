"use client"

import { motion } from "framer-motion"

const consequences = [
  {
    number: "01",
    title: "Bussgeld bis 10.000 Euro",
    description: "Das Gebaude-Energie-Gesetz sieht bei Verstossen Bussgelder von bis zu 10.000 Euro vor — etwa wenn der Energieausweis bei der Besichtigung nicht vorgelegt wird oder Pflichtangaben in Anzeigen fehlen."
  },
  {
    number: "02",
    title: "Rechtliche Unsicherheit",
    description: "Ohne gultigen Energieausweis kann der Kaufvertrag zwar wirksam geschlossen werden, allerdings besteht das Risiko von Nachforderungen oder Schadensersatzanspruchen des Kaufers."
  },
  {
    number: "03",
    title: "Vertrauensverlust",
    description: "Ein fehlender Energieausweis signalisiert mangelnde Vorbereitung und kann das Vertrauen potenzieller Kaufer beeintrachtigen — besonders bei hoherwertigen Immobilien ein vermeidbarer Makel."
  }
]

export function WennFehltSection() {
  return (
    <section className="py-24 lg:py-32 bg-ink text-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="text-gold text-sm tracking-[0.15em] uppercase mb-4 block">
            Konsequenzen
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl mb-6 leading-tight">
            Was passiert ohne gultigen Energieausweis?
          </h2>
          <p className="text-xl text-cream/80 leading-relaxed">
            Ein fehlender oder abgelaufener Energieausweis ist kein Kavaliersdelikt — die Konsequenzen konnen empfindlich sein.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {consequences.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-t border-cream/20 pt-8"
            >
              <span className="text-gold text-sm tracking-[0.1em] mb-4 block">{item.number}</span>
              <h3 className="font-serif text-xl mb-3">{item.title}</h3>
              <p className="text-cream/70 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
