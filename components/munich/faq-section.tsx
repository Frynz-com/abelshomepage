"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    question: "Was macht einen guten Immobilienmakler in München aus?",
    answer: "Ein guter Immobilienmakler in München verbindet Marktkenntnis, realistische Wertermittlung, professionelle Vermarktung und klare Kommunikation. Gerade in einem Markt mit sehr unterschiedlichen Mikrolagen ist lokale Einordnung entscheidend."
  },
  {
    question: "Was ist meine Immobilie in München wert?",
    answer: "Der Marktwert hängt unter anderem von Lage, Objektart, Zustand, Ausstattung, Zuschnitt und Nachfrage ab. Eine belastbare Einschätzung sollte deshalb immer individuell erfolgen."
  },
  {
    question: "Wie lange dauert ein Immobilienverkauf in München?",
    answer: "Die Vermarktungsdauer hängt von Lage, Preispositionierung, Objektqualität und Zielgruppe ab. Eine realistische Einwertung und professionelle Vermarktung beschleunigen den Prozess in vielen Fällen deutlich."
  },
  {
    question: "Lohnt sich ein Off-Market-Verkauf in München?",
    answer: "Für bestimmte Immobilien und Eigentümer kann eine diskrete Vermarktung sinnvoll sein. Das gilt vor allem dann, wenn Vertraulichkeit, selektive Käuferansprache oder ein sensibles Umfeld eine Rolle spielen."
  },
  {
    question: "Welche Unterlagen werden für den Verkauf benötigt?",
    answer: "Je nach Objekt gehören dazu unter anderem Grundrisse, Energieausweis, Flächenangaben, Grundbuchdaten, Teilungserklärung oder weitere objektspezifische Dokumente. Welche Unterlagen konkret erforderlich sind, hängt vom Einzelfall ab."
  },
  {
    question: "Wann ist der richtige Zeitpunkt für einen Immobilienverkauf in München?",
    answer: "Ein guter Verkaufszeitpunkt hängt nicht nur vom Markt, sondern auch von Ihrer persönlichen Situation und der Positionierung der Immobilie ab. Entscheidend ist eine realistische Strategie statt rein spekulativer Timing-Überlegungen."
  },
  {
    question: "Wie läuft eine Immobilienbewertung in München ab?",
    answer: "Im Rahmen der Bewertung werden Lage, Zustand, Ausstattung, Vergleichbarkeit und aktuelles Nachfrageumfeld betrachtet. Ziel ist keine grobe Schätzung, sondern eine nachvollziehbare Einordnung des marktfähigen Preises."
  },
  {
    question: "Für welche Stadtteile lohnt sich professionelle Vermarktung besonders?",
    answer: "Gerade in gefragten Lagen wie Bogenhausen, Schwabing, Nymphenburg, Maxvorstadt, Lehel, Harlaching oder dem Herzogpark kann eine professionelle Positionierung und Präsentation erheblichen Einfluss auf Wahrnehmung und Nachfrage haben."
  }
]

export function MunichFaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Divider */}
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left: Header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[1.08] mb-6">
                Häufige Fragen zum Immobilienverkauf in München
              </h2>
              <p className="text-graphite leading-relaxed">
                Hier finden Sie Antworten auf die wichtigsten Fragen zum Immobilienverkauf in München.
              </p>
            </div>
          </div>

          {/* Right: FAQ Items */}
          <div className="lg:col-span-8 space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full text-left bg-white border border-gold/10 p-6 hover:border-gold/40 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-serif text-lg text-ink group-hover:text-gold transition-colors duration-300 max-w-[90%]">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-bone border border-t-0 border-gold/10 p-6"
                  >
                    <p className="text-base text-graphite leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
