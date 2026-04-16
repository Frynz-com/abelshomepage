"use client"

import { motion } from "framer-motion"

const contents = [
  {
    number: "01",
    title: "Energiekennwerte",
    description: "Der primare Energiebedarf bzw. -verbrauch in kWh pro Quadratmeter und Jahr sowie die daraus resultierende Effizienzklasse (A+ bis H) auf der bekannten Farbskala."
  },
  {
    number: "02",
    title: "Gebaude-Informationen",
    description: "Baujahr, Gebaude- und Nutzflache, Anzahl der Wohneinheiten, Art der Heizung und verwendete Energietrager (Gas, Ol, Fernwarme, Strom etc.)."
  },
  {
    number: "03",
    title: "Modernisierungsempfehlungen",
    description: "Vor allem beim Bedarfsausweis: konkrete Vorschlage zur energetischen Verbesserung des Gebaudes mit Einschatzung der Wirtschaftlichkeit."
  }
]

export function WasEnthaltenSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="text-gold text-sm tracking-[0.15em] uppercase mb-4 block">
            Inhalt
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-ink mb-6 leading-tight">
            Was steht im Energieausweis?
          </h2>
          <p className="text-xl text-graphite leading-relaxed">
            Der Energieausweis enthalt standardisierte Informationen, die Kaufern und Mietern einen schnellen Vergleich ermoglichen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {contents.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-t border-line pt-8"
            >
              <span className="text-gold text-sm tracking-[0.1em] mb-4 block">{item.number}</span>
              <h3 className="font-serif text-xl text-ink mb-3">{item.title}</h3>
              <p className="text-graphite leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-surface p-8 lg:p-10 flex flex-col lg:flex-row gap-6 lg:items-center"
        >
          <div className="flex-1">
            <h3 className="font-serif text-lg text-ink mb-2">Gultigkeit beachten</h3>
            <p className="text-graphite">
              Ein Energieausweis ist 10 Jahre ab Ausstellungsdatum gultig. Prufen Sie vor dem Verkauf, ob Ihr vorhandener Ausweis noch aktuell ist.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-block px-6 py-3 bg-gold/10 text-ink font-medium">
              10 Jahre Gultigkeit
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
