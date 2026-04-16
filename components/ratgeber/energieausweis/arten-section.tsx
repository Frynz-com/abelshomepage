"use client"

import { motion } from "framer-motion"

export function ArtenSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="text-gold text-sm tracking-[0.15em] uppercase mb-4 block">
            Die Unterschiede
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-ink mb-6 leading-tight">
            Verbrauchsausweis vs. Bedarfsausweis
          </h2>
          <p className="text-xl text-graphite leading-relaxed">
            Es gibt zwei Arten von Energieausweisen — mit unterschiedlichen Grundlagen, Kosten und Aussagekraften.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Verbrauchsausweis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-bone p-8 lg:p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold text-sm tracking-[0.1em]">Option A</span>
              <div className="flex-1 h-px bg-line" />
            </div>
            <h3 className="font-serif text-2xl text-ink mb-4">Verbrauchsausweis</h3>
            <p className="text-graphite leading-relaxed mb-6">
              Basiert auf dem tatsachlichen Energieverbrauch der letzten drei Jahre. Gunstiger und schneller zu erstellen, aber abhangig vom individuellen Nutzerverhalten.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-sm mt-0.5">+</span>
                <span className="text-graphite text-sm">Kostengunstig (ca. 50-100 Euro)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-sm mt-0.5">+</span>
                <span className="text-graphite text-sm">Schnelle Erstellung moglich</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-sm mt-0.5">-</span>
                <span className="text-graphite text-sm">Abhangig vom Nutzerverhalten</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-sm mt-0.5">-</span>
                <span className="text-graphite text-sm">Weniger aussagekraftig</span>
              </div>
            </div>

            <div className="pt-6 border-t border-line">
              <p className="text-stone text-sm">
                <strong className="text-ink">Geeignet fur:</strong> Gebaude mit mehr als 4 Wohneinheiten, Baujahr nach 1977 oder Gebaude, die bereits energetisch modernisiert wurden.
              </p>
            </div>
          </motion.div>

          {/* Bedarfsausweis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-ink text-cream p-8 lg:p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold text-sm tracking-[0.1em]">Option B</span>
              <div className="flex-1 h-px bg-cream/20" />
            </div>
            <h3 className="font-serif text-2xl mb-4">Bedarfsausweis</h3>
            <p className="text-cream/80 leading-relaxed mb-6">
              Basiert auf einer technischen Analyse des Gebaudes (Bausubstanz, Heizung, Dammung). Unabhangig vom Nutzerverhalten und daher aussagekraftiger.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-sm mt-0.5">+</span>
                <span className="text-cream/80 text-sm">Objektive, nutzerunabhangige Bewertung</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-sm mt-0.5">+</span>
                <span className="text-cream/80 text-sm">Enthalt Modernisierungsempfehlungen</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-sm mt-0.5">-</span>
                <span className="text-cream/80 text-sm">Teurer (ca. 300-500 Euro)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-sm mt-0.5">-</span>
                <span className="text-cream/80 text-sm">Vor-Ort-Begehung erforderlich</span>
              </div>
            </div>

            <div className="pt-6 border-t border-cream/20">
              <p className="text-cream/60 text-sm">
                <strong className="text-cream">Pflicht fur:</strong> Gebaude mit weniger als 5 Wohneinheiten und Baujahr vor 1977, sofern nicht bereits modernisiert.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
