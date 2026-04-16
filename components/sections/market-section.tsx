"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, TrendingUp } from "lucide-react"

const districts = [
  { name: "Oberkassel", city: "Düsseldorf", pricePerSqm: 7200, trend: "+8%", avgPrice: "890.000", character: "Altbau-Villen, Rheinblick, Familien", slug: "duesseldorf" },
  { name: "Kaiserswerth", city: "Düsseldorf", pricePerSqm: 6800, trend: "+6%", avgPrice: "1.250.000", character: "Historisch, ruhig, Villenlage", slug: "duesseldorf" },
  { name: "Bogenhausen", city: "München", pricePerSqm: 12500, trend: "+4%", avgPrice: "2.100.000", character: "Diplomatenviertel, exklusiv", slug: "muenchen" },
  { name: "Grünwald", city: "München", pricePerSqm: 14200, trend: "+5%", avgPrice: "3.500.000", character: "Villen, Diskretion, Spitzenlage", slug: "gruenwald" },
  { name: "Blankenese", city: "Hamburg", pricePerSqm: 9800, trend: "+7%", avgPrice: "1.800.000", character: "Elbblick, Treppenviertel", slug: "hamburg" },
  { name: "Westend", city: "Frankfurt", pricePerSqm: 8900, trend: "+5%", avgPrice: "1.450.000", character: "Gründerzeit, zentral, Banker", slug: "frankfurt" },
  { name: "Bredeney", city: "Essen", pricePerSqm: 4200, trend: "+9%", avgPrice: "680.000", character: "Villen am Baldeneysee", slug: "essen" },
  { name: "Killesberg", city: "Stuttgart", pricePerSqm: 7500, trend: "+6%", avgPrice: "1.150.000", character: "Halbhöhenlage, Park, Premium", slug: "stuttgart" },
]

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 1200
      const steps = 50
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString("de-DE")}{suffix}
    </span>
  )
}

export function MarketSection() {
  const [activeDistrict, setActiveDistrict] = useState(districts[0])

  return (
    <section className="py-28 lg:py-40 bg-ink text-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-24"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-gold">
                Unsere Märkte
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] text-cream leading-[1.06] tracking-[-0.01em]">
              Premium-Lagen<br />in Deutschland
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-[15px] text-cream/55 leading-[1.7]">
              Ausgewählte Stadtteile, in denen wir den Markt kennen und aktiv tätig sind.
            </p>
          </div>
        </motion.div>

        {/* Interactive layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Left: District list */}
          <div className="lg:col-span-5">
            <div className="space-y-0 border-t border-cream/10">
              {districts.map((district, index) => (
                <motion.button
                  key={district.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveDistrict(district)}
                  className={`w-full text-left flex items-center justify-between px-0 py-5 border-b border-cream/10 transition-all duration-200 group ${
                    activeDistrict.name === district.name
                      ? "text-cream"
                      : "text-cream/45 hover:text-cream/75"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    {/* Active indicator */}
                    <div className={`w-1 h-6 transition-all duration-300 ${
                      activeDistrict.name === district.name ? "bg-gold" : "bg-transparent"
                    }`} />
                    <div>
                      <span className={`block font-serif text-[18px] leading-tight transition-colors duration-200 ${
                        activeDistrict.name === district.name ? "text-cream" : ""
                      }`}>
                        {district.name}
                      </span>
                      <span className="block text-[11px] uppercase tracking-[0.14em] text-cream/35 mt-0.5">
                        {district.city}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[12px] font-medium transition-colors duration-200 ${
                      activeDistrict.name === district.name ? "text-gold" : "text-cream/25"
                    }`}>
                      {district.trend}
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-all duration-200 ${
                      activeDistrict.name === district.name
                        ? "text-gold translate-x-0.5"
                        : "text-cream/20"
                    }`} />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right: Active district data */}
          <div className="lg:col-span-6 lg:col-start-7">
            <motion.div
              key={activeDistrict.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="h-full"
            >
              {/* District header */}
              <div className="border border-cream/12 bg-cream/[0.03] p-8 lg:p-10 mb-0">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.22em] text-gold mb-2">
                      {activeDistrict.city}
                    </span>
                    <h3 className="font-serif text-[36px] lg:text-[44px] text-cream leading-none tracking-[-0.01em]">
                      {activeDistrict.name}
                    </h3>
                    <p className="text-[13px] text-cream/45 mt-2">
                      {activeDistrict.character}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-gold/15 px-3 py-1.5 border border-gold/25">
                    <TrendingUp className="w-3.5 h-3.5 text-gold" />
                    <span className="text-[12px] text-gold font-medium tracking-[0.06em]">
                      {activeDistrict.trend}
                    </span>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-0 border-t border-cream/10">
                  <div className="border-b border-r border-cream/10 py-6 pr-6">
                    <span className="block text-[11px] uppercase tracking-[0.16em] text-cream/40 mb-2">
                      Preis pro m²
                    </span>
                    <span className="block font-serif text-[32px] lg:text-[38px] text-cream leading-none tracking-[-0.01em]">
                      <AnimatedCounter value={activeDistrict.pricePerSqm} />
                      <span className="text-[18px] text-cream/60 ml-1">€</span>
                    </span>
                  </div>
                  <div className="border-b border-cream/10 py-6 pl-6">
                    <span className="block text-[11px] uppercase tracking-[0.16em] text-cream/40 mb-2">
                      Ø Kaufpreis
                    </span>
                    <span className="block font-serif text-[32px] lg:text-[38px] text-cream leading-none tracking-[-0.01em]">
                      {activeDistrict.avgPrice}
                      <span className="text-[18px] text-cream/60 ml-1">€</span>
                    </span>
                  </div>
                  <div className="border-r border-cream/10 py-6 pr-6">
                    <span className="block text-[11px] uppercase tracking-[0.16em] text-cream/40 mb-2">
                      Nachfrage
                    </span>
                    <span className="block font-serif text-[22px] text-cream leading-none">
                      Hoch
                    </span>
                  </div>
                  <div className="py-6 pl-6">
                    <span className="block text-[11px] uppercase tracking-[0.16em] text-cream/40 mb-2">
                      Jahrestrend
                    </span>
                    <span className="block font-serif text-[22px] text-gold leading-none">
                      {activeDistrict.trend} p.a.
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-cream/10">
                  <Link
                    href={`/standorte/${activeDistrict.slug}`}
                    className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-cream/60 hover:text-cream transition-colors group"
                  >
                    {activeDistrict.city} erkunden
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-gold" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="font-serif text-[18px] text-cream mb-1">
              Wissen Sie, was Ihre Immobilie wert ist?
            </p>
            <p className="text-[14px] text-cream/50">
              Kostenfreie Bewertung — persönlich, diskret, marktgerecht.
            </p>
          </div>
          <Link
            href="/bewertung"
            className="inline-flex items-center gap-2 bg-gold text-ink px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-gold-soft transition-colors shrink-0 group"
          >
            Bewertung anfordern
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
