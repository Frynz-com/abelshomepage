"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function NotarkostenEinstiegSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Subtle Section Divider */}
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Section Label */}
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gold text-sm tracking-[0.15em] uppercase"
            >
              Einfuhrung
            </motion.span>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-xl lg:text-2xl text-ink leading-relaxed">
                Wer eine Immobilie verkauft, kommt am Notar nicht vorbei. 
                In Deutschland ist die notarielle Beurkundung des Kaufvertrags 
                gesetzlich vorgeschrieben - ein Schutz fur beide Seiten, der 
                Rechtssicherheit schafft.
              </p>

              <p className="text-lg text-graphite leading-relaxed">
                Doch was genau kostet der Notar? Wer tragt diese Kosten? Und 
                was konnen Verkaufer tun, um den Termin optimal vorzubereiten? 
                Dieser Ratgeber beantwortet die wichtigsten Fragen rund um 
                Notarkosten beim Immobilienverkauf - sachlich, verstandlich 
                und aus der Praxis.
              </p>

              <p className="text-lg text-graphite leading-relaxed">
                Wenn Sie gerade eine{" "}
                <Link href="/immobilie-verkaufen" className="text-ink underline underline-offset-4 hover:text-gold transition-colors">
                  Immobilie verkaufen
                </Link>{" "}
                mochten und sich fragen, welche Kosten auf Sie zukommen, finden 
                Sie hier alle relevanten Informationen - von der Gebuhrenstruktur 
                bis zur Vorbereitung des Notartermins.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
