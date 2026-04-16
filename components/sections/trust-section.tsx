"use client"

import { motion } from "framer-motion"

const stats = [
  {
    value: "1999",
    label: "Gegründet",
    detail: "Inhabergeführt seit über 25 Jahren",
  },
  {
    value: "7",
    label: "Standorte",
    detail: "In den besten deutschen Lagen",
  },
  {
    value: "IHK",
    label: "Zertifiziert",
    detail: "§34c GewO – Qualifizierte Beratung",
  },
]

export function TrustSection() {
  return (
    <section className="py-0 bg-bone">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col justify-center px-8 lg:px-10 py-7 lg:py-12 border-b md:border-b-0 border-line ${
                index < stats.length - 1 ? "md:border-r border-line" : ""
              }`}
            >
              <div className="flex items-baseline gap-3 mb-1.5">
                <span className="font-serif text-[38px] lg:text-[52px] text-ink leading-none tracking-[-0.02em]">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-gold font-medium">
                  {stat.label}
                </span>
              </div>
              <p className="text-[12.5px] text-stone leading-relaxed">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
