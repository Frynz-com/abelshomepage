"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const neighborhoods = [
  {
    name: "Blankenese",
    slug: "blankenese",
    description: "Hamburgs exklusivste Adresse mit historischen Villen, verwunschenen Treppenwegen und Elbblick. Idealer Standort für anspruchsvolle Familien."
  },
  {
    name: "Harvestehude",
    slug: "harvestehude",
    description: "Gründerzeitliche Eleganz an der Außenalster. Großzügige Altbauwohnungen mit hohen Decken und stilvoller Architektur."
  },
  {
    name: "Rotherbaum",
    slug: "rotherbaum",
    description: "Kultiviertes Universitätsviertel mit internationalem Flair. Beliebte Lage für Akademiker, Juristen und Mediziner."
  },
  {
    name: "Eppendorf",
    slug: "eppendorf",
    description: "Charmantes Altbauviertel mit Boutiquen und Cafés. Hohe Lebensqualität für Familien und Berufstätige."
  },
  {
    name: "Winterhude",
    slug: "winterhude",
    description: "Grüne Oase am Stadtpark mit urbanem Lebensgefühl. Attraktiv für junge Familien und Naturliebhaber."
  },
  {
    name: "HafenCity",
    slug: "hafencity",
    description: "Europas größtes Stadtentwicklungsprojekt. Moderne Architektur und Waterfront-Living für kosmopolitische Käufer."
  },
  {
    name: "Othmarschen",
    slug: "othmarschen",
    description: "Villengebiet zwischen Elbe und Jenischpark. Traditionell und familienfreundlich mit exzellenter Infrastruktur."
  },
  {
    name: "Uhlenhorst",
    slug: "uhlenhorst",
    description: "Mondäne Wohnlage an der Außenalster. Wasser, Parks und kurze Wege in die City."
  }
]

export function HamburgNeighborhoodsSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16" />
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 border border-gold/25 bg-gold/5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-ink/80 font-medium">Aktuell verzeichnen wir eine starke Nachfrage</span>
          </div>
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            Unsere Lagen
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-ink leading-[1.1] max-w-[700px]">
            Hamburgs gefragteste Wohnlagen
          </h2>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-5 pt-5 border-t border-line/40">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold font-medium shrink-0">Wir suchen immer:</span>
            <span className="text-[12px] text-graphite">Eigentumswohnungen · Einfamilienhäuser · Villen & Penthouse · Mehrfamilienhäuser · Off-Market-Objekte</span>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {neighborhoods.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/standorte/hamburg/${item.slug}`}
                className="group block h-full border border-line bg-surface p-8 hover:border-gold/30 hover:shadow-lg transition-all duration-500"
              >
                <h3 className="font-serif text-xl text-ink mb-3 group-hover:text-gold transition-colors">
                  {item.name}
                </h3>
                <p className="text-graphite text-sm leading-relaxed">
                  {item.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
