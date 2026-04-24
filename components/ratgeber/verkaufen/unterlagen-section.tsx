"use client"

import { motion } from "framer-motion"
import { FileText, Home, Zap, Calculator } from "lucide-react"

const documentGroups = [
  {
    icon: FileText,
    title: "Grundlegende Dokumente",
    required: true,
    items: [
      "Aktueller Grundbuchauszug (nicht älter als 3 Monate)",
      "Flurkarte / Lageplan",
      "Baugenehmigung und Baupläne",
      "Wohnflächenberechnung",
      "Grundrisse (idealerweise maßstabsgetreu)"
    ]
  },
  {
    icon: Zap,
    title: "Energieausweis",
    required: true,
    items: [
      "Energieausweis (Bedarfs- oder Verbrauchsausweis)",
      "Pflicht bei Verkauf seit 2014",
      "Bußgeld bis 15.000 € bei fehlendem Ausweis",
      "Bestellung über Energieberater oder online"
    ]
  },
  {
    icon: Home,
    title: "Bei Eigentumswohnungen",
    required: false,
    items: [
      "Teilungserklärung",
      "Gemeinschaftsordnung",
      "Protokolle der letzten 3 Eigentümerversammlungen",
      "Aktueller Wirtschaftsplan",
      "Höhe der Instandhaltungsrücklage",
      "Nebenkostenabrechnungen der letzten 3 Jahre"
    ]
  },
  {
    icon: Calculator,
    title: "Weitere wichtige Unterlagen",
    required: false,
    items: [
      "Nachweise über Modernisierungen / Sanierungen",
      "Rechnungen für größere Investitionen",
      "Mietverträge (bei vermieteten Objekten)",
      "Versicherungspolicen (Gebäudeversicherung)",
      "Ggf. Altlastenauskunft / Baulastenauskunft"
    ]
  }
]

export function RatgeberVerkaufenUnterlagenSection() {
  return (
    <section className="py-24 lg:py-32 bg-bone">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            Checkliste
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[1.1] max-w-[700px] mb-6">
            Welche Unterlagen brauche ich für den Verkauf?
          </h2>
          <p className="text-graphite text-lg max-w-[600px]">
            Eine vollständige Dokumentation beschleunigt den Verkauf und schafft Vertrauen bei Kaufinteressenten. Diese Unterlagen sollten Sie bereithalten.
          </p>
        </motion.div>

        {/* Document Groups */}
        <div className="grid md:grid-cols-2 gap-8">
          {documentGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-cream border border-line p-8 lg:p-10"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 border border-line flex items-center justify-center shrink-0">
                  <group.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-ink">{group.title}</h3>
                  {group.required && (
                    <span className="text-xs uppercase tracking-[0.1em] text-gold">Pflicht</span>
                  )}
                </div>
              </div>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                    <span className="text-graphite">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tip Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-cream border border-line/50 p-8 lg:p-10"
        >
          <h4 className="font-serif text-xl text-ink mb-4">Unser Tipp</h4>
          <p className="text-graphite leading-relaxed">
            Beginnen Sie frühzeitig mit dem Zusammenstellen der Unterlagen. Manche Dokumente (z.B. Grundbuchauszug, Energieausweis) können mehrere Tage oder Wochen dauern. Eine vollständige Dokumentation beim ersten Interessentenkontakt signalisiert Professionalität und beschleunigt den gesamten Prozess.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
