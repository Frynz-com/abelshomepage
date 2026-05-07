"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const body = new URLSearchParams({
        "form-name": "kontakt-allgemein",
        ...formData,
      })
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      })
      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch {
      // fallback: open mail client
      window.location.href = `mailto:info@abels-immobilien.com?subject=${encodeURIComponent(formData.subject || "Kontaktanfrage")}&body=${encodeURIComponent(formData.message)}`
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="kontakt" className="bg-[#f8f7f5]">
      <div className="grid lg:grid-cols-2">
        {/* Left - Contact Info */}
        <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32">
          <p className="text-foreground/40 text-xs tracking-[0.25em] uppercase mb-6">
            Kontakt
          </p>
          <h2 className="font-serif text-3xl md:text-[2.5rem] font-normal text-foreground leading-[1.15] mb-6">
            Wir freuen uns auf Ihre Anfrage
          </h2>
          <p className="text-foreground/60 leading-[1.8] mb-12 max-w-md">
            Haben Sie Fragen zu einer Immobilie oder möchten Sie Ihr Objekt verkaufen? 
            Kontaktieren Sie uns - wir beraten Sie gerne.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-foreground/5 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-foreground/60" />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-foreground/40 mb-1">Adresse</p>
                <p className="text-foreground">Musterstraße 123</p>
                <p className="text-foreground">12345 Musterstadt</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-foreground/5 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-foreground/60" />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-foreground/40 mb-1">Telefon</p>
                <a href="tel:+492115591751" className="text-foreground hover:text-foreground/70 transition-colors">
                  +49 211 5591751
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-foreground/5 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-foreground/60" />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-foreground/40 mb-1">E-Mail</p>
                <a href="mailto:info@abels-immobilien.com" className="text-foreground hover:text-foreground/70 transition-colors">
                  info@abels-immobilien.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-foreground/5 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-foreground/60" />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-foreground/40 mb-1">Öffnungszeiten</p>
                <p className="text-foreground">Mo – Fr: 09:00 – 18:00</p>
                <p className="text-foreground">Sa: 09:00 – 14:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-white px-6 md:px-10 lg:px-16 py-24 md:py-32">
          {isSubmitted ? (
            <div className="h-full flex items-center justify-center text-center">
              <div>
                <div className="w-16 h-16 bg-foreground/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-6 h-6 text-foreground" />
                </div>
                <p className="text-foreground font-serif text-2xl mb-3">Vielen Dank!</p>
                <p className="text-foreground/60">
                  Wir werden uns schnellstmöglich bei Ihnen melden.
                </p>
              </div>
            </div>
          ) : (
            <form
              name="kontakt-allgemein"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="kontakt-allgemein" />
              <input type="hidden" name="bot-field" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-widest uppercase text-foreground/40 mb-3">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 bg-transparent border border-border/50 focus:border-foreground outline-none transition-colors text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs tracking-widest uppercase text-foreground/40 mb-3">
                    E-Mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 bg-transparent border border-border/50 focus:border-foreground outline-none transition-colors text-foreground"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs tracking-widest uppercase text-foreground/40 mb-3">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-12 px-4 bg-transparent border border-border/50 focus:border-foreground outline-none transition-colors text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs tracking-widest uppercase text-foreground/40 mb-3">
                    Betreff
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-12 px-4 bg-transparent border border-border/50 focus:border-foreground outline-none transition-colors text-foreground appearance-none"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="kauf">Immobilie kaufen</option>
                    <option value="verkauf">Immobilie verkaufen</option>
                    <option value="miete">Immobilie mieten</option>
                    <option value="vermietung">Immobilie vermieten</option>
                    <option value="sonstiges">Sonstige Anfrage</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs tracking-widest uppercase text-foreground/40 mb-3">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border border-border/50 focus:border-foreground outline-none transition-colors resize-none text-foreground"
                />
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <p className="text-xs text-foreground/40">* Pflichtfelder</p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 px-10 bg-foreground text-white text-xs tracking-widest uppercase hover:bg-foreground/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Senden..." : "Absenden"}
                </button>
              </div>
              <p className="text-xs text-foreground/60 text-center pt-1">
                Kostenfrei · Unverbindlich · Rückmeldung innerhalb 72 Stunden
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
