"use client"

import { motion } from "framer-motion"

export function WerZahltSection() {
  return (
    <section className="py-24 lg:py-32 bg-bone border-t border-line/40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <span className="text-gold text-sm tracking-[0.15em] uppercase mb-4 block">
              Gesetzliche Regelung seit 2020
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-snug mb-8">
              Wer trägt die Maklerkosten?
            </h2>

            <div className="space-y-6 text-graphite leading-relaxed">
              <p>
                Seit dem 23. Dezember 2020 gilt das „Gesetz über die Verteilung
                der Maklerkosten bei der Vermittlung von Kaufverträgen über
                Wohnungen und Einfamilienhäuser". Es regelt die Provisionsaufteilung
                zwischen Käufer und Verkäufer grundlegend neu.
              </p>

              <div className="py-6 border-y border-line/40">
                <h3 className="font-serif text-xl text-ink mb-4">Die wichtigsten Regeln:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">→</span>
                    <span>Beauftragt der Verkäufer den Makler, kann er maximal 50% der Provision auf den Käufer übertragen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">→</span>
                    <span>Der Verkäufer muss seinen Anteil zuerst bezahlt haben, bevor der Käufer zahlen muss</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">→</span>
                    <span>Gilt nur für Wohnungen und Einfamilienhäuser, nicht für Gewerbeobjekte oder Mehrfamilienhäuser</span>
                  </li>
                </ul>
              </div>

              <p>
                In der Praxis bedeutet das: Bei einem üblichen Provisionssatz von
                7,14% (brutto) zahlen Verkäufer und Käufer jeweils 3,57%. Diese
                hälftige Teilung ist heute der Standard im Wohnimmobilienmarkt.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Example Calculation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="bg-cream p-8 lg:p-10 border border-line/40">
              <h3 className="font-serif text-xl text-ink mb-6">Beispielrechnung</h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-line/40">
                  <span className="text-graphite">Kaufpreis</span>
                  <span className="text-ink font-medium">750.000 EUR</span>
                </div>
                <div className="flex justify-between py-3 border-b border-line/40">
                  <span className="text-graphite">Provision gesamt (7,14%)</span>
                  <span className="text-ink font-medium">53.550 EUR</span>
                </div>
                <div className="flex justify-between py-3 border-b border-line/40">
                  <span className="text-graphite">Anteil Verkäufer (3,57%)</span>
                  <span className="text-gold font-medium">26.775 EUR</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-graphite">Anteil Käufer (3,57%)</span>
                  <span className="text-ink font-medium">26.775 EUR</span>
                </div>
              </div>

              <p className="text-graphite text-sm leading-relaxed">
                Die Provision wird auf den Netto-Kaufpreis berechnet. Die 3,57%
                entsprechen 3% netto zzgl. 19% MwSt.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
