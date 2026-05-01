"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle } from "lucide-react"

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const formEl = e.target as HTMLFormElement
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(formEl) as any).toString(),
      })
    } catch {
      // Fallback: form submitted via mailto
      window.location.href = `mailto:info@ebla-immobilien.com?subject=Anfrage von ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  function handleClose() {
    onClose()
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: "", email: "", phone: "", interest: "", message: "" })
    }, 400)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-ink/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-4 py-8 pointer-events-none"
          >
            <div
              className="relative w-full max-w-[560px] bg-ink pointer-events-auto shadow-2xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 z-10 text-cream/70 hover:text-cream transition-colors"
                aria-label="Schliessen"
              >
                <X className="w-5 h-5" />
              </button>

              {!submitted ? (
                <div className="p-8 lg:p-12">
                  {/* Header */}
                  <p className="text-gold text-xs uppercase tracking-[0.2em] mb-3">
                    Termin vereinbaren
                  </p>
                  <h2 className="font-serif text-3xl text-cream mb-2 leading-tight">
                    Sprechen wir über Ihre Immobilie.
                  </h2>
                  <p className="text-cream/70 text-sm mb-8">
                    Kostenfrei &middot; Unverbindlich &middot; Rückmeldung innerhalb 72 Stunden
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    name="kontakt-modal"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="form-name" value="kontakt-modal" />
                    <input type="hidden" name="bot-field" className="hidden" />
                    {/* Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.1em] text-cream/70 mb-1.5" htmlFor="name">
                        Vollständiger Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-cream/30 bg-cream/10 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
                        placeholder="Max Mustermann"
                      />
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-[0.1em] text-cream/70 mb-1.5" htmlFor="email">
                          E-Mail *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full border border-cream/30 bg-cream/10 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
                          placeholder="max@beispiel.de"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-[0.1em] text-cream/70 mb-1.5" htmlFor="phone">
                          Telefon
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full border border-cream/30 bg-cream/10 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
                          placeholder="+49 211 ..."
                        />
                      </div>
                    </div>

                    {/* Interest */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.1em] text-cream/70 mb-1.5" htmlFor="interest">
                        Ich interessiere mich für
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="w-full border border-cream/30 bg-cream/10 px-4 py-3 text-sm text-cream focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-ink text-cream">Bitte auswählen</option>
                        <option value="kauf" className="bg-ink text-cream">Immobilienkauf</option>
                        <option value="verkauf" className="bg-ink text-cream">Immobilienverkauf</option>
                        <option value="bewertung" className="bg-ink text-cream">Kostenfreie Bewertung</option>
                        <option value="kapitalanlage" className="bg-ink text-cream">Kapitalanlage</option>
                        <option value="sonstiges" className="bg-ink text-cream">Sonstiges</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.1em] text-cream/70 mb-1.5" htmlFor="message">
                        Ihre Nachricht
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full border border-cream/30 bg-cream/10 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors resize-none"
                        placeholder="Beschreiben Sie kurz Ihr Anliegen ..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gold text-ink py-4 text-xs uppercase tracking-[0.15em] hover:bg-cream transition-colors disabled:opacity-60 font-medium"
                    >
                      {loading ? "Wird gesendet ..." : "Anfrage absenden"}
                    </button>

                    <p className="text-cream/60 text-xs text-center">
                      Mit der Anfrage stimmen Sie unserer{" "}
                      <a href="/datenschutz" className="underline hover:text-cream transition-colors">
                        Datenschutzerklärung
                      </a>{" "}
                      zu.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="p-12 text-center">
                  <CheckCircle className="w-12 h-12 text-gold mx-auto mb-6" />
                  <h3 className="font-serif text-2xl text-cream mb-3">
                    Vielen Dank, {form.name.split(" ")[0]}.
                  </h3>
                  <p className="text-cream/70 leading-relaxed mb-8">
                    Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von 72 Stunden persönlich bei Ihnen.
                  </p>
                  <button
                    onClick={handleClose}
                    className="bg-gold text-ink px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-cream transition-colors font-medium"
                  >
                    Schliessen
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
