"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

const marketData = [
  {
    name: "Blankenese",
    slug: "blankenese",
    pricePerSqm: 9800,
    trend: "up",
    trendPercent: "+4,2%",
    description: "Hamburgs exklusivste Villenlage an der Elbe"
  },
  {
    name: "Harvestehude",
    slug: "harvestehude",
    pricePerSqm: 8900,
    trend: "up",
    trendPercent: "+3,8%",
    description: "Gründerzeit-Eleganz nahe der Außenalster"
  },
  {
    name: "Rotherbaum",
    slug: "rotherbaum",
    pricePerSqm: 8200,
    trend: "up",
    trendPercent: "+3,1%",
    description: "Kultiviertes Universitätsviertel"
  },
  {
    name: "Eppendorf",
    slug: "eppendorf",
    pricePerSqm: 7600,
    trend: "stable",
    trendPercent: "+0,8%",
    description: "Beliebtes Altbauviertel mit Charme"
  },
  {
    name: "Winterhude",
    slug: "winterhude",
    pricePerSqm: 7100,
    trend: "up",
    trendPercent: "+2,4%",
    description: "Grüne Oase am Stadtpark"
  },
  {
    name: "HafenCity",
    slug: "hafencity",
    pricePerSqm: 8500,
    trend: "up",
    trendPercent: "+5,1%",
    description: "Modernes Waterfront-Living"
  }
]

function CountUpNumber({ target }: { target: number }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const duration = 1500
    const steps = 40
    const increment = target / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setValue(target)
        clearInterval(timer)
      } else {
        setValue(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target])

  return <>{value.toLocaleString("de-DE")}</>
}

function TrendIcon({ trend }: { trend: string }) {
  if (trend === "up") return <TrendingUp className="w-4 h-4 text-emerald-600" />
  if (trend === "down") return <TrendingDown className="w-4 h-4 text-red-500" />
  return <Minus className="w-4 h-4 text-stone" />
}

export function HamburgMarketPricesSection() {
  return (
    <section className="py-24 lg:py-32 bg-bone border-t border-line/40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            Marktpreise Q1 2026
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-ink leading-[1.1] max-w-[700px] mb-6">
            Was Immobilien in Hamburg wert sind
          </h2>
          <p className="text-graphite max-w-[600px]">
            Aktuelle Durchschnittspreise pro Quadratmeter in Hamburgs gefragtesten Lagen. Die Werte basieren auf unseren Vermittlungen und Marktbeobachtungen.
          </p>
        </motion.div>

        {/* Price Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {marketData.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/standorte/hamburg/${item.slug}`}
                className="group block bg-cream border border-line/40 p-8 hover:bg-white hover:border-gold/30 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-serif text-2xl text-ink group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <TrendIcon trend={item.trend} />
                    <span className={`text-sm ${item.trend === "up" ? "text-emerald-600" : item.trend === "down" ? "text-red-500" : "text-graphite"}`}>
                      {item.trendPercent}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-serif text-4xl lg:text-5xl text-ink">
                    <CountUpNumber target={item.pricePerSqm} />
                  </span>
                  <span className="text-graphite text-sm ml-2">EUR/m2</span>
                </div>

                <p className="text-graphite text-sm leading-relaxed">
                  {item.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-12 text-graphite text-xs text-center">
          Ca.-Werte basierend auf Abels-Vermittlungen und Marktanalysen. Individuelle Bewertung auf Anfrage.
        </p>
      </div>
    </section>
  )
}
