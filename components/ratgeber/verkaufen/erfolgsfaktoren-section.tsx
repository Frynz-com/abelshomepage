"use client"

import { motion } from "framer-motion"

const factors = [
  {
    number: "01",
    title: "Der richtige Zeitpunkt",
    description: "Marktzyklen, Zinsentwicklung und saisonale Schwankungen beeinflussen den Verkaufserfolg. Frühling und Herbst gelten als beste Verkaufszeiten, aber lokale Faktoren können wichtiger sein als allgemeine Trends.",
    tip: "Lassen Sie sich nicht von kurzfristigen Marktbewegungen verunsichern — eine realistische Preiseinschätzung ist wichtiger als perfektes Timing."
  },
  {
    number: "02",
    title: "Realistische Preisfindung",
    description: "Der häufigste Fehler: zu hoch einsteigen und später senken müssen. Ein marktgerechter Angebotspreis führt schneller zum Verkauf und oft zu einem besseren Endergebnis als ein überhöhter Einstiegspreis mit späteren Reduktionen.",
    tip: "Eine professionelle Bewertung kostet wenig (oder ist kostenfrei) und schützt vor teuren Fehleinschätzungen."
  },
  {
    number: "03",
    title: "Professionelle Präsentation",
    description: "Erste Eindrücke entscheiden. Hochwertige Fotos, ein überzeugendes Exposé und eine gepflegte Immobilie bei Besichtigungen machen den Unterschied zwischen schnellem Verkauf zum Wunschpreis und monatelangem Warten.",
    tip: "Investieren Sie in professionelle Fotografie — die Kosten amortisieren sich schnell durch bessere Resonanz."
  },
  {
    number: "04",
    title: "Qualifizierte Interessenten",
    description: "Nicht jede Anfrage ist eine echte Kaufabsicht. Die Vorqualifizierung von Interessenten spart Zeit und schützt vor Besichtigungstourismus. Bonität und ernsthafte Kaufabsicht sollten vor Terminvergabe geklärt sein.",
    tip: "Weniger Besichtigungen mit ernsthaften Interessenten sind mehr wert als viele mit Schaulustigen."
  },
  {
    number: "05",
    title: "Rechtssichere Abwicklung",
    description: "Vom Kaufvertrag über die Finanzierungsbestätigung bis zur Grundbucheintragung — rechtliche Fehler können teuer werden. Ein erfahrener Partner sorgt dafür, dass alle Formalitäten korrekt und fristgerecht erledigt werden.",
    tip: "Unterschreiben Sie nie unter Zeitdruck. Ein guter Kaufvertrag schützt beide Seiten."
  }
]

export function RatgeberVerkaufenErfolgsfaktorenSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Subtle Divider */}
        <div className="w-16 h-px bg-gold/40 mb-16" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            Die Grundlagen
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[1.1] max-w-[700px]">
            5 Erfolgsfaktoren für den optimalen Verkauf
          </h2>
        </motion.div>

        {/* Factors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {factors.map((factor, index) => (
            <motion.div
              key={factor.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="bg-surface border border-line p-8 lg:p-10 h-full flex flex-col">
                <span className="text-gold text-sm tracking-[0.1em] mb-4">{factor.number}</span>
                <h3 className="font-serif text-2xl text-ink mb-4">{factor.title}</h3>
                <p className="text-graphite leading-relaxed mb-6 flex-grow">{factor.description}</p>
                <div className="pt-6 border-t border-line">
                  <p className="text-sm text-stone">
                    <span className="text-gold font-medium">Tipp:</span> {factor.tip}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
