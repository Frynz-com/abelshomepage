"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const steps = [
  {
    number: "01",
    title: "Hinweis geben",
    text: "Sie kennen jemanden, der verkaufen möchte, oder eine Immobilie, die auf den Markt kommen könnte? Ein kurzer Hinweis genügt — diskret und ohne Aufwand.",
  },
  {
    number: "02",
    title: "Wir übernehmen alles",
    text: "Abels Immobilien tritt in Kontakt, bewertet die Immobilie und übernimmt den gesamten Vermarktungsprozess — vollständig professionell und in Ihrem Namen.",
  },
  {
    number: "03",
    title: "Provision nach Erfolg",
    text: "Kommt es zum erfolgreichen Verkauf, erhalten Sie Ihre Tippgeberprovision — transparent, pünktlich und ohne Abzüge.",
  },
]

export default function TippgeberPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", telefon: "", details: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(e.target as HTMLFormElement) as unknown as Record<string, string>).toString(),
      })
    } catch {
      window.location.href = `mailto:info@ebla-immobilien.com?subject=${encodeURIComponent("Tippgeber-Hinweis")}&body=${encodeURIComponent("Name: " + form.name + "\nEmail: " + form.email + "\n\n" + form.details)}`
    }
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line/40">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-zoom">
          <Image
            src="/images/tippgeber.jpg"
            alt="Tippgeber Programm Abels Immobilien"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          </div>
          <div className="absolute inset-0 bg-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 pt-44 pb-28 lg:pt-52 lg:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-gold/80" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-gold/90">Tippgeber</span>
            </div>
            <h1 className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] text-white leading-[0.96] tracking-[-0.02em] max-w-[780px] mb-8">
              Sie kennen eine<br />
              <span className="text-white/60">verkaufswillige Immobilie?</span>
            </h1>
            <p className="text-[17px] text-white/65 leading-[1.75] max-w-[520px]">
              Geben Sie uns einen Hinweis — diskret, einfach und ohne Aufwand. Wenn es zum Abschluss kommt, belohnen wir Ihre Empfehlung mit einer attraktiven Tippgeberprovision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Provision Highlight */}
      <section className="border-b border-line/50 bg-bone">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-line/50">
            {[
              { value: "15–20 %", label: "Provision vom Verkaufserlös", detail: "Ihrer vermittelten Transaktion" },
              { value: "Diskret", label: "Kein Aufwand für Sie", detail: "Abels Immobilien übernimmt alles" },
              { value: "30 Tage", label: "Auszahlung nach Notartermin", detail: "Transparent, pünktlich, garantiert" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="py-10 px-6 lg:px-12"
              >
                <span className="block font-serif text-[36px] lg:text-[44px] text-ink leading-none mb-2 tracking-[-0.01em]">
                  {item.value}
                </span>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-stone mb-1">
                  {item.label}
                </span>
                <span className="block text-[13px] text-graphite/60">
                  {item.detail}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 lg:py-36 bg-cream border-b border-line/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-gold">So funktioniert es</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] text-ink leading-[1.08] tracking-[-0.01em] max-w-[500px]">
              Drei Schritte zum Erfolg.
            </h2>
          </motion.div>

          <div className="border-t border-line/50">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-12 gap-8 py-10 border-b border-line/50 group hover:bg-bone/50 transition-colors duration-300 px-4 -mx-4"
              >
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold/70 lg:col-span-1 pt-1">{step.number}</span>
                <h3 className="font-serif text-[22px] lg:text-[24px] text-ink lg:col-span-3 group-hover:text-gold transition-colors duration-300 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[15px] text-graphite leading-[1.75] lg:col-span-7">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 lg:py-36 bg-bone">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-gold/60" />
                <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Hinweis geben</span>
              </div>
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] text-ink leading-[1.1] tracking-[-0.01em] mb-6">
                Jetzt Tippgeber werden.
              </h2>
              <p className="text-[15px] text-graphite leading-[1.75]">
                Alle Angaben werden streng vertraulich behandelt. Ihre Empfehlung wird diskret und professionell weiterverfolgt — ohne dass der Eigentümer erfährt, durch wen der Hinweis kam.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 lg:col-start-6"
            >
              {submitted ? (
                <div className="border border-gold/30 bg-cream p-10 lg:p-12">
                  <p className="font-serif text-[24px] text-ink mb-3">Vielen Dank für Ihren Hinweis.</p>
                  <p className="text-[15px] text-graphite leading-[1.75]">
                    Wir werden uns innerhalb von 48 Stunden bei Ihnen melden und die Situation diskret prüfen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} name="tippgeber" data-netlify="true" netlify-honeypot="bot-field" className="space-y-0 border-t border-line/50">
                  <input type="hidden" name="form-name" value="tippgeber" />
                  <input type="hidden" name="bot-field" />
                  {[
                    { id: "name", label: "Ihr Name", type: "text", placeholder: "Max Mustermann" },
                    { id: "email", label: "E-Mail-Adresse", type: "email", placeholder: "max@beispiel.de" },
                    { id: "telefon", label: "Telefonnummer", type: "tel", placeholder: "+49 …" },
                  ].map((field) => (
                    <div key={field.id} className="border-b border-line/50 py-6">
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-stone mb-3">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.id as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [field.id]: e.target.value }))}
                        className="w-full bg-transparent text-[15px] text-ink placeholder:text-stone/50 focus:outline-none"
                        required
                      />
                    </div>
                  ))}
                  <div className="border-b border-line/50 py-6">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-stone mb-3">
                      Details zur Immobilie
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Lage, Objekttyp, bekannte Details …"
                      value={form.details}
                      onChange={e => setForm(f => ({ ...f, details: e.target.value }))}
                      className="w-full bg-transparent text-[15px] text-ink placeholder:text-stone/50 focus:outline-none resize-none"
                    />
                  </div>
                  <div className="pt-8">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-gold-soft transition-colors group"
                    >
                      Hinweis senden
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
