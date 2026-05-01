import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

const properties: Record<string, any> = {
  "penthouse-duesseldorf": {
    title: "Luxus Penthouse Düsseldorf Oberkassel",
    location: "Düsseldorf, Oberkassel",
    price: "3.500.000 €",
    image: "/images/properties/property-1.jpg",
    features: ["5 Zimmer", "280 m²", "Terrasse mit Rheinblick", "2 Bäder", "Gäste-WC", "Keller", "2024 modernisiert"],
    description: "Einmaliges Penthouse mit Panoramablick auf Rhein und Düsseldorf. Hochwertig ausgestattet mit Designer-Materialien und Premium-Ausstattung.",
    details: {
      year: 2024,
      energy: "A+",
      heating: "Wärmepumpe",
      parking: "2 Tiefgaragen"
    }
  },
  "altbau-frankfurt": {
    title: "Gründerzeitbau Frankfurt Westend",
    location: "Frankfurt, Westend",
    price: "2.200.000 €",
    image: "/images/properties/property-2.jpg",
    features: ["6 Zimmer", "240 m²", "Stuckdecken", "Parkettböden", "Hofgarten", "Balkon", "Kamin"],
    description: "Elegante Altbau-Wohnung mit klassischen Details in der geschätzten Westend-Lage. Perfekt für Liebhaber historischer Architektur und urbanen Lebens.",
    details: {
      year: 1920,
      energy: "E",
      heating: "Zentralheizung",
      parking: "Straße"
    }
  },
  "villa-muenchen": {
    title: "Modern Villa München Bogenhausen",
    location: "München, Bogenhausen",
    price: "5.200.000 €",
    image: "/images/properties/property-3.jpg",
    features: ["8 Zimmer", "450 m²", "Pool", "Garten 1.000 m²", "Sauna", "Kino", "Smart Home"],
    description: "Architektonisches Meisterwerk mit moderner Ausstattung in Münchens exklusivster Wohnlage. Größter Garten in der unmittelbaren Gegend.",
    details: {
      year: 2018,
      energy: "A",
      heating: "Geothermie",
      parking: "3 Garagen"
    }
  }
}

export async function generateStaticParams() {
  return Object.keys(properties).map((id) => ({
    id: id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = properties[id]
  return {
    title: `${property?.title || 'Objekt'} | Abels Immobilien`,
    description: property?.description || ''
  }
}

export default async function ObjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = properties[id]

  if (!property) {
    return <div>Objekt nicht gefunden</div>
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="relative h-96 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-sm text-accent font-semibold mb-2">{property.location}</p>
            <h1 className="font-serif text-5xl font-bold mb-4">{property.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{property.description}</p>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Ausstattung</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {property.features.map((feature: string, i: number) => (
                  <div key={i} className="p-4 bg-muted rounded-lg">
                    <p className="font-semibold">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Energieeffizienz & Technik</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Baujahr</p>
                  <p className="font-bold">{property.details.year}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Energieeffizienz</p>
                  <p className="font-bold">{property.details.energy}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Heizung</p>
                  <p className="font-bold">{property.details.heating}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Parken</p>
                  <p className="font-bold">{property.details.parking}</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Galerie</h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-muted aspect-square rounded-lg"></div>
              ))}
            </div>
          </div>

          <div>
            <div className="sticky top-24 bg-muted p-8 rounded-lg">
              <div className="text-4xl font-bold mb-6">{property.price}</div>
              
              <button className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition mb-3">
                Besichtigung vereinbaren
              </button>
              <button className="w-full border border-border px-6 py-3 rounded-lg font-semibold hover:bg-muted transition">
                Finanzierungsberatung
              </button>

              <div className="mt-8 pt-8 border-t border-border space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Ihre Fragen?</p>
                  <p className="font-semibold text-foreground">+49 (0) 211 123456</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-semibold text-foreground">info@ebla-immobilien.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
