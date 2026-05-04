"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function NotarkostenClosingCtaSection() {
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
            <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-tight mb-6">
              Sie planen einen Immobilienverkauf?
            </h2>
            <p className="text-lg text-graphite leading-relaxed mb-8">
              Wir begleiten Sie durch den gesamten Prozess - von der ersten 
              Bewertung bis zum Notartermin. Profitieren Sie von unserer 
              Erfahrung und unserem Netzwerk aus qualifizierten Notaren.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-ink text-cream font-medium hover:bg-gold transition-colors duration-300"
              >
                Beratungsgesprach vereinbaren
              </Link>
              <Link
                href="/immobilie-bewerten"
                className="inline-flex items-center justify-center px-8 py-4 border border-ink text-ink font-medium hover:bg-ink hover:text-cream transition-colors duration-300"
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
            className="bg-cream border border-line/50 p-10 lg:p-12"
          >
            <h3 className="font-serif text-2xl text-ink mb-6">Direkter Kontakt</h3>

            <div className="space-y-6">
              <div>
                <span className="text-graphite text-sm block mb-1">Telefon</span>
                <a href="tel:+492115591751" className="text-xl text-ink hover:text-gold transition-colors">
                  +49 211 5591751
                </a>
              </div>

              <div>
                <span className="text-graphite text-sm block mb-1">E-Mail</span>
                <a href="mailto:info@abels-immobilien.com" className="text-xl text-ink hover:text-gold transition-colors">
                  info@abels-immobilien.com
                </a>
              </div>

              <div>
                <span className="text-graphite text-sm block mb-1">Adresse</span>
                <p className="text-graphite">
                  Abels Immobilien<br />
                  Dusseldorf | Munchen | Hamburg<br />
                  Frankfurt | Essen
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-line/40">
              <p className="text-graphite text-sm">
                Kostenfreie Erstberatung. Unverbindlich und diskret.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Related Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-line/50"
        >
          <h3 className="font-serif text-xl text-ink mb-6">Weiterfuhrende Ratgeber</h3>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/immobilie-verkaufen"
              className="text-graphite hover:text-gold transition-colors underline underline-offset-4"
            >
              Immobilie verkaufen: Der komplette Leitfaden
            </Link>
            <span className="text-line">|</span>
            <Link
              href="/ratgeber/maklerkosten"
              className="text-graphite hover:text-gold transition-colors underline underline-offset-4"
            >
              Maklerkosten beim Verkauf
            </Link>
            <span className="text-line">|</span>
            <Link
              href="/ratgeber/energieausweis"
              className="text-graphite hover:text-gold transition-colors underline underline-offset-4"
            >
              Energieausweis-Pflicht
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
