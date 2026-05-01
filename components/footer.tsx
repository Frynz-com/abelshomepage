"use client"

import Link from "next/link"
import { useState } from "react"
import { Linkedin, Instagram, ArrowRight, Shield, BarChart2, Landmark, FileText } from "lucide-react"

const leistungen = [
  { label: "Immobilie verkaufen", href: "/verkaufen" },
  { label: "Immobilie kaufen", href: "/kaufen" },
  { label: "Bewertung", href: "/bewertung" },
  { label: "Investieren", href: "/investieren" },
  { label: "Baufinanzierung", href: "/finanzierung" },
  { label: "Off-Market Verkauf", href: "/off-market-immobilien-duesseldorf" },
  { label: "Tippgeber", href: "/tippgeber" },
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
  { label: "Immobilie verkaufen", href: "/immobilie-verkaufen" },
  { label: "Immobilienbewertung", href: "/immobilie-bewerten-duesseldorf" },
  { label: "Maklerkosten", href: "/ratgeber/maklerkosten" },
  { label: "Energieausweis", href: "/ratgeber/energieausweis" },
  { label: "Notarkosten", href: "/ratgeber/notarkosten" },
  { label: "Erbimmobilie", href: "/ratgeber/erbimmobilie" },
  { label: "Scheidung & Immobilie", href: "/ratgeber/scheidungsimmobilie" },
]

const unternehmen = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Karriere", href: "/karriere" },
  { label: "Presse & Medien", href: "/presse" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Dringende Immobilien Gesuche", href: "http://dringende-immobilien-gesuche.de" },
]

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-[11px] uppercase tracking-[0.26em] text-stone mb-6 font-medium">
        {title}
      </h4>
      <ul className="space-y-4">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-[15px] text-graphite/80 hover:text-ink transition-colors duration-200 leading-snug"
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "newsletter", email }).toString(),
      })
    } catch { /* fails silently on local dev */ }
    setSubmitted(true)
    setEmail("")
  }

  return (
    <footer className="bg-bone text-ink border-t border-line/50">

      {/* Brand statement band */}
      <div className="border-b border-line/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">

            {/* Left: Brand statement */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-px h-6 bg-gold/60" />
                <div>
                  <span className="block font-serif text-[24px] tracking-[0.06em] text-ink leading-none">
                    ABELS
                  </span>
                  <span className="block text-[9px] uppercase tracking-[0.24em] text-stone mt-[5px] leading-none">
                    Immobilien
                  </span>
                </div>
              </div>
              <p className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] text-graphite leading-[1.3] tracking-[-0.01em] max-w-[460px]">
                Diskretion, Marktkenntnis und persönliche Verantwortung — seit 1999.
              </p>
            </div>

            {/* Right: Contact */}
            <div className="lg:col-span-5 lg:col-start-8">
              <address className="not-italic">
                <p className="text-[9.5px] uppercase tracking-[0.26em] text-stone mb-5">Hauptsitz Düsseldorf</p>
                <p className="text-[14px] text-graphite leading-relaxed mb-4">
                  Abels Immobilien GmbH<br />
                  Alt Niederkassel 124 · 40547 Düsseldorf
                </p>
                <div className="flex flex-col gap-1.5">
                  <a href="tel:+492115591751" className="text-[14px] text-graphite hover:text-ink transition-colors">
                    +49 211 5591751
                  </a>
                  <a href="mailto:info@ebla-immobilien.com" className="text-[14px] text-graphite hover:text-ink transition-colors">
                    info@ebla-immobilien.com
                  </a>
                </div>
              </address>
            </div>

          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="border-b border-line/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-14 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-8">
            <FooterCol title="Leistungen" links={leistungen} />
            <FooterCol title="Standorte" links={standorte} />
            <FooterCol title="Ratgeber" links={ratgeber} />
            <FooterCol title="Unternehmen" links={unternehmen} />
          </div>
        </div>
      </div>

      {/* Finanzierung highlight */}
      <div className="border-b border-line/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-12 lg:py-14">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.24em] text-stone mb-3">Baufinanzierung</p>
              <h3 className="font-serif text-[24px] lg:text-[28px] text-ink leading-snug mb-4">
                Immobilie sicher finanzieren
              </h3>
              <p className="text-[15px] text-graphite/70 leading-relaxed max-w-[400px]">
                Abels Immobilien GmbH unterstützt Kaufinteressenten auf Wunsch auch bei der Planung einer passenden Baufinanzierung sowie bei der Vermittlung geeigneter Finanzierungspartner.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Shield, label: "Unabhängige Beratung" },
                  { icon: BarChart2, label: "Bankenvergleich" },
                  { icon: Landmark, label: "Förderungen" },
                  { icon: FileText, label: "Individuelle Konzepte" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <Icon size={15} className="text-gold shrink-0" />
                    <span className="text-[14px] text-graphite/70">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3 lg:col-start-10 lg:text-right">
              <Link
                href="/finanzierung"
                className="inline-flex items-center gap-2 bg-ink text-cream text-[12px] uppercase tracking-[0.16em] px-7 py-4 hover:bg-graphite transition-colors"
              >
                Finanzierungsberatung anfragen
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-b border-line/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-10 lg:py-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <p className="text-[9.5px] uppercase tracking-[0.26em] text-stone mb-2">Newsletter</p>
              <p className="text-[13px] text-graphite/70 leading-relaxed">
                Marktberichte und Neuigkeiten aus den Premium-Standorten.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} name="newsletter" data-netlify="true" netlify-honeypot="bot-field" className="flex gap-0 border-b border-line/50 focus-within:border-gold/60 transition-colors">
                  <input type="hidden" name="form-name" value="newsletter" />
                  <input type="hidden" name="bot-field" />
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ihre E-Mail-Adresse"
                    className="flex-1 bg-transparent pb-3 pt-1 text-[14px] text-ink placeholder:text-stone/60 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="pb-3 pt-1 text-[9.5px] uppercase tracking-[0.22em] text-stone hover:text-gold transition-colors flex items-center gap-1.5 shrink-0"
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
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <p className="text-[13px] text-stone tracking-[0.02em]">
            © 2026 Abels Immobilien GmbH
          </p>

          <div className="flex flex-wrap items-center gap-5">
            {[
              { label: "Impressum", href: "/impressum" },
              { label: "Datenschutz", href: "/datenschutz" },
              { label: "AGB", href: "/agb" },
              { label: "Widerrufsrecht", href: "/widerrufsrecht" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] text-stone hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center gap-4 border-l border-line/50 pl-5">
              <a
                href="https://www.linkedin.com/company/abels-immobilien"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone hover:text-ink transition-colors"
                aria-label="Abels Immobilien auf LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/abelsimmobiliengmbhduesseldorf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone hover:text-ink transition-colors"
                aria-label="Abels Immobilien auf Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

    </footer>
  )
}
