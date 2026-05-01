"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Mail, Clock, Phone, ArrowRight, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const subjects = [
  "Immobilie verkaufen",
  "Immobilie kaufen",
  "Kostenlose Wertermittlung",
  "Tippgeber-Programm",
  "Allgemeine Anfrage",
]

export default function KontaktPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    datenschutz: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
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
      window.location.href = `mailto:info@ebla-immobilien.com?subject=${encodeURIComponent("Kontaktanfrage: " + form.subject)}&body=${encodeURIComponent(form.message)}`
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  return (
    <>
    <Header />
    <main className="bg-cream min-h-screen">

      {/* Hero */}
      <section className="relative bg-bone pt-[120px] pb-24 lg:pb-32 overflow-hidden border-b border-line/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(180,145,80,0.07),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-gold text-[11px] uppercase tracking-[0.28em] mb-6">
              Kontakt
            </p>
            <h1 className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] text-ink leading-[1.02] mb-6 max-w-[700px]">
              Sprechen Sie mit<br />
              <span className="text-ink/60">unseren Experten.</span>
            </h1>
            <p className="text-graphite text-[16px] lg:text-[17px] leading-relaxed max-w-[500px]">
              Wir beraten Sie diskret und unverbindlich — ob Verkauf, Kauf oder Wertermittlung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content: info + form */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-8">
              Unsere Zentrale
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-9 h-9 bg-bone border border-line flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-[13px] font-medium text-ink mb-1">Adresse</p>
                  <p className="text-[14px] text-graphite leading-relaxed">
                    Abels Immobilien GmbH<br />
                    Alt Niederkassel 124<br />
                    40547 Düsseldorf
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-9 h-9 bg-bone border border-line flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-[13px] font-medium text-ink mb-1">Telefon</p>
                  <a
                    href="tel:+492115591751"
                    className="text-[14px] text-graphite hover:text-ink transition-colors"
                  >
                    +49 211 5591751
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-9 h-9 bg-bone border border-line flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-[13px] font-medium text-ink mb-1">E-Mail</p>
                  <a
                    href="mailto:info@ebla-immobilien.com"
                    className="text-[14px] text-graphite hover:text-ink transition-colors"
                  >
                    info@ebla-immobilien.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-9 h-9 bg-bone border border-line flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-[13px] font-medium text-ink mb-1">Erreichbarkeit</p>
                  <p className="text-[14px] text-graphite leading-relaxed">
                    Mo – Fr: 9:00 – 18:00 Uhr<br />
                    Sa: nach Vereinbarung
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 pt-10 border-t border-line/60">
              <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-5">
                Weitere Standorte
              </p>
              <div className="space-y-2.5">
                {[
                  "München", "Hamburg", "Frankfurt",
                  "Stuttgart", "Essen", "Grünwald",
                ].map((city) => (
                  <div key={city} className="flex items-center gap-2.5 text-[13px] text-graphite">
                    <div className="w-1 h-1 rounded-full bg-gold/60" />
                    {city}
                  </div>
                ))}
              </div>
              <Link
                href="/standorte"
                className="inline-flex items-center gap-1.5 mt-6 text-[11px] uppercase tracking-[0.18em] text-stone hover:text-ink transition-colors"
              >
                Alle Standorte
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-24 px-8 bg-bone border border-line">
                <CheckCircle className="w-12 h-12 text-gold mb-6" />
                <h2 className="font-serif text-[2rem] text-ink mb-4">
                  Vielen Dank für Ihre Anfrage.
                </h2>
                <p className="text-graphite text-[15px] leading-relaxed max-w-[420px] mb-10">
                  Wir haben Ihre Nachricht erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-ink text-cream px-8 py-3.5 text-[11px] uppercase tracking-[0.16em] font-medium hover:bg-graphite transition-colors"
                >
                  Zur Startseite
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-0"
                name="kontakt"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="kontakt" />
                <input type="hidden" name="bot-field" className="hidden" />

                <div className="grid sm:grid-cols-2 gap-0 border border-line">

                  {/* Name */}
                  <div className="border-b border-r-0 sm:border-r border-line p-6 group focus-within:bg-bone/40 transition-colors">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-stone mb-2">
                      Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Vor- und Nachname"
                      className="w-full bg-transparent text-[15px] text-ink placeholder:text-stone/50 outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="border-b border-line p-6 focus-within:bg-bone/40 transition-colors">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-stone mb-2">
                      E-Mail <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ihre@email.de"
                      className="w-full bg-transparent text-[15px] text-ink placeholder:text-stone/50 outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div className="border-b border-r-0 sm:border-r border-line p-6 focus-within:bg-bone/40 transition-colors">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-stone mb-2">
                      Telefon <span className="text-stone/40">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+49 211 …"
                      className="w-full bg-transparent text-[15px] text-ink placeholder:text-stone/50 outline-none"
                    />
                  </div>

                  {/* Subject */}
                  <div className="border-b border-line p-6 focus-within:bg-bone/40 transition-colors">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-stone mb-2">
                      Betreff <span className="text-gold">*</span>
                    </label>
                    <select
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent text-[15px] text-ink outline-none appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Bitte wählen …</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="border-x border-b border-line p-6 focus-within:bg-bone/40 transition-colors">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-stone mb-2">
                    Ihre Nachricht <span className="text-gold">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Beschreiben Sie Ihr Anliegen …"
                    className="w-full bg-transparent text-[15px] text-ink placeholder:text-stone/50 outline-none resize-none leading-relaxed"
                  />
                </div>

                {/* Divider line */}
                <div className="h-px bg-line" />

                {/* GDPR + Submit */}
                <div className="pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

                  {/* Datenschutz checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        name="datenschutz"
                        required
                        checked={form.datenschutz}
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <div className="w-5 h-5 border border-line bg-white peer-checked:bg-ink peer-checked:border-ink transition-colors group-hover:border-graphite" />
                      <svg
                        className="absolute inset-0 w-5 h-5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5 10l3.5 3.5L15 7"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-[13px] text-graphite leading-relaxed">
                      Ich habe die{" "}
                      <Link
                        href="/datenschutz"
                        className="text-ink underline underline-offset-2 hover:text-gold transition-colors"
                      >
                        Datenschutzerklärung
                      </Link>{" "}
                      gelesen und stimme der Verarbeitung meiner Daten zu.{" "}
                      <span className="text-gold">*</span>
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="shrink-0 inline-flex items-center gap-2.5 bg-ink text-cream px-10 py-4 text-[11px] uppercase tracking-[0.16em] font-medium hover:bg-graphite disabled:opacity-60 transition-all duration-300"
                  >
                    {loading ? (
                      <>
                        <span className="w-3.5 h-3.5 border border-cream/40 border-t-cream rounded-full animate-spin" />
                        Wird gesendet …
                      </>
                    ) : (
                      <>
                        Anfrage senden
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-stone/60 pt-4">
                  <span className="text-gold">*</span> Pflichtfelder
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Bottom editorial strip */}
      <section className="bg-bone border-t border-line/40 py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid sm:grid-cols-3 gap-10 lg:gap-16">
            {[
              {
                label: "Persönlich",
                text: "Jede Anfrage wird von einem erfahrenen Berater persönlich bearbeitet — ohne Callcenter.",
              },
              {
                label: "Diskret",
                text: "Ihre Daten und Ihr Anliegen behandeln wir vertraulich und geben sie nicht an Dritte weiter.",
              },
              {
                label: "Unverbindlich",
                text: "Eine erste Beratung ist für Sie kostenlos und ohne jegliche Verpflichtung.",
              },
            ].map((item) => (
              <div key={item.label}>
                <div className="w-8 h-px bg-gold mb-5" />
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold mb-3">
                  {item.label}
                </p>
                <p className="text-graphite text-[14px] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
    <Footer />
    </>
  )
}
