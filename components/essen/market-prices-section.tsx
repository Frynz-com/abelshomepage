'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, TrendingDown } from 'lucide-react'
import React, { useState, useEffect } from 'react'

interface MarketCard {
  district: string
  price: string
  trend: 'up' | 'down' | 'stable'
  trendText: string
  description: string
}

const marketData: MarketCard[] = [
  {
    district: 'Bredeney',
    price: '5.500–8.500',
    trend: 'up',
    trendText: 'stabil bis leicht steigend',
    description: 'Bredeney zählt zu den begehrtesten Wohnlagen Essens. Großzügige Grundstücke, hochwertige Häuser und ein etabliertes Umfeld prägen das Marktbild.',
  },
  {
    district: 'Rüttenscheid',
    price: '4.500–7.000',
    trend: 'stable',
    trendText: 'stabil',
    description: 'Rüttenscheid verbindet urbanes Wohnen, gefragte Altbaustrukturen und hohe Lebensqualität. Besonders hochwertige Wohnungen und gepflegte Bestandsobjekte bleiben hier stark nachgefragt.',
  },
  {
    district: 'Heisingen',
    price: '4.800–7.500',
    trend: 'up',
    trendText: 'leicht steigend',
    description: 'Heisingen steht für grüne Wohnlagen, Familienqualität und Nähe zum Baldeneysee. Vor allem gut positionierte Häuser und hochwertige Wohnimmobilien profitieren hier von stabiler Nachfrage.',
  },
  {
    district: 'Werden',
    price: '4.700–7.200',
    trend: 'stable',
    trendText: 'stabil',
    description: 'Werden verbindet historischen Charakter, Wohnqualität und ein attraktives Umfeld. Gerade hochwertige Wohnungen und Häuser in guten Lagen erzielen hier solide Preise.',
  },
  {
    district: 'Stadtwald',
    price: '4.800–7.800',
    trend: 'up',
    trendText: 'stabil bis leicht steigend',
    description: 'Stadtwald zählt zu den bevorzugten Wohnlagen für Käufer, die Ruhe, Grün und gute Anbindung verbinden möchten. Familiengeeignete Häuser und hochwertige Wohnungen stoßen hier auf konstantes Interesse.',
  },
  {
    district: 'Kettwig',
    price: '4.000–6.500',
    trend: 'stable',
    trendText: 'stabil',
    description: 'Kettwig steht für kleinteilige Wohnqualität, historischen Charme und einen eigenständigen Marktcharakter. Besonders gepflegte Häuser und besondere Bestandsimmobilien werden hier gut aufgenommen.',
  },
]

function CountUpNumber({ target }: { target: number }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let start = 0
    const end = target
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setValue(end)
        clearInterval(timer)
      } else {
        setValue(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [target])

  return <>{value.toLocaleString('de-DE')}</>
}

export function EssenMarketPricesSection() {
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
          <h2 className='font-serif text-4xl lg:text-5xl text-ink mb-8'>
            Immobilienpreise Essen — Stand Q1 2026
          </h2>
          <p className='text-lg text-graphite max-w-[800px] leading-relaxed'>
            Der Essener Immobilienmarkt ist kein einheitlicher Markt, sondern besteht aus sehr unterschiedlichen Mikrolagen mit jeweils eigener Dynamik. Eine präzise Einschätzung des erzielbaren Verkaufspreises erfordert deshalb immer die Kombination aus Lage, Objektart, Zustand, Zuschnitt und Zielgruppe. Die folgenden Werte dienen als orientierende Markteinordnung für ausgewählte Essener Lagen.
          </p>
        </motion.div>

        {/* Market Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16'>
          {marketData.map((card, index) => (
            <motion.div
              key={card.district}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='bg-white border border-line/30 p-8 lg:p-10 hover:border-gold/50 hover:shadow-lg transition-all duration-500'>
                <div className='mb-6'>
                  <h3 className='font-serif text-2xl lg:text-3xl text-ink mb-3'>
                    {card.district}
                  </h3>
                  <div className='flex items-baseline gap-2 mb-2'>
                    <span className='text-4xl font-light text-ink'>
                      <CountUpNumber target={parseInt(card.price.split('–')[0])} />
                    </span>
                    <span className='text-xl text-graphite'>€/m²</span>
                  </div>
                  <p className='text-sm text-graphite/70'>{card.price} €/m²</p>
                </div>

                <div className='mb-6 pb-6 border-b border-line/20'>
                  <div className='flex items-center gap-2 mb-2'>
                    {card.trend === 'up' ? (
                      <TrendingUp className='w-4 h-4 text-gold animate-pulse' />
                    ) : card.trend === 'down' ? (
                      <TrendingDown className='w-4 h-4 text-ink/40' />
                    ) : (
                      <div className='w-4 h-4 rounded-full bg-stone/40' />
                    )}
                    <span className='text-sm font-medium text-graphite'>
                      {card.trendText}
                    </span>
                  </div>
                </div>

                <p className='text-graphite leading-relaxed text-sm'>
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-12 lg:mb-16'
        >
          <p className='text-sm text-graphite/70 italic max-w-[900px]'>
            Alle Angaben sind ca.-Werte und dienen der groben Orientierung. Sie ersetzen keine individuelle Wertermittlung. Der tatsächlich erzielbare Marktpreis hängt immer von Lage, Zustand, Ausstattung, Objektart und aktueller Nachfrage ab.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href='/bewertung'
            className='inline-block px-8 py-4 bg-ink text-cream font-medium hover:bg-ink/90 transition-colors duration-300'
          >
            Jetzt Immobilienwert in Essen einschätzen lassen
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
