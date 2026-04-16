'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '1',
    title: 'Erstgespräch',
    description: 'Im ersten Gespräch klären wir Ausgangssituation, Immobilientyp, Ziele und Zeitrahmen.',
  },
  {
    number: '2',
    title: 'Wertermittlung',
    description: 'Anschließend erfolgt eine fundierte Einordnung des Objekts im aktuellen Essener Marktumfeld.',
  },
  {
    number: '3',
    title: 'Unterlagen und Vermarktungskonzept',
    description: 'Wir strukturieren die relevanten Unterlagen und entwickeln ein zur Immobilie passendes Vermarktungskonzept.',
  },
  {
    number: '4',
    title: 'Vermarktung',
    description: 'Je nach Objekt erfolgt die Vermarktung offen oder diskret – immer mit passender Ansprache und hochwertiger Präsentation.',
  },
  {
    number: '5',
    title: 'Besichtigungen und Verhandlungen',
    description: 'Wir koordinieren Besichtigungen, qualifizieren Interessenten und begleiten Verhandlungen mit klarem Blick auf Ziel und Markt.',
  },
  {
    number: '6',
    title: 'Notartermin und Übergabe',
    description: 'Zum Abschluss begleiten wir den Prozess bis zur notariellen Beurkundung und sorgen für einen strukturierten Übergang.',
  },
]

export function EssenProcessSection() {
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
          So läuft der Immobilienverkauf in Essen ab
        </motion.h2>

        {/* Process Steps */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className='group'
            >
              <div>
                <div className='mb-6'>
                  <span className='inline-flex items-center justify-center w-12 h-12 bg-ink text-cream font-serif text-2xl'>
                    {step.number}
                  </span>
                </div>
                <h3 className='font-serif text-2xl text-ink mb-3'>
                  {step.title}
                </h3>
                <p className='text-graphite leading-relaxed'>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
