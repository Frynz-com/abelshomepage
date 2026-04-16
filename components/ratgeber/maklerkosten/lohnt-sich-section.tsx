"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function LohntSichSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Subtle Section Divider */}
        <div className="w-16 h-px bg-gold/40 mb-16 lg:mb-20" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm tracking-[0.15em] uppercase mb-4 block">
              Ehrliche Einschätzung
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-snug mb-8">
              Lohnt sich ein Makler?
            </h2>
            
            <div className="space-y-6 text-graphite leading-relaxed">
              <p>
                Diese Frage lässt sich nicht pauschal beantworten. Es hängt von 
                Ihrer persönlichen Situation, dem Objekt und Ihren Ressourcen ab.
              </p>
              
              <p>
                <strong className="text-ink">Die wirtschaftliche Perspektive:</strong> Studien 
                zeigen, dass professionell vermarktete Immobilien im Durchschnitt 
                höhere Verkaufspreise erzielen. Die Differenz übersteigt oft die 
                Maklerkosten — besonders in komplexen Märkten oder bei 
                besonderen Objekten.
              </p>

              <p>
                <strong className="text-ink">Der Zeitfaktor:</strong> Ein Verkauf 
                bindet erhebliche Ressourcen: Anfragen beantworten, Besichtigungen 
                organisieren, Unterlagen beschaffen, Verhandlungen führen. Ein 
                Makler übernimmt diese Aufgaben und schützt Ihre Zeit.
              </p>

              <p>
                <strong className="text-ink">Das Risiko:</strong> Fehler beim 
                Immobilienverkauf können teuer werden — ob durch falsche Preisfindung, 
                rechtliche Fallstricke oder unqualifizierte Käufer. Ein erfahrener 
                Makler minimiert diese Risiken.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Pro/Contra Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-bone p-8 lg:p-10">
              <h3 className="font-serif text-xl text-ink mb-8">
                Wann ein Makler besonders sinnvoll ist:
              </h3>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Sie haben wenig Zeit für den Verkaufsprozess",
                  "Das Objekt ist hochpreisig oder besonders",
                  "Sie kennen den lokalen Markt nicht gut",
                  "Diskretion ist Ihnen wichtig (Off-Market)",
                  "Es gibt rechtliche Besonderheiten (Erbe, Scheidung)",
                  "Sie möchten emotionale Distanz zum Verkauf"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-gold mt-1">→</span>
                    <span className="text-graphite">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-line/50">
                <p className="text-graphite text-sm mb-4">
                  Unsicher, ob ein Makler für Sie sinnvoll ist?
                </p>
                <Link 
                  href="/kontakt"
                  className="text-ink font-medium hover:text-gold transition-colors flex items-center gap-2"
                >
                  Kostenfreie Erstberatung vereinbaren
                  <span>→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
