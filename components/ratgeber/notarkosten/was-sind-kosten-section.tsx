"use client"

import { motion } from "framer-motion"

export function NotarkostenWasSindKostenSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Subtle Section Divider */}
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Section Label */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-sm tracking-[0.15em] uppercase block mb-4">
                Kosten im Detail
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-tight">
                Was kostet der Notar beim Immobilienverkauf?
              </h2>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-xl text-ink leading-relaxed">
                Die Notarkosten beim Immobilienverkauf betragen in der Regel 
                etwa 1,0 bis 1,5 Prozent des Kaufpreises. Diese Gebuhren sind 
                gesetzlich im Gerichts- und Notarkostengesetz (GNotKG) festgelegt 
                und nicht verhandelbar.
              </p>

              <div className="bg-surface p-8 lg:p-10">
                <h3 className="font-serif text-xl text-ink mb-6">Beispielrechnung</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-line/50">
                    <span className="text-graphite">Kaufpreis</span>
                    <span className="text-ink font-medium">500.000 EUR</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-line/50">
                    <span className="text-graphite">Notargebuhren (ca. 1,0 %)</span>
                    <span className="text-ink font-medium">ca. 5.000 EUR</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-line/50">
                    <span className="text-graphite">Grundbuchkosten (ca. 0,5 %)</span>
                    <span className="text-ink font-medium">ca. 2.500 EUR</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-ink font-medium">Gesamtkosten</span>
                    <span className="text-ink font-serif text-xl">ca. 7.500 EUR</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-graphite leading-relaxed">
                Die genaue Hohe hangt vom Kaufpreis ab und kann je nach 
                Komplexitat des Vertrags variieren. Bei besonders aufwandigen 
                Vertragen - etwa bei Erbengemeinschaften oder komplexen 
                Finanzierungsstrukturen - konnen zusatzliche Gebuhren anfallen.
              </p>

              <p className="text-lg text-graphite leading-relaxed">
                Wichtig: Die Grundbuchkosten sind in den obigen Zahlen bereits 
                enthalten. Sie werden zwar uber den Notar abgewickelt, gehen 
                aber an das Grundbuchamt.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
