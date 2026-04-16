"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"

export function FinalCtaSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="bg-ink text-cream">

      {/* Large statement */}
      <div className="border-b border-cream/8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-gold">
                Ihr nächster Schritt
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] text-cream leading-[0.97] tracking-[-0.02em] max-w-[900px]">
              Lassen Sie uns<br />
              <span className="text-cream/55">über Ihre Immobilie</span><br />
              sprechen.
            </h2>
          </motion.div>
        </div>
      </div>

      {/* CTA + Contact split */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12">

          {/* Left: CTA content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-6 py-16 lg:py-20 lg:pr-20 lg:border-r border-cream/8"
          >
            <p className="text-[16px] text-cream/60 leading-[1.7] mb-10 max-w-[460px]">
              Ob Verkauf, Bewertung oder einfach ein erstes, unverbindliches Gespräch — wir nehmen uns die Zeit, die Ihre Immobilie verdient.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bewertung"
                className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-gold-soft transition-colors group"
              >
                Kostenlose Bewertung
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 border border-cream/20 text-cream px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-medium hover:bg-cream/8 hover:border-cream/35 transition-all duration-300"
              >
                Beratung anfragen
              </button>
            </div>

            {/* Tagline */}
            <p className="mt-10 text-[13px] text-cream/30 italic font-serif">
              „Diskret. Präzise. Persönlich."
            </p>
          </motion.div>

          {/* Right: Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:col-start-8 py-16 lg:py-20 lg:pl-16"
          >
            <h3 className="text-[11px] uppercase tracking-[0.22em] text-cream/40 mb-8">
              Direkter Kontakt
            </h3>

            <div className="space-y-5">
              <a
                href="tel:+492115591751"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-cream/12 flex items-center justify-center group-hover:border-gold/40 transition-colors shrink-0">
                  <Phone className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-cream/35 mb-0.5">Telefon</span>
                  <span className="block text-[15px] text-cream group-hover:text-gold transition-colors">
                    +49 211 5591751
                  </span>
                </div>
              </a>

              <a
                href="mailto:info@abels-immobilien.de"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-cream/12 flex items-center justify-center group-hover:border-gold/40 transition-colors shrink-0">
                  <Mail className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-cream/35 mb-0.5">E-Mail</span>
                  <span className="block text-[15px] text-cream group-hover:text-gold transition-colors">
                    info@abels-immobilien.de
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-cream/12 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-gold/70" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-cream/35 mb-0.5">Hauptsitz</span>
                  <span className="block text-[15px] text-cream/75">
                    Alt Niederkassel 124, 40547 Düsseldorf
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-cream/12 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-gold/70" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-cream/35 mb-0.5">Erreichbarkeit</span>
                  <span className="block text-[15px] text-cream/75">
                    Mo–Fr 9:00–18:00 Uhr
                  </span>
                  <span className="block text-[13px] text-cream/40">
                    Sa nach Vereinbarung
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
