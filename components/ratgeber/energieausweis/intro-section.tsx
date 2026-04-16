"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function IntroSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h2 className="font-serif text-3xl lg:text-4xl text-ink mb-8 leading-tight">
              Was Eigentumer uber den Energieausweis wissen sollten
            </h2>
            
            <div className="prose prose-lg text-graphite leading-relaxed space-y-6">
              <p>
                Der Energieausweis ist mehr als nur ein burokratisches Dokument — er ist ein gesetzlich vorgeschriebenes Informationsinstrument, das potenziellen Kaufern oder Mietern Auskunft uber die energetische Qualitat einer Immobilie gibt.
              </p>
              <p>
                Seit der Einfuhrung des Gebaude-Energie-Gesetzes (GEG) im Jahr 2020 gelten strenge Regelungen fur Eigentumer: Wer eine Immobilie verkaufen oder vermieten mochte, muss einen gultigen Energieausweis vorlegen konnen — und zwar spatestens bei der ersten Besichtigung.
              </p>
              <p>
                In diesem Ratgeber erklaren wir, welche Arten von Energieausweisen es gibt, wann welcher benotigt wird, und wie wir Sie als <Link href="/immobilie-verkaufen" className="text-ink underline underline-offset-4 hover:text-gold transition-colors">erfahrener Immobilienmakler</Link> dabei unterstutzen, alle Anforderungen rechtzeitig zu erfullen.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="sticky top-32 bg-surface p-8 lg:p-10">
              <h3 className="font-serif text-lg text-ink mb-6">Inhalt dieses Ratgebers</h3>
              <nav>
                <ol className="space-y-3 text-graphite">
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-sm">01</span>
                    <span>Was ist ein Energieausweis?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-sm">02</span>
                    <span>Wann ist er gesetzlich vorgeschrieben?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-sm">03</span>
                    <span>Verbrauchsausweis vs. Bedarfsausweis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-sm">04</span>
                    <span>Was steht im Energieausweis?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-sm">05</span>
                    <span>Warum Sie fruhzeitig handeln sollten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-sm">06</span>
                    <span>Konsequenzen bei fehlendem Ausweis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-sm">07</span>
                    <span>Haufige Fragen</span>
                  </li>
                </ol>
              </nav>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
