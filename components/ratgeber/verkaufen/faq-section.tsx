"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Wie lange dauert ein Immobilienverkauf?",
    answer: "Von der Entscheidung bis zur Schlüsselübergabe vergehen typischerweise 3–6 Monate. Die Vermarktungsphase dauert bei marktgerechtem Preis oft nur 4–8 Wochen. Nach Einigung mit dem Käufer folgen Kaufvertragserstellung und Notartermin (2–4 Wochen), dann die Wartezeit bis zur Kaufpreisfälligkeit (4–8 Wochen)."
  },
  {
    question: "Was kostet ein Immobilienmakler?",
    answer: "Die Maklerprovision liegt je nach Bundesland zwischen 3 % und 7,14 % des Kaufpreises (inkl. MwSt.). Seit 2020 gilt das Bestellerprinzip: Käufer und Verkäufer teilen sich die Provision in der Regel hälftig. Bei Abels Immobilien zahlen Verkäufer maximal 3,57 % inkl. MwSt."
  },
  {
    question: "Welche Steuern fallen beim Immobilienverkauf an?",
    answer: "Bei selbstgenutzten Immobilien ist der Verkauf nach 3 Jahren Eigennutzung steuerfrei. Bei vermieteten Objekten gilt die 10-Jahres-Frist: Nach 10 Jahren Haltedauer ist der Gewinn steuerfrei. Innerhalb dieser Frist fällt Spekulationssteuer an (Ihr persönlicher Einkommensteuersatz auf den Gewinn)."
  },
  {
    question: "Brauche ich einen Energieausweis?",
    answer: "Ja, der Energieausweis ist seit 2014 Pflicht beim Verkauf. Er muss spätestens bei der Besichtigung vorliegen und relevante Daten müssen bereits in der Immobilienanzeige genannt werden. Bei Verstoß drohen Bußgelder bis 15.000 €."
  },
  {
    question: "Was ist der Unterschied zwischen Angebotspreis und Verkaufspreis?",
    answer: "Der Angebotspreis ist der in der Anzeige genannte Preis. Der Verkaufspreis ist der tatsächlich erzielte Betrag nach Verhandlung. Im Durchschnitt liegt der Verkaufspreis 5–15 % unter dem ursprünglichen Angebotspreis — je nach Marktlage und Preisgestaltung."
  },
  {
    question: "Kann ich während des Verkaufs in der Immobilie wohnen bleiben?",
    answer: "Ja, das ist üblich. Die Übergabe erfolgt in der Regel erst nach Kaufpreiszahlung. Im Kaufvertrag wird ein konkretes Übergabedatum vereinbart. Falls Sie früher ausziehen müssen, können Sie eine Zwischenfinanzierung oder vorübergehende Mietlösung in Betracht ziehen."
  },
  {
    question: "Was ist ein Off-Market-Verkauf?",
    answer: "Beim Off-Market-Verkauf wird die Immobilie nicht öffentlich angeboten, sondern diskret an vorgeprüfte Interessenten aus dem Netzwerk des Maklers vermittelt. Vorteile: maximale Diskretion, keine öffentlichen Anzeigen, oft schnellere Abwicklung. Geeignet für Eigentümer, die Privatsphäre schätzen."
  },
  {
    question: "Wann ist der beste Zeitpunkt zum Verkaufen?",
    answer: "Frühling (März–Juni) und Herbst (September–November) gelten traditionell als beste Verkaufszeiten. Aber: Der lokale Markt und Ihre persönliche Situation sind wichtiger als saisonale Trends. Ein marktgerechter Preis ist entscheidender als perfektes Timing."
  }
]

export function RatgeberVerkaufenFaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Subtle Divider */}
        <div className="w-16 h-px bg-gold/40 mb-16" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-32">
              <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
                Häufige Fragen
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[1.1] mb-6">
                Ihre Fragen, beantwortet.
              </h2>
              <p className="text-graphite leading-relaxed">
                Die wichtigsten Fragen rund um den Immobilienverkauf — klar und verständlich beantwortet.
              </p>
            </div>
          </motion.div>

          {/* Right: FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="border border-line bg-surface"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full flex items-center justify-between p-6 lg:p-8 text-left"
                  >
                    <span className="font-serif text-lg lg:text-xl text-ink pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
                      <p className="text-graphite leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
