"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const markets = [
  {
    name: "Oberkassel",
    city: "Düsseldorf",
    slug: "duesseldorf",
    description: "Altbauten mit Rheinblick, ruhige Familienlage und gefragte Parkhäuser — einer der beständigsten Premiumstandorte Düsseldorfs.",
    areas: "Rheinpark · Belsenplatz · Kaiserswerther Straße",
    character: "Stabil · Gefragt · Familienorientiert",
  },
  {
    name: "Kaiserswerth",
    city: "Düsseldorf",
    slug: "duesseldorf",
    description: "Historischer Stadtteil nördlich Düsseldorfs mit Villenbebauung, diskreter Nachbarschaft und außergewöhnlicher Ruhe.",
    areas: "Am Röttgen · Elbsee · Alte Landstraße",
    character: "Historisch · Diskret · Villenlage",
  },
  {
    name: "Bogenhausen",
    city: "München",
    slug: "muenchen",
    description: "Diplomatenviertel und kulturelles Zentrum Münchens — Gründerzeit und moderne Villen in einzigartiger Innenstadtnähe.",
    areas: "Herzogpark · Sternwarte · Möhlstraße",
    character: "Diplomatisch · Exklusiv · Zentral",
  },
  {
    name: "Grünwald",
    city: "München",
    slug: "gruenwald",
    description: "Die diskreteste Adresse im Großraum München. Weitläufige Villen, Waldlage und eine Nachbarschaft, die Privatsphäre schätzt.",
    areas: "Am Kirchberg · Forsthausstraße · Südseite",
    character: "Diskret · Weitläufig · Spitzenlage",
  },
  {
    name: "Blankenese",
    city: "Hamburg",
    slug: "hamburg",
    description: "Das Treppenviertel mit Elbblick — einzigartige Hanglage, historische Architektur und eine der begehrtesten Premiumadressen Norddeutschlands.",
    areas: "Süllberg · Treppenviertel · Elbchaussee",
    character: "Hanglage · Elbblick · Begehrt",
  },
  {
    name: "Westend",
    city: "Frankfurt",
    slug: "frankfurt",
    description: "Frankfurts bestes Wohnquartier — Gründerzeitarchitektur, Bankennähe und stabiler Premiumstandort mit konstanter Nachfrage.",
    areas: "Bockenheimer Landstraße · Siesmayerstraße",
    character: "Urban · Stabil · Wertig",
  },
  {
    name: "Bredeney",
    city: "Essen",
    slug: "essen",
    description: "Villenquartier am Baldeneysee mit Wald und Ruhe — einer der exklusivsten und wertstabilsten Wohnstandorte im Ruhrgebiet.",
    areas: "Baldeneysee · Fischlaker Straße · Am Heißen",
    character: "See · Wald · Diskret",
  },
  {
    name: "Killesberg",
    city: "Stuttgart",
    slug: "stuttgart",
    description: "Stuttgarts beste Halbhöhenlage — Parkblick, klare Architektur und eine der begehrtesten Premiumadressen in Baden-Württemberg.",
    areas: "Höhenpark · Lenbachstraße · Parksiedlung",
    character: "Halbhöhenlage · Park · Premium",
  },
]

export function MarketSection() {
  const [active, setActive] = useState(markets[0])

  return (
    <section className="py-20 lg:py-32 bg-bone border-t border-line/40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-28"
        >
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gold/60" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-gold">
                Unsere Märkte
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.6rem)] text-ink leading-[1.04] tracking-[-0.015em]">
              Premium-Lagen<br />in Deutschland
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-[15px] text-graphite leading-[1.8]">
              Ausgewählte Stadtteile, in denen wir aktiv tätig sind und den Markt aus erster Hand kennen.
            </p>
          </div>
        </motion.div>

        {/* Interactive layout */}
        <div className="grid lg:grid-cols-12 gap-0">

          {/* Left: District list */}
          <div className="lg:col-span-5 border-t border-line/50">
            {markets.map((market, i) => (
              <motion.button
                key={market.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                viewport={{ once: true }}
                onClick={() => setActive(market)}
                className={`w-full text-left flex items-center justify-between py-[18px] border-b border-line/50 transition-all duration-250 group ${
                  active.name === market.name ? "pl-4" : "pl-0 hover:pl-2"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-0.5 h-5 transition-all duration-300 shrink-0 ${
                    active.name === market.name ? "bg-gold" : "bg-transparent"
                  }`} />
                  <div>
                    <span className={`block font-serif text-[17px] leading-tight transition-colors duration-200 ${
                      active.name === market.name
                        ? "text-ink"
                        : "text-ink/38 group-hover:text-ink/65"
                    }`}>
                      {market.name}
                    </span>
                    <span className="block text-[9.5px] uppercase tracking-[0.2em] text-stone/60 mt-0.5">
                      {market.city}
                    </span>
                  </div>
                </div>
                <ArrowRight className={`w-3.5 h-3.5 transition-all duration-200 shrink-0 mr-1 ${
                  active.name === market.name
                    ? "text-gold translate-x-0.5"
                    : "text-line group-hover:text-stone/50"
                }`} />
              </motion.button>
            ))}
          </div>

          {/* Right: Editorial market description */}
          <div className="lg:col-span-6 lg:col-start-7 lg:pl-20 lg:border-l border-line/50 mt-14 lg:mt-0">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <span className="block text-[9.5px] uppercase tracking-[0.3em] text-gold mb-5">
                {active.city}
              </span>
              <h3 className="font-serif text-[44px] lg:text-[56px] text-ink leading-none tracking-[-0.025em] mb-7">
                {active.name}
              </h3>
              <div className="w-8 h-px bg-gold/40 mb-9" />

              <p className="text-[15px] text-graphite leading-[1.85] mb-11 max-w-[400px]">
                {active.description}
              </p>

              <div className="space-y-7 mb-12">
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.28em] text-stone mb-2.5">
                    Lagen &amp; Adressen
                  </span>
                  <span className="block text-[14px] text-graphite leading-relaxed">
                    {active.areas}
                  </span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.28em] text-stone mb-2.5">
                    Marktcharakter
                  </span>
                  <span className="block text-[14px] text-graphite">
                    {active.character}
                  </span>
                </div>
              </div>

              <Link
                href={`/standorte/${active.slug}`}
                className="inline-flex items-center gap-2.5 text-[10px] uppercase tracking-[0.22em] text-graphite hover:text-gold transition-colors duration-200 group"
              >
                {active.city} erkunden
                <ArrowRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-24 pt-14 border-t border-line/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="font-serif text-[19px] text-ink leading-snug mb-1.5">
              Wissen Sie, was Ihre Immobilie wert ist?
            </p>
            <p className="text-[14px] text-stone">
              Kostenfreie Bewertung — persönlich, diskret und marktgerecht.
            </p>
          </div>
          <Link
            href="/bewertung"
            className="inline-flex items-center gap-2.5 bg-gold text-ink px-8 py-4 text-[10px] uppercase tracking-[0.22em] font-semibold hover:bg-gold/90 transition-colors shrink-0 group"
          >
            Bewertung anfordern
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
