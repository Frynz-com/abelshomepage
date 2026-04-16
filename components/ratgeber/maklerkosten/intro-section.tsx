"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function MaklerkostenIntroSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Subtle Section Divider */}
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Editorial Lead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-snug mb-8">
              Die Maklerprovision gehört zu den wichtigsten Kostenfaktoren 
              beim Verkauf einer Immobilie.
            </h2>
            
            <div className="space-y-6 text-graphite leading-relaxed">
              <p>
                Seit Dezember 2020 regelt das Gesetz zur Verteilung der Maklerkosten 
                die Provisionsaufteilung zwischen Käufer und Verkäufer neu. Diese 
                Änderung hat den Markt grundlegend verändert — zum Vorteil der Käufer, 
                aber auch mit Auswirkungen auf Verkäufer.
              </p>
              <p>
                In diesem Ratgeber erklären wir transparent, wie sich Maklerkosten 
                zusammensetzen, wer sie trägt und worauf Sie als Eigentümer achten 
                sollten. Denn: Eine fundierte Entscheidung setzt Verständnis voraus.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="bg-bone p-8 lg:p-10">
              <h3 className="font-serif text-xl text-ink mb-6">In diesem Ratgeber</h3>
              <ul className="space-y-4">
                {[
                  "Was Maklerkosten beinhalten",
                  "Wer die Provision trägt",
                  "Faktoren für die Höhe",
                  "Was ein guter Makler leistet",
                  "Lohnt sich ein Makler?",
                  "Worauf Sie achten sollten"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-gold text-sm mt-0.5">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-graphite">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-line/50">
                <Link 
                  href="/kontakt"
                  className="text-ink text-sm font-medium hover:text-gold transition-colors flex items-center gap-2"
                >
                  Direkt zur Beratung
                  <span>→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
