"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Wie hoch sind die Notarkosten bei einem Hausverkauf?",
    answer: "Die Notarkosten betragen in der Regel etwa 1,0 bis 1,5 Prozent des Kaufpreises. Bei einem Kaufpreis von 500.000 Euro sind das circa 5.000 bis 7.500 Euro inklusive Grundbuchkosten. Die Gebuhren sind im Gerichts- und Notarkostengesetz (GNotKG) festgelegt."
  },
  {
    question: "Wer bezahlt den Notar beim Immobilienverkauf?",
    answer: "Ublicherweise tragt der Kaufer die Notarkosten. Dies ist zwar nicht gesetzlich vorgeschrieben, hat sich aber als Marktstandard etabliert. Der Verkaufer tragt in der Regel nur Kosten fur die Loschung bestehender Grundschulden."
  },
  {
    question: "Kann man Notarkosten verhandeln?",
    answer: "Nein, Notarkosten sind gesetzlich festgelegt und nicht verhandelbar. Die Gebuhren gelten bundesweit einheitlich und richten sich nach dem Kaufpreis der Immobilie. Das schafft Transparenz und Planungssicherheit fur alle Beteiligten."
  },
  {
    question: "Was macht der Notar beim Immobilienverkauf?",
    answer: "Der Notar erstellt den Kaufvertrag, berat beide Parteien neutral, beurkundet den Vertrag und koordiniert die gesamte Abwicklung bis zur Eigentumsumschreibung im Grundbuch. Er pruft auch die rechtlichen Voraussetzungen und holt erforderliche Genehmigungen ein."
  },
  {
    question: "Wann werden die Notarkosten fallig?",
    answer: "Die Notarkosten werden in der Regel nach der Beurkundung fallig. Der Notar erstellt eine Kostenrechnung, die ublicherweise innerhalb von zwei bis vier Wochen bezahlt werden muss. Manchmal werden die Kosten auch uber das Notaranderkonto mit dem Kaufpreis verrechnet."
  },
  {
    question: "Sind Grundbuchkosten in den Notarkosten enthalten?",
    answer: "Die Grundbuchkosten werden zwar uber den Notar abgewickelt, sind aber technisch gesehen separate Gebuhren, die an das Grundbuchamt gehen. Sie betragen etwa 0,5 Prozent des Kaufpreises und werden oft zusammen mit den Notarkosten genannt."
  },
  {
    question: "Was passiert, wenn der Kaufvertrag nicht zustande kommt?",
    answer: "Wird ein Kaufvertrag nicht beurkundet, fallen in der Regel keine Notarkosten an. Wurde der Vertrag jedoch beurkundet und wird spater ruckabgewickelt, konnen dennoch Kosten entstehen. Beratungsgesprache ohne Beurkundung sind meist kostenfrei."
  },
  {
    question: "Kann ich den Notar frei wahlen?",
    answer: "Ja, grundsatzlich konnen Sie den Notar frei wahlen. Ublicherweise schlagt jedoch der Kaufer den Notar vor, da er die Kosten tragt. Als Verkaufer konnen Sie Vorschlage machen, sollten aber bedenken, dass die Wahl des Notars selten ein Konfliktpunkt ist."
  }
]

export function NotarkostenFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 lg:py-32 bg-bone">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <span className="text-gold text-sm tracking-[0.15em] uppercase block mb-4">
              Haufige Fragen
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-tight mb-6">
              FAQ zu Notarkosten
            </h2>
            <p className="text-graphite leading-relaxed">
              Die wichtigsten Fragen und Antworten rund um Notarkosten 
              beim Immobilienverkauf.
            </p>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-cream"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-serif text-lg text-ink pr-8">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-graphite leading-relaxed">
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
