"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const neighborhoods = [
  {
    name: "Oberkassel",
    description: "Linksrheinische Villenlage mit Rheinblick, exklusiven Altbauten und urbanem Flair. Höchste Quadratmeterpreise Düsseldorfs.",
    highlight: "7.500–9.000 EUR/m²"
  },
  {
    name: "Kaiserswerth",
    description: "Historischer Stadtteil mit dörflichem Charakter, Kaiserpfalz und gehobener Wohnqualität. Beliebt bei Familien.",
    highlight: "6.500–8.000 EUR/m²"
  },
  {
    name: "Zooviertel",
    description: "Etablierte Wohnlage nahe des Zoos mit gepflegten Altbauten und ruhiger Atmosphäre. Stabile Nachfrage.",
    highlight: "5.800–7.200 EUR/m²"
  },
  {
    name: "Golzheim",
    description: "Grüner Stadtteil zwischen Rhein und Nordpark. Gute Anbindung, urban und familienfreundlich.",
    highlight: "5.400–6.800 EUR/m²"
  },
  {
    name: "Carlstadt",
    description: "Historische Altstadt mit Galerien, Boutiquen und kulturellem Angebot. Altbauwohnungen mit Charakter.",
    highlight: "6.800–8.500 EUR/m²"
  },
  {
    name: "Pempelfort",
    description: "Aufstrebender Stadtteil mit Nordstraße, junger Szene und hervorragender Infrastruktur. Stark wachsend.",
    highlight: "5.000–6.500 EUR/m²"
  },
  {
    name: "Niederkassel",
    description: "Ruhige Wohngegend am Rhein mit Einfamilienhäusern und direkter Nähe zu Oberkassel. Gehobenes Segment.",
    highlight: "6.200–7.800 EUR/m²"
  },
  {
    name: "Düsseltal",
    description: "Zentral gelegener Stadtteil mit guter Mischung aus Altbau und Neubau. Praktisch und beliebt.",
    highlight: "4.800–6.200 EUR/m²"
  }
]

export function DuesseldorfNeighborhoodsSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            Unsere Expertise
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-ink leading-[1.1] mb-6 max-w-[700px]">
            Gefragte Lagen in Düsseldorf
          </h2>
          <p className="text-graphite leading-relaxed max-w-[600px]">
            Von Oberkassel bis Düsseltal — wir kennen jeden Stadtteil, seine Käuferstruktur und aktuelle Preisentwicklungen.
          </p>
        </motion.div>

        {/* Neighborhoods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {neighborhoods.map((hood, index) => (
            <motion.div
              key={hood.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group p-6 border border-line hover:border-gold/40 transition-all duration-300"
            >
              <h3 className="font-serif text-xl text-ink mb-3 group-hover:text-gold transition-colors">
                {hood.name}
              </h3>
              <p className="text-graphite text-sm leading-relaxed mb-4">
                {hood.description}
              </p>
              <p className="text-gold text-sm font-medium">
                {hood.highlight}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/bewertung"
            className="inline-flex items-center gap-2 text-ink text-sm font-medium hover:text-gold transition-colors"
          >
            Ihre Lage bewerten lassen
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
