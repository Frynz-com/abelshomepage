'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: '1',
    title: 'Immobilienbewertung Essen',
    description: 'Eine fundierte Wertermittlung ist die Grundlage jeder erfolgreichen Verkaufsstrategie. Wir betrachten Lage, Objektqualität, Zielgruppe und Marktumfeld, um eine realistische und marktorientierte Einordnung vorzunehmen.',
  },
  {
    number: '2',
    title: 'Verkaufsstrategie und Positionierung',
    description: 'Jede Immobilie braucht eine Vermarktung, die zu Lage, Segment und Käufergruppe passt. Deshalb entwickeln wir für jedes Objekt eine individuelle Strategie statt standardisierter Vermarktung.',
  },
  {
    number: '3',
    title: 'Exposé und hochwertige Präsentation',
    description: 'Die Präsentation entscheidet maßgeblich über Wahrnehmung und Nachfrage. Wir legen Wert auf eine hochwertige Darstellung, klare Kommunikation und ein professionelles Gesamtbild.',
  },
  {
    number: '4',
    title: 'Diskrete Vermarktung',
    description: 'Für ausgewählte Immobilien kann ein diskreter Vermarktungsansatz sinnvoll sein. In diesen Fällen erfolgt die Ansprache gezielt und kontrolliert statt breit gestreut.',
  },
  {
    number: '5',
    title: 'Besichtigungen und Verhandlungen',
    description: 'Besichtigungen und Preisverhandlungen sind sensible Phasen im Verkaufsprozess. Wir begleiten diese Schritte mit professioneller Vorbereitung und klarer Kommunikation.',
  },
  {
    number: '6',
    title: 'Begleitung bis zum Notartermin',
    description: 'Auch in der Abschlussphase sorgen wir für Struktur, Verlässlichkeit und einen reibungslosen Prozess bis zur notariellen Beurkundung und Übergabe.',
  },
]

export function EssenServicesSection() {
  return (
    <section className='py-24 lg:py-32 bg-cream'>
      <div className='max-w-[1440px] mx-auto px-6 lg:px-20'>
        {/* Subtle Section Divider */}
        <div className='w-16 h-px bg-gold/40 mb-16 lg:mb-20' />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='font-serif text-4xl lg:text-5xl text-ink mb-12'
        >
          Unsere Leistungen für Eigentümer in Essen
        </motion.h2>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className='group'
            >
              <div>
                <span className='font-serif text-5xl lg:text-6xl text-gold/60 mb-5 block leading-none font-bold'>
                  0{service.number}
                </span>
                <h3 className='font-serif text-2xl lg:text-3xl text-ink mb-3 group-hover:text-gold transition-colors duration-300'>
                  {service.title}
                </h3>
                <p className='text-graphite leading-relaxed'>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
