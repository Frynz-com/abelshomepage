"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Building2, Home, Castle, TrendingUp, Users, Lock } from "lucide-react"

const propertyTypes = [
  {
    icon: Building2,
    title: "Eigentumswohnungen",
    description: "Von der Altbauwohnung in Pempelfort bis zum Penthouse in Oberkassel — wir vermarkten Wohnungen aller Größen und Preisklassen.",
    link: "/wohnung-verkaufen-duesseldorf"
  },
  {
    icon: Home,
    title: "Einfamilienhäuser",
    description: "Freistehendes Haus, Doppelhaushälfte oder Reihenhaus in Kaiserswerth, Golzheim oder Niederkassel. Diskreter Verkauf an qualifizierte Käufer.",
    link: "/haus-verkaufen-duesseldorf"
  },
  {
    icon: Castle,
    title: "Villen & Luxusimmobilien",
    description: "Premiumimmobilien erfordern besondere Vermarktung. Internationale Käufer, diskrete Exposés, professionelle Präsentation.",
    link: "/villa-verkaufen-duesseldorf"
  },
  {
    icon: TrendingUp,
    title: "Anlageimmobilien",
    description: "Mehrfamilienhäuser und Renditeobjekte für Investoren. Bewertung nach Ertragswert, Vermittlung an geprüfte Kapitalanleger.",
    link: "/verkaufen"
  },
  {
    icon: Users,
    title: "Erbimmobilien",
    description: "Unterstützung bei geerbten Immobilien: Bewertung, Aufteilung unter Erben, Verkauf oder Vermietung — sensibel und professionell.",
    link: "/immobilie-geerbt-duesseldorf"
  },
  {
    icon: Lock,
    title: "Off-Market-Verkauf",
    description: "Verkauf ohne öffentliche Präsenz. Für Eigentümer, die Diskretion wünschen — direkte Vermittlung an vorgemerkte Käufer.",
    link: "/off-market-immobilien-duesseldorf"
  }
]

export function DuesseldorfPropertyTypesSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
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
            Unser Fokus
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-ink leading-[1.1] mb-6 max-w-[700px]">
            Was wir in Düsseldorf vermarkten
          </h2>
          <p className="text-graphite leading-relaxed max-w-[600px]">
            Ob Wohnung, Haus oder Villa — wir bieten für jeden Immobilientyp die passende Vermarktungsstrategie.
          </p>
        </motion.div>

        {/* Property Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Link href={type.link} className="group block h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 border border-line flex items-center justify-center group-hover:border-gold transition-colors">
                    <type.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl text-ink pt-2 group-hover:text-gold transition-colors">
                    {type.title}
                  </h3>
                </div>
                <p className="text-graphite text-sm leading-relaxed">
                  {type.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-ink text-sm font-medium group-hover:text-gold transition-colors">
                  Mehr erfahren
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
