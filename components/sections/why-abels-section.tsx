import { Heart, Target, Zap, Handshake, TrendingUp, Lock } from "lucide-react"

export function WhyAbelsSection() {
  const reasons = [
    {
      icon: Heart,
      title: "Persönliche Betreuung",
      description: "Kein Call-Center, keine anonyme Vermittlung. Sie arbeiten mit inhabergeführtem Unternehmen, das echte Verantwortung trägt und langfristige Beziehungen pflegt."
    },
    {
      icon: Target,
      title: "Marktkenntnis in gefragten Lagen",
      description: "Über 20 Jahre Erfahrung in Düsseldorf, München, Grünwald und den anderen Standorten. Wir kennen jedes Viertel, jeden Investor, jede aktuelle Preisentwicklung."
    },
    {
      icon: Zap,
      title: "Hochwertige Vermarktung",
      description: "Professionelle Fotografie, Drohnenaufnahmen, Video-Touren und digitale Präsentation. Ihre Immobilie wird präsentiert, nicht nur angeboten."
    },
    {
      icon: Lock,
      title: "Diskrete Prozesse",
      description: "Off-Market-Vermarktung für Eigentümer, die Diskretion benötigen. Nur qualifizierte Interessenten, keine unseriösen Anfragen, keine Besichtigungsflut."
    },
    {
      icon: Target,
      title: "Qualifizierte Interessenten",
      description: "Unser Netzwerk garantiert Käufer, die auch wirklich kaufen. Wir filtern unseriöse Anfragen und arbeiten nur mit geprüften Interessenten."
    },
    {
      icon: Handshake,
      title: "Klare Kommunikation",
      description: "Ehrlich, präzise, verständlich. Wir erklären den Prozess, nennen realistische Preise und halten, was wir versprechen — ohne Überraschungen."
    }
  ]

  return (
    <section className="py-32 lg:py-40 bg-bone">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="mb-16 max-w-[720px]">
          <p className="text-gold text-xs uppercase tracking-[0.2em] mb-3">
            Warum Abels Immobilien
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ink tracking-[-0.015em] leading-[1.1] mb-6">
            Das macht uns unterschiedlich
          </h2>
          <p className="text-graphite text-lg leading-relaxed">
            Nicht jeder Makler ist gleich. Wir unterscheiden uns durch Fachkompetenz, Diskretion und echte Ergebnisse.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div key={reason.title} className="flex gap-6">
                <Icon className="w-8 h-8 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-xl text-ink mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-graphite text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
