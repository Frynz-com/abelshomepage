"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="relative h-screen min-h-[720px] flex flex-col overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-luxury.jpg"
          alt="Luxuriöse Immobilie – Abels Immobilien"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Cleaner, lighter overlays — image breathes more */}
        <div className="absolute inset-0 bg-ink/38" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/72 via-ink/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
      </div>

      {/* Content — bottom-anchored editorial layout */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-20 lg:pb-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 w-full">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-7 lg:mb-9"
          >
            <div className="w-8 h-px bg-gold/80" />
            <span className="text-gold/90 text-[10px] uppercase tracking-[0.30em] font-medium">
              Seit 1999 · 7 Standorte
            </span>
          </motion.div>

          {/* Headline — large, editorial, confident */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[clamp(3rem,7.5vw,7.5rem)] text-white leading-[0.93] tracking-[-0.02em] mb-10 lg:mb-14"
          >
            Ihre Immobilie.<br />
            <span className="text-white/62">Diskret verkauft.</span>
          </motion.h1>

          {/* Bottom row: lead text + CTAs */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-24">

            {/* Lead text */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/52 text-[15px] lg:text-[16px] leading-[1.8] max-w-[400px]"
            >
              Persönliche Begleitung beim Verkauf hochwertiger Wohnimmobilien —
              diskret, präzise und mit echter Marktkenntnis.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3 shrink-0"
            >
              <Link
                href="/bewertung"
                className="inline-flex items-center justify-center gap-2.5 bg-gold text-ink px-8 py-4 text-[10px] uppercase tracking-[0.22em] font-semibold hover:bg-gold/90 transition-all duration-300 group"
              >
                Bewertung anfordern
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 border border-white/22 text-white/80 px-8 py-4 text-[10px] uppercase tracking-[0.22em] font-medium hover:border-white/45 hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                Erstgespräch vereinbaren
              </button>
            </motion.div>

          </div>
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
