"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Wie lange ist ein Energieausweis gultig?",
    answer: "Ein Energieausweis ist 10 Jahre ab Ausstellungsdatum gultig. Nach Ablauf muss ein neuer Ausweis erstellt werden, wenn die Immobilie verkauft oder vermietet werden soll."
  },
  {
    question: "Was kostet ein Energieausweis?",
    answer: "Ein Verbrauchsausweis kostet in der Regel zwischen 50 und 100 Euro. Ein Bedarfsausweis ist aufwendiger und kostet zwischen 300 und 500 Euro, da eine Vor-Ort-Begehung erforderlich ist."
  },
  {
    question: "Wer darf einen Energieausweis ausstellen?",
    answer: "Energieausweise durfen nur von qualifizierten Fachleuten ausgestellt werden — etwa Architekten, Ingenieuren oder zertifizierten Energieberatern. Wir vermitteln Ihnen gerne einen kompetenten Partner."
  },
  {
    question: "Brauche ich einen Verbrauchs- oder Bedarfsausweis?",
    answer: "Der Bedarfsausweis ist Pflicht fur Gebaude mit weniger als 5 Wohneinheiten und Baujahr vor 1977, sofern diese nicht bereits energetisch modernisiert wurden. In allen anderen Fallen haben Sie die Wahl."
  },
  {
    question: "Was passiert, wenn mein Energieausweis abgelaufen ist?",
    answer: "Ein abgelaufener Energieausweis ist rechtlich nicht mehr gultig. Sie mussen einen neuen Ausweis erstellen lassen, bevor Sie die Immobilie verkaufen oder vermieten durfen."
  },
  {
    question: "Muss der Energieausweis beim Notar vorgelegt werden?",
    answer: "Der Energieausweis muss nicht zwingend beim Notartermin vorliegen, wohl aber spatestens bei der ersten Besichtigung. Wir empfehlen jedoch, ihn auch dem Notar zur Verfugung zu stellen."
  },
  {
    question: "Welche Angaben mussen in die Immobilienanzeige?",
    answer: "Pflichtangaben sind: Art des Energieausweises, Energiekennwert, Energieeffizienzklasse, Baujahr des Gebaudes und wesentlicher Energietrager der Heizung."
  },
  {
    question: "Kann ich den Energieausweis online beantragen?",
    answer: "Ja, Verbrauchsausweise konnen oft online beantragt werden. Fur einen Bedarfsausweis ist jedoch eine Vor-Ort-Begehung durch einen Energieberater erforderlich."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <span className="text-gold text-sm tracking-[0.15em] uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink mb-6 leading-tight">
              Haufige Fragen zum Energieausweis
            </h2>
            <p className="text-graphite leading-relaxed">
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um den Energieausweis beim Immobilienverkauf.
            </p>
          </motion.div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-line">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-6 flex items-start justify-between gap-4 text-left"
                  >
                    <span className="font-serif text-lg text-ink">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-48 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-graphite leading-relaxed pr-12">{faq.answer}</p>
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
