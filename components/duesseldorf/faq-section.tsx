"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Was kostet ein Immobilienmakler in Düsseldorf?",
    answer: "Die Maklerprovision in Düsseldorf beträgt in der Regel 3,57% inkl. MwSt. vom Kaufpreis, geteilt zwischen Käufer und Verkäufer. Bei Abels Immobilien zahlen Sie als Verkäufer standardmäßig 1,785%. Die genauen Konditionen besprechen wir transparent im Erstgespräch."
  },
  {
    question: "Wie lange dauert ein Immobilienverkauf in Düsseldorf?",
    answer: "Die Verkaufsdauer hängt von Lage, Preis und Objekttyp ab. In Premium-Lagen wie Oberkassel oder Kaiserswerth verkaufen sich marktgerecht eingepreiste Immobilien oft innerhalb weniger Wochen, da wir hier über ein etabliertes Käufernetzwerk verfügen."
  },
  {
    question: "Welche Unterlagen benötige ich für den Verkauf?",
    answer: "Grundbuchauszug, Energieausweis, Wohnflächenberechnung, Grundrisse, bei Wohnungen zusätzlich Teilungserklärung und Protokolle der Eigentümerversammlungen. Wir unterstützen Sie bei der Beschaffung fehlender Dokumente."
  },
  {
    question: "Kann ich meine Immobilie auch diskret verkaufen?",
    answer: "Ja, absolut. Bei unserem Off-Market-Verkauf erscheint Ihre Immobilie nicht öffentlich. Wir vermitteln direkt an vorgeprüfte Käufer aus unserem Netzwerk — ideal für Eigentümer, die Privatsphäre wünschen."
  },
  {
    question: "Was ist meine Immobilie in Düsseldorf wert?",
    answer: "Der Wert hängt von Lage, Zustand, Größe und Ausstattung ab. In Premium-Lagen wie Oberkassel liegen Quadratmeterpreise bei 7.500–9.000 EUR, in aufstrebenden Vierteln wie Pempelfort bei 5.000–6.500 EUR. Eine kostenfreie Vor-Ort-Bewertung gibt Ihnen Klarheit."
  },
  {
    question: "Muss ich bei Besichtigungen anwesend sein?",
    answer: "Nein, das übernehmen wir. Wir führen alle Besichtigungen professionell durch — Sie müssen nicht anwesend sein, es sei denn, Sie wünschen es. So bleibt der Verkauf für Sie unkompliziert."
  },
  {
    question: "Was passiert, wenn meine Immobilie nicht verkauft wird?",
    answer: "Bei Abels Immobilien entstehen Ihnen nur Kosten im Erfolgsfall. Wird Ihre Immobilie nicht verkauft, zahlen Sie keine Provision. Das ist unser Qualitätsversprechen an Sie."
  },
  {
    question: "Wie läuft die Bewertung ab?",
    answer: "Nach Ihrer Anfrage kontaktieren wir Sie innerhalb von 24 Stunden. Ein erfahrener Makler besichtigt Ihre Immobilie vor Ort, analysiert Vergleichswerte und erstellt eine fundierte Werteinschätzung — kostenlos und unverbindlich."
  }
]

export function DuesseldorfFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 lg:py-32 bg-bone">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
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
              <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-[1.15] mb-6">
                Fragen zum Immobilienverkauf in Düsseldorf
              </h2>
              <p className="text-graphite leading-relaxed">
                Die wichtigsten Fragen unserer Kunden — transparent beantwortet.
              </p>
            </div>
          </motion.div>

          {/* Right: FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="border border-line bg-cream"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-start justify-between gap-4 p-6 text-left"
                  >
                    <span className="font-serif text-lg text-ink">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-graphite leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
