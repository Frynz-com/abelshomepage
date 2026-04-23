"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Immobilienbewertung",
    subtitle: "Kostenfrei · 72 Stunden",
    description: "Präzise, marktgerechte Wertermittlung durch erfahrene Experten vor Ort. Fundiert, unverbindlich und ohne versteckte Kosten.",
    link: "/bewertung",
  },
  {
    number: "02",
    title: "Diskrete Vermarktung",
    subtitle: "Off-Market · Exklusives Netzwerk",
    description: "Verkauf ohne öffentliche Ausschreibung — ausschließlich an vorgeprüfte, solvente Kaufinteressenten. Maximale Diskretion für anspruchsvolle Objekte.",
    link: "/verkaufen",
  },
  {
    number: "03",
    title: "Premium-Exposé",
    subtitle: "Architekturfotografie · Virtuelle Rundgänge",
    description: "Hochwertige Präsentation Ihrer Immobilie — professionelle Fotografie, elegante Exposés und zielgruppengerechte Vermarktung.",
    link: "/verkaufen",
  },
  {
    number: "04",
    title: "Käuferqualifizierung",
    subtitle: "Nur ernsthafte Interessenten",
    description: "Wir prüfen Bonität und Kaufabsicht systematisch. Sie treffen ausschließlich qualifizierte Käufer — ohne Zeitverlust.",
    link: "/verkaufen",
  },
  {
    number: "05",
    title: "Verhandlungsführung",
    subtitle: "Optimaler Verkaufspreis",
    description: "Erfahrene Preisverhandlung in Ihrem Interesse. Wir sichern den bestmöglichen Preis und faire, rechtssichere Konditionen.",
    link: "/verkaufen",
  },
  {
    number: "06",
    title: "Notartermin & Übergabe",
    subtitle: "Vollständige Begleitung",
    description: "Von der Kaufvertragsvorbereitung bis zur Schlüsselübergabe. Wir koordinieren jeden Schritt — Sie müssen sich um nichts kümmern.",
    link: "/verkaufen",
  },
]

export function ServicesSection() {
  return (
    <section className="py-28 lg:py-40 bg-cream border-t border-line/40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-28"
        >
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gold/70" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-gold">
                Unsere Leistungen
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.6rem)] text-ink leading-[1.04] tracking-[-0.015em]">
              Vom ersten Gespräch<br />bis zur Übergabe
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-[15px] text-graphite leading-[1.8]">
              Wir begleiten Sie durch jeden Schritt des Verkaufsprozesses — präzise, diskret und im ausschließlichen Interesse Ihrer Ziele.
            </p>
          </div>
        </motion.div>

        {/* Services list */}
        <div className="border-t border-line/60">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="border-b border-line/60"
            >
              <Link href={service.link} className="group flex items-start py-9 lg:py-11 gap-0">
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">

                  {/* Number */}
                  <div className="lg:col-span-1 hidden lg:block">
                    <span className="text-[11px] text-gold/45 tracking-[0.18em] font-medium group-hover:text-gold transition-colors duration-300 tabular-nums">
                      {service.number}
                    </span>
                  </div>

                  {/* Title + subtitle */}
                  <div className="lg:col-span-4">
                    <h3 className="font-serif text-[21px] lg:text-[24px] text-ink leading-tight mb-1.5 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <span className="text-[10.5px] uppercase tracking-[0.18em] text-stone/70">
                      {service.subtitle}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-5 lg:col-start-6">
                    <p className="text-[14px] text-graphite leading-[1.75]">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="lg:col-span-2 lg:col-start-11 flex justify-end">
                    <ArrowRight className="w-4 h-4 text-stone/30 group-hover:text-gold group-hover:translate-x-0.5 transition-all duration-200" />
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
