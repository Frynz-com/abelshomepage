"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function NotarkostenEinordnungSection() {
  return (
    <section className="py-24 lg:py-32 bg-bone border-t border-line/40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-gold text-sm tracking-[0.15em] uppercase mb-6 block">
              Perspektive
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-tight mb-6">
              Notarkosten im Gesamtkontext
            </h2>
            <p className="text-graphite leading-relaxed">
              Bei einem Immobilienverkauf fallen verschiedene Kosten an.
              Wie ordnen sich die Notarkosten ein?
            </p>
          </motion.div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-xl text-ink mb-4">
                Vergleich zu anderen Nebenkosten
              </h3>
              <p className="text-graphite leading-relaxed">
                Im Vergleich zur Grunderwerbsteuer (je nach Bundesland 3,5-6,5 %)
                und moglichen{" "}
                <Link href="/ratgeber/maklerkosten" className="text-gold hover:underline">
                  Maklerkosten
                </Link>{" "}
                (oft 3-6 %) sind die Notarkosten mit etwa 1-1,5 % ein
                uberschaubarer Posten. Sie bieten dafur maximale Rechtssicherheit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-xl text-ink mb-4">
                Keine Verhandlungssache
              </h3>
              <p className="text-graphite leading-relaxed">
                Anders als bei Maklergebuhren konnen Notarkosten nicht verhandelt
                werden. Die Gebuhren sind gesetzlich festgelegt und gelten
                bundesweit einheitlich. Das schafft Transparenz und
                Planungssicherheit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-xl text-ink mb-4">
                Investition in Sicherheit
              </h3>
              <p className="text-graphite leading-relaxed">
                Die Notarkosten sind keine vermeidbare Ausgabe, sondern eine
                Investition in Rechtssicherheit. Ein sauber beurkundeter
                Vertrag schutzt vor spateren Streitigkeiten und gibt beiden
                Seiten die Gewissheit, dass alles korrekt ablauft.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
