"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { ContactModal } from "@/components/contact-modal"

export function MunichHeroSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="relative h-screen min-h-[700px] flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-zoom">
        <Image
          src="/images/cities/muenchen.jpg"
          alt="Immobilienmakler München – Abels Immobilien"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        </div>
        <div className="absolute inset-0 bg-ink/22" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/25" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex-1 flex items-end pb-20 lg:pb-28">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 w-full">
            <div className="grid lg:grid-cols-12 items-end gap-12">
              <div className="lg:col-span-7 xl:col-span-6">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 mb-8"
                >
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-[clamp(2.8rem,6.5vw,6rem)] text-white leading-[0.96] tracking-[-0.01em] mb-8 lg:mb-10"
                >
                  Ihre Immobilie<br />
                  <span className="text-white/82">in München verkaufen.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-white/68 text-[16px] lg:text-[17px] leading-[1.7] max-w-[480px] mb-10 lg:mb-12"
                >
                  Abels Immobilien begleitet anspruchsvolle Eigentümer beim Verkauf von Wohnungen, Häusern und Villen in Bogenhausen, Schwabing und den besten Lagen Münchens.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Link
                    href="/bewertung"
                    className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-gold-soft transition-all duration-300 group"
                  >
                    Kostenlose Bewertung
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 border border-white/28 text-white px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-medium hover:bg-white/10 hover:border-white/45 transition-all duration-300 backdrop-blur-sm"
                  >
                    Beratung anfragen
                  </button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5 xl:col-span-6 hidden lg:flex justify-end"
              >
                <div className="flex flex-col gap-8 items-end text-right">
                  {[
                    { value: "Bogenhausen", label: "Diplomatenviertel" },
                    { value: "Schwabing", label: "Urbane Toplage" },
                    { value: "Lehel", label: "Historische Altstadt" },
                  ].map((item, i) => (
                    <div key={i} className="border-r-2 border-gold/40 pr-6">
                      <span className="block font-serif text-[22px] text-white leading-tight mb-1">
                        {item.value}
                      </span>
                      <span className="block text-[10px] uppercase tracking-[0.18em] text-white/45">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
