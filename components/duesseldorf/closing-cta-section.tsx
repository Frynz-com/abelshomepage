"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"
import { Phone, Mail } from "lucide-react"

export function DuesseldorfClosingCtaSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gold text-xs uppercase tracking-[0.25em] mb-6">
              Ihr nächster Schritt
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-ink leading-[1.1] mb-8">
              Bereit, Ihre Immobilie in Düsseldorf zu verkaufen?
            </h2>
            <p className="text-graphite text-lg leading-relaxed mb-10 max-w-[500px]">
              Lassen Sie uns sprechen. In einem unverbindlichen Erstgespräch klären wir Ihre Fragen und zeigen Ihnen, wie wir Ihren Verkauf erfolgreich gestalten können.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/bewertung"
                className="inline-flex items-center justify-center bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium hover:bg-graphite transition-all duration-300"
              >
                Kostenlose Bewertung
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center border border-ink text-ink px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium hover:bg-ink hover:text-cream transition-all duration-300"
              >
                Beratung anfragen
              </button>
            </div>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="border border-line bg-bone p-10 lg:p-12">
              <h3 className="font-serif text-2xl text-ink mb-8">Direkter Kontakt Düsseldorf</h3>
              
              <div className="space-y-6">
                <a 
                  href="tel:+492115591751" 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 border border-line bg-cream flex items-center justify-center group-hover:border-gold transition-colors">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="block text-xs text-stone uppercase tracking-[0.1em] mb-1">Telefon</span>
                    <span className="block text-ink font-medium group-hover:text-gold transition-colors">+49 211 5591751</span>
                  </div>
                </a>

                <a 
                  href="mailto:duesseldorf@abels-immobilien.de" 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 border border-line bg-cream flex items-center justify-center group-hover:border-gold transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="block text-xs text-stone uppercase tracking-[0.1em] mb-1">E-Mail</span>
                    <span className="block text-ink font-medium group-hover:text-gold transition-colors">duesseldorf@abels-immobilien.de</span>
                  </div>
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-line">
                <p className="text-sm text-stone">
                  Standort Düsseldorf: Alt Niederkassel 124, 40547 Düsseldorf
                </p>
                <p className="text-sm text-stone mt-2">
                  Mo–Fr 9:00–18:00 Uhr, Sa nach Vereinbarung
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
