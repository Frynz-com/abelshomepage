"use client"

import { useState } from "react"
import Link from "next/link"

export function BewertungIframe() {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className="relative w-full" style={{ minHeight: "900px" }}>
      {!loaded && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-bone gap-4">
          <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
          <p className="text-graphite text-sm">Bewertungstool wird geladen …</p>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-bone gap-6 px-8 text-center">
          <p className="font-serif text-2xl text-ink">Das Tool ist momentan nicht verfügbar.</p>
          <p className="text-graphite text-[15px] max-w-[440px] leading-relaxed">
            Bitte kontaktieren Sie uns direkt — wir erstellen Ihnen innerhalb von 72 Stunden eine persönliche Markteinschätzung.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.16em] hover:bg-graphite transition-colors"
          >
            Jetzt Anfragen
          </Link>
        </div>
      )}

      <iframe
        src="https://immorechnerabels.netlify.app"
        title="Immobilienbewertung Tool"
        className="w-full"
        style={{ height: "900px", border: "none", display: loaded ? "block" : "none" }}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  )
}
