"use client"

import { motion } from "framer-motion"

export function NotarkostenWerTraegtSection() {
  return (
    <section className="py-24 lg:py-32 bg-bone">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Section Label */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-sm tracking-[0.15em] uppercase block mb-4">
                Kostentragung
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-tight">
                Wer tragt die Notarkosten?
              </h2>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-xl text-ink leading-relaxed">
                In Deutschland ist es ublich, dass der Kaufer die Notarkosten 
                tragt. Dies ist zwar nicht gesetzlich vorgeschrieben, hat sich 
                aber als Marktstandard etabliert.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-cream p-8">
                  <h3 className="font-serif text-xl text-ink mb-4">Kaufer zahlt</h3>
                  <ul className="space-y-3 text-graphite">
                    <li className="flex items-start gap-3">
                      <span className="text-gold mt-1">—</span>
                      <span>Beurkundungsgebuhren</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold mt-1">—</span>
                      <span>Grundbucheintragung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold mt-1">—</span>
                      <span>Grundschuldbestellung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold mt-1">—</span>
                      <span>Auflassungsvormerkung</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-cream p-8">
                  <h3 className="font-serif text-xl text-ink mb-4">Verkaufer zahlt</h3>
                  <ul className="space-y-3 text-graphite">
                    <li className="flex items-start gap-3">
                      <span className="text-gold mt-1">—</span>
                      <span>Loschung alter Grundschulden</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold mt-1">—</span>
                      <span>Loschung von Wohnrechten</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold mt-1">—</span>
                      <span>Loschungsbewilligung</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-graphite leading-relaxed">
                Gut zu wissen: Rechtlich haften beide Parteien gegenuber dem 
                Notar fur die Kosten - unabhangig davon, was im Vertrag steht. 
                Sollte der Kaufer nicht zahlen, kann der Notar auch den 
                Verkaufer in Anspruch nehmen.
              </p>

              <p className="text-lg text-graphite leading-relaxed">
                Bei besonders hochpreisigen Immobilien oder in bestimmten 
                Marktsituationen kann die Kostenverteilung auch individuell 
                verhandelt werden. Das ist jedoch eher die Ausnahme.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
