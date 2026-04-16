'use client'

import { motion } from 'framer-motion'

const neighborhoods = [
  {
    name: 'Bredeney',
    description: 'Bredeney steht seit Jahren für eine der begehrtesten Wohnlagen Essens. Großzügige Grundstücke, hochwertige Villen und ein gehobenes Umfeld machen den Stadtteil besonders attraktiv für anspruchsvolle Käufer.',
  },
  {
    name: 'Rüttenscheid',
    description: 'Rüttenscheid verbindet Urbanität, Lebensqualität und konstante Nachfrage. Besonders hochwertige Wohnungen, Altbauobjekte und gepflegte Bestandsimmobilien profitieren hier von einem starken Umfeld.',
  },
  {
    name: 'Heisingen',
    description: 'Heisingen zählt zu den bevorzugten Lagen für Käufer, die Familienqualität, Ruhe und Seenähe verbinden möchten. Gut positionierte Häuser und hochwertige Wohnimmobilien sind hier besonders gefragt.',
  },
  {
    name: 'Werden',
    description: 'Werden gehört zu den charakterstärksten Wohnlagen Essens. Historische Struktur, gewachsene Nachbarschaften und ein hochwertiges Umfeld machen diese Lage besonders attraktiv.',
  },
  {
    name: 'Stadtwald',
    description: 'Stadtwald steht für grünes Wohnen, Familienorientierung und nachhaltige Nachfrage. Besonders Käufer mit langfristigem Qualitätsanspruch interessieren sich für diese Lage.',
  },
  {
    name: 'Kettwig',
    description: 'Kettwig verbindet kleinstädtischen Charme, historische Bausubstanz und hohe Wohnqualität. Gerade besondere Häuser und stilvolle Bestandsimmobilien stoßen hier auf ein qualitätsorientiertes Interessentenprofil.',
  },
  {
    name: 'Bredeneyer Hanglagen',
    description: 'Die hochwertigen Hanglagen in und um Bredeney zählen zu den attraktivsten Mikrolagen Essens. Aussicht, Grundstücksqualität und Exklusivität machen diese Bereiche besonders interessant für hochwertige Vermarktung.',
  },
  {
    name: 'Baldeneysee-nahe Wohnlagen',
    description: 'Wohnlagen in Seenähe genießen in Essen eine besondere Marktstellung. Gerade hochwertige Häuser und Wohnungen profitieren hier von Lagequalität, Freizeitwert und begrenztem Angebot.',
  },
]

export function EssenNeighborhoodsSection() {
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
            Gefragte Wohnlagen in Essen
          </h2>
          <p className='text-lg text-graphite max-w-[800px] leading-relaxed'>
            In Essen entscheidet die Mikrolage oft stärker über Marktansprache und Preisniveau als der Stadtteilname allein. Deshalb betrachten wir jede Immobilie im Zusammenhang mit ihrem genauen Umfeld, ihrer Zielgruppe und ihrer Positionierung im lokalen Markt.
          </p>
        </motion.div>

        {/* Neighborhoods Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
          {neighborhoods.map((neighborhood, index) => (
            <motion.div
              key={neighborhood.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='bg-white border border-line/30 p-8 lg:p-10 hover:border-gold/50 hover:shadow-lg transition-all duration-500 h-full'>
                <h3 className='font-serif text-2xl text-ink mb-4'>
                  {neighborhood.name}
                </h3>
                <p className='text-graphite leading-relaxed'>
                  {neighborhood.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
