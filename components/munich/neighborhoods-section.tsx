"use client"

import { motion } from "framer-motion"

const neighborhoods = [
  {
    name: "Bogenhausen",
    description: "Bogenhausen steht seit Jahren für eine der gefragtesten Wohnlagen Münchens. Großzügige Immobilien, repräsentative Adressen und ein hochwertiges Umfeld machen den Stadtteil besonders attraktiv für anspruchsvolle Käufer."
  },
  {
    name: "Schwabing",
    description: "Schwabing verbindet Urbanität, Kultur und dauerhafte Nachfrage auf engem Raum. Besonders hochwertige Altbauwohnungen, Stadtwohnungen und charmante Bestandsimmobilien stoßen hier auf ein qualitätsorientiertes Interessentenprofil."
  },
  {
    name: "Nymphenburg",
    description: "Nymphenburg verbindet klassische Münchner Wohnqualität mit ruhigem, gehobenem Umfeld. Vor allem Familienhäuser, hochwertige Wohnungen und repräsentative Immobilien sind hier besonders gefragt."
  },
  {
    name: "Maxvorstadt",
    description: "Die Maxvorstadt zählt zu den lebendigsten und wertstabilsten innerstädtischen Lagen Münchens. Zentrale Lage, begrenztes Angebot und ein starkes Umfeld sorgen hier für eine konstante Marktattraktivität."
  },
  {
    name: "Lehel",
    description: "Lehel gehört zu den exklusivsten und seltensten Wohnlagen der Stadt. Hochwertige Bestandsobjekte, zentrale Lage und ein diskretes, gehobenes Umfeld prägen den Charakter dieses Marktes."
  },
  {
    name: "Harlaching",
    description: "Harlaching steht für Ruhe, Grün und hochwertige Wohnqualität. Besonders Käufer mit langfristigem Anspruch und Familienfokus interessieren sich für diese Lage."
  },
  {
    name: "Altbogenhausen",
    description: "Altbogenhausen verbindet Prestige, klassische Architektur und exzellente Wohnqualität. Vor allem im gehobenen Segment bleibt diese Lage dauerhaft hochattraktiv."
  },
  {
    name: "Herzogpark",
    description: "Der Herzogpark zählt zu den diskretesten und hochwertigsten Wohnlagen Münchens. Exklusive Immobilien und eine besondere Lagequalität machen diesen Teilmarkt außergewöhnlich."
  }
]

export function MunichNeighborhoodsSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Divider */}
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

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
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-ink leading-[1.08] mb-8">
            Gefragte Wohnlagen in München
          </h2>
          <p className="text-lg text-graphite leading-relaxed max-w-[900px]">
            In München entscheidet die Mikrolage oft stärker über Marktansprache und Preisniveau als der Stadtteilname allein. Deshalb betrachten wir jede Immobilie im Zusammenhang mit ihrem genauen Umfeld, ihrer Zielgruppe und ihrer Positionierung im lokalen Markt.
          </p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-5 pt-5 border-t border-line/40">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold font-medium shrink-0">Wir suchen immer:</span>
            <span className="text-[12px] text-graphite">Eigentumswohnungen · Einfamilienhäuser · Villen & Penthouse · Mehrfamilienhäuser · Off-Market-Objekte</span>
          </div>
        </motion.div>

        {/* Neighborhoods Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {neighborhoods.map((neighborhood, index) => (
            <motion.div
              key={neighborhood.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="group bg-white border border-gold/10 p-10 hover:border-gold/40 hover:shadow-lg transition-all duration-500"
            >
              <h3 className="font-serif text-2xl lg:text-3xl text-ink mb-4 group-hover:text-gold transition-colors duration-300">
                {neighborhood.name}
              </h3>
              <p className="text-base text-graphite leading-relaxed">
                {neighborhood.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
