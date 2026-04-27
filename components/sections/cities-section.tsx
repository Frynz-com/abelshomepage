"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const cities = [
  {
    name: "Düsseldorf",
    slug: "duesseldorf",
    tagline: "Oberkassel · Kaiserswerth · Rheinlage",
    image: "/images/cities/duesseldorf.jpg",
    size: "large",
  },
  {
    name: "München",
    slug: "muenchen",
    tagline: "Bogenhausen · Schwabing · Lehel",
    image: "/images/cities/muenchen.jpg",
    size: "large",
  },
  {
    name: "Hamburg",
    slug: "hamburg",
    tagline: "Harvestehude · Blankenese · HafenCity",
    image: "/images/cities/hamburg.jpg",
    size: "medium",
  },
  {
    name: "Frankfurt",
    slug: "frankfurt",
    tagline: "Westend · Sachsenhausen · Diplomatenviertel",
    image: "/images/cities/frankfurt.jpg",
    size: "medium",
  },
  {
    name: "Stuttgart",
    slug: "stuttgart",
    tagline: "Killesberg · Degerloch · Halbhöhenlage",
    image: "/images/cities/stuttgart.jpg",
    size: "small",
  },
  {
    name: "Essen",
    slug: "essen",
    tagline: "Bredeney · Kettwig · Baldeneysee",
    image: "/images/cities/essen.jpg",
    size: "small",
  },
  {
    name: "Grünwald",
    slug: "gruenwald",
    tagline: "Diskret · Exklusiv · Villenlage",
    image: "/images/cities/gruenwald.jpg",
    size: "small",
  },
]

function CityCard({
  city,
  index,
  aspectClass,
}: {
  city: (typeof cities)[0]
  index: number
  aspectClass: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link
        href={`/standorte/${city.slug}`}
        className={`group relative block overflow-hidden ${aspectClass}`}
      >
        <Image
          src={city.image}
          alt={`Immobilienmakler ${city.name} – Abels Immobilien`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {/* Clean gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
        <div className="absolute inset-0 bg-ink/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-7 lg:p-9">
          <h3 className="font-serif text-[26px] lg:text-[32px] text-white leading-none tracking-[-0.01em] mb-2">
            {city.name}
          </h3>
          <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors duration-300">
            <span className="text-[9.5px] uppercase tracking-[0.22em]">Standort ansehen</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function CitiesSection() {
  const [duo1, duo2] = [cities.slice(0, 2), cities.slice(2, 4)]
  const trio = cities.slice(4, 7)

  return (
    <section className="pt-20 lg:pt-28 pb-24 lg:pb-36 bg-cream border-t border-line/40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-18"
        >
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-px bg-gold/70" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-gold">
                Unsere Standorte
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.6rem)] text-ink leading-[1.04] tracking-[-0.015em]">
              Wo wir zu Hause sind
            </h2>
          </div>
          <Link
            href="/standorte"
            className="inline-flex items-center gap-2.5 text-[10px] uppercase tracking-[0.22em] text-graphite hover:text-gold transition-colors duration-200 group shrink-0"
          >
            Alle Standorte
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-gold" />
          </Link>
        </motion.div>

        {/* Row 1 — 2 large cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
          {duo1.map((city, i) => (
            <CityCard
              key={city.slug + i}
              city={city}
              index={i}
              aspectClass="aspect-[4/3] lg:aspect-[16/9]"
            />
          ))}
        </div>

        {/* Row 2 — 2 medium cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
          {duo2.map((city, i) => (
            <CityCard
              key={city.slug + i}
              city={city}
              index={i + 2}
              aspectClass="aspect-[4/3]"
            />
          ))}
        </div>

        {/* Row 3 — 3 portrait cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {trio.map((city, i) => (
            <CityCard
              key={city.slug + i}
              city={city}
              index={i + 4}
              aspectClass="aspect-[3/2]"
            />
          ))}
        </div>

      </div>
    </section>
  )
}
