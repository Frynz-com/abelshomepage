import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

const properties = [
  {
    id: "penthouse-duesseldorf",
    title: "Luxus Penthouse Düsseldorf Oberkassel",
    location: "Düsseldorf, Oberkassel",
    price: "3.500.000 €",
    image: "/images/properties/property-1.jpg",
    features: ["5 Zimmer", "280 m²", "Terrasse mit Blick", "2024 modernisiert"],
    description: "Einmaliges Penthouse mit Panoramablick auf Rhein und Düsseldorf. Hochwertig ausgestattet mit Designer-Materialien."
  },
  {
    id: "altbau-frankfurt",
    title: "Gründerzeitbau Frankfurt Westend",
    location: "Frankfurt, Westend",
    price: "2.200.000 €",
    image: "/images/properties/property-2.jpg",
    features: ["6 Zimmer", "240 m²", "Stuckdecken", "Hofgarten"],
    description: "Elegante Altbau-Wohnung mit klassischen Details. Perfekt für Liebhaber historischer Architektur."
  },
  {
    id: "villa-muenchen",
    title: "Modern Villa München Bogenhausen",
    location: "München, Bogenhausen",
    price: "5.200.000 €",
    image: "/images/properties/property-3.jpg",
    features: ["8 Zimmer", "450 m²", "Pool", "Garten 1.000 m²"],
    description: "Architektonisches Meisterwerk mit moderner Ausstattung. Größter Garten in der Gegend."
  }
]

export const metadata = {
  title: "Exklusive Immobilien | Premium Objekte in Top-Lagen | Abels Immobilien",
  description: "Exklusive Immobilienangebote in Düsseldorf, München, Hamburg und Frankfurt. Kuratierte Premium-Objekte — Penthouse, Villa, Luxuswohnungen — von Abels Immobilien.",
  keywords: [
    "Immobilien kaufen", "Luxusimmobilien kaufen", "Premium Wohnungen Deutschland",
    "Penthouse kaufen Düsseldorf", "Villa kaufen München", "exklusive Immobilien"
  ],
  openGraph: {
    title: "Exklusive Immobilien — Premium Objekte in Top-Lagen",
    description: "Kuratierte Auswahl exklusiver Immobilien in den besten Lagen Deutschlands.",
    url: "https://abels-immobilien.de/objekte",
    type: "website",
    locale: "de_DE",
    siteName: "Abels Immobilien",
  },
  alternates: {
    canonical: "https://abels-immobilien.de/objekte",
  },
}

export default function ObjektePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto mb-16">
          <h1 className="font-serif text-5xl font-bold mb-8">Unsere Objekte</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Entdecken Sie eine sorgfältig kuratierte Auswahl exklusiver Immobilien in den besten Lagen Deutschlands.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <a
              key={property.id}
              href={`/objekte/${property.id}`}
              className="group border border-border rounded-lg overflow-hidden hover:border-accent transition"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-accent font-semibold mb-2">{property.location}</p>
                <h3 className="text-lg font-bold group-hover:text-accent transition mb-2">{property.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{property.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {property.features.slice(0, 2).map((feature, i) => (
                    <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="text-2xl font-bold">{property.price}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
