import { Home, Building2, Landmark, TrendingUp, Gift, Eye } from "lucide-react"
import Link from "next/link"

export function PropertyTypesSection() {
  const types = [
    {
      icon: Home,
      title: "Eigentumswohnungen",
      description: "Von klassisch bis modern, von Apartment bis Penthouse — wir vermitteln Wohnungen in allen Größen und Lagen. Mit Fokus auf Käufer, die wirklich investieren möchten."
    },
    {
      icon: Building2,
      title: "Einfamilienhäuser",
      description: "Häuser mit Garten, Terrasse oder Hof benötigen eine spezielle Vermarktung. Wir kennen Familien und Investoren, die konkret nach Ihrem Objekt suchen."
    },
    {
      icon: Landmark,
      title: "Villen",
      description: "Luxusimmobilien erfordern diskrete, exklusive Vermarktung. Unser Netzwerk umfasst High-Net-Worth-Käufer und internationale Investoren."
    },
    {
      icon: TrendingUp,
      title: "Kapitalanlagen & Anlageimmobilien",
      description: "Mehrfamilienhäuser, Mietshäuser und Renditeimmobilien. Wir vermitteln an professionelle Investoren mit Verständnis für Fundamentaldaten und Marktchancen."
    },
    {
      icon: Gift,
      title: "Erbimmobilien",
      description: "Geerbt und now unsicher, was zu tun ist? Wir begleiten Erbfälle professionell, begleiten Teilungsversteigerungen und finden Lösungen, die für alle Beteiligten passen."
    },
    {
      icon: Eye,
      title: "Diskrete Verkäufe",
      description: "Off-Market, nur an Interessenten aus unserem Netzwerk, ohne Makleraushang — für Eigentümer, die nicht möchten, dass ihre Verkaufsabsicht bekannt wird."
    }
  ]

  return (
    <section className="py-32 lg:py-40 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="mb-16 max-w-[720px]">
          <p className="text-gold text-xs uppercase tracking-[0.2em] mb-3">
            Für alle Immobilientypen
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ink tracking-[-0.015em] leading-[1.1] mb-6">
            Welche Immobilie möchten Sie verkaufen?
          </h2>
          <p className="text-graphite text-lg leading-relaxed">
            Ob Wohnung, Haus, Villa oder Kapitalanlage — wir haben die richtige Strategie für Ihre Immobilie und Ihre Zielgruppe.
          </p>
        </div>

        {/* Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((type) => {
            const Icon = type.icon
            return (
              <div
                key={type.title}
                className="bg-white border border-line p-8 hover:shadow-lg hover:border-gold transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-serif text-xl text-ink mb-3">
                  {type.title}
                </h3>
                <p className="text-graphite text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/verkaufen"
            className="inline-flex items-center gap-2 text-gold font-medium uppercase tracking-[0.1em] hover:gap-3 transition-all"
          >
            Zum Verkaufsprozess →
          </Link>
        </div>
      </div>
    </section>
  )
}
