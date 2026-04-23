"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "Wie finde ich einen seriösen Immobilienmakler?",
    answer: "Achten Sie auf IHK-Registrierung (§34c GewO), Transparenz bei Provisionen und ehrliche Preisangaben. Abels Immobilien ist seit 1999 IHK-zertifiziert und inhabergeführt — Vertrauen durch bewährte Erfahrung und persönliche Betreuung.",
  },
  {
    question: "Was ist meine Immobilie wert — wie wird sie bewertet?",
    answer: "Eine seriöse Bewertung basiert auf Vergleichsdaten ähnlicher Objekte, Lage, Zustand, Ausstattung und aktueller Marktlage. Wir führen eine kostenfreie Bewertung vor Ort durch und analysieren Preis pro m², Käufergruppen und Vermarktungszeiten. Innerhalb 72 Stunden erhalten Sie eine fundierte Einschätzung.",
  },
  {
    question: "Wie läuft ein Immobilienverkauf ab?",
    answer: "1. Erstgespräch & Bewertung (kostenfrei), 2. Exposé & Fotografie, 3. Aktive Vermarktung mit Interessentenvermittlung, 4. Besichtigungen und Verhandlungen, 5. Kaufvertragsvorbereitung, 6. Notartermin und Übergabe. Wir begleiten Sie professionell durch alle Schritte.",
  },
  {
    question: "Wie lange dauert es, mein Haus oder meine Wohnung zu verkaufen?",
    answer: "Die Verkaufsdauer hängt von Lage, Preis und Objekttyp ab. Bei marktgerecht eingepreisten Immobilien in guten Lagen sind einige Wochen bis wenige Monate realistisch. Off-Market-Verkäufe an vorgemerkte Käufer können deutlich schneller ablaufen.",
  },
  {
    question: "Wann lohnt sich diskrete, nicht-öffentliche Vermarktung?",
    answer: "Diskrete Off-Market-Vermarktung ist ideal, wenn Sie Wert auf Privatsphäre legen, in öffentlichem Fokus stehen oder Premium-Lagen mit hohem Anspruch verkaufen. Nur qualifizierte Käufer aus unserem Netzwerk sehen die Immobilie — kein öffentlicher Aushang, keine Zeitverschwendung.",
  },
  {
    question: "Welche Unterlagen benötige ich für den Immobilienverkauf?",
    answer: "Grundbuchauszug, Energieausweis, Grundrisse und Wohnflächenberechnung, Teilungserklärung (bei Wohnungen), Nebenkostenabrechnungen der letzten 3 Jahre, ggf. Handwerkerquittungen und Renovierungsbelege. Wir unterstützen Sie bei der Beschaffung.",
  },
  {
    question: "Was kostet es, mein Haus oder meine Wohnung zu verkaufen?",
    answer: "Die Maklerprovision beträgt 3,57% inkl. MwSt. und wird im Erfolgsfall fällig — Sie zahlen nur, wenn die Immobilie tatsächlich verkauft ist. Die Provision wird in der Regel zwischen Käufer und Verkäufer geteilt. Es entstehen keine versteckten Kosten oder Vorauszahlungen.",
  },
  {
    question: "Verkauft Abels Immobilien auch Erbfälle und zu teilende Immobilien?",
    answer: "Ja. Wir unterstützen Erben bei der Vermarktung von Erbimmobilien, begleiten Teilungsversteigerungen und finden Lösungen, die für alle Beteiligten fair sind. Auch komplexe Erbsituationen mit mehreren Parteien lösen wir diskret und professionell.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="py-28 lg:py-40 bg-cream border-t border-line/50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">

          {/* Left: Header – sticky */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold/60" />
                <span className="text-[11px] uppercase tracking-[0.24em] text-gold">
                  Häufige Fragen
                </span>
              </div>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] text-ink leading-[1.1] tracking-[-0.01em] mb-6">
                Transparent<br />beantwortet.
              </h2>
              <p className="text-[14px] text-graphite leading-[1.7] max-w-[280px]">
                Antworten auf die wichtigsten Fragen rund um den Immobilienverkauf.
              </p>
            </div>
          </motion.div>

          {/* Right: FAQ accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 lg:col-start-6"
          >
            <div className="border-t border-line">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-line">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full flex items-start justify-between gap-8 py-8 lg:py-9 text-left group"
                  >
                    <span className={`font-serif text-[17px] lg:text-[20px] leading-snug transition-colors duration-300 pr-4 ${
                      openIndex === index ? "text-ink" : "text-ink/65 group-hover:text-ink"
                    }`}>
                      {faq.question}
                    </span>
                    <div className="shrink-0 mt-1.5 flex items-center justify-center w-5 h-5">
                      <span className={`block transition-all duration-400 ${
                        openIndex === index
                          ? "w-4 h-px bg-gold"
                          : "relative w-4 h-4"
                      }`}>
                        {openIndex === index ? null : (
                          <>
                            <span className="absolute top-1/2 left-0 w-full h-px bg-stone/40 group-hover:bg-stone/70 transition-colors -translate-y-1/2" />
                            <span className="absolute left-1/2 top-0 w-px h-full bg-stone/40 group-hover:bg-stone/70 transition-colors -translate-x-1/2" />
                          </>
                        )}
                      </span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-10 text-[15px] text-graphite leading-[1.85] max-w-[560px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
