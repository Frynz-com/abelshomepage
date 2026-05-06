"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { target: 3736, suffix: "", label: "Zufriedene Eigentümer", detail: "Persönlich begleitet" },
  { target: 3697, suffix: "", label: "Interessenten suchen", detail: "Eigentumswohnungen · 300k – 1 Mio. €" },
  { target: 5882, suffix: "", label: "Interessenten suchen", detail: "Villen & Häuser · 800k – 15 Mio. €" },
  { target: 4250, suffix: "", label: "Interessenten suchen", detail: "Mehrfamilienhaus / Renditeobjekt · 650k – 25 Mio. €" },
  { target: 100, suffix: "%", label: "Erfolgsbasiert", detail: "Keine Vorauszahlung" },
]

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const duration = 1600
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count >= 1000
        ? count.toLocaleString("de-DE")
        : count}
      {suffix}
    </span>
  )
}

export function TrustSection() {
  return (
    <section className="bg-bone border-b border-line/40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 divide-x divide-line/40">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.09 }}
              viewport={{ once: true }}
              className={`px-5 lg:px-8 py-8 lg:py-11 ${
                index >= 2 && index < 4 ? "border-t border-line/40 lg:border-t-0" : ""
              } ${index === 4 ? "col-span-2 lg:col-span-1 border-t border-line/40 lg:border-t-0" : ""}`}
            >
              <span className="block font-serif text-[36px] lg:text-[50px] text-ink leading-none tracking-[-0.025em] mb-3">
                <AnimatedNumber target={stat.target} suffix={stat.suffix} />
              </span>
              <span className="block text-[11px] uppercase tracking-[0.22em] text-gold mb-1.5 font-medium">
                {stat.label}
              </span>
              <span className="block text-[13px] text-stone tracking-[0.03em]">
                {stat.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
