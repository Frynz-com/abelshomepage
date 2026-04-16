"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    number: "01",
    title: "Immobilienbewertung",
    description: "Kostenfreie Vor-Ort-Bewertung Ihrer Hamburger Immobilie innerhalb von 72 Stunden. Marktgerecht, fundiert und realistisch.",
    link: "/bewertung"
  },
  {
    number: "02",
    title: "Diskrete Vermarktung",
    description: "Off-Market-Verkauf ohne öffentliche Inserate. Zugang zu unserem Netzwerk solventer Kaufinteressenten.",
    link: "/off-market-immobilien-hamburg"
  },
  {
    number: "03",
    title: "Premium-Exposé",
    description: "Hochwertige Fotografie, virtuelle Touren und elegante Exposés, die Ihre Immobilie optimal präsentieren.",
    link: "/verkaufen"
  },
  {
    number: "04",
    title: "Käuferqualifizierung",
    description: "Bonität und Kaufabsicht werden geprüft. Sie treffen nur ernsthafte, vorqualifizierte Interessenten.",
    link: "/verkaufen"
  },
  {
    number: "05",
    title: "Preisverhandlung",
    description: "Erfahrene Verhandlungsführung in Ihrem Interesse. Wir erzielen den optimalen Verkaufspreis.",
    link: "/verkaufen"
  },
  {
    number: "06",
    title: "Notarbegleitung",
    description: "Vollständige Betreuung vom Kaufvertrag bis zur Schlüsselübergabe. Sie müssen sich um nichts kümmern.",
    link: "/verkaufen"
  },
  {
    number: "07",
    title: "After-Sale-Service",
    description: "Auch nach dem Verkauf stehen wir Ihnen zur Seite — bei Fragen, Empfehlungen oder neuen Vorhaben.",
    link: "/kontakt"
  }
]

export function HamburgServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            Unsere Leistungen
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-ink leading-[1.1] max-w-[700px]">
            Was wir für Hamburger Eigentümer tun
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="space-y-0 border-t border-line">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                href={service.link}
                className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-8 border-b border-line hover:bg-surface/50 transition-colors px-4 -mx-4"
              >
                <span className="text-gold text-sm tracking-[0.1em] md:w-16 shrink-0">
                  {service.number}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-graphite leading-relaxed max-w-[500px]">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
