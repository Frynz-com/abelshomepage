"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const partnerCategories = [
  {
    title: "Finanzierung & Kapital",
    partners: ["Baufinanzierungsberater", "Privatbanken", "Vermögensverwalter", "Family Offices"],
  },
  {
    title: "Recht & Steuer",
    partners: ["Notare", "Fachanwälte für Immobilienrecht", "Steuerberater", "Erbrechtsberater"],
  },
  {
    title: "Bau & Gestaltung",
    partners: ["Architekten", "Innenarchitekten", "Gutachter & Sachverständige", "Handwerksbetriebe"],
  },
  {
    title: "Verwaltung & Betrieb",
    partners: ["Hausverwaltungen", "Facility Management", "Versicherungsmakler", "Umzugsunternehmen"],
  },
]

export function PartnersSection() {
  return (
    <section className="py-24 lg:py-32 bg-bone border-t border-line/40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold/60" />
              <span className="text-[10px] uppercase tracking-[0.26em] text-stone font-medium">Partnernetzwerk</span>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] text-ink leading-[1.08] tracking-[-0.015em]">
              Wir und unsere Partner<br />
              <span className="text-stone/70">helfen Ihnen gerne.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:pt-4"
          >
            <p className="text-[16px] lg:text-[17px] text-graphite leading-[1.8] mb-5">
              Ein Immobilienverkauf endet nicht beim Notartermin. Wir begleiten Sie durch den gesamten Prozess – und vermitteln bei Bedarf kompetente Partner aus unserem geprüften Netzwerk.
            </p>
            <p className="text-[13px] text-stone tracking-[0.03em] leading-relaxed">
              Alle empfohlenen Partner werden von uns persönlich geprüft und sind in ihren Bereichen ausgewiesene Experten.
            </p>
          </motion.div>
        </div>

        {/* Partner Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line/40 border border-line/40 mb-14">
          {partnerCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-cream px-7 py-8"
            >
              <h3 className="text-[10px] uppercase tracking-[0.22em] text-gold font-medium mb-5">
                {category.title}
              </h3>
              <ul className="space-y-2.5">
                {category.partners.map((partner) => (
                  <li key={partner} className="flex items-center gap-2.5 text-[14px] text-graphite">
                    <div className="w-1 h-1 rounded-full bg-gold/50 shrink-0" />
                    {partner}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Post-sale note + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pt-8 border-t border-line/50"
        >
          <div className="flex items-start gap-4 max-w-[620px]">
            <div className="w-px h-12 bg-gold/40 shrink-0 mt-0.5" />
            <p className="text-[14px] text-stone leading-relaxed">
              Auch nach dem Verkauf stehen wir Ihnen bei Fragen zur Seite – ob Anschlussfinanzierung, steuerliche Optimierung oder Planung des nächsten Objekts.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2.5 bg-ink text-cream px-8 py-3.5 text-[10px] uppercase tracking-[0.18em] font-medium hover:bg-graphite transition-colors shrink-0 group"
          >
            Netzwerk anfragen
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
