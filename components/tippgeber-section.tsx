"use client"

import Image from "next/image"
import { Gift, Handshake, BadgeEuro, ArrowRight } from "lucide-react"

export function TippgeberSection() {
  const steps = [
    {
      icon: Handshake,
      title: "Immobilie empfehlen",
      desc: "Sie kennen jemanden, der seine Immobilie verkaufen mochte? Teilen Sie uns den Kontakt mit."
    },
    {
      icon: BadgeEuro,
      title: "Wir ubernehmen",
      desc: "Unser Team kummert sich um alles - von der Bewertung bis zum erfolgreichen Verkauf."
    },
    {
      icon: Gift,
      title: "Provision erhalten",
      desc: "Nach erfolgreichem Abschluss erhalten Sie Ihre Tippgeber-Provision."
    }
  ]

  return (
    <section id="tippgeber" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-foreground/40 text-xs tracking-[0.25em] uppercase mb-5">
              Tippgeber-Programm
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground leading-tight mb-6">
              Empfehlen Sie uns weiter und verdienen Sie mit
            </h2>
            <p className="text-foreground/60 leading-relaxed mb-10">
              Sie kennen jemanden, der eine Immobilie verkaufen mochte? Werden Sie unser 
              Tippgeber und profitieren Sie von einer attraktiven Provision bei erfolgreichem 
              Verkaufsabschluss.
            </p>

            {/* Steps */}
            <div className="space-y-6 mb-10">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-foreground/5 flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-foreground/70" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{step.title}</h4>
                    <p className="text-sm text-foreground/50 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#kontakt" 
                className="inline-flex items-center justify-center gap-2 bg-foreground text-white px-6 py-3 text-sm tracking-wide hover:bg-foreground/90 transition-colors"
              >
                Jetzt Tipp abgeben
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="tel:+4912345678900" 
                className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-6 py-3 text-sm tracking-wide hover:bg-foreground/5 transition-colors"
              >
                Mehr erfahren
              </a>
            </div>

            {/* Provision Info */}
            <div className="mt-10 pt-8 border-t border-border/50">
              <div className="flex items-center gap-4">
                <div className="bg-foreground text-white px-4 py-2">
                  <span className="text-xl font-serif">500 - 2.000 EUR</span>
                </div>
                <p className="text-sm text-foreground/50">
                  Provision je nach Verkaufswert
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative">
              <Image
                src="/images/tippgeber.jpg"
                alt="Tippgeber Programm"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white shadow-lg p-6 max-w-[200px]">
              <p className="text-2xl font-serif text-foreground mb-1">Einfach.</p>
              <p className="text-2xl font-serif text-foreground mb-1">Unkompliziert.</p>
              <p className="text-2xl font-serif text-foreground">Lohnend.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
