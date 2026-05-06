"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown } from "lucide-react"
import Link from "next/link"

const STORAGE_KEY = "abels_cookie_consent"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [statistics, setStatistics] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const save = (acceptAll: boolean) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ essential: true, statistics: acceptAll || statistics, savedAt: Date.now() })
      )
    } catch { /* ignore */ }
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/40 z-[9998]"
          />

          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-[9999] flex justify-center px-4 pb-4 sm:pb-6"
          >
            <div className="w-full max-w-[640px] bg-bone border border-line/60 shadow-2xl">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-line/40">
                <div className="flex items-center gap-3">
                  <div className="w-px h-5 bg-gold/70" />
                  <span className="text-[10px] uppercase tracking-[0.28em] text-gold font-medium">
                    Datenschutz-Präferenz
                  </span>
                </div>
                <button
                  onClick={() => save(false)}
                  className="text-stone hover:text-ink transition-colors"
                  aria-label="Schließen"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-5 space-y-4">
                <p className="text-[13px] text-graphite leading-relaxed">
                  Wir verwenden Cookies, um Ihnen das bestmögliche Erlebnis auf unserer Website zu bieten.
                  Essenzielle Cookies sind für die Grundfunktionen der Seite erforderlich. Statistik-Cookies
                  helfen uns, die Nutzung der Website zu verstehen und zu verbessern. Mehr erfahren Sie in
                  unserer{" "}
                  <Link href="/datenschutz" className="text-gold hover:underline underline-offset-2">
                    Datenschutzerklärung
                  </Link>
                  .
                </p>

                {/* Details toggle */}
                <button
                  onClick={() => setShowDetails(v => !v)}
                  className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-stone hover:text-gold transition-colors"
                >
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${showDetails ? "rotate-180" : ""}`}
                  />
                  {showDetails ? "Details ausblenden" : "Details anzeigen"}
                </button>

                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3 pt-1"
                  >
                    {/* Essential */}
                    <div className="flex items-start gap-3 p-4 bg-cream border border-line/40">
                      <div className="mt-0.5 w-4 h-4 border border-gold/60 bg-gold/20 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 bg-gold" />
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold text-ink mb-1">Essenziell</p>
                        <p className="text-[12px] text-graphite leading-relaxed">
                          Grundlegende Funktionen der Website. Immer aktiv.
                        </p>
                      </div>
                    </div>

                    {/* Statistics */}
                    <div className="flex items-start gap-3 p-4 bg-cream border border-line/40">
                      <button
                        onClick={() => setStatistics(v => !v)}
                        className={`mt-0.5 w-4 h-4 border shrink-0 flex items-center justify-center transition-colors ${
                          statistics ? "border-gold/60 bg-gold/20" : "border-line/60 bg-transparent"
                        }`}
                        aria-checked={statistics}
                        role="checkbox"
                      >
                        {statistics && <div className="w-2 h-2 bg-gold" />}
                      </button>
                      <div>
                        <p className="text-[12px] font-semibold text-ink mb-1">Statistik</p>
                        <p className="text-[12px] text-graphite leading-relaxed">
                          Anonyme Nutzungsdaten helfen uns, die Website zu verbessern (z. B. Seitenaufrufe).
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Actions */}
              <div className="px-6 pb-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => save(true)}
                  className="flex-1 bg-ink text-cream py-3.5 text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-graphite transition-colors"
                >
                  Alle akzeptieren
                </button>
                <button
                  onClick={() => save(false)}
                  className="flex-1 border border-ink/60 text-ink py-3.5 text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-ink hover:text-cream transition-colors"
                >
                  Nur essenzielle
                </button>
              </div>

              {/* Footer links */}
              <div className="px-6 pb-5 flex gap-5 border-t border-line/40 pt-4">
                <Link href="/datenschutz" className="text-[11px] text-stone hover:text-gold transition-colors">
                  Datenschutzerklärung
                </Link>
                <Link href="/impressum" className="text-[11px] text-stone hover:text-gold transition-colors">
                  Impressum
                </Link>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
