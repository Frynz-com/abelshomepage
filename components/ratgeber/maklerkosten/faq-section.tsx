"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Wie hoch ist die übliche Maklerprovision in Deutschland?",
    answer: "Die marktübliche Provision beträgt insgesamt 7,14% des Kaufpreises (inkl. MwSt.), aufgeteilt auf Verkäufer und Käufer mit je 3,57%. In einigen Regionen gibt es leichte Abweichungen, aber diese Regelung ist seit 2020 der Standard für Wohnimmobilien."
  },
  {
    question: "Wann wird die Maklerprovision fällig?",
    answer: "Die Provision wird erst nach erfolgreicher Beurkundung des Kaufvertrags beim Notar fällig — nicht bei Vertragsschluss mit dem Makler. Der Makler stellt die Rechnung nach dem Notartermin, die Zahlung erfolgt üblicherweise innerhalb von 14 Tagen."
  },
  {
    question: "Kann ich die Maklerprovision verhandeln?",
    answer: "Grundsätzlich ja, die Provision ist frei verhandelbar. Bei Standardobjekten ist der Verhandlungsspielraum jedoch begrenzt. Bei hochpreisigen Immobilien (ab ca. 2 Mio. EUR) oder mehreren Objekten sind reduzierte Sätze oder gestaffelte Modelle möglich."
  },
  {
    question: "Was passiert, wenn der Verkauf nicht zustande kommt?",
    answer: "Da die Maklerprovision erfolgsabhängig ist, zahlen Sie nichts, wenn kein Verkauf stattfindet. Allerdings können im Maklervertrag Aufwandsentschädigungen für bestimmte Leistungen vereinbart sein — prüfen Sie den Vertrag vor Unterzeichnung."
  },
  {
    question: "Sind Maklerkosten steuerlich absetzbar?",
    answer: "Für Privatverkäufer sind Maklerkosten in der Regel nicht steuerlich absetzbar. Anders bei vermieteten Immobilien oder Gewerbeimmobilien: Hier können die Kosten als Werbungskosten oder Betriebsausgaben geltend gemacht werden. Sprechen Sie mit Ihrem Steuerberater."
  },
  {
    question: "Was ist der Unterschied zwischen Alleinauftrag und offenem Auftrag?",
    answer: "Beim Alleinauftrag beauftragen Sie exklusiv einen Makler. Das ermöglicht gezielte Vermarktungsinvestitionen. Beim offenen Auftrag können mehrere Makler tätig werden, was zu Doppelvermarktung und weniger Engagement führen kann. Wir empfehlen den Alleinauftrag."
  },
  {
    question: "Welche Kosten fallen neben der Provision noch an?",
    answer: "Beim Verkauf: ggf. Vorfälligkeitsentschädigung bei laufender Finanzierung und Spekulationssteuer bei Verkauf innerhalb von 10 Jahren. Für den Käufer: Grunderwerbsteuer (3,5-6,5%), Notar- und Grundbuchkosten (ca. 1,5-2%)."
  },
  {
    question: "Wie finde ich einen seriösen Makler?",
    answer: "Achten Sie auf lokale Marktkenntnis, nachweisbare Referenzen, transparente Provisionsregelungen und realistische Preiseinschätzungen. Ein guter Makler nimmt sich Zeit für ein erstes Gespräch und erklärt seine Leistungen verständlich."
  }
]

export function MaklerkostenFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 lg:py-32 bg-bone">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
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
              Häufige Fragen
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-snug mb-6">
              FAQ zu Maklerkosten
            </h2>
            <p className="text-graphite leading-relaxed">
              Die wichtigsten Fragen rund um Provision, Zahlung und 
              Maklerleistungen — verständlich beantwortet.
            </p>
          </motion.div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="border-b border-line/50"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <span className="font-serif text-lg text-ink group-hover:text-gold transition-colors pr-8">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gold transition-transform duration-300 flex-shrink-0 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-graphite leading-relaxed pr-12">
                      {faq.answer}
                    </p>
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
