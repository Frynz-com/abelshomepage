"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const steps = [
  {
    number: "01",
    title: "Entscheidung & Vorbereitung",
    duration: "1–2 Wochen",
    description: "Klären Sie Ihre Ziele: Wann möchten Sie verkaufen? Was ist Ihnen wichtig — schneller Verkauf oder maximaler Preis? Sammeln Sie erste Unterlagen und informieren Sie sich über den Markt.",
    tasks: ["Verkaufsziel definieren", "Unterlagen zusammenstellen", "Marktüberblick verschaffen"]
  },
  {
    number: "02",
    title: "Professionelle Bewertung",
    duration: "1 Woche",
    description: "Eine fundierte Wertermittlung ist die Basis für alles Weitere. Sie schützt vor zu niedrigen Preisen ebenso wie vor unrealistischen Erwartungen, die den Verkauf verzögern.",
    tasks: ["Vor-Ort-Besichtigung", "Marktanalyse", "Wertgutachten erstellen"]
  },
  {
    number: "03",
    title: "Vermarktungsstrategie",
    duration: "1–2 Wochen",
    description: "Professionelle Fotos, überzeugendes Exposé und die Entscheidung: öffentliche Vermarktung oder diskret im Off-Market-Netzwerk? Die richtige Strategie hängt von Ihrer Situation ab.",
    tasks: ["Professionelle Fotografie", "Exposé-Erstellung", "Vermarktungsweg wählen"]
  },
  {
    number: "04",
    title: "Interessenten & Besichtigungen",
    duration: "2–6 Wochen",
    description: "Anfragen prüfen, Interessenten qualifizieren, Besichtigungen koordinieren. Dieser Schritt entscheidet darüber, ob Sie Zeit mit ernsthaften Käufern oder Schaulustigen verbringen.",
    tasks: ["Interessenten vorqualifizieren", "Besichtigungen durchführen", "Feedback auswerten"]
  },
  {
    number: "05",
    title: "Verhandlung & Kaufvertrag",
    duration: "1–3 Wochen",
    description: "Preisverhandlung, Finanzierungsbestätigung des Käufers, Kaufvertragsentwurf durch den Notar. Hier zeigt sich, ob die Vorarbeit solide war — oder ob es zu bösen Überraschungen kommt.",
    tasks: ["Preisverhandlung führen", "Finanzierung prüfen lassen", "Kaufvertrag abstimmen"]
  },
  {
    number: "06",
    title: "Notartermin & Übergabe",
    duration: "2–4 Wochen",
    description: "Beurkundung beim Notar, Kaufpreiszahlung nach Fälligkeitsmitteilung, Schlüsselübergabe. Mit der Übergabe ist der Verkauf abgeschlossen — und Sie können aufatmen.",
    tasks: ["Notartermin wahrnehmen", "Kaufpreis empfangen", "Immobilie übergeben"]
  }
]

export function RatgeberVerkaufenAblaufSection() {
  return (
    <section id="ablauf" className="py-24 lg:py-32 bg-bone border-t border-line/40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            Der Prozess
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[1.1] max-w-[700px] mb-6">
            Immobilie verkaufen: Der komplette Ablauf in 6 Schritten
          </h2>
          <p className="text-graphite text-lg max-w-[600px]">
            Bei marktgerecht eingepreisten Immobilien sind im Schnitt 8–12 Wochen realistisch. So läuft der Prozess ab.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="border border-line/40 p-8 lg:p-10"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-serif text-5xl lg:text-6xl text-gold/55">{step.number}</span>
                <span className="text-xs uppercase tracking-[0.1em] text-graphite bg-line/20 px-3 py-1.5">{step.duration}</span>
              </div>
              <h3 className="font-serif text-2xl text-ink mb-4">{step.title}</h3>
              <p className="text-graphite leading-relaxed mb-6">{step.description}</p>
              <div className="pt-6 border-t border-line/40">
                <p className="text-xs uppercase tracking-[0.1em] text-graphite mb-3">Kernaufgaben</p>
                <ul className="flex flex-wrap gap-2">
                  {step.tasks.map((task) => (
                    <li key={task} className="text-sm text-ink bg-line/20 px-3 py-1">{task}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-graphite mb-6">Sie möchten den Prozess starten?</p>
          <Link
            href="/bewertung"
            className="inline-flex items-center justify-center bg-cream text-ink px-10 py-5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-white transition-all duration-300"
          >
            Kostenlose Bewertung anfordern
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
