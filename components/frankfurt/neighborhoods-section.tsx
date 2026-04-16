"use client"

import { motion } from "framer-motion"

const neighborhoods = [
  {
    name: "Westend",
    text: "Das Westend steht seit Jahren für eine der begehrtesten Wohnlagen Frankfurts. Repräsentative Altbauten, zentrale Lage und ein hochwertiges Umfeld machen den Stadtteil besonders attraktiv für anspruchsvolle Käufer.",
  },
  {
    name: "Sachsenhausen",
    text: "Sachsenhausen verbindet Urbanität, Tradition und hohe Wohnqualität. Besonders hochwertige Wohnungen, Stadthäuser und gut positionierte Immobilien profitieren hier von einer starken Nachfrage.",
  },
  {
    name: "Nordend",
    text: "Das Nordend zählt zu den bevorzugten Lagen für Käufer, die zentrales Wohnen, Altbauqualität und ein lebendiges Umfeld verbinden möchten. Gut geschnittene Wohnungen und hochwertige Bestandsimmobilien sind hier besonders gefragt.",
  },
  {
    name: "Dichterviertel",
    text: "Das Dichterviertel gehört zu den hochwertigsten Wohnlagen Frankfurts. Ruhige Straßen, klassische Architektur und ein gehobenes Umfeld machen diese Lage besonders selektiv und wertstabil.",
  },
  {
    name: "Holzhausenviertel",
    text: "Das Holzhausenviertel steht für zentrale Lage, Qualität und gewachsene Wohnstrukturen. Vor allem anspruchsvolle Käufer mit Fokus auf Substanz und Lagequalität interessieren sich für diesen Markt.",
  },
  {
    name: "Bornheim",
    text: "Bornheim ist lebendig, vielseitig und im hochwertigen Segment zunehmend gefragt. Besonders attraktive Eigentumswohnungen und gepflegte Bestandsobjekte sprechen hier eine breite, aber qualitätsorientierte Zielgruppe an.",
  },
  {
    name: "Eschersheim",
    text: "Eschersheim verbindet Ruhe, Familienqualität und gute Erreichbarkeit. Vor allem Häuser und größere Wohnungen profitieren hier von konstanter Nachfrage.",
  },
  {
    name: "Bockenheim",
    text: "Bockenheim ist urban, dynamisch und in ausgewählten Mikrolagen besonders attraktiv. Gut positionierte Wohnungen und hochwertige Objekte werden hier weiterhin gut aufgenommen.",
  },
]

export function FrankfurtNeighborhoodsSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="font-serif text-4xl lg:text-5xl text-ink mb-6">
            Gefragte Wohnlagen in Frankfurt
          </h2>
          <p className="text-graphite leading-relaxed max-w-[720px]">
            In Frankfurt entscheidet die Mikrolage oft stärker über Marktansprache und Preisniveau als der Stadtteilname allein. Deshalb betrachten wir jede Immobilie im Zusammenhang mit ihrem genauen Umfeld, ihrer Zielgruppe und ihrer Positionierung im lokalen Markt.
          </p>
        </motion.div>

        {/* Neighborhoods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {neighborhoods.map((neighborhood, index) => (
            <motion.div
              key={neighborhood.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="bg-white border border-line/30 rounded-sm p-8 h-full hover:border-gold/40 hover:shadow-sm transition-all duration-300">
                <h3 className="font-serif text-2xl text-ink mb-4">{neighborhood.name}</h3>
                <p className="text-graphite text-sm leading-relaxed">{neighborhood.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
