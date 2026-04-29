"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"

const cities = [
  { name: "Düsseldorf & Umgebung", slug: "duesseldorf", tagline: "Oberkassel · Kaiserswerth · Rheinlage" },
  { name: "München & Umgebung", slug: "muenchen", tagline: "Bogenhausen · Schwabing · Lehel" },
  { name: "Stuttgart & Umgebung", slug: "stuttgart", tagline: "Killesberg · Halbhöhenlage · Degerloch" },
  { name: "Hamburg", slug: "hamburg", tagline: "Harvestehude · Blankenese · HafenCity" },
  { name: "Frankfurt", slug: "frankfurt", tagline: "Westend · Sachsenhausen · Diplomatenviertel" },
  { name: "Essen", slug: "essen", tagline: "Bredeney · Kettwig · Baldeneysee" },
  { name: "Grünwald", slug: "gruenwald", tagline: "Diskret · Exklusiv · Villenlage" },
]

const navItems = [
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/verkaufen", label: "Verkaufen" },
  { href: "/kaufen", label: "Kaufen" },
  { href: "/standorte", label: "Regionen", hasDropdown: true },
  { href: "/investieren", label: "Investieren" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isStandorteOpen, setIsStandorteOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-cream/97 backdrop-blur-sm border-b border-line/50 shadow-[0_1px_24px_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between h-[76px] lg:h-[88px]">

            {/* Logo */}
            <Link href="/" className="relative z-10 shrink-0 flex items-center gap-3.5">
              <div className={`w-px h-6 transition-colors duration-500 ${isScrolled ? "bg-gold/50" : "bg-gold/65"}`} />
              <div>
                <span className={`block font-serif text-[24px] lg:text-[27px] tracking-[0.08em] leading-none transition-colors duration-500 ${
                  isScrolled ? "text-ink" : "text-white"
                }`}>
                  ABELS
                </span>
                <span className={`block text-[9.5px] uppercase tracking-[0.26em] leading-none mt-[5px] transition-colors duration-500 ${
                  isScrolled ? "text-stone" : "text-white/50"
                }`}>
                  Immobilien
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10 flex-1 justify-center">
              {navItems.map((item) => (
                <div key={item.href} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      className={`flex items-center gap-1.5 text-[12.5px] font-medium tracking-[0.06em] transition-colors duration-200 ${
                        isScrolled
                          ? "text-graphite hover:text-ink"
                          : "text-white/75 hover:text-white"
                      }`}
                      onMouseEnter={() => setIsStandorteOpen(true)}
                      onMouseLeave={() => setIsStandorteOpen(false)}
                    >
                      {item.label}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isStandorteOpen ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-[12.5px] font-medium tracking-[0.06em] transition-colors duration-200 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                        isScrolled
                          ? "text-graphite hover:text-ink"
                          : "text-white/75 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.hasDropdown && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-5 transition-all duration-200 ${
                        isStandorteOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                      onMouseEnter={() => setIsStandorteOpen(true)}
                      onMouseLeave={() => setIsStandorteOpen(false)}
                    >
                      <div className="bg-cream border border-line/80 shadow-[0_16px_48px_rgba(0,0,0,0.10)] w-[520px]">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-line/50">
                          <div className="flex items-center gap-2.5">
                            <div className="w-4 h-px bg-gold/70" />
                            <span className="text-[10px] uppercase tracking-[0.24em] text-stone">
                              Unsere Standorte
                            </span>
                          </div>
                          <span className="text-[10px] text-stone/50 tracking-[0.06em]">7 Städte</span>
                        </div>

                        {/* 2-column city grid */}
                        <div className="grid grid-cols-2 p-3 gap-1">
                          {cities.map((city) => (
                            <Link
                              key={city.slug}
                              href={`/standorte/${city.slug}`}
                              onClick={() => setIsStandorteOpen(false)}
                              className="flex items-start justify-between px-4 py-3 hover:bg-bone rounded-sm transition-colors duration-150 group/city"
                            >
                              <div className="min-w-0">
                                <span className="block font-serif text-[15px] text-ink group-hover/city:text-gold transition-colors leading-tight">
                                  {city.name}
                                </span>
                                <span className="block text-[10.5px] text-stone/70 mt-0.5 leading-snug group-hover/city:text-stone transition-colors truncate max-w-[160px]">
                                  {city.tagline}
                                </span>
                              </div>
                              <ArrowRight className="w-3 h-3 text-stone/30 group-hover/city:text-gold group-hover/city:translate-x-0.5 transition-all duration-200 mt-1 shrink-0 ml-2" />
                            </Link>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-3.5 bg-bone/50 border-t border-line/50">
                          <Link
                            href="/standorte"
                            onClick={() => setIsStandorteOpen(false)}
                            className="text-[10px] uppercase tracking-[0.2em] text-stone hover:text-gold transition-colors flex items-center gap-2 group/all"
                          >
                            <span>Alle Standorte im Überblick</span>
                            <ArrowRight className="w-3 h-3 group-hover/all:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right: CTA */}
            <div className="hidden lg:flex items-center gap-7 shrink-0">
              <Link
                href="/kontakt"
                className={`text-[12.5px] font-medium tracking-[0.06em] transition-colors duration-200 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? "text-graphite hover:text-ink" : "text-white/75 hover:text-white"
                }`}
              >
                Kontakt
              </Link>
              <a
                href="https://immowert.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2.5 text-[10px] uppercase tracking-[0.18em] font-medium transition-all duration-300 ${
                  isScrolled
                    ? "bg-ink text-cream hover:bg-graphite"
                    : "bg-white/10 text-white border border-white/22 hover:bg-white hover:text-ink backdrop-blur-sm"
                }`}
              >
                Bewertung
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 -mr-2 transition-colors ${
                isScrolled ? "text-ink" : "text-white"
              }`}
              aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto pt-[80px]">
          <div className="h-px bg-line" />

          <nav className="px-6 py-8">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-5 border-b border-line group"
                >
                  <span className="font-serif text-[26px] text-ink group-hover:text-gold transition-colors">
                    {item.label}
                  </span>
                  <ArrowRight className="w-5 h-5 text-stone/40 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </Link>
                {item.hasDropdown && (
                  <div className="py-4 border-b border-line">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 px-2">
                      {cities.map((city) => (
                        <Link
                          key={city.slug}
                          href={`/standorte/${city.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-2.5 py-2.5 px-3 group/city hover:bg-bone rounded-sm transition-colors"
                        >
                          <div className="w-1 h-1 rounded-full bg-gold/50 group-hover/city:bg-gold transition-colors shrink-0" />
                          <div>
                            <span className="block text-ink group-hover/city:text-gold transition-colors text-[15px] font-serif leading-tight">
                              {city.name}
                            </span>
                            <span className="block text-[10px] text-stone/60 mt-0.5 leading-tight">
                              {city.tagline.split(" · ")[0]}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 px-3">
                      <Link
                        href="/standorte"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-stone hover:text-gold transition-colors"
                      >
                        Alle Standorte
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="px-6 py-6 space-y-3">
            <a
              href="https://immowert.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-ink text-cream text-center py-4 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-graphite transition-colors"
            >
              Kostenlose Bewertung anfordern
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
