"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export function MunichClosingCtaSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Divider */}
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-[900px] mx-auto"
        >
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-ink leading-[1.08] mb-8">
            Sie möchten Ihre Immobilie in München professionell verkaufen?
          </h2>

          <p className="text-xl text-graphite leading-relaxed mb-12">
            Ob Wohnung, Haus, Villa oder diskreter Verkauf im gehobenen Segment – wir begleiten Sie mit Marktverständnis, hochwertiger Vermarktung und persönlicher Betreuung durch den gesamten Prozess.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/bewertung"
              className="inline-flex items-center justify-center bg-ink text-cream px-10 py-5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-graphite transition-all duration-300"
            >
              Immobilie in München bewerten lassen
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center border border-ink text-ink px-10 py-5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-ink hover:text-cream transition-all duration-300"
            >
              Persönliche Beratung anfragen
            </button>
          </div>
        </motion.div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
