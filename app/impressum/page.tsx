import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum | Abels Immobilien",
  description: "Impressum und rechtliche Informationen von Abels Immobilien GmbH",
  robots: "index, follow"
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <div className="max-w-[800px] mx-auto px-6 py-24 lg:py-32">
        <h1 className="font-serif text-5xl text-ink mb-12">Impressum</h1>
        
        <div className="prose prose-sm max-w-none space-y-8 text-graphite leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">Abels Immobilien GmbH</h2>
            <p>
              Alt Niederkassel 124<br />
              40547 Düsseldorf
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-ink mb-3">Kontakt</h3>
            <p>
              Telefon: <a href="tel:+492115591751" className="text-gold hover:underline">+49 211 5591751</a><br />
              E-Mail: <a href="mailto:info@abels-immobilien.de" className="text-gold hover:underline">info@abels-immobilien.de</a>
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-ink mb-3">Vertretungsberechtigte</h3>
            <p>
              Geschäftsführerin: Josefine Klein Mokrani<br />
              Real Estate Management: Peter Abels
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-ink mb-3">Berufs- und Handelsregisterangaben</h3>
            <p>
              Berufsbezeichnung: Immobilienmakler<br />
              Gewerbeerlaubnis gem. § 34c GewO<br />
              <br />
              Zuständige Berufskammer: IHK Düsseldorf<br />
              Handelsregister: HRB Nr. 69327<br />
              Amtsgericht: Düsseldorf<br />
              USt-IdNr.: DE 288 593 181
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-ink mb-3">Aufsichtsbehörde</h3>
            <p>
              Stadt Düsseldorf<br />
              Worringer Straße 111<br />
              40210 Düsseldorf
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-ink mb-3">Hinweis zur Streitbeilegung</h3>
            <p>
              Die Europäische Kommission stellt eine Plattform für die außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit, die unter <a href="https://www.ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.ec.europa.eu/consumers/odr</a> aufrufbar ist.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-ink mb-3">Haftungsausschluss</h3>
            
            <h4 className="font-semibold text-ink mb-2">1. Inhalt des Onlineangebotes</h4>
            <p>
              Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend und unverbindlich.
            </p>

            <h4 className="font-semibold text-ink mb-2 mt-4">2. Verweise und Links</h4>
            <p>
              Gemäß § 5 Abs.1 TDG sind wir ausschließlich nur für die eigenen Inhalte verantwortlich. Für Links auf fremde Inhalte dritter Anbieter sind wir gemäß § 5 Abs.2 TDG nur verantwortlich, wenn wir von einem rechtswidrigen oder strafbaren Gehalt positive Kenntnis haben und es technisch möglich und zumutbar ist, deren Nutzung zu verhindern. Wir distanzieren uns hiermit ausdrücklich von allen Inhalten aller gelinkten Seiten auf der gesamten Website.
            </p>

            <h4 className="font-semibold text-ink mb-2 mt-4">3. Urheber- und Kennzeichenrecht</h4>
            <p>
              Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu beachten. Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
