"use client"

import { motion } from "framer-motion"

export function HamburgPositioningSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16" />
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
              Warum Hamburg anders ist
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-ink leading-[1.1]">
              Hamburgs Immobilienmarkt verlangt Expertise und Diskretion
            </h2>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-graphite text-lg leading-relaxed">
              Hamburg gehört zu den begehrtesten Immobilienmärkten Deutschlands. Die Hansestadt verbindet norddeutsche Solidität mit internationaler Weltoffenheit — und diese Mischung spiegelt sich in einem Markt wider, der von lokaler Expertise und Diskretion geprägt ist.
            </p>
            <p className="text-graphite leading-relaxed">
              Von den historischen Villen an der Elbchaussee über die Gründerzeit-Altbauten in Eppendorf bis zu den modernen Eigentumswohnungen in der HafenCity — jedes Segment erfordert spezifisches Wissen über Käuferprofile, Preisstrukturen und Vermarktungsstrategien.
            </p>
            <p className="text-graphite leading-relaxed">
              Abels Immobilien ist seit Jahren in Hamburg aktiv. Wir kennen die Besonderheiten der einzelnen Stadtteile, pflegen Beziehungen zu solventen Kaufinteressenten und verstehen, worauf es beim diskreten Verkauf hochwertiger Immobilien ankommt.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
