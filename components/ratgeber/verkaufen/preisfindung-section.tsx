"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function RatgeberVerkaufenPreisfindungSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Subtle Divider */}
        <div className="w-16 h-px bg-gold/40 mb-16" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
              Der entscheidende Faktor
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[1.1] mb-8">
              Den richtigen Preis finden
            </h2>

            <div className="prose prose-lg text-graphite leading-relaxed space-y-6">
              <p>
                Die Preisfindung ist der kritischste Moment im Verkaufsprozess. Zu hoch, und die Immobilie „verbrennt" am Markt. Zu niedrig, und Sie verschenken bares Geld. Der richtige Preis liegt irgendwo dazwischen — und ihn zu finden, erfordert Marktkenntnis, Erfahrung und Objektivität.
              </p>
              <p>
                <strong>Was den Preis bestimmt:</strong> Lage, Zustand, Größe und Ausstattung sind die offensichtlichen Faktoren. Aber auch Marktdynamik, Vergleichsverkäufe in der Nachbarschaft und die aktuelle Zinssituation spielen eine Rolle. Eine professionelle Bewertung berücksichtigt all diese Faktoren.
              </p>
              <p>
                <strong>Vergleichswertverfahren:</strong> Die gängigste Methode für Wohnimmobilien. Dabei werden tatsächliche Verkaufspreise vergleichbarer Objekte in ähnlicher Lage herangezogen — nicht die Angebotspreise auf Immobilienportalen, sondern die realen Abschlüsse.
              </p>
              <p>
                <strong>Der häufigste Fehler:</strong> Viele Eigentümer orientieren sich an den Angebotspreisen auf Immobilienportalen. Diese liegen jedoch oft 10–20 % über den tatsächlichen Verkaufspreisen. Das Ergebnis: ein überhöhter Einstiegspreis, der später korrigiert werden muss.
              </p>
            </div>
          </motion.div>

          {/* Right: CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="bg-bone border border-line/50 p-8 lg:p-10 sticky top-32">
              <h3 className="font-serif text-2xl text-ink mb-4">Kostenlose Bewertung</h3>
              <p className="text-graphite leading-relaxed mb-8">
                Erfahren Sie, was Ihre Immobilie wirklich wert ist. Unsere Experten bewerten Ihr Objekt vor Ort — fundiert, marktgerecht und vollkommen unverbindlich.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                  <span className="text-graphite">Persönliche Vor-Ort-Besichtigung</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                  <span className="text-graphite">Analyse vergleichbarer Verkäufe</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                  <span className="text-graphite">Schriftliches Wertgutachten</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                  <span className="text-graphite">Innerhalb von 72 Stunden</span>
                </li>
              </ul>

              <Link
                href="/bewertung"
                className="block w-full text-center bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium hover:bg-ink/90 transition-all duration-300"
              >
                Jetzt Bewertung anfordern
              </Link>

              <p className="text-stone text-xs text-center mt-4">
                100 % kostenfrei und unverbindlich
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
