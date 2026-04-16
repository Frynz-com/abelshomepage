"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Breadcrumbs */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-stone">
            <li><Link href="/" className="hover:text-ink transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/ratgeber" className="hover:text-ink transition-colors">Ratgeber</Link></li>
            <li>/</li>
            <li className="text-ink">Energieausweis</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm tracking-[0.15em] uppercase mb-6 block">
              Ratgeber
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] mb-6">
              Energieausweis beim Immobilienverkauf
            </h1>
            
            <p className="text-xl text-graphite leading-relaxed mb-8 max-w-[540px]">
              Was Eigentumer wissen mussen: Pflichten, Fristen und wie wir Sie dabei unterstutzen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-ink text-cream font-medium hover:bg-ink/90 transition-colors"
              >
                Beratung vereinbaren
              </Link>
              <Link
                href="/immobilie-bewerten"
                className="inline-flex items-center justify-center px-8 py-4 border border-ink text-ink font-medium hover:bg-ink hover:text-cream transition-colors"
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
            className="bg-bone p-8 lg:p-10"
          >
            <h2 className="font-serif text-xl text-ink mb-6">Das Wichtigste auf einen Blick</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-graphite">Energieausweis ist Pflicht bei Verkauf und Vermietung</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-graphite">Muss spatestens bei der ersten Besichtigung vorliegen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-graphite">Zwei Arten: Verbrauchsausweis und Bedarfsausweis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-graphite">Gultigkeit: 10 Jahre ab Ausstellungsdatum</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-graphite">Verstoss kann Bussgelder bis 10.000 Euro nach sich ziehen</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
