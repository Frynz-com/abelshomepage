"use client"

import Link from "next/link"
import { useState } from "react"
import { Linkedin, Instagram, ArrowRight } from "lucide-react"

const leistungen = [
  { label: "Verkaufen", href: "/verkaufen" },
  { label: "Kaufen", href: "/kaufen" },
  { label: "Bewertung", href: "/bewertung" },
  { label: "Off-Market", href: "/off-market" },
  { label: "Mieten", href: "/mieten" },
  { label: "Vermieten", href: "/vermieten" },
]

const standorte = [
  { label: "Düsseldorf", href: "/standorte/duesseldorf" },
  { label: "München", href: "/standorte/muenchen" },
  { label: "Grünwald", href: "/standorte/gruenwald" },
  { label: "Hamburg", href: "/standorte/hamburg" },
  { label: "Frankfurt", href: "/standorte/frankfurt" },
  { label: "Essen", href: "/standorte/essen" },
  { label: "Stuttgart", href: "/standorte/stuttgart" },
]

const ratgeber = [
  { label: "Immobilie verkaufen", href: "/ratgeber/immobilie-verkaufen" },
  { label: "Immobilienbewertung", href: "/ratgeber/immobilienbewertung" },
  { label: "Maklerkosten", href: "/ratgeber/maklerkosten" },
  { label: "Off-Market Verkauf", href: "/ratgeber/off-market-verkauf" },
  { label: "Energieausweis", href: "/ratgeber/energieausweis" },
  { label: "Notarkosten", href: "/ratgeber/notarkosten" },
]

const unternehmen = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Team", href: "/team" },
  { label: "Tippgeber", href: "/tippgeber" },
  { label: "Karriere", href: "/karriere" },
  { label: "Presse", href: "/presse" },
]

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-[10px] uppercase tracking-[0.22em] text-cream/35 mb-5 font-medium">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-[13px] text-cream/55 hover:text-cream transition-colors duration-200"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <footer className="bg-ink text-cream">

      {/* Main footer content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-px h-6 bg-gold/50" />
              <div>
                <span className="block font-serif text-[22px] tracking-[0.06em] text-cream leading-none">
                  ABELS
                </span>
                <span className="block text-[9px] uppercase tracking-[0.22em] text-cream/35 mt-1 leading-none">
                  Immobilien
                </span>
              </div>
            </div>

            <p className="text-[13px] text-cream/50 leading-[1.7] mb-6 max-w-[260px]">
              Inhabergeführter Premium-Makler mit Standorten in 7 deutschen Metropolregionen. Diskret, präzise und persönlich seit 1999.
            </p>

            <address className="not-italic text-[13px] text-cream/40 space-y-1.5">
              <p>Abels Immobilien GmbH</p>
              <p>Alt Niederkassel 124</p>
              <p>40547 Düsseldorf</p>
              <p className="mt-3">
                <a href="tel:+492115591751" className="hover:text-cream/70 transition-colors">
                  +49 211 5591751
                </a>
              </p>
              <p>
                <a href="mailto:info@abels-immobilien.de" className="hover:text-cream/70 transition-colors">
                  info@abels-immobilien.de
                </a>
              </p>
            </address>
          </div>

          {/* Navigation columns */}
          <FooterCol title="Leistungen" links={leistungen} />
          <FooterCol title="Standorte" links={standorte} />
          <FooterCol title="Ratgeber" links={ratgeber} />
          <FooterCol title="Unternehmen" links={unternehmen} />

        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-cream/8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <h4 className="text-[10px] uppercase tracking-[0.22em] text-cream/35 mb-2 font-medium">
                Newsletter
              </h4>
              <p className="text-[13px] text-cream/45">
                Marktberichte, Lagen-Analysen und Neuigkeiten aus den Premium-Standorten.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex gap-0 border-b border-cream/20 focus-within:border-gold/50 transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ihre E-Mail-Adresse"
                    className="flex-1 bg-transparent pb-3 pt-1 text-[14px] text-cream placeholder:text-cream/25 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="pb-3 pt-1 text-[10px] uppercase tracking-[0.18em] text-cream/40 hover:text-gold transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    Anmelden
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </form>
              ) : (
                <p className="text-[13px] text-gold pb-3 border-b border-gold/30">
                  Danke — Sie erhalten in Kürze eine Bestätigung.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

            <p className="text-[12px] text-cream/28">
              © 2026 Abels Immobilien GmbH · IHK-Mitglied · §34c GewO
            </p>

            <div className="flex flex-wrap items-center gap-6">
              {[
                { label: "Impressum", href: "/impressum" },
                { label: "Datenschutz", href: "/datenschutz" },
                { label: "AGB", href: "/agb" },
                { label: "Widerrufsrecht", href: "/widerrufsrecht" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[12px] text-cream/28 hover:text-cream/55 transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex items-center gap-4 lg:ml-2 border-l border-cream/12 lg:pl-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/28 hover:text-cream/60 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/28 hover:text-cream/60 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

    </footer>
  )
}
