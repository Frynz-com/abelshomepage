"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function RatgeberVerkaufenHeroSection() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            {/* Eyebrow */}
            <p className="text-gold text-xs uppercase tracking-[0.25em] mb-6">
              Ratgeber für Eigentümer
            </p>

            {/* H1 */}
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-ink leading-[1.08] mb-8 text-balance">
              Immobilie verkaufen: Der vollständige Leitfaden für Eigentümer
            </h1>

            {/* Lead */}
            <p className="text-graphite text-lg lg:text-xl leading-relaxed max-w-[640px] mb-10">
              Von der Vorbereitung über die Preisfindung bis zum Notartermin — alles, was Sie wissen müssen, um Ihre Wohnung, Ihr Haus oder Ihre Villa erfolgreich und stressfrei zu verkaufen.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/bewertung"
                className="inline-flex items-center justify-center bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium hover:bg-graphite transition-all duration-300"
              >
                Kostenlose Bewertung
              </Link>
              <Link
                href="#ablauf"
                className="inline-flex items-center justify-center border border-ink text-ink px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium hover:bg-ink hover:text-cream transition-all duration-300"
              >
                Zum Ablauf
              </Link>
            </div>
          </motion.div>

          {/* Right: Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="border border-line bg-surface p-8 lg:p-10">
              <h2 className="font-serif text-xl text-ink mb-6">Auf einen Blick</h2>
              <ul className="space-y-4 text-sm text-graphite">
                <li className="flex items-start gap-3">
                  <span className="text-gold font-medium">01</span>
                  <span>5 Erfolgsfaktoren für den optimalen Verkauf</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-medium">02</span>
                  <span>6 Schritte vom Entschluss bis zur Übergabe</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-medium">03</span>
                  <span>Die 5 häufigsten Fehler — und wie Sie sie vermeiden</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-medium">04</span>
                  <span>Makler oder privat? Eine ehrliche Einschätzung</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
