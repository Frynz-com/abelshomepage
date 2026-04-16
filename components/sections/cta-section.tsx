"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export function CtaSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="relative py-40 lg:py-56">
      {/* Background Image (z-0) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-interior.jpg"
          alt="Luxuriöses Interieur"
          fill
          className="object-cover"
        />
      </div>

      {/* Base dark overlay */}
      <div className="absolute inset-0 z-10 bg-ink/60" />

      {/* Bottom-heavy gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-ink/20 to-ink/70" />

      {/* Content (z-20) */}
      <div className="relative z-20 max-w-[720px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gold text-xs uppercase tracking-[0.2em] mb-6">
            Nächster Schritt
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-white tracking-[-0.02em] leading-[1.1] mb-8" style={{ textShadow: '0 2px 32px rgba(0,0,0,0.7)' }}>
            Sprechen wir über Ihre Immobilie.
          </h2>
          <p className="text-white text-lg mb-12" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
            <span className="font-serif italic">Kostenfrei. Unverbindlich. Innerhalb 72 Stunden.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/bewertung"
              className="inline-flex items-center justify-center bg-cream text-ink px-8 py-4 text-xs uppercase tracking-[0.1em] hover:bg-white transition-colors"
            >
              Bewertung anfordern
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center border-2 border-cream text-cream px-8 py-4 text-xs uppercase tracking-[0.1em] hover:bg-cream hover:text-ink transition-colors"
            >
              Termin vereinbaren
            </button>
          </div>
        </motion.div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
