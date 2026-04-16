"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Immobilienbewertung",
    subtitle: "Kostenfrei in 72 Stunden",
    description: "Präzise Wertermittlung Ihrer Immobilie durch erfahrene Experten vor Ort. Fundiert, marktgerecht und vollkommen unverbindlich. Wir analysieren Lage, Zustand und Marktentwicklung.",
    link: "/bewertung",
  },
  {
    number: "02",
    title: "Diskrete Vermarktung",
    subtitle: "Off-Market-Verkauf",
    description: "Verkauf ohne öffentliche Ausschreibung — ausschließlich an vorgeprüfte, solvente Kaufinteressenten aus unserem exklusiven Netzwerk. Maximale Diskretion für anspruchsvolle Objekte.",
    link: "/verkaufen",
  },
  {
    number: "03",
    title: "Premium-Exposé",
    subtitle: "Hochwertige Präsentation",
    description: "Professionelle Architekturfotografie, virtuelle Rundgänge und elegant gestaltete Exposés, die Ihre Immobilie optimal in Szene setzen und den richtigen Käufer ansprechen.",
    link: "/verkaufen",
  },
  {
    number: "04",
    title: "Käuferqualifizierung",
    subtitle: "Nur ernsthafte Interessenten",
    description: "Wir prüfen Bonität und Kaufabsicht systematisch — Sie treffen ausschließlich qualifizierte Käufer. Kein Zeitverlust durch unverbindliche Besichtigungsanfragen.",
    link: "/verkaufen",
  },
  {
    number: "05",
    title: "Verhandlungsführung",
    subtitle: "Optimaler Verkaufspreis",
    description: "Erfahrene Preisverhandlung in Ihrem Interesse. Wir erzielen den bestmöglichen Preis und sichern faire, rechtssichere Konditionen für beide Seiten.",
    link: "/verkaufen",
  },
  {
    number: "06",
    title: "Notarbegleitung",
    subtitle: "Bis zur Schlüsselübergabe",
    description: "Vollständige Begleitung vom Kaufvertragsentwurf über den Notartermin bis zur Schlüsselübergabe. Sie müssen sich um nichts kümmern — wir übernehmen die Koordination.",
    link: "/verkaufen",
  },
]

export function ServicesSection() {
  return (
    <section className="py-28 lg:py-40 bg-cream border-t border-line/50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-24"
        >
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-gold">
                Unsere Leistungen
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] text-ink leading-[1.06] tracking-[-0.01em]">
              Vom ersten Gespräch<br />bis zur Übergabe
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[15px] text-graphite leading-[1.7]">
              Wir begleiten Sie durch jeden Schritt des Verkaufsprozesses — präzise, diskret und mit dem Ziel, den bestmöglichen Preis für Ihre Immobilie zu erzielen.
            </p>
          </div>
        </motion.div>

        {/* Services list */}
        <div className="border-t border-line">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="border-b border-line"
            >
              <Link href={service.link} className="group block py-8 lg:py-10">
                <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-start">

                  {/* Number */}
                  <div className="lg:col-span-1">
                    <span className="text-[12px] text-gold/60 tracking-[0.14em] font-medium group-hover:text-gold transition-colors duration-300">
                      {service.number}
                    </span>
                  </div>

                  {/* Title + subtitle */}
                  <div className="lg:col-span-4">
                    <h3 className="font-serif text-[22px] lg:text-[26px] text-ink mb-1.5 leading-tight group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-stone">
                      {service.subtitle}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-5 lg:col-start-6">
                    <p className="text-[14px] text-graphite leading-[1.7] max-w-[480px]">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="lg:col-span-2 lg:col-start-11 flex justify-end items-start pt-1">
                    <div className="flex items-center gap-2 text-[12px] text-stone group-hover:text-gold transition-colors duration-300">
                      <span className="text-[10px] uppercase tracking-[0.14em] hidden lg:block">Mehr</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </div>
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
