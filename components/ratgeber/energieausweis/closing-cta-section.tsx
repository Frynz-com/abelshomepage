"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function ClosingCtaSection() {
  return (
    <section className="py-24 lg:py-32 bg-ink text-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm tracking-[0.15em] uppercase mb-6 block">
              Nachster Schritt
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl mb-6 leading-tight">
              Wir kummern uns um Ihren Energieausweis
            </h2>
            <p className="text-xl text-cream/80 leading-relaxed mb-8">
              Als Ihr Immobilienmakler ubernehmen wir die Koordination mit zertifizierten Energieberatern und stellen sicher, dass alle Unterlagen rechtzeitig vorliegen.
            </p>
            
            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-cream/80">Vermittlung qualifizierter Energieberater</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-cream/80">Unterstutzung bei der Unterlagenbeschaffung</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-cream/80">Prufung auf Vollstandigkeit und Gultigkeit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-cream/80">Korrekte Angaben in allen Verkaufsunterlagen</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-ink font-medium hover:bg-gold/90 transition-colors"
              >
                Beratung vereinbaren
              </Link>
              <Link
                href="/immobilie-bewerten"
                className="inline-flex items-center justify-center px-8 py-4 border border-cream/30 text-cream font-medium hover:bg-cream/10 transition-colors"
              >
                Immobilie bewerten lassen
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-cream/5 p-8 lg:p-10"
          >
            <h3 className="font-serif text-xl mb-6">Ihr Ansprechpartner</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-cream/60 text-sm mb-1">Telefon</p>
                <a href="tel:+4921112345678" className="text-lg hover:text-gold transition-colors">
                  +49 211 123 456 78
                </a>
              </div>
              
              <div>
                <p className="text-cream/60 text-sm mb-1">E-Mail</p>
                <a href="mailto:info@abels-immobilien.de" className="text-lg hover:text-gold transition-colors">
                  info@abels-immobilien.de
                </a>
              </div>
              
              <div>
                <p className="text-cream/60 text-sm mb-1">Adresse</p>
                <p className="text-lg">
                  Konigsallee 92<br />
                  40212 Dusseldorf
                </p>
              </div>

              <div className="pt-6 border-t border-cream/10">
                <p className="text-cream/60 text-sm">
                  Oder vereinbaren Sie direkt einen Termin fur ein unverbindliches Erstgesprach.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
