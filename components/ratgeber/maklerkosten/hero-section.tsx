"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function MaklerkostenHeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-stone mb-8">
              <Link href="/" className="hover:text-ink transition-colors">Home</Link>
              <span>/</span>
              <Link href="/ratgeber" className="hover:text-ink transition-colors">Ratgeber</Link>
              <span>/</span>
              <span className="text-ink">Maklerkosten</span>
            </nav>

            <span className="text-gold text-sm tracking-[0.15em] uppercase mb-6 block">
              Ratgeber
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] mb-8 text-balance">
              Maklerkosten beim Immobilienverkauf
            </h1>
            
            <p className="text-graphite text-lg lg:text-xl leading-relaxed max-w-xl mb-10">
              Provision, Leistungen und worauf Eigentümer achten sollten — 
              ein ehrlicher Einblick in die Kostenstruktur beim Immobilienverkauf.
            </p>

            {/* Quick Overview */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-graphite">Lesezeit: 8 Min.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-graphite">Stand: 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-graphite">Inkl. Checkliste</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/3] bg-bone rounded-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-12">
                  <span className="font-serif text-7xl text-gold/20">%</span>
                  <p className="text-graphite mt-4 text-sm tracking-wide">Provision verstehen</p>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
