"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export function GruenwaldHeroSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-zoom">
        <Image
          src="/images/cities/gruenwald.jpg"
          alt="Immobilienmakler Grünwald - Premium Villen und hochwertige Wohnungen"
          fill
          priority
          className="object-cover"
        />
        </div>
      </div>

      <div className="absolute inset-0 z-10 bg-ink/22" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/30" />

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-20 w-full pt-32 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-end min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 xl:col-span-7"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gold text-xs uppercase tracking-[0.25em] mb-8"
            >
              Immobilienmakler für exklusive Lagen
            </motion.p>

            <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] text-white leading-[1.02] mb-10 text-balance">
              Immobilienmakler Grünwald<br />
              <span className="text-white/90">für hochwertige Immobilien</span>
            </h1>

            <p className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-[580px] mb-14">
              Abels Immobilien begleitet Eigentümer in Grünwald beim Verkauf hochwertiger Wohnimmobilien – mit präziser Wertermittlung, diskreter Vermarktung und persönlicher Begleitung bis zum erfolgreichen Abschluss.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/bewertung"
                className="inline-flex items-center justify-center bg-white text-ink px-10 py-5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-cream transition-all duration-300"
              >
                Immobilie in Grünwald bewerten lassen
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center border border-white/40 text-white px-10 py-5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Verkaufsgespräch anfragen
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 xl:col-span-5 lg:pl-12"
          >
            <div className="flex lg:flex-col gap-8 lg:gap-10 lg:items-end text-right">
              <div>
                <span className="block font-serif text-2xl lg:text-3xl text-white mb-1">Seit 1999</span>
                <span className="text-white/60 text-sm uppercase tracking-[0.1em]">Inhabergefuhrt</span>
              </div>
              <div>
                <span className="block font-serif text-2xl lg:text-3xl text-white mb-1">7 Standorte</span>
                <span className="text-white/60 text-sm uppercase tracking-[0.1em]">In Deutschland</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-white/40" />
          </motion.div>
        </motion.div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
