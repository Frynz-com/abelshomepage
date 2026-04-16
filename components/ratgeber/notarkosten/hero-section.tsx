"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function NotarkostenHeroSection() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-stone">
            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/ratgeber" className="hover:text-gold transition-colors">Ratgeber</Link></li>
            <li>/</li>
            <li className="text-ink">Notarkosten</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="text-gold text-sm tracking-[0.15em] uppercase mb-6 block">
              Ratgeber
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] mb-6 text-balance">
              Notarkosten beim Immobilienverkauf
            </h1>
            
            <p className="text-xl lg:text-2xl text-graphite leading-relaxed mb-8 max-w-[540px]">
              Was der Notar kostet, wer zahlt und warum eine gute Vorbereitung 
              am Ende Zeit und Geld spart.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-ink text-cream font-medium hover:bg-gold transition-colors duration-300"
              >
                Beratung anfragen
              </Link>
              <Link
                href="/immobilie-bewerten"
                className="inline-flex items-center justify-center px-8 py-4 border border-ink text-ink font-medium hover:bg-ink hover:text-cream transition-colors duration-300"
              >
                Immobilie bewerten lassen
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Quick Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-surface p-8 lg:p-10">
              <h2 className="font-serif text-xl text-ink mb-6">Auf einen Blick</h2>
              <ul className="space-y-4 text-graphite">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">—</span>
                  <span>Notarkosten betragen ca. 1,0-1,5 % des Kaufpreises</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">—</span>
                  <span>In der Regel zahlt der Kaufer die Notarkosten</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">—</span>
                  <span>Gebuhren sind gesetzlich im GNotKG festgelegt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">—</span>
                  <span>Der Notar schutzt beide Parteien rechtlich</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">—</span>
                  <span>Gute Vorbereitung spart Zeit und vermeidet Fehler</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
