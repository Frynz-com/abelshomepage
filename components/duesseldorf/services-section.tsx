"use client"

import { motion } from "framer-motion"

const services = [
  {
    number: "01",
    title: "Kostenfreie Immobilienbewertung",
    description: "Vor-Ort-Bewertung innerhalb von 72 Stunden. Marktgerechte Preiseinschätzung basierend auf aktuellen Vergleichswerten und unserer lokalen Expertise."
  },
  {
    number: "02",
    title: "Professionelle Vermarktung",
    description: "Hochwertige Exposés, professionelle Fotografie, virtuelle Rundgänge und gezielte Ansprache qualifizierter Kaufinteressenten."
  },
  {
    number: "03",
    title: "Diskrete Off-Market-Vermittlung",
    description: "Verkauf ohne öffentliche Präsenz — direkte Vermittlung an vorgeprüfte Käufer aus unserem Netzwerk. Ideal bei Bedarf an Privatsphäre."
  },
  {
    number: "04",
    title: "Käuferqualifizierung",
    description: "Bonitätsprüfung und Interessenten-Screening vor jeder Besichtigung. Sie treffen nur ernsthafte, finanzierungsfähige Käufer."
  },
  {
    number: "05",
    title: "Verhandlungsführung",
    description: "Professionelle Preisverhandlung in Ihrem Interesse. Wir erzielen den optimalen Verkaufspreis und sichern faire Vertragskonditionen."
  },
  {
    number: "06",
    title: "Verkaufsabwicklung",
    description: "Koordination aller Schritte vom Kaufvertrag bis zur Schlüsselübergabe. Notartermine, Finanzierungsabwicklung, Übergabeprotokolle."
  },
  {
    number: "07",
    title: "Beratung bei Sonderfällen",
    description: "Erbimmobilien, Scheidungsimmobilien, Kapitalanlagen — wir unterstützen Sie auch in komplexen Situationen mit Erfahrung und Diskretion."
  }
]

export function DuesseldorfServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-bone">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            Unsere Leistungen
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-ink leading-[1.1] mb-6 max-w-[700px]">
            Was wir für Eigentümer in Düsseldorf tun
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <span className="text-gold text-sm tracking-[0.1em] pt-1 shrink-0">
                {service.number}
              </span>
              <div>
                <h3 className="font-serif text-xl text-ink mb-2">
                  {service.title}
                </h3>
                <p className="text-graphite text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
