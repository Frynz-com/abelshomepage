"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import Link from "next/link"

interface PriceData {
  district: string
  pricePerSqm: number
  trend: "up" | "down" | "stable"
  trendPercent: string
  note: string
}

const priceData: PriceData[] = [
  {
    district: "Oberkassel",
    pricePerSqm: 7850,
    trend: "up",
    trendPercent: "+4,2%",
    note: "Linksrheinische Toplage, stabile Nachfrage"
  },
  {
    district: "Kaiserswerth",
    pricePerSqm: 6900,
    trend: "up",
    trendPercent: "+3,8%",
    note: "Familienlage mit historischem Charme"
  },
  {
    district: "Zooviertel",
    pricePerSqm: 6200,
    trend: "stable",
    trendPercent: "+0,5%",
    note: "Etablierte Wohnlage mit guter Infrastruktur"
  },
  {
    district: "Golzheim",
    pricePerSqm: 5800,
    trend: "up",
    trendPercent: "+2,9%",
    note: "Nah an der Altstadt, urban und grün"
  },
  {
    district: "Carlstadt",
    pricePerSqm: 7200,
    trend: "stable",
    trendPercent: "+1,1%",
    note: "Citylage mit Altbau-Charakter"
  },
  {
    district: "Pempelfort",
    pricePerSqm: 5400,
    trend: "up",
    trendPercent: "+3,5%",
    note: "Aufstrebend, junge Käuferschicht"
  }
]

function AnimatedCounter({ value, inView }: { value: number; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    
    const duration = 1500
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, inView])

  return <span>{displayValue.toLocaleString("de-DE")}</span>
}

function PriceCard({ data, index }: { data: PriceData; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const TrendIcon = data.trend === "up" ? TrendingUp : data.trend === "down" ? TrendingDown : Minus
  const trendColor = data.trend === "up" ? "text-green-600" : data.trend === "down" ? "text-red-500" : "text-stone"

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-cream border border-line p-8 hover:border-gold/50 transition-colors duration-300"
    >
      <div className="flex items-start justify-between mb-6">
        <h3 className="font-serif text-xl text-ink">{data.district}</h3>
        <div className={`flex items-center gap-1 ${trendColor}`}>
          <TrendIcon className="w-4 h-4" />
          <span className="text-sm font-medium">{data.trendPercent}</span>
        </div>
      </div>
      
      <div className="mb-4">
        <span className="font-serif text-4xl lg:text-5xl text-ink">
          <AnimatedCounter value={data.pricePerSqm} inView={isInView} />
        </span>
        <span className="text-stone text-sm ml-2">EUR/m²</span>
      </div>
      
      <p className="text-stone text-sm leading-relaxed">
        {data.note}
      </p>
    </motion.div>
  )
}

export function DuesseldorfMarketPricesSection() {
  return (
    <section className="py-24 lg:py-32 bg-bone">
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
            Marktdaten Q1 2026
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-ink leading-[1.1] mb-6 max-w-[700px]">
            Immobilienpreise in Düsseldorf
          </h2>
          <p className="text-graphite leading-relaxed max-w-[600px]">
            Aktuelle Quadratmeterpreise für Eigentumswohnungen in den gefragtesten Lagen. Diese Richtwerte basieren auf unseren Transaktionen und Marktbeobachtungen.
          </p>
        </motion.div>

        {/* Price Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {priceData.map((data, index) => (
            <PriceCard key={data.district} data={data} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8 border-t border-line"
        >
          <p className="text-graphite text-sm">
            Möchten Sie den exakten Wert Ihrer Immobilie erfahren?
          </p>
          <Link
            href="/bewertung"
            className="inline-flex items-center gap-2 text-ink text-sm font-medium hover:text-gold transition-colors"
          >
            Kostenlose Bewertung anfordern
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
