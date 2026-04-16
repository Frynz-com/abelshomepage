"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { TrendingUp, TrendingDown } from "lucide-react"

function CountUpNumber({ target }: { target: number }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      setValue(Math.floor((target / steps) * currentStep))
      if (currentStep >= steps) clearInterval(timer)
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target])

  return <span>{value.toLocaleString("de-DE")}</span>
}

interface MarketCard {
  segment: string
  priceMin: number
  priceMax: number
  trend: "up" | "stable" | "down"
  trendLabel: string
  description: string
}

const marketCards: MarketCard[] = [
  {
    segment: "Eigentumswohnungen in guten Lagen",
    priceMin: 10500,
    priceMax: 15500,
    trend: "stable",
    trendLabel: "stabil",
    description: "Hochwertige Eigentumswohnungen in Grünwald profitieren von einem begrenzten Angebot und einer konstant qualitätsorientierten Nachfrage."
  },
  {
    segment: "Familienhäuser",
    priceMin: 11500,
    priceMax: 17500,
    trend: "up",
    trendLabel: "stabil bis leicht steigend",
    description: "Familiengeeignete Häuser in Grünwald bleiben besonders gefragt, vor allem wenn Lage, Grundstück und Zustand ein stimmiges Gesamtbild ergeben."
  },
  {
    segment: "Villen und repräsentative Anwesen",
    priceMin: 14000,
    priceMax: 22000,
    trend: "up",
    trendLabel: "leicht steigend",
    description: "Im Villensegment spielen Diskretion, Grundstücksqualität und architektonischer Anspruch eine besonders große Rolle. Hochwertige Objekte stoßen hier auf selektive, aber starke Nachfrage."
  },
  {
    segment: "Grundstücke in Top-Lagen",
    priceMin: 4000,
    priceMax: 6500,
    trend: "stable",
    trendLabel: "stabil",
    description: "Bei Grundstücken in Grünwald ist neben der reinen Lage vor allem das Entwicklungspotenzial entscheidend. Das Angebot bleibt begrenzt und entsprechend gefragt."
  },
  {
    segment: "Diskrete Off-Market-Objekte",
    priceMin: 0,
    priceMax: 0,
    trend: "stable",
    trendLabel: "selektiver Markt",
    description: "Im diskreten Segment wird der Marktpreis oft nicht öffentlich sichtbar. Hier entscheiden Käuferprofil, Netzwerk und Verhandlungsstrategie besonders stark."
  }
]

export function GruenwaldMarketPricesSection() {
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
            Marktübersicht
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[1.08] mb-6">
            Immobilienpreise Grünwald — Stand Q1 2026
          </h2>
          <p className="text-graphite leading-relaxed max-w-[780px]">
            Der Immobilienmarkt in Grünwald ist klein, exklusiv und stark von Lagequalität, Grundstücksgrößen, Objektstandard und Diskretionsgrad geprägt. Eine präzise Einschätzung des erzielbaren Verkaufspreises erfordert deshalb immer die Kombination aus Lage, Objektart, Zustand, Zuschnitt, Grundstück und Zielgruppe.
          </p>
        </motion.div>

        {/* Market Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {marketCards.map((card, index) => (
            <motion.div
              key={card.segment}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white border border-line/30 p-8 hover:shadow-lg hover:border-line/50 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-serif text-sm lg:text-base text-ink leading-tight">
                    {card.segment}
                  </h3>
                  <motion.div
                    animate={{ y: card.trend === "up" ? [0, -4, 0] : [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {card.trend === "up" && (
                      <TrendingUp className="w-5 h-5 text-gold/70" />
                    )}
                    {card.trend === "stable" && (
                      <div className="w-5 h-px bg-gold/50" />
                    )}
                    {card.trend === "down" && (
                      <TrendingDown className="w-5 h-5 text-gold/70" />
                    )}
                  </motion.div>
                </div>

                {card.priceMin > 0 ? (
                  <div className="mb-4">
                    <span className="text-2xl lg:text-3xl font-serif text-ink">
                      <CountUpNumber target={card.priceMin} /> –{" "}
                      <CountUpNumber target={card.priceMax} />
                    </span>
                    <span className="block text-xs text-stone uppercase tracking-[0.1em] mt-1">
                      €/m²
                    </span>
                  </div>
                ) : (
                  <div className="mb-4">
                    <span className="text-lg text-ink italic">
                      individuelle Positionierung
                    </span>
                  </div>
                )}

                <span className="block text-xs uppercase tracking-[0.1em] text-gold/70 mb-4">
                  {card.trendLabel}
                </span>

                <p className="text-graphite text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-bone p-10 lg:p-12 border border-line/30 mb-12"
        >
          <p className="text-graphite text-sm leading-relaxed max-w-[800px]">
            Die genannten Werte dienen der groben Orientierung und ersetzen keine individuelle Wertermittlung. Der tatsächlich erzielbare Marktpreis hängt immer von Lage, Zustand, Architektur, Grundstück, Ausstattung und aktueller Nachfrage ab.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/bewertung"
            className="inline-flex items-center justify-center bg-ink text-cream px-10 py-5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-graphite transition-all duration-300"
          >
            Jetzt Immobilienwert in Grünwald einschätzen lassen
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
