"use client"

import { motion } from "framer-motion"

export function RatgeberVerkaufenIntroSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Subtle Divider */}
        <div className="w-16 h-px bg-gold/40 mb-16" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Editorial Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-[1.15] mb-8">
              Der Verkauf einer Immobilie ist eine der größten finanziellen Entscheidungen im Leben.
            </h2>
            <div className="prose prose-lg text-graphite leading-relaxed space-y-6">
              <p>
                Ob Sie Ihre Eigentumswohnung verkaufen, ein geerbtes Haus veräußern oder eine Villa in Premium-Lage anbieten — die Grundprinzipien eines erfolgreichen Verkaufs bleiben dieselben: fundierte Vorbereitung, realistische Preiseinschätzung und professionelle Umsetzung.
              </p>
              <p>
                In diesem Ratgeber erfahren Sie, wie der Verkaufsprozess tatsächlich abläuft, welche Entscheidungen Sie treffen müssen und worauf es wirklich ankommt. Keine Verkaufsfloskeln, sondern praxisnahes Wissen aus über 850 erfolgreichen Vermittlungen.
              </p>
            </div>
          </motion.div>

          {/* Right: Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="bg-bone p-8 lg:p-10">
              <h3 className="font-serif text-xl text-ink mb-6">Was Sie in diesem Ratgeber erfahren</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-medium shrink-0 mt-0.5">✓</span>
                  <span className="text-graphite">Die 5 wichtigsten Erfolgsfaktoren für einen optimalen Verkaufspreis</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-medium shrink-0 mt-0.5">✓</span>
                  <span className="text-graphite">Schritt-für-Schritt: Der komplette Ablauf von A bis Z</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-medium shrink-0 mt-0.5">✓</span>
                  <span className="text-graphite">Die häufigsten Fehler — und wie Sie sie vermeiden</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-medium shrink-0 mt-0.5">✓</span>
                  <span className="text-graphite">Wann ein Makler sinnvoll ist (und wann nicht)</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-medium shrink-0 mt-0.5">✓</span>
                  <span className="text-graphite">Welche Unterlagen Sie wirklich benötigen</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
