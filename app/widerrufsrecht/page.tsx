import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Widerrufsrecht | Abels Immobilien",
  description: "Widerrufsrecht und Muster-Widerrufsformular der Abels Immobilien GmbH"
}

export default function WiderrufsrechtPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <article className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl lg:text-5xl text-ink tracking-[-0.02em] leading-tight mb-12">
          Widerrufsrecht
        </h1>

        <div className="prose prose-sm max-w-none space-y-8">
          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">Allgemeines Widerrufsrecht</h2>
            <p className="text-graphite leading-relaxed mb-4">
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
            </p>
            <p className="text-graphite leading-relaxed mb-4">
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
            </p>
            <p className="text-graphite leading-relaxed">
              Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
            </p>
          </section>

          <section className="border border-line bg-white p-6">
            <h3 className="font-serif text-xl text-ink mb-4">Adresse für Widerruf:</h3>
            <address className="not-italic text-graphite space-y-2">
              <p>Abels Immobilien GmbH</p>
              <p>Alt Niederkassel 124</p>
              <p>40547 Düsseldorf</p>
              <p>Tel.: +49 211 5591751</p>
              <p>E-Mail: info@abels-immobilien.com</p>
            </address>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">Folgen des Widerrufs</h2>
            <p className="text-graphite leading-relaxed mb-4">
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
            </p>
            <p className="text-graphite leading-relaxed mb-4">
              Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">Erlöschen des Widerrufsrechts</h2>
            <p className="text-graphite leading-relaxed">
              Ihr Widerrufsrecht erlischt, wenn wir unsere Leistung vollständig erbracht haben und mit der Ausführung der Leistung erst begonnen haben, nachdem Sie Ihre ausdrückliche Zustimmung gegeben haben und gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie Ihr Widerrufsrecht bei vollständiger Vertragserfüllung durch uns verlieren.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">Muster-Widerrufsformular</h2>
            <p className="text-graphite leading-relaxed mb-6">
              Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und senden Sie es per Post oder E-Mail an die oben angegebene Adresse:
            </p>
            
            <div className="border border-line bg-bone p-8 space-y-6">
              <div>
                <p className="text-sm text-stone mb-2">An: Abels Immobilien GmbH, Alt Niederkassel 124, 40547 Düsseldorf</p>
                <p className="text-sm text-stone">oder per E-Mail: info@abels-immobilien.com</p>
              </div>

              <div className="space-y-4 text-graphite text-sm">
                <p className="font-medium">Hiermit widerrufe(n) ich/wir(*) den von mir/uns(*) abgeschlossenen Vertrag über</p>
                <p className="border-b border-stone pb-2">[Art der Leistung/Waren]</p>
              </div>

              <div className="space-y-4 text-graphite text-sm">
                <p className="font-medium">Bestellt am(*)/erhalten am(*): <span className="border-b border-stone pb-1">[Datum]</span></p>
              </div>

              <div className="space-y-4 text-graphite text-sm">
                <p className="font-medium">Name des/der Verbraucher(s):</p>
                <p className="border-b border-stone pb-2"></p>
              </div>

              <div className="space-y-4 text-graphite text-sm">
                <p className="font-medium">Anschrift des/der Verbraucher(s):</p>
                <p className="border-b border-stone pb-2"></p>
                <p className="border-b border-stone pb-2"></p>
              </div>

              <div className="space-y-4 text-graphite text-sm">
                <p className="font-medium">Datum: <span className="border-b border-stone pb-1">[Datum]</span></p>
              </div>

              <div className="space-y-4 text-graphite text-sm">
                <p className="font-medium">Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):</p>
                <p className="border-b border-stone pb-4"></p>
              </div>

              <p className="text-xs text-stone italic">(*) Unzutreffendes streichen.</p>
            </div>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  )
}
