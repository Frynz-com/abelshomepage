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
        {/* Overlays — kräftig genug für lesbaren Text, Bild bleibt sichtbar */}
        <div className="absolute inset-0 bg-ink/28" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/25 to-ink/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
      </div>

      {/* Content — bottom-anchored editorial layout */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-20 lg:pb-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 w-full">

          {/* Headline — large, editorial, confident */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[clamp(3rem,7.5vw,7.5rem)] text-white leading-[0.93] tracking-[-0.02em] mb-10 lg:mb-14"
          >
            Ihre Immobilie.<br />
            <span className="text-white/75">Diskret verkauft.</span>
          </motion.h1>

          {/* Bottom row: lead text + CTAs */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-24">

            {/* Lead text */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[420px]"
            >
              <p className="text-white/88 text-[16px] lg:text-[17px] leading-[1.8] mb-5">
                Inhabergeführter Premium-Makler für den Verkauf hochwertiger Wohnimmobilien —
                persönlich begleitet, diskret vermarktet, zum bestmöglichen Preis.
              </p>
              <p className="text-white/65 text-[13px] tracking-[0.04em]">
                Kostenfreie Erstberatung · Kein Risiko · Keine Vorauszahlung
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3 shrink-0"
            >
              <Link
                href="/bewertung"
                className="inline-flex items-center justify-center gap-2.5 bg-gold text-ink px-8 py-4.5 text-[12px] uppercase tracking-[0.18em] font-semibold hover:bg-gold/90 transition-all duration-300 group whitespace-nowrap"
              >
                Kostenlos bewerten lassen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 border border-white/35 text-white px-8 py-4.5 text-[12px] uppercase tracking-[0.18em] font-medium hover:border-white/60 hover:bg-white/8 transition-all duration-300 backdrop-blur-sm whitespace-nowrap"
              >
                Unverbindlich beraten lassen
              </button>
            </motion.div>

          </div>
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
