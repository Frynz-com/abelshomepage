"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function RatgeberVerkaufenClosingCtaSection() {
  return (
    <section className="py-24 lg:py-32 bg-bone border-t border-line/40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gold text-xs uppercase tracking-[0.25em] mb-6">
              Der nächste Schritt
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[1.1] mb-8">
              Bereit für ein unverbindliches Gespräch?
            </h2>
            <p className="text-graphite text-lg leading-relaxed mb-10 max-w-[500px]">
              Ob Sie konkrete Verkaufsabsichten haben oder erst einmal den Wert Ihrer Immobilie erfahren möchten — wir sind für Sie da. Kostenfrei, diskret und ohne Verpflichtung.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/bewertung"
                className="inline-flex items-center justify-center bg-cream text-ink px-10 py-5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-white transition-all duration-300"
              >
                Kostenlose Bewertung
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center border border-line text-ink/70 px-10 py-5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-cream transition-all duration-300"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="border border-line/40 p-10 lg:p-12">
              <h3 className="font-serif text-2xl text-ink mb-8">Direkter Kontakt</h3>

              <div className="space-y-6">
                <a href="tel:+492115591751" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-line/40 flex items-center justify-center group-hover:border-gold transition-colors">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="block text-xs text-graphite uppercase tracking-[0.1em] mb-1">Telefon</span>
                    <span className="block text-ink font-medium group-hover:text-gold transition-colors">+49 211 5591751</span>
                  </div>
                </a>

                <a href="mailto:info@abels-immobilien.de" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-line/40 flex items-center justify-center group-hover:border-gold transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="block text-xs text-graphite uppercase tracking-[0.1em] mb-1">E-Mail</span>
                    <span className="block text-ink font-medium group-hover:text-gold transition-colors">info@abels-immobilien.de</span>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-line/40 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="block text-xs text-graphite uppercase tracking-[0.1em] mb-1">Hauptsitz</span>
                    <span className="block text-graphite">Alt Niederkassel 124, 40547 Düsseldorf</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-line/40">
                <p className="text-graphite text-sm">
                  7 Standorte in Deutschland: Düsseldorf, München, Grünwald, Hamburg, Frankfurt, Essen, Stuttgart
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
