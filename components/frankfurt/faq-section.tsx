"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Was macht einen guten Immobilienmakler in Frankfurt aus",
    answer: "Ein guter Immobilienmakler in Frankfurt verbindet Marktkenntnis, realistische Wertermittlung, professionelle Vermarktung und klare Kommunikation. Gerade in einem Markt mit sehr unterschiedlichen Mikrolagen ist lokale Einordnung entscheidend.",
  },
  {
    question: "Was ist meine Immobilie in Frankfurt wert",
    answer: "Der Marktwert hängt unter anderem von Lage, Objektart, Zustand, Ausstattung, Zuschnitt und Nachfrage ab. Eine belastbare Einschätzung sollte deshalb immer individuell erfolgen.",
  },
  {
    question: "Wie lange dauert ein Immobilienverkauf in Frankfurt",
    answer: "Die Vermarktungsdauer hängt von Lage, Preispositionierung, Objektqualität und Zielgruppe ab. Eine realistische Einwertung und professionelle Vermarktung beschleunigen den Prozess in vielen Fällen deutlich.",
  },
  {
    question: "Lohnt sich ein Off-Market-Verkauf in Frankfurt",
    answer: "Für bestimmte Immobilien und Eigentümer kann eine diskrete Vermarktung sinnvoll sein. Das gilt vor allem dann, wenn Vertraulichkeit, selektive Käuferansprache oder ein sensibles Umfeld eine Rolle spielen.",
  },
  {
    question: "Welche Unterlagen werden für den Verkauf benötigt",
    answer: "Je nach Objekt gehören dazu unter anderem Grundrisse, Energieausweis, Flächenangaben, Grundbuchdaten, Teilungserklärung oder weitere objektspezifische Dokumente. Welche Unterlagen konkret erforderlich sind, hängt vom Einzelfall ab.",
  },
  {
    question: "Wann ist der richtige Zeitpunkt für einen Immobilienverkauf in Frankfurt",
    answer: "Ein guter Verkaufszeitpunkt hängt nicht nur vom Markt, sondern auch von Ihrer persönlichen Situation und der Positionierung der Immobilie ab. Entscheidend ist eine realistische Strategie statt rein spekulativer Timing-Überlegungen.",
  },
  {
    question: "Wie läuft eine Immobilienbewertung in Frankfurt ab",
    answer: "Im Rahmen der Bewertung werden Lage, Zustand, Ausstattung, Vergleichbarkeit und aktuelles Nachfrageumfeld betrachtet. Ziel ist keine grobe Schätzung, sondern eine nachvollziehbare Einordnung des marktfähigen Preises.",
  },
  {
    question: "Für welche Stadtteile lohnt sich professionelle Vermarktung besonders",
    answer: "Gerade in gefragten Lagen wie Westend, Sachsenhausen, Nordend, Dichterviertel, Holzhausenviertel oder ausgewählten Mikrolagen in Bornheim kann eine professionelle Positionierung und Präsentation erheblichen Einfluss auf Wahrnehmung und Nachfrage haben.",
  },
]

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="border-b border-line/30 last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-start justify-between group hover:text-gold transition-colors text-left"
      >
        <span className="font-serif text-lg text-ink pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-6"
        >
          <p className="text-graphite text-sm leading-relaxed">{faq.answer}</p>
        </motion.div>
      )}
    </motion.div>
  )
}

export function FrankfurtFAQSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="font-serif text-4xl lg:text-5xl text-ink mb-6">
            Häufige Fragen zum Immobilienverkauf in Frankfurt
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-[800px] mx-auto">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
