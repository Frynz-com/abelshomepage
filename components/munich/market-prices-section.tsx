"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { TrendingUp, TrendingDown } from "lucide-react"

interface PriceCard {
  district: string
  price: string
  trend: "up" | "stable" | "down"
  description: string
}

const priceData: PriceCard[] = [
  {
    district: "Bogenhausen",
    price: "11.500–17.500 €/m²",
    trend: "up",
    description: "Bogenhausen zählt zu den etabliertesten und begehrtesten Wohnlagen Münchens. Großzügige Wohnungen, repräsentative Adressen und ein anspruchsvolles Käuferprofil prägen das Marktumfeld."
  },
  {
    district: "Schwabing",
    price: "10.500–16.000 €/m²",
    trend: "stable",
    description: "Schwabing verbindet urbane Lebensqualität, historische Substanz und anhaltend hohe Nachfrage. Besonders hochwertige Altbauwohnungen und gut positionierte Stadtwohnungen bleiben hier stark gefragt."
  },
  {
    district: "Nymphenburg",
    price: "11.000–17.000 €/m²",
    trend: "up",
    description: "Nymphenburg steht für klassische Wohnqualität, gewachsene Strukturen und ein sehr hochwertiges Umfeld. Vor allem Familienimmobilien und repräsentative Objekte erzielen hier hohe Aufmerksamkeit."
  },
  {
    district: "Maxvorstadt",
    price: "10.000–15.000 €/m²",
    trend: "stable",
    description: "Die Maxvorstadt gehört zu den gefragtesten innerstädtischen Lagen Münchens. Zentrale Lage, kulturelles Umfeld und begrenztes Angebot sorgen für ein konstant hohes Preisniveau."
  },
  {
    district: "Lehel",
    price: "12.000–18.500 €/m²",
    trend: "up",
    description: "Lehel zählt zu den exklusivsten Wohnlagen Münchens. Die Nähe zur Altstadt, hochwertige Bestandsobjekte und die besondere Seltenheit machen diesen Teilmarkt besonders wertstabil."
  },
  {
    district: "Harlaching",
    price: "9.500–14.500 €/m²",
    trend: "up",
    description: "Harlaching ist besonders bei Käufern gefragt, die grüne Lage, Ruhe und hochwertige Wohnqualität suchen. Familiengeeignete Häuser und größere Wohnungen profitieren hier von konstanter Nachfrage."
  }
]

function CountUpNumber({ target }: { target: number }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / 60
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setValue(target)
        clearInterval(timer)
      } else {
        setValue(Math.floor(start))
      }
    }, 30)
    return () => clearInterval(timer)
  }, [target])

  return <span>{value}</span>
}

export function MunichMarketPricesSection() {
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
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-ink leading-[1.08] mb-8">
            Immobilienpreise München — Stand Q1 2026
          </h2>
          <p className="text-lg text-graphite leading-relaxed max-w-[900px]">
            Der Münchner Immobilienmarkt ist kein einheitlicher Markt, sondern besteht aus sehr unterschiedlichen Mikrolagen mit jeweils eigenem Preisniveau und eigener Käuferdynamik. Eine präzise Einschätzung des erzielbaren Verkaufspreises erfordert deshalb immer die Kombination aus Lage, Objektart, Zustand, Zuschnitt und Zielgruppe. Die folgenden Werte dienen als orientierende Markteinordnung für ausgewählte Münchner Lagen.
          </p>
        </motion.div>

        {/* Price Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {priceData.map((card, index) => (
            <motion.div
              key={card.district}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group border border-gold/20 bg-white p-8 hover:border-gold/50 hover:shadow-lg transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-serif text-2xl text-ink mb-1">{card.district}</h3>
                  <span className="text-gold text-sm uppercase tracking-[0.1em]">München</span>
                </div>
                {card.trend === "up" && (
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-gold"
                  >
                    <TrendingUp className="w-5 h-5" />
                  </motion.div>
                )}
                {card.trend === "stable" && (
                  <div className="text-graphite/40 text-sm">→</div>
                )}
              </div>

              {/* Price */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.08 + 0.2 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <span className="text-4xl font-serif text-ink">{card.price}</span>
              </motion.div>

              {/* Description */}
              <p className="text-sm text-graphite leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-bone p-8 rounded-lg border border-gold/10 mb-12"
        >
          <p className="text-sm text-graphite/80 leading-relaxed">
            Alle Angaben sind ca.-Werte und dienen der groben Orientierung. Sie ersetzen keine individuelle Wertermittlung. Der tatsächlich erzielbare Marktpreis hängt immer von Lage, Zustand, Ausstattung, Objektart und aktueller Nachfrage ab.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="/bewertung"
            className="inline-flex items-center justify-center bg-ink text-cream px-10 py-5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-graphite transition-all duration-300"
          >
            Jetzt Immobilienwert in München einschätzen lassen
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
