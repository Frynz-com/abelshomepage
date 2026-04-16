"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export function GruenwaldClosingCtaSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gold text-xs uppercase tracking-[0.25em] mb-6">
              Nächste Schritte
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-ink leading-[1.08] mb-8">
              Sie möchten Ihre Immobilie in Grünwald professionell verkaufen?
            </h2>
            <p className="text-graphite text-lg leading-relaxed mb-10 max-w-[500px]">
              Ob Wohnung, Haus, Villa, Grundstück oder diskreter Verkauf im gehobenen Segment – wir begleiten Sie mit Marktverständnis, hochwertiger Vermarktung und persönlicher Betreuung durch den gesamten Prozess.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/bewertung"
                className="inline-flex items-center justify-center bg-ink text-cream px-10 py-5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-graphite transition-all duration-300"
              >
                Immobilie in Grünwald bewerten lassen
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center border border-ink text-ink px-10 py-5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-ink hover:text-cream transition-all duration-300"
              >
                Persönliche Beratung anfragen
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="hidden lg:block" />
          </motion.div>
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
