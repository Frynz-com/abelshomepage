"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="ueber-uns" className="py-24 md:py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        {/* Intro */}
        <div className="max-w-3xl mb-20">
          <p className="text-foreground/40 text-xs tracking-[0.25em] uppercase mb-5">
            Unternehmen
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground leading-tight mb-6">
            Ihr Partner fur Immobilien in der Region
          </h2>
          <p className="text-foreground/60 leading-relaxed">
            Die Abels Immobilien GmbH ist Ihr verlasslicher Ansprechpartner fur den Kauf, 
            Verkauf und die Vermietung von Immobilien. Mit uber 25 Jahren Erfahrung 
            kennen wir den regionalen Markt wie unsere Westentasche.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-24">
          <div className="relative">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/team-meeting.jpg"
                alt="Abels Immobilien Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-normal text-foreground mb-6">
              Unser Anspruch
            </h3>
            <p className="text-foreground/60 leading-relaxed mb-8">
              Wir verstehen, dass der Kauf oder Verkauf einer Immobilie eine der wichtigsten 
              Entscheidungen im Leben ist. Deshalb legen wir grossen Wert auf eine personliche 
              und individuelle Betreuung.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Marktgerechte Wertermittlung Ihrer Immobilie",
                "Professionelle Vermarktung mit hochwertigen Exposés",
                "Begleitung bei Besichtigungen und Verhandlungen",
                "Unterstutzung bis zum notariellen Abschluss",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-foreground/70 mt-0.5 shrink-0" />
                  <span className="text-foreground/70">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl md:text-4xl font-serif text-foreground">25+</p>
                <p className="text-xs text-foreground/40 mt-1 uppercase tracking-wide">Jahre Erfahrung</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif text-foreground">500+</p>
                <p className="text-xs text-foreground/40 mt-1 uppercase tracking-wide">Objekte</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif text-foreground">98%</p>
                <p className="text-xs text-foreground/40 mt-1 uppercase tracking-wide">Zufrieden</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Intro */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="font-serif text-2xl md:text-3xl font-normal text-foreground mb-6">
              Unser Team
            </h3>
            <p className="text-foreground/60 leading-relaxed mb-6">
              Hinter der Abels Immobilien GmbH steht ein engagiertes Team aus erfahrenen 
              Immobilienexperten. Jeder Einzelne bringt seine Starken ein - ob Marktanalyse, 
              Kundenbetreuung oder Verhandlungsfuhrung.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              Gemeinsam arbeiten wir daran, fur Sie das beste Ergebnis zu erzielen. 
              Personlich, kompetent und immer an Ihrer Seite.
            </p>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/team.jpg"
                alt="Buro Abels Immobilien"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-foreground text-white px-6 py-4">
              <p className="text-xs tracking-widest uppercase">Seit 1999</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
