"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const documents = [
  {
    title: "Fur den Verbrauchsausweis",
    items: [
      "Heizkostenabrechnungen der letzten 3 Jahre",
      "Angaben zur beheizten Wohnflache",
      "Baujahr des Gebaudes",
      "Anzahl der Wohneinheiten"
    ]
  },
  {
    title: "Fur den Bedarfsausweis",
    items: [
      "Bauplane oder Grundrisse",
      "Angaben zur Bausubstanz (Wande, Dach, Fenster)",
      "Heizungsanlage (Typ, Baujahr, Leistung)",
      "Informationen zu bereits durchgefuhrten Sanierungen"
    ]
  },
  {
    title: "Allgemein hilfreich",
    items: [
      "Grundbuchauszug",
      "Flachenberechnungen",
      "Protokolle von Eigentumerversammlungen (bei WEG)",
      "Vorhandener alter Energieausweis"
    ]
  }
]

export function UnterlagenSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="text-gold text-sm tracking-[0.15em] uppercase mb-4 block">
            Vorbereitung
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-ink mb-6 leading-tight">
            Welche Unterlagen werden benotigt?
          </h2>
          <p className="text-xl text-graphite leading-relaxed">
            Je nach Ausweisart sind unterschiedliche Dokumente erforderlich. Wir helfen Ihnen, alle notwendigen Unterlagen zusammenzustellen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {documents.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-bone p-8"
            >
              <h3 className="font-serif text-lg text-ink mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <span className="text-graphite text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-surface p-8 lg:p-10 flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between"
        >
          <div>
            <h3 className="font-serif text-xl text-ink mb-2">Wir ubernehmen das fur Sie</h3>
            <p className="text-graphite">
              Im Rahmen unserer <Link href="/leistungen" className="text-ink underline underline-offset-4 hover:text-gold transition-colors">Verkaufsbegleitung</Link> koordinieren wir die Erstellung des Energieausweises und sammeln alle notwendigen Unterlagen.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="shrink-0 inline-flex items-center justify-center px-8 py-4 bg-ink text-cream font-medium hover:bg-ink/90 transition-colors"
          >
            Beratung vereinbaren
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
