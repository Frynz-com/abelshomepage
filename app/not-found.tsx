import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream text-ink flex flex-col">
      <Header />
      
      <section className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <p className="text-gold text-xs uppercase tracking-[0.2em] mb-4">
            Fehler 404
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl text-ink tracking-[-0.02em] leading-[1.05] mb-6">
            Seite nicht gefunden
          </h1>
          <p className="text-graphite text-lg leading-relaxed mb-10">
            Die angeforderte Seite existiert leider nicht oder wurde verschoben. 
            Kehren Sie zur Startseite zurück oder nutzen Sie die Navigation.
          </p>
          
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-graphite transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
