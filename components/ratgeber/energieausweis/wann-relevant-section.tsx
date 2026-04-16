"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function WannRelevantSection() {
  return (
    <section className="py-24 lg:py-32 bg-ink text-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm tracking-[0.15em] uppercase mb-4 block">
              Gesetzliche Pflicht
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl mb-8 leading-tight">
              Wann ist der Energieausweis vorgeschrieben?
            </h2>
            <div className="space-y-6 text-cream/80 leading-relaxed">
              <p>
                Das Gebaude-Energie-Gesetz (GEG) schreibt vor, dass bei jedem Verkauf, jeder Neuvermietung und jeder Verpachtung ein gultiger Energieausweis vorliegen muss. Diese Pflicht gilt fur alle Wohngebaude und die meisten Nichtwohngebaude.
              </p>
              <p>
                Wichtig: Der Energieausweis muss bereits bei der ersten Besichtigung vorgelegt werden konnen — nicht erst beim Notartermin. Auch in Immobilienanzeigen mussen die wesentlichen Kennwerte angegeben werden.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Cases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="border-l-2 border-gold pl-6">
              <h3 className="font-serif text-xl mb-3">Bei Verkauf</h3>
              <p className="text-cream/70 leading-relaxed">
                Spatestens bei der ersten Besichtigung muss der Energieausweis vorgelegt werden. Die Angaben mussen auch im <Link href="/immobilie-verkaufen" className="text-gold hover:underline">Immobilieninserat</Link> erscheinen.
              </p>
            </div>
            
            <div className="border-l-2 border-gold pl-6">
              <h3 className="font-serif text-xl mb-3">Bei Vermietung</h3>
              <p className="text-cream/70 leading-relaxed">
                Auch bei Neuvermietung oder Verpachtung ist der Energieausweis Pflicht — unabhangig davon, ob es sich um eine Wohnung oder ein ganzes Haus handelt.
              </p>
            </div>
            
            <div className="border-l-2 border-gold pl-6">
              <h3 className="font-serif text-xl mb-3">In Immobilienanzeigen</h3>
              <p className="text-cream/70 leading-relaxed">
                Energiekennwert, Energieeffizienzklasse, Baujahr und Heizungsart mussen in kommerziellen Anzeigen (Print und Online) verpflichtend angegeben werden.
              </p>
            </div>

            <div className="border-l-2 border-cream/30 pl-6">
              <h3 className="font-serif text-xl mb-3 text-cream/60">Ausnahmen</h3>
              <p className="text-cream/50 leading-relaxed">
                Denkmalgeschutzte Gebaude, kleine Gebaude unter 50 m2 Nutzflache und Gebaude, die nicht regelmaig beheizt werden, sind von der Ausweispflicht befreit.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
