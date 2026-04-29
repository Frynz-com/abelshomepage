"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const neighborhoods = [
  {
    title: "Zentrumsnahe Wohnlagen",
    text: "Zentrumsnahe Lagen in Grünwald verbinden gewachsene Infrastruktur mit hoher Wohnqualität. Besonders hochwertige Wohnungen und Häuser profitieren hier von kurzer Wegeführung und starker Nachfrage."
  },
  {
    title: "Ruhige Villenlagen",
    text: "Die ruhigen Villenlagen Grünwalds stehen für Diskretion, Großzügigkeit und ein sehr hochwertiges Wohnumfeld. Gerade repräsentative Immobilien entfalten hier ihre volle Marktwirkung."
  },
  {
    title: "Lagen mit großzügigen Grundstücken",
    text: "Grundstücke mit guter Ausrichtung, Privatsphäre und hochwertiger Nachbarschaft sind in Grünwald besonders gefragt. Diese Lagequalität wirkt sich häufig stark auf die Preispositionierung aus."
  },
  {
    title: "Familienorientierte Wohnbereiche",
    text: "Wohnbereiche mit ruhigem Umfeld, guter Erreichbarkeit und hohem Wohnwert sind für Familien besonders attraktiv. Häuser mit stimmiger Substanz und guter Lage stoßen hier auf anhaltendes Interesse."
  },
  {
    title: "Diskrete Premiumlagen",
    text: "Im gehobenen Segment gibt es in Grünwald Mikrolagen, in denen Diskretion und Seltenheit eine besonders große Rolle spielen. Hier ist eine gezielte und kontrollierte Vermarktung oft sinnvoller als breite Öffentlichkeit."
  }
]

const propertyTypes = [
  { title: "Eigentumswohnungen", text: "Von der hochwertigen Wohnung bis zum exklusiven Penthouse begleiten wir Eigentümer bei der strukturierten Vermarktung von Eigentumswohnungen in Grünwald." },
  { title: "Häuser", text: "Familienhäuser und hochwertige Einfamilienhäuser verlangen eine präzise Positionierung, die Lagequalität und Zielgruppe überzeugend zusammenführt." },
  { title: "Villen und repräsentative Anwesen", text: "Im gehobenen Segment zählen Diskretion, Präsentationsqualität und passgenaue Käuferansprache besonders stark. Genau darauf ist unsere Vermarktung ausgerichtet." },
  { title: "Grundstücke", text: "Bei Grundstücken spielen Lage, Potenzial, Zuschnitt und baurechtliche Einordnung eine zentrale Rolle. Eine hochwertige Vermarktung beginnt hier mit der richtigen strategischen Positionierung." },
  { title: "Erbimmobilien", text: "Gerade bei geerbten Immobilien sind neben Marktpreis und Verkauf auch Abstimmung, Unterlagen und Entscheidungsstruktur wichtig. Wir begleiten diesen Prozess mit Klarheit und Ruhe." },
  { title: "Diskrete Off-Market-Verkäufe", text: "Nicht jede Immobilie soll öffentlich sichtbar vermarktet werden. Für ausgewählte Objekte bieten wir diskrete Vermarktungsansätze mit kontrollierter Käuferansprache." }
]

export function GruenwaldNeighborhoodsSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 border border-gold/25 bg-gold/5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-ink/80 font-medium">Aktuell verzeichnen wir eine starke Nachfrage</span>
          </div>
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            Wohnlagen
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[1.08] mb-6">
            Gefragte Wohnlagen in Grünwald
          </h2>
          <p className="text-graphite leading-relaxed max-w-[780px]">
            In Grünwald entscheidet die genaue Lage oft noch stärker über Nachfrage und Preisniveau als in größeren Städten. Deshalb betrachten wir jede Immobilie im Zusammenhang mit ihrem direkten Umfeld, ihrer Grundstücksqualität und ihrer Positionierung im lokalen Markt.
          </p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-5 pt-5 border-t border-line/40">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold font-medium shrink-0">Wir suchen immer:</span>
            <span className="text-[12px] text-graphite">Eigentumswohnungen · Einfamilienhäuser · Villen & Penthouse · Mehrfamilienhäuser · Off-Market-Objekte</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {neighborhoods.map((neighborhood, index) => (
            <motion.div
              key={neighborhood.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-white border border-line/30 p-8 hover:border-gold/30 hover:shadow-md transition-all duration-500">
                <h3 className="font-serif text-lg text-ink mb-4">
                  {neighborhood.title}
                </h3>
                <p className="text-graphite text-sm leading-relaxed">
                  {neighborhood.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GruenwaldPropertyTypesSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            Objektarten
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[1.08] mb-6">
            Was wir in Grünwald vermarkten
          </h2>
          <p className="text-graphite leading-relaxed max-w-[780px]">
            Nicht jede Immobilie braucht dieselbe Vermarktungsstrategie. Je nach Lage, Objektart, Zielgruppe und Diskretionsbedarf entwickeln wir einen passenden Verkaufsansatz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="h-full">
                <h3 className="font-serif text-xl text-ink mb-4">
                  {type.title}
                </h3>
                <p className="text-graphite leading-relaxed">
                  {type.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
