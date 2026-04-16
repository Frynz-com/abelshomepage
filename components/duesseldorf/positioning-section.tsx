"use client"

import { motion } from "framer-motion"

export function DuesseldorfPositioningSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16" />
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-[1.15]">
              Düsseldorf verdient einen Makler, der den Markt versteht.
            </h2>
          </motion.div>

          {/* Right: Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="space-y-6 text-graphite leading-relaxed">
              <p>
                Der Düsseldorfer Immobilienmarkt gehört zu den dynamischsten in Deutschland. Wer hier eine Wohnung, ein Haus oder eine Villa verkaufen möchte, braucht mehr als einen Makler — er braucht einen Partner mit lokaler Expertise, einem qualifizierten Käufernetzwerk und der Fähigkeit, den optimalen Preis zu erzielen.
              </p>
              <p>
                Abels Immobilien ist seit über 25 Jahren in Düsseldorf aktiv. Wir kennen die Preisstrukturen in Oberkassel, wissen, was Käufer in Kaiserswerth suchen, und verstehen die Besonderheiten des Zooviertels. Diese Marktkenntnis setzen wir für Sie ein — von der ersten Bewertung bis zum Notartermin.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
