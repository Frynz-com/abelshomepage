"use client"

import { useState, useEffect } from "react"
import { X, Check, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FinanzierungModalProps {
  open: boolean
  onClose: () => void
  title?: string
  subtitle?: string
}

export function FinanzierungModal({ open, onClose, title = "Baufinanzierung", subtitle = "Finanzierung anfragen" }: FinanzierungModalProps) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", privacy: false })

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
      setSent(false)
      setForm({ name: "", email: "", phone: "", message: "", privacy: false })
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "finanzierung",
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }).toString(),
      })
    } catch {
      const subject = encodeURIComponent("Finanzierungsanfrage über abels-immobilien.de")
      const body = encodeURIComponent(`Name: ${form.name}\nE-Mail: ${form.email}\nTelefon: ${form.phone || "–"}\n\nNachricht:\n${form.message || "–"}`)
      window.location.href = `mailto:info@abels-immobilien.com?subject=${subject}&body=${body}`
    }
    setSent(true)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-cream w-full max-w-[560px] shadow-[0_32px_80px_rgba(0,0,0,0.18)] pointer-events-auto relative max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-line/50">
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className="w-5 h-px bg-gold/60" />
                    <span className="text-[10px] uppercase tracking-[0.24em] text-stone">{title}</span>
                  </div>
                  <h2 className="font-serif text-[22px] text-ink leading-tight">{subtitle}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 text-stone hover:text-ink transition-colors"
                  aria-label="Schließen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {sent ? (
                <div className="px-8 py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-[20px] text-ink mb-3">Anfrage gesendet</h3>
                  <p className="text-[14px] text-graphite/70 leading-relaxed mb-6">
                    Vielen Dank. Wir melden uns in Kürze bei Ihnen.
                  </p>
                  <button
                    onClick={onClose}
                    className="text-[11px] uppercase tracking-[0.18em] text-gold hover:text-ink transition-colors"
                  >
                    Schließen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} name="finanzierung" data-netlify="true" netlify-honeypot="bot-field" className="px-8 py-7 space-y-5">
                  <input type="hidden" name="form-name" value="finanzierung" />
                  <input type="hidden" name="bot-field" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] text-stone mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full border border-line/60 bg-bone/30 px-4 py-3 text-[14px] text-ink placeholder:text-stone/65 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] text-stone mb-2">E-Mail *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full border border-line/60 bg-bone/30 px-4 py-3 text-[14px] text-ink placeholder:text-stone/65 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] text-stone mb-2">Telefon</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full border border-line/60 bg-bone/30 px-4 py-3 text-[14px] text-ink placeholder:text-stone/65 focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="+49 211 …"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] text-stone mb-2">Ihre Anfrage</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full border border-line/60 bg-bone/30 px-4 py-3 text-[14px] text-ink placeholder:text-stone/65 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                      placeholder="Kaufpreis, Eigenkapital, gewünschter Standort …"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="fin-privacy"
                      required
                      checked={form.privacy}
                      onChange={e => setForm(f => ({ ...f, privacy: e.target.checked }))}
                      className="mt-0.5 accent-gold shrink-0"
                    />
                    <label htmlFor="fin-privacy" className="text-[12px] text-stone/70 leading-relaxed">
                      Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                      <a href="/datenschutz" target="_blank" className="text-gold hover:underline">Datenschutzerklärung</a>{" "}
                      zu.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-ink text-cream py-4 text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-graphite transition-colors flex items-center justify-center gap-2.5 group"
                  >
                    Anfrage absenden
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <p className="text-[12px] text-stone/70 text-center">
                    Kostenfrei · Unverbindlich · Antwort innerhalb 30 Minuten
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
