"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "1999", label: "Gegründet", detail: "Inhabergeführt" },
  { value: "7", label: "Standorte", detail: "Deutschlandweit" },
  { value: "IHK", label: "Zertifiziert", detail: "§34c GewO" },
  { value: "100%", label: "Persönlich", detail: "Kein Franchise" },
]

export function TrustSection() {
  return (
    <section className="bg-bone border-b border-line/40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-line/40">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.09 }}
              viewport={{ once: true }}
              className={`px-6 lg:px-12 py-10 lg:py-14 ${
                index >= 2 ? "border-t border-line/40 lg:border-t-0" : ""
              }`}
            >
              <span className="block font-serif text-[38px] lg:text-[48px] text-ink leading-none tracking-[-0.025em] mb-3">
                {stat.value}
              </span>
              <span className="block text-[9.5px] uppercase tracking-[0.28em] text-gold mb-1.5 font-medium">
                {stat.label}
              </span>
              <span className="block text-[12px] text-stone tracking-[0.04em]">
                {stat.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
