"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const cities = [
  // Row 1 — 2 cards
  {
    name: "Düsseldorf",
    slug: "duesseldorf",
    tagline: "Oberkassel · Kaiserswerth · Rheinlage",
    image: "/images/cities/duesseldorf.jpg",
  },
  {
    name: "München",
    slug: "muenchen",
    tagline: "Bogenhausen · Schwabing · Lehel",
    image: "/images/cities/muenchen.jpg",
  },
  // Row 2 — 2 cards
  {
    name: "Hamburg",
    slug: "hamburg",
    tagline: "Harvestehude · Blankenese · HafenCity",
    image: "/images/cities/hamburg.jpg",
  },
  {
    name: "Frankfurt",
    slug: "frankfurt",
    tagline: "Westend · Sachsenhausen · Diplomatenviertel",
    image: "/images/cities/frankfurt.jpg",
  },
  // Row 3 — 3 cards
  {
    name: "Stuttgart",
    slug: "stuttgart",
    tagline: "Killesberg · Degerloch · Halbhöhenlage",
    image: "/images/cities/stuttgart.jpg",
  },
  {
    name: "Essen",
    slug: "essen",
    tagline: "Bredeney · Kettwig · Baldeneysee",
    image: "/images/cities/essen.jpg",
  },
  {
    name: "Grünwald",
    slug: "gruenwald",
    tagline: "Diskret · Exklusiv · Villenlage",
    image: "/images/cities/gruenwald.jpg",
  },
]

function CityCard({ city, index }: { city: typeof cities[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      viewport={{ once: true }}
    >
      <Link
        href={`/standorte/${city.slug}`}
        className="group relative block aspect-[3/2] overflow-hidden"
      >
        <Image
          src={city.image}
          alt={`Immobilienmakler ${city.name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
        <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-px bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-gold/90">Standort</span>
          </div>
          <h3 className="font-serif text-[24px] lg:text-[30px] text-white leading-tight mb-1 tracking-[-0.01em]">
            {city.name}
          </h3>
          <p className="text-[12px] text-white/55 leading-relaxed hidden sm:block">
            {city.tagline}
          </p>
          <div className="flex items-center gap-2 mt-4 text-white/45 group-hover:text-gold transition-colors duration-300">
            <span className="text-[10px] uppercase tracking-[0.14em]">Mehr erfahren</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function CitiesSection() {
  const row1 = cities.slice(0, 2)
  const row2 = cities.slice(2, 4)
  const row3 = cities.slice(4, 7)

  return (
    <section className="py-28 lg:py-40 bg-cream border-t border-line/50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Unsere Standorte</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] text-ink leading-[1.06] tracking-[-0.01em]">
              Wo wir zu Hause sind
            </h2>
          </div>
          <Link
            href="/standorte"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-graphite hover:text-ink transition-colors group shrink-0"
          >
            Alle Standorte
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-gold" />
          </Link>
        </motion.div>

        {/* Row 1 — 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          {row1.map((city, i) => <CityCard key={city.slug} city={city} index={i} />)}
        </div>

        {/* Row 2 — 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          {row2.map((city, i) => <CityCard key={city.slug} city={city} index={i + 2} />)}
        </div>

        {/* Row 3 — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {row3.map((city, i) => <CityCard key={city.slug} city={city} index={i + 4} />)}
        </div>

      </div>
    </section>
  )
}
