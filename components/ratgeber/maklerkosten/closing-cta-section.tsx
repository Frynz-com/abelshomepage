"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function MaklerkostenClosingCtaSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Subtle Section Divider */}
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-snug mb-6">
              Transparente Beratung statt Verkaufsdruck
            </h2>
            <p className="text-graphite leading-relaxed mb-8">
              Wir nehmen uns Zeit für ein erstes Gespräch — ohne Verpflichtung. 
              Erfahren Sie, wie wir arbeiten, welche Leistungen wir bieten und 
              ob wir der richtige Partner für Ihren Immobilienverkauf sind.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-ink text-cream font-medium hover:bg-gold transition-colors duration-300"
              >
                Kostenfreies Erstgespräch
              </Link>
              <Link
                href="/immobilie-bewerten"
                className="inline-flex items-center justify-center px-8 py-4 border border-ink text-ink font-medium hover:bg-ink hover:text-cream transition-colors duration-300"
              >
                Immobilie bewerten
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-bone p-8 lg:p-10">
              <h3 className="font-serif text-xl text-ink mb-6">
                Sprechen Sie mit uns
              </h3>
              
              <div className="space-y-6">
                <div>
                  <span className="text-stone text-sm uppercase tracking-wider block mb-2">
                    Telefon
                  </span>
                  <a 
                    href="tel:+4921154068430"
                    className="text-ink text-lg hover:text-gold transition-colors"
                  >
                    +49 211 54 06 84 30
                  </a>
                </div>
                
                <div>
                  <span className="text-stone text-sm uppercase tracking-wider block mb-2">
                    E-Mail
                  </span>
                  <a 
                    href="mailto:info@abels-immobilien.com"
                    className="text-ink text-lg hover:text-gold transition-colors"
                  >
                    info@abels-immobilien.com
                  </a>
                </div>
                
                <div>
                  <span className="text-stone text-sm uppercase tracking-wider block mb-2">
                    Erreichbarkeit
                  </span>
                  <p className="text-graphite">
                    Mo – Fr: 9:00 – 18:00 Uhr<br />
                    Termine nach Vereinbarung
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-line/50">
                <p className="text-graphite text-sm">
                  Alle Erstgespräche sind kostenfrei und unverbindlich.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
