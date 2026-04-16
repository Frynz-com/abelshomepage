"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Was kostet die Immobilienbewertung in Essen?",
    answer: "Unsere Immobilienbewertung ist für Eigentümer kostenfrei und unverbindlich. Wir analysieren Ihre Immobilie vor Ort und erstellen eine fundierte Marktpreiseinschätzung – ohne versteckte Kosten. Die Bewertung erfolgt innerhalb von 72 Stunden nach Terminvereinbarung."
  },
  {
    question: "Wie lange dauert ein Immobilienverkauf in Essen?",
    answer: "Die Verkaufsdauer hängt von Lage, Objekttyp und Preissegment ab. Premium-Lagen wie Bredeney oder Kettwig verkaufen sich bei marktgerechter Einpreisung oft schneller, da wir hier über ein etabliertes Käufernetzwerk verfügen."
  },
  {
    question: "Welche Unterlagen benötige ich für den Verkauf?",
    answer: "Für einen reibungslosen Verkauf benötigen wir: Grundbuchauszug, Energieausweis, Grundrisse, Wohnflächenberechnung und bei Eigentumswohnungen die Teilungserklärung sowie Protokolle der Eigentümerversammlungen. Wir unterstützen Sie bei der Beschaffung fehlender Dokumente."
  },
  {
    question: "Wie hoch ist die Maklerprovision in Essen?",
    answer: "Unsere Provision orientiert sich am marktüblichen Rahmen und wird transparent im Maklervertrag vereinbart. In NRW gilt die gesetzliche Regelung zur Provisionsteilung zwischen Käufer und Verkäufer. Die genauen Konditionen besprechen wir im persönlichen Erstgespräch."
  },
  {
    question: "Bieten Sie auch Off-Market-Verkauf an?",
    answer: "Ja, diskrete Off-Market-Vermarktung ist eine unserer Kernkompetenzen. Ihre Immobilie wird nur vorgeprüften, solventen Interessenten aus unserem Netzwerk angeboten – ohne öffentliche Inserate. Ideal für Eigentümer, die Wert auf Privatsphäre legen."
  },
  {
    question: "Wie ermitteln Sie den richtigen Verkaufspreis?",
    answer: "Wir nutzen eine Kombination aus Vergleichswertverfahren, aktuellen Transaktionsdaten aus dem Essener Gutachterausschuss und unserer lokalen Marktexpertise. So ermitteln wir einen realistischen Preis, der sowohl attraktiv für Käufer als auch optimal für Sie als Verkäufer ist."
  },
  {
    question: "Was unterscheidet Abels von anderen Maklern in Essen?",
    answer: "Wir sind seit über 25 Jahren im Ruhrgebiet aktiv und kennen jeden Stadtteil persönlich. Unser Fokus auf Premium-Immobilien, persönliche Betreuung durch erfahrene Makler und unser Netzwerk solventer Käufer unterscheidet uns von Massenmaklern. Bei uns ist Ihre Immobilie keine Nummer."
  },
  {
    question: "Begleiten Sie mich auch zum Notartermin?",
    answer: "Selbstverständlich. Wir begleiten Sie durch den gesamten Verkaufsprozess – von der Bewertung über die Besichtigungen bis zum Notartermin und der Schlüsselübergabe. Sie haben immer einen persönlichen Ansprechpartner, der alle Details koordiniert."
  }
]

export function EssenFaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
                Häufige Fragen
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[1.08] mb-6">
                Transparent beantwortet.
              </h2>
              <p className="text-graphite leading-relaxed">
                Hier finden Sie Antworten auf die wichtigsten Fragen zum Immobilienverkauf in Essen.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-line">
              {faqs.map((faq, index) => (
                <div key={index} className="py-6">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full flex items-start justify-between gap-4 text-left group"
                  >
                    <h3 className="font-serif text-xl text-ink group-hover:text-gold transition-colors pr-4">
                      {faq.question}
                    </h3>
                    <span className="shrink-0 mt-1">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-gold" />
                      ) : (
                        <Plus className="w-5 h-5 text-stone group-hover:text-gold transition-colors" />
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
                        <p className="pt-4 text-graphite leading-relaxed pr-12">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
