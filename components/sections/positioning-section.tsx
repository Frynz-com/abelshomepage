"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const differentiators = [
  {
    title: "Kein Massengeschäft",
    text: "Wir betreuen eine bewusst überschaubare Anzahl ausgewählter Objekte gleichzeitig — damit jedes Mandat die Aufmerksamkeit bekommt, die es verdient.",
  },
  {
    title: "Marktkenntnis, die zählt",
    text: "Unsere Berater leben und arbeiten vor Ort seit über 25 Jahren. Sie kennen Käufergruppen, Mikro­lagen, Preis­korridore — und was wirklich verkauft.",
  },
  {
    title: "Ein Ansprechpartner. Von Anfang bis Ende.",
    text: "Bei uns gibt es kein Callcenter, keine Weitergabe. Ein erfahrener Berater begleitet Sie persönlich von der Bewertung bis zur Schlüsselübergabe.",
  },
]

export function PositioningSection() {
  return (
    <section className="py-28 lg:py-40 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-0">

          {/* Left column — brand statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:pr-20"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-gold/70" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-gold">
                Wer wir sind
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2.4rem,4.5vw,4rem)] text-ink leading-[1.04] tracking-[-0.015em] mb-10">
              Persönlich.<br />
              Professionell.<br />
              Präsent.
            </h2>

            <div className="w-10 h-px bg-gold/40 mb-10" />

            <div className="space-y-6 text-[15px] text-graphite leading-[1.8] max-w-[380px]">
              <p>
                ABELS Immobilien ist eines der führenden Maklerunternehmen in Deutschland. Wir haben uns auf den Verkauf von Einfamilienhäusern und Mehrfamilienhäusern spezialisiert. (Unser Firmensitz liegt in Alt-Niederkassel 124 in 40547 Düsseldorf – einer der gefragtesten Immobilienlagen der Region.)
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/bewertung"
                className="inline-flex items-center gap-2.5 bg-gold text-ink px-7 py-3.5 text-[13px] uppercase tracking-[0.16em] font-semibold hover:bg-gold/90 transition-colors group"
              >
                Kostenlose Bewertung starten
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/ueber-uns"
                className="inline-flex items-center gap-2.5 text-[10px] uppercase tracking-[0.20em] text-stone hover:text-ink transition-colors duration-200 group pt-3.5"
              >
                Unser Profil ansehen
                <ArrowRight className="w-3 h-3 text-gold group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Vertical divider */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-px h-full bg-line/50" />
          </div>

          {/* Right column — differentiators */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-6 lg:pl-16 flex flex-col justify-center"
          >
            <div>
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15 + index * 0.12 }}
                  viewport={{ once: true }}
                  className="py-9 border-b border-line/60 last:border-b-0 group"
                >
                  <div className="flex gap-7 items-start">
                    <span className="text-[11px] text-gold/50 tracking-[0.14em] font-medium mt-1.5 shrink-0 tabular-nums">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-[20px] lg:text-[22px] text-ink mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[14px] text-graphite leading-[1.75]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
