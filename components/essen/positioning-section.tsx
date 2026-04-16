'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function EssenPositioningSection() {
  return (
    <section className='py-24 lg:py-32 bg-cream'>
      <div className='max-w-[1440px] mx-auto px-6 lg:px-20'>
        {/* Subtle Section Divider */}
        <div className='w-16 h-px bg-gold/40 mb-16 lg:mb-20' />

        <div className='max-w-[900px] mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='font-serif text-4xl lg:text-5xl text-ink mb-12 text-center'
          >
            Ihr Ansprechpartner für den Immobilienverkauf in Essen
          </motion.h2>

          <div className='space-y-8 text-graphite leading-relaxed'>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='text-lg'
            >
              Essen zählt zu den vielseitigsten Wohnimmobilienmärkten im Ruhrgebiet und vereint etablierte Premiumlagen mit gefragten Familienstandorten und urbanen Wohnquartieren. Entsprechend hoch sind die Erwartungen von Eigentümern an Marktkenntnis, Vermarktungsqualität und Verhandlungssicherheit. Abels Immobilien begleitet Verkäufe in Essen mit einem strukturierten, persönlichen und diskreten Ansatz – von der fundierten Wertermittlung bis zum Notartermin.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='text-lg'
            >
              Ob hochwertige Wohnung in Rüttenscheid, Familienhaus in Bredeney, Villa in Heisingen oder gepflegte Immobilie in einer bevorzugten Lage: Entscheidend ist eine Vermarktung, die zur Lage, zur Zielgruppe und zum Charakter der Immobilie passt. Genau darauf ist unser Ansatz ausgerichtet.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
