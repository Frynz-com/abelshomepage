"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Building2, Home, Castle, TrendingUp, Users, Lock } from "lucide-react"

const propertyTypes = [
  {
    icon: Building2,
    title: "Eigentumswohnungen",
    description: "Von der Altbau-Perle in Eppendorf bis zum modernen Penthouse in der HafenCity — wir vermitteln Wohnungen in allen Premium-Lagen Hamburgs.",
    link: "/wohnung-verkaufen-hamburg"
  },
  {
    icon: Home,
    title: "Einfamilienhäuser",
    description: "Stadtvillen in Rotherbaum, Reihenhäuser in Winterhude oder freistehende Häuser in Blankenese — für Familien, die Platz und Qualität suchen.",
    link: "/haus-verkaufen-hamburg"
  },
  {
    icon: Castle,
    title: "Villen und Luxusimmobilien",
    description: "Historische Elbvillen, repräsentative Anwesen und architektonisch herausragende Objekte — diskret vermarktet an internationale Käufer.",
    link: "/villa-verkaufen-hamburg"
  },
  {
    icon: TrendingUp,
    title: "Anlageimmobilien",
    description: "Mehrfamilienhäuser, Zinshäuser und Portfolios in etablierten Lagen. Für Investoren, die nachhaltige Rendite suchen.",
    link: "/anlageimmobilien-hamburg"
  },
  {
    icon: Users,
    title: "Erbimmobilien",
    description: "Sensible Begleitung von Erbengemeinschaften. Bewertung, Aufteilung und Verkauf — mit Erfahrung und Fingerspitzengefühl.",
    link: "/immobilie-geerbt-hamburg"
  },
  {
    icon: Lock,
    title: "Off-Market-Objekte",
    description: "Diskrete Vermittlung ohne öffentliche Vermarktung. Für Eigentümer, die Privatsphäre und Sicherheit priorisieren.",
    link: "/off-market-immobilien-hamburg"
  }
]

export function HamburgPropertyTypesSection() {
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
            Unser Fokus
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-ink leading-[1.1] max-w-[700px]">
            Was wir in Hamburg vermarkten
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {propertyTypes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Link
                href={item.link}
                className="group block h-full"
              >
                <item.icon className="w-8 h-8 text-gold mb-5" />
                <h3 className="font-serif text-xl text-ink mb-3 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-graphite leading-relaxed">
                  {item.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
