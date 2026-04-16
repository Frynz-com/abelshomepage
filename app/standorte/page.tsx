"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const cities = [
  // Row 1
  {
    name: "Düsseldorf",
    slug: "duesseldorf",
    tagline: "Oberkassel · Kaiserswerth · Rheinlage",
    description: "Düsseldorf vereint internationale Kaufkraft mit gefragten Wohnlagen direkt am Rhein.",
    image: "/images/cities/duesseldorf.jpg",
  },
  {
    name: "München",
    slug: "muenchen",
    tagline: "Bogenhausen · Schwabing · Lehel",
    description: "München ist einer der stabilsten Immobilienmärkte Deutschlands.",
    image: "/images/cities/muenchen.jpg",
  },
  // Row 2
  {
    name: "Hamburg",
    slug: "hamburg",
    tagline: "Harvestehude · Blankenese · HafenCity",
    description: "Die Hansestadt bietet von der HafenCity bis zum Elbhang ein breites Spektrum hochwertiger Lagen.",
    image: "/images/cities/hamburg.jpg",
  },
  {
    name: "Frankfurt",
    slug: "frankfurt",
    tagline: "Westend · Sachsenhausen · Diplomatenviertel",
    description: "Frankfurt zieht internationale Käufer an — das Westend für urbane Premiumlagen.",
    image: "/images/cities/frankfurt.jpg",
  },
  // Row 3
  {
    name: "Stuttgart",
    slug: "stuttgart",
    tagline: "Killesberg · Degerloch · Halbhöhenlage",
    description: "Stuttgarts Topografie schafft einzigartige Wohnlagen mit Panoramablick.",
    image: "/images/cities/stuttgart.jpg",
  },
  {
    name: "Essen",
    slug: "essen",
    tagline: "Bredeney · Kettwig · Baldeneysee",
    description: "Am Baldeneysee entstehen Villenlagen mit Seeblick — ruhig, grün, exklusiv.",
    image: "/images/cities/essen.jpg",
  },
  {
    name: "Grünwald",
    slug: "gruenwald",
    tagline: "Diskret · Exklusiv · Villenlage",
    description: "Grünwald gilt als eine der exklusivsten Gemeinden Deutschlands.",
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

        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-px bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-gold/90">Standort</span>
          </div>
          <h2 className="font-serif text-[26px] lg:text-[34px] text-white leading-tight mb-1.5 tracking-[-0.01em]">
            {city.name}
          </h2>
          <p className="text-[12px] text-white/55 mb-2 hidden sm:block">{city.tagline}</p>
          <p className="text-[13px] text-white/40 leading-relaxed hidden lg:block max-w-[380px]">
            {city.description}
          </p>
          <div className="flex items-center gap-2 mt-5 text-white/45 group-hover:text-gold transition-colors duration-300">
            <span className="text-[10px] uppercase tracking-[0.14em]">Standort entdecken</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function StandortePage() {
  const row1 = cities.slice(0, 2)
  const row2 = cities.slice(2, 4)
  const row3 = cities.slice(4, 7)

  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />

      {/* Page Hero */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 border-b border-line/50 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Unsere Standorte</span>
            </div>
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-6">
                <h1 className="font-serif text-[clamp(2.6rem,5.5vw,5rem)] text-ink leading-[0.97] tracking-[-0.02em]">
                  Sieben Städte.<br />
                  <span className="text-graphite">Ein Anspruch.</span>
                </h1>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-[16px] text-graphite leading-[1.75]">
                  Abels Immobilien ist in den sieben bedeutendsten Metropolregionen Deutschlands präsent — mit lokaler Marktkenntnis, persönlicher Betreuung und dem Qualitätsanspruch eines inhabergeführten Hauses seit 1999.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* City Grid */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

          {/* Row 1 — 2 equal cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            {row1.map((city, i) => <CityCard key={city.slug} city={city} index={i} />)}
          </div>

          {/* Row 2 — 2 equal cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            {row2.map((city, i) => <CityCard key={city.slug} city={city} index={i + 2} />)}
          </div>

          {/* Row 3 — 3 equal cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {row3.map((city, i) => <CityCard key={city.slug} city={city} index={i + 4} />)}
          </div>

        </div>
      </section>

      {/* Why strip */}
      <section className="border-t border-line/50 py-20 lg:py-28 bg-bone">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-gold/60" />
                <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Lokale Stärke</span>
              </div>
              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] text-ink leading-[1.08] tracking-[-0.01em]">
                Überregional vernetzt.<br />Lokal verwurzelt.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-[16px] text-graphite leading-[1.75] mb-6">
                Ein Premium-Immobilienverkauf gelingt nur mit echter lokaler Marktkenntnis. Wer die Mikrolagen, die aktuellen Käuferprofile und die Preisdynamik eines Standorts wirklich versteht, erzielt nicht nur bessere Ergebnisse — er schützt auch das Vertrauen seiner Mandanten.
              </p>
              <p className="text-[15px] text-stone leading-[1.7]">
                Abels Immobilien ist deshalb nicht überregional über Franchisepartner tätig, sondern mit eigenem, inhabergeführtem Engagement an jedem der sieben Standorte persönlich präsent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
