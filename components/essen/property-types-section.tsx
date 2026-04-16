'use client'

import { motion } from 'framer-motion'

const propertyTypes = [
  {
    title: 'Eigentumswohnungen',
    description: 'Von der urbanen Stadtwohnung bis zur hochwertigen Eigentumswohnung begleiten wir Eigentümer bei der strukturierten Vermarktung von Wohnungen in Essen.',
  },
  {
    title: 'Häuser',
    description: 'Einfamilienhäuser und Stadthäuser erfordern eine andere Ansprache als klassische Wohnungsangebote. Gerade bei familienorientierten Zielgruppen ist eine präzise Positionierung entscheidend.',
  },
  {
    title: 'Villen und hochwertige Wohnimmobilien',
    description: 'Im gehobenen Segment zählen Diskretion, Präsentationsqualität und passgenaue Käuferansprache besonders stark. Genau darauf ist unsere Vermarktung ausgerichtet.',
  },
  {
    title: 'Anlageimmobilien',
    description: 'Auch bei Anlageobjekten kommt es auf Marktverständnis, Käuferprofil und eine realistische Einordnung der Renditeerwartung an.',
  },
  {
    title: 'Erbimmobilien',
    description: 'Gerade bei geerbten Immobilien sind neben Marktpreis und Verkauf auch Abstimmung, Unterlagen und Entscheidungsstruktur wichtig. Wir begleiten diesen Prozess mit Klarheit und Ruhe.',
  },
  {
    title: 'Diskrete Off-Market-Verkäufe',
    description: 'Nicht jede Immobilie soll öffentlich sichtbar vermarktet werden. Für ausgewählte Objekte bieten wir diskrete Vermarktungsansätze mit kontrollierter Käuferansprache.',
  },
]

export function EssenPropertyTypesSection() {
  return (
    <section className='py-24 lg:py-32 bg-cream'>
      <div className='max-w-[1440px] mx-auto px-6 lg:px-20'>
        {/* Subtle Section Divider */}
        <div className='w-16 h-px bg-gold/40 mb-16 lg:mb-20' />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-12 lg:mb-16'
        >
          <h2 className='font-serif text-4xl lg:text-5xl text-ink mb-6'>
            Für welche Immobilien wir in Essen tätig sind
          </h2>
          <p className='text-lg text-graphite max-w-[800px] leading-relaxed'>
            Nicht jede Immobilie braucht dieselbe Vermarktungsstrategie. Je nach Lage, Objektart, Zielgruppe und Diskretionsbedarf entwickeln wir einen passenden Verkaufsansatz.
          </p>
        </motion.div>

        {/* Property Types Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {propertyTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='bg-white border border-line/30 p-8 lg:p-10 hover:border-gold/50 hover:shadow-lg transition-all duration-500 h-full flex flex-col'>
                <h3 className='font-serif text-xl lg:text-2xl text-ink mb-4'>
                  {type.title}
                </h3>
                <p className='text-graphite leading-relaxed flex-grow'>
                  {type.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
