"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { TrendingUp, TrendingDown } from "lucide-react"

const marketData = [
  {
    district: "Westend",
    price: "10.500–16.500",
    trend: "up",
    text: "Das Westend zählt zu den begehrtesten Wohnlagen Frankfurts. Repräsentative Adressen, klassische Bausubstanz und eine starke Nachfrage prägen das Marktumfeld.",
  },
  {
    district: "Sachsenhausen",
    price: "7.500–11.500",
    trend: "stable",
    text: "Sachsenhausen verbindet urbane Lage, gewachsene Nachbarschaften und eine hohe Wohnqualität. Besonders hochwertige Wohnungen und Häuser stoßen hier auf konstantes Interesse.",
  },
  {
    district: "Nordend",
    price: "8.000–12.500",
    trend: "up",
    text: "Das Nordend gehört zu den gefragtesten Wohnlagen Frankfurts. Altbaucharme, zentrale Lage und ein qualitätsorientiertes Käuferprofil sorgen für ein stabiles Preisniveau.",
  },
  {
    district: "Dichterviertel",
    price: "9.500–14.500",
    trend: "up",
    text: "Das Dichterviertel steht für ruhige, hochwertige Wohnlagen mit starker Marktstellung. Vor allem repräsentative Wohnungen und stilvolle Bestandsimmobilien profitieren hier von hoher Nachfrage.",
  },
  {
    district: "Holzhausenviertel",
    price: "9.000–13.500",
    trend: "stable",
    text: "Das Holzhausenviertel verbindet zentrale Lage, klassische Architektur und ein gehobenes Wohnumfeld. Gut positionierte Wohnungen werden hier weiterhin sehr gut aufgenommen.",
  },
  {
    district: "Bornheim",
    price: "6.500–9.500",
    trend: "up",
    text: "Bornheim ist urban, lebendig und gefragt. Vor allem attraktive Eigentumswohnungen und hochwertige Bestandsobjekte erzielen hier weiterhin solide Preise.",
  },
]

function PriceCard({ data, index }: { data: (typeof marketData)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <div className="bg-white border border-line/30 rounded-sm p-8 lg:p-10 h-full hover:border-gold/40 hover:shadow-sm transition-all duration-300">
        <div className="flex items-start justify-between mb-6">
          <h3 className="font-serif text-2xl lg:text-3xl text-ink">{data.district}</h3>
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="opacity-70"
          >
            {data.trend === "up" ? (
              <TrendingUp className="w-5 h-5 text-gold" />
            ) : (
              <div className="w-5 h-5 text-graphite/40 font-light">—</div>
            )}
          </motion.div>
        </div>

        <div className="mb-6">
          <p className="text-stone text-xs uppercase tracking-wider mb-2">€/m²</p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl lg:text-5xl text-ink"
          >
            {data.price}
          </motion.p>
          <p className="text-graphite/60 text-sm mt-2">
            {data.trend === "up" ? "leicht bis stabil steigend" : "stabil"}
          </p>
        </div>

        <p className="text-graphite text-sm leading-relaxed">{data.text}</p>
      </div>
    </motion.div>
  )
}

export function FrankfurtMarketPricesSection() {
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
          <h2 className="font-serif text-4xl lg:text-5xl text-ink mb-8">
            Immobilienpreise Frankfurt — Stand Q1 2026
          </h2>
          <p className="text-graphite leading-relaxed max-w-[720px]">
            Der Frankfurter Immobilienmarkt ist kein einheitlicher Markt, sondern besteht aus sehr unterschiedlichen Mikrolagen mit jeweils eigener Dynamik. Eine präzise Einschätzung des erzielbaren Verkaufspreises erfordert deshalb immer die Kombination aus Lage, Objektart, Zustand, Zuschnitt und Zielgruppe. Die folgenden Werte dienen als orientierende Markteinordnung für ausgewählte Frankfurter Lagen.
          </p>
        </motion.div>

        {/* Market Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 lg:mb-20">
          {marketData.map((data, idx) => (
            <PriceCard key={data.district} data={data} index={idx} />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-stone/5 border border-line/20 rounded-sm p-8 mb-12"
        >
          <p className="text-graphite/70 text-sm leading-relaxed">
            Die genannten Werte dienen der groben Orientierung und ersetzen keine individuelle Wertermittlung. Der tatsächlich erzielbare Marktpreis hängt immer von Lage, Zustand, Ausstattung, Objektart und aktueller Nachfrage ab.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/bewertung"
            className="inline-flex items-center px-8 py-4 bg-ink text-cream font-medium hover:bg-graphite transition-colors"
          >
            Jetzt Immobilienwert in Frankfurt einschätzen lassen
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
