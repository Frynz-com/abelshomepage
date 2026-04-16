"use client"

import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"

const mistakes = [
  {
    number: "01",
    title: "Zu hoher Einstiegspreis",
    problem: "Viele Eigentümer starten mit einem überhöhten Preis in der Hoffnung, später verhandeln zu können. Das Ergebnis: Die Immobilie verbrennt am Markt, Interessenten werden misstrauisch, und am Ende wird oft unter Marktwert verkauft.",
    solution: "Starten Sie mit einem marktgerechten Preis. Eine professionelle Bewertung gibt Ihnen die nötige Sicherheit — und schützt vor teuren Fehleinschätzungen."
  },
  {
    number: "02",
    title: "Schlechte Präsentation",
    problem: "Dunkle Handyfotos, unaufgeräumte Räume, lieblose Exposés. Der erste Eindruck entscheidet darüber, ob Interessenten überhaupt anfragen — und wie viel sie bereit sind zu zahlen.",
    solution: "Investieren Sie in professionelle Fotografie und ein hochwertiges Exposé. Die Kosten (500-1.500 Euro) amortisieren sich schnell durch mehr und bessere Anfragen."
  },
  {
    number: "03",
    title: "Fehlende Unterlagen",
    problem: "Energieausweis nicht vorhanden, Grundrisse verschollen, Nebenkostenabrechnung nicht auffindbar. Fehlende Dokumente verzögern den Verkauf und verunsichern Käufer.",
    solution: "Sammeln Sie alle Unterlagen vor dem Verkaufsstart. Eine vollständige Dokumentation signalisiert Seriosität und beschleunigt den Prozess."
  },
  {
    number: "04",
    title: "Emotionale Preisvorstellung",
    problem: "Hier haben wir so viele schöne Jahre verbracht - emotionaler Wert und Marktwert sind selten identisch. Persönliche Erinnerungen rechtfertigen keinen Aufpreis.",
    solution: "Trennen Sie emotionalen und finanziellen Wert. Eine externe Bewertung hilft, den objektiven Marktwert zu erkennen."
  },
  {
    number: "05",
    title: "Keine Käuferqualifizierung",
    problem: "Dutzende Besichtigungen, aber kein ernsthafter Käufer. Besichtigungstourismus kostet Zeit, Nerven und kann den Verkauf monatelang verzögern.",
    solution: "Qualifizieren Sie Interessenten vor der Besichtigung: Kaufabsicht, Budget, Finanzierungsstatus. Weniger, aber bessere Termine führen schneller zum Ziel."
  }
]

export function RatgeberVerkaufenFehlerSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Subtle Divider */}
        <div className="w-16 h-px bg-gold/40 mb-16" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            Häufige Stolperfallen
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[1.1] max-w-[700px]">
            Die 5 häufigsten Fehler beim Immobilienverkauf
          </h2>
        </motion.div>

        {/* Mistakes List */}
        <div className="space-y-6">
          {mistakes.map((mistake, index) => (
            <motion.div
              key={mistake.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="border border-line bg-surface"
            >
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-0">
                {/* Number + Title */}
                <div className="lg:col-span-4 p-8 lg:p-10 lg:border-r border-line">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-5 h-5 text-gold shrink-0 mt-1" />
                    <div>
                      <span className="text-gold text-sm tracking-[0.1em] block mb-2">{mistake.number}</span>
                      <h3 className="font-serif text-xl text-ink">{mistake.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Problem */}
                <div className="lg:col-span-4 p-8 lg:p-10 lg:border-r border-line border-t lg:border-t-0">
                  <p className="text-xs uppercase tracking-[0.1em] text-stone mb-3">Das Problem</p>
                  <p className="text-graphite leading-relaxed">{mistake.problem}</p>
                </div>

                {/* Solution */}
                <div className="lg:col-span-4 p-8 lg:p-10 border-t lg:border-t-0">
                  <p className="text-xs uppercase tracking-[0.1em] text-gold mb-3">Die Lösung</p>
                  <p className="text-graphite leading-relaxed">{mistake.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
