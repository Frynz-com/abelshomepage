"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"

export function FinalCtaSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="bg-cream border-t border-line/40">

      {/* Large editorial statement */}
      <div className="border-b border-line/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-gold/70" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-gold">
                Ihr nächster Schritt
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.8rem,6.5vw,6rem)] text-ink leading-[0.95] tracking-[-0.025em] max-w-[860px]">
              Lassen Sie uns<br />
              <span className="text-ink/35">über Ihre Immobilie</span><br />
              sprechen.
            </h2>
          </motion.div>
        </div>
      </div>

      {/* CTA + Contact */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12">

          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-6 py-16 lg:py-24 lg:pr-24 lg:border-r border-line/40"
          >
            <p className="text-[16px] text-graphite leading-[1.8] mb-12 max-w-[440px]">
              Ob Verkauf, Bewertung oder ein erstes, unverbindliches Gespräch —
              wir nehmen uns die Zeit, die Ihre Immobilie verdient.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/bewertung"
                className="inline-flex items-center justify-center gap-2.5 bg-ink text-cream px-8 py-4 text-[10px] uppercase tracking-[0.22em] font-semibold hover:bg-graphite transition-colors group"
              >
                Bewertung anfordern
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 border border-line text-ink/70 px-8 py-4 text-[10px] uppercase tracking-[0.22em] font-medium hover:bg-bone hover:border-line/80 transition-all duration-300"
              >
                Erstgespräch vereinbaren
              </button>
            </div>

            <p className="mt-12 text-[13px] text-stone italic font-serif tracking-[0.02em]">
              „Diskret. Präzise. Persönlich."
            </p>
          </motion.div>

          {/* Right: Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:col-start-8 py-16 lg:py-24 lg:pl-16"
          >
            <p className="text-[9.5px] uppercase tracking-[0.28em] text-stone mb-10">
              Direkter Kontakt
            </p>

            <div className="space-y-6">
              <a href="tel:+492115591751" className="flex items-center gap-5 group">
                <div className="w-10 h-10 border border-line/60 flex items-center justify-center group-hover:border-gold/50 transition-colors shrink-0">
                  <Phone className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors" />
                </div>
                <div>
                  <span className="block text-[9.5px] uppercase tracking-[0.22em] text-stone mb-1">Telefon</span>
                  <span className="block text-[15px] text-graphite group-hover:text-ink transition-colors">
                    +49 211 5591751
                  </span>
                </div>
              </a>

              <a href="mailto:info@abels-immobilien.de" className="flex items-center gap-5 group">
                <div className="w-10 h-10 border border-line/60 flex items-center justify-center group-hover:border-gold/50 transition-colors shrink-0">
                  <Mail className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors" />
                </div>
                <div>
                  <span className="block text-[9.5px] uppercase tracking-[0.22em] text-stone mb-1">E-Mail</span>
                  <span className="block text-[15px] text-graphite group-hover:text-ink transition-colors">
                    info@abels-immobilien.de
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="w-10 h-10 border border-line/60 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-gold/70" />
                </div>
                <div>
                  <span className="block text-[9.5px] uppercase tracking-[0.22em] text-stone mb-1">Hauptsitz</span>
                  <span className="block text-[15px] text-graphite">
                    Alt Niederkassel 124, 40547 Düsseldorf
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-10 h-10 border border-line/60 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-gold/70" />
                </div>
                <div>
                  <span className="block text-[9.5px] uppercase tracking-[0.22em] text-stone mb-1">Erreichbarkeit</span>
                  <span className="block text-[15px] text-graphite">Mo – Fr &nbsp;9:00 – 18:00 Uhr</span>
                  <span className="block text-[13px] text-stone mt-0.5">Sa nach Vereinbarung</span>
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
