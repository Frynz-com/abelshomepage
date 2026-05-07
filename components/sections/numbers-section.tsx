"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

function AnimatedNumber({ value, suffix = "", prefix = "", duration = 2000 }: { value: number; suffix?: string; prefix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const steps = 60
    const stepDuration = duration / steps
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(Math.round(value))
        clearInterval(timer)
      } else {
        setDisplayValue(Math.round(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="inline-block">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 1995, suffix: "", label: "Inhabergefuhrt seit", isStatic: true, staticText: "Seit 1995" },
  { value: 7, suffix: "", label: "Standorte in Deutschland" },
  { value: 25, suffix: "+", label: "Jahre Erfahrung am Markt" },
  { value: 100, suffix: "%", label: "Erfolgsbasierte Provision" }
]

export function NumbersSection() {
  return (
    <section className="py-32 lg:py-40 bg-bone border-t border-line/40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-24 lg:mb-32">
          <p className="text-gold text-xs uppercase tracking-[0.2em] mb-4">
            Unser Fundament
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl text-ink tracking-[-0.015em] leading-[1.1] max-w-[720px]">
            Erfahrung, die Sie spüren.
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="block font-serif text-5xl lg:text-6xl text-ink mb-6">
                {stat.isStatic && stat.staticText ? (
                  stat.staticText
                ) : (
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    duration={2000}
                  />
                )}
              </span>
              <span className="text-graphite text-sm leading-relaxed">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
