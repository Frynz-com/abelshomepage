"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const processSteps = [
  { title: "Erstgespräch", text: "Im ersten Gespräch klären wir Ausgangssituation, Immobilientyp, Ziele und Zeitrahmen." },
  { title: "Wertermittlung", text: "Anschließend erfolgt eine fundierte Einordnung des Objekts im aktuellen Marktumfeld von Grünwald." },
  { title: "Unterlagen und Vermarktungskonzept", text: "Wir strukturieren die relevanten Unterlagen und entwickeln ein zur Immobilie passendes Vermarktungskonzept." },
  { title: "Vermarktung", text: "Je nach Objekt erfolgt die Vermarktung offen oder diskret – immer mit passender Ansprache und hochwertiger Präsentation." },
  { title: "Besichtigungen und Verhandlungen", text: "Wir koordinieren Besichtigungen, qualifizieren Interessenten und begleiten Verhandlungen mit klarem Blick auf Ziel und Markt." },
  { title: "Notartermin und Übergabe", text: "Zum Abschluss begleiten wir den Prozess bis zur notariellen Beurkundung und sorgen für einen strukturierten Übergang." }
]

const faqs = [
  { q: "Was macht einen guten Immobilienmakler in Grünwald aus", a: "Ein guter Immobilienmakler in Grünwald verbindet Marktkenntnis, realistische Wertermittlung, professionelle Vermarktung und diskrete Kommunikation. Gerade in einem exklusiven Markt ist lokale Einordnung entscheidend." },
  { q: "Was ist meine Immobilie in Grünwald wert", a: "Der Marktwert hängt unter anderem von Lage, Objektart, Zustand, Architektur, Grundstück, Ausstattung und Nachfrage ab. Eine belastbare Einschätzung sollte deshalb immer individuell erfolgen." },
  { q: "Wie lange dauert ein Immobilienverkauf in Grünwald", a: "Die Vermarktungsdauer hängt von Lage, Preispositionierung, Objektqualität, Grundstück und Zielgruppe ab. Eine realistische Einwertung und professionelle Vermarktung verbessern die Vermarktungschancen erheblich." },
  { q: "Lohnt sich ein Off-Market-Verkauf in Grünwald", a: "Für viele hochwertige Immobilien in Grünwald kann eine diskrete Vermarktung sinnvoll sein. Das gilt besonders dann, wenn Vertraulichkeit, selektive Käuferansprache oder ein sensibles Umfeld eine Rolle spielen." },
  { q: "Welche Unterlagen werden für den Verkauf benötigt", a: "Je nach Objekt gehören dazu unter anderem Grundrisse, Energieausweis, Flächenangaben, Grundbuchdaten, Bauunterlagen oder weitere objektspezifische Dokumente. Welche Unterlagen konkret erforderlich sind, hängt vom Einzelfall ab." },
  { q: "Wann ist der richtige Zeitpunkt für einen Immobilienverkauf in Grünwald", a: "Ein guter Verkaufszeitpunkt hängt nicht nur vom Markt, sondern auch von Ihrer persönlichen Situation und der Positionierung der Immobilie ab. Entscheidend ist eine realistische Strategie statt rein spekulativer Timing-Überlegungen." },
  { q: "Wie läuft eine Immobilienbewertung in Grünwald ab", a: "Im Rahmen der Bewertung werden Lage, Zustand, Architektur, Grundstück, Vergleichbarkeit und aktuelles Nachfrageumfeld betrachtet. Ziel ist keine grobe Schätzung, sondern eine nachvollziehbare Einordnung des marktfähigen Preises." },
  { q: "Für welche Immobilien lohnt sich professionelle Vermarktung besonders", a: "Gerade bei hochwertigen Wohnungen, Familienhäusern, Villen, Grundstücken und diskreten Verkaufsmandaten kann eine professionelle Positionierung und Präsentation erheblichen Einfluss auf Wahrnehmung und Nachfrage haben." }
]

export function GruenwaldProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            Ablauf
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[1.08] mb-6">
            So läuft der Immobilienverkauf in Grünwald ab
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <span className="block text-5xl font-serif text-gold/30 mb-4">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-lg text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-graphite text-sm leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GruenwaldFaqSection() {
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
                Häufige Fragen zum Immobilienverkauf in Grünwald
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full bg-white border border-line/30 p-6 lg:p-8 hover:border-line/50 transition-all duration-300 text-left"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-serif text-lg lg:text-xl text-ink">
                      {faq.q}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
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
                    className="bg-bone border-b border-l border-r border-line/30 p-6 lg:p-8"
                  >
                    <p className="text-graphite leading-relaxed">
                      {faq.a}
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
