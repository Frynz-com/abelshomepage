"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Wie lange dauert ein Immobilienverkauf in Hamburg?",
    answer: "Bei professioneller Vermarktung und marktgerechter Preisfindung verkaufen sich Hamburger Immobilien in der Regel innerhalb weniger Wochen bis Monate. Premium-Objekte in Blankenese oder Harvestehude finden oft schneller qualifizierte Käufer durch unser Netzwerk."
  },
  {
    question: "Was kostet Ihre Maklerprovision in Hamburg?",
    answer: "Seit der Gesetzesänderung 2020 teilen sich Käufer und Verkäufer die Provision. Wir besprechen alle Konditionen transparent im Erstgespräch — ohne versteckte Kosten."
  },
  {
    question: "Bewerten Sie meine Immobilie kostenlos?",
    answer: "Ja. Die Vor-Ort-Bewertung ist kostenfrei und unverbindlich. Sie erhalten eine fundierte Einschätzung basierend auf aktuellen Marktdaten und vergleichbaren Verkäufen."
  },
  {
    question: "Was ist ein Off-Market-Verkauf?",
    answer: "Beim Off-Market-Verkauf inserieren wir Ihre Immobilie nicht öffentlich auf Portalen. Stattdessen vermitteln wir diskret an vorgeprüfte Interessenten aus unserem Netzwerk. Ideal für Eigentümer, die Wert auf Privatsphäre legen."
  },
  {
    question: "Welche Unterlagen brauche ich für den Verkauf?",
    answer: "Grundbuchauszug, Energieausweis, Wohnflächenberechnung, Grundrisse und ggf. Teilungserklärung (bei Wohnungen). Wir unterstützen Sie bei der Beschaffung aller Dokumente."
  },
  {
    question: "Verkaufen Sie auch im Hamburger Umland?",
    answer: "Ja, wir sind auch in den angrenzenden Gemeinden wie Norderstedt, Ahrensburg oder Wedel aktiv. Sprechen Sie uns an — wir kennen den regionalen Markt."
  },
  {
    question: "Wie finde ich den richtigen Angebotspreis?",
    answer: "Der richtige Preis basiert auf einer fundierten Marktanalyse: vergleichbare Verkäufe, aktuelle Nachfrage und objektspezifische Faktoren. Wir beraten Sie ehrlich — ein zu hoher Preis schadet dem Verkauf mehr als ein realistischer."
  },
  {
    question: "Begleiten Sie auch den Notartermin?",
    answer: "Selbstverständlich. Wir sind beim Notartermin dabei, klären vorab alle Fragen und begleiten Sie bis zur Schlüsselübergabe. Unser Service endet nicht mit der Unterschrift."
  }
]

export function HamburgFaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16" />

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left: Header */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
                Häufige Fragen
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-[1.1] mb-6">
                Ihre Fragen zum Immobilienverkauf in Hamburg
              </h2>
              <p className="text-graphite leading-relaxed">
                Hier finden Sie Antworten auf die wichtigsten Fragen — und wenn nicht, sprechen Sie uns an.
              </p>
            </motion.div>
          </div>

          {/* Right: FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-0 border-t border-line">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="border-b border-line"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full flex items-start justify-between gap-4 py-6 text-left"
                  >
                    <span className="font-serif text-lg text-ink">
                      {faq.question}
                    </span>
                    <span className="shrink-0 mt-1">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-gold" />
                      ) : (
                        <Plus className="w-5 h-5 text-stone" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-graphite leading-relaxed pb-6 pr-12">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
