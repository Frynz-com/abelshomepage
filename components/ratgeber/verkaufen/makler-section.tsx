"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check, X } from "lucide-react"

export function RatgeberVerkaufenMaklerSection() {
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
          className="mb-16 lg:mb-20 max-w-[700px]"
        >
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            Die ehrliche Abwägung
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[1.1] mb-6">
            Immobilie mit Makler oder privat verkaufen?
          </h2>
          <p className="text-graphite text-lg leading-relaxed">
            Eine der wichtigsten Entscheidungen beim Verkauf. Wir geben Ihnen eine ehrliche Einschätzung — auch wenn das Ergebnis bedeutet, dass Sie keinen Makler brauchen.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mit Makler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-line bg-surface p-8 lg:p-10"
          >
            <h3 className="font-serif text-2xl text-ink mb-6">Mit Makler verkaufen</h3>
            
            <div className="space-y-6 mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-gold mb-3">Wann sinnvoll</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                    <span className="text-graphite">Wenig Zeit oder Erfahrung mit Immobilienverkäufen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                    <span className="text-graphite">Diskretion wichtig (Off-Market-Verkauf gewünscht)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                    <span className="text-graphite">Komplexe Situation (Erbfall, Scheidung, Mehrparteien)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                    <span className="text-graphite">Höherwertiges Objekt, bei dem Fehler teuer werden</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                    <span className="text-graphite">Kein Zugang zu qualifizierten Kaufinteressenten</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-stone mb-3">Was ein guter Makler leistet</p>
                <ul className="space-y-2 text-sm text-graphite">
                  <li>• Realistische Marktpreisbewertung</li>
                  <li>• Professionelle Vermarktung & Exposé</li>
                  <li>• Qualifizierung von Interessenten</li>
                  <li>• Verhandlungsführung in Ihrem Interesse</li>
                  <li>• Rechtssichere Abwicklung bis Notar</li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-line">
              <p className="text-sm text-graphite mb-4">
                <span className="font-medium">Kosten:</span> 3–6 % des Kaufpreises (je nach Bundesland geteilt zwischen Käufer und Verkäufer)
              </p>
            </div>
          </motion.div>

          {/* Privat verkaufen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="border border-line bg-surface p-8 lg:p-10"
          >
            <h3 className="font-serif text-2xl text-ink mb-6">Privat verkaufen</h3>
            
            <div className="space-y-6 mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-gold mb-3">Wann sinnvoll</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                    <span className="text-graphite">Erfahrung mit Immobilienverkäufen vorhanden</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                    <span className="text-graphite">Ausreichend Zeit für Vermarktung & Besichtigungen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                    <span className="text-graphite">Standardobjekt in gefragter Lage (verkauft sich fast von selbst)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                    <span className="text-graphite">Bereits Kaufinteressent vorhanden</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-stone mb-3">Was Sie selbst übernehmen müssen</p>
                <ul className="space-y-2 text-sm text-graphite">
                  <li>• Marktgerechte Preisfindung</li>
                  <li>• Professionelle Fotos & Exposé</li>
                  <li>• Anfragen beantworten & qualifizieren</li>
                  <li>• Besichtigungen durchführen</li>
                  <li>• Verhandlungen führen</li>
                  <li>• Kaufvertrag koordinieren</li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-line">
              <p className="text-sm text-graphite">
                <span className="font-medium">Kosten:</span> Keine Maklerprovision, aber ggf. Kosten für Fotograf, Anzeigen, Rechtsprüfung
              </p>
            </div>
          </motion.div>
        </div>

        {/* Honest Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-bone p-8 lg:p-10"
        >
          <h4 className="font-serif text-xl text-ink mb-4">Unsere ehrliche Einschätzung</h4>
          <p className="text-graphite leading-relaxed mb-6">
            Ein guter Makler ist kein Luxus, sondern eine Investition — wenn er seinen Job richtig macht. Die Provision sollte sich durch einen besseren Verkaufspreis, schnellere Abwicklung oder weniger Stress mehr als amortisieren. Wenn das nicht der Fall ist, brauchen Sie keinen Makler oder den falschen.
          </p>
          <Link
            href="/kontakt"
            className="text-gold font-medium text-sm hover:text-ink transition-colors"
          >
            Unverbindlich beraten lassen →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
