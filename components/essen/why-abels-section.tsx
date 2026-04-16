'use client'

import { motion } from 'framer-motion'

const arguments_ = [
  {
    title: 'Persönliche Betreuung',
    description: 'Wir begleiten Eigentümer persönlich und mit klarer Kommunikation durch alle Phasen des Verkaufs.',
  },
  {
    title: 'Lokales Marktverständnis',
    description: 'Essen ist ein Markt mit sehr unterschiedlichen Mikrolagen. Genau diese Unterschiede fließen in unsere Einschätzung und Vermarktung ein.',
  },
  {
    title: 'Hochwertige Präsentation',
    description: 'Eine gute Immobilie verdient eine Darstellung, die ihrem Anspruch gerecht wird – sachlich, hochwertig und überzeugend.',
  },
  {
    title: 'Diskretion',
    description: 'Gerade im gehobenen Segment ist Diskretion häufig ein entscheidender Faktor. Wir berücksichtigen diesen Anspruch konsequent.',
  },
  {
    title: 'Qualifizierte Käuferansprache',
    description: 'Nicht maximale Reichweite ist immer das Ziel, sondern die richtige Zielgruppe mit echter Abschlusswahrscheinlichkeit.',
  },
  {
    title: 'Strukturierter Verkaufsprozess',
    description: 'Vom Erstgespräch bis zum Notartermin sorgen wir für klare Abläufe und eine professionelle Begleitung.',
  },
]

export function EssenWhyAbelsSection() {
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
            Warum Eigentümer in Essen mit Abels Immobilien arbeiten
          </h2>
          <p className='text-lg text-graphite max-w-[800px] leading-relaxed'>
            Der Verkauf einer Immobilie ist kein Standardprozess. Entscheidend ist, wie präzise Lage, Zielgruppe, Marktumfeld und Vermarktung zusammengeführt werden.
          </p>
        </motion.div>

        {/* Arguments Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
          {arguments_.map((arg, index) => (
            <motion.div
              key={arg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className='group'
            >
              <div>
                <h3 className='font-serif text-2xl text-ink mb-3 group-hover:text-gold transition-colors duration-300'>
                  {arg.title}
                </h3>
                <p className='text-graphite leading-relaxed'>
                  {arg.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
