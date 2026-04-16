import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Allgemeine Geschäftsbedingungen | Abels Immobilien",
  description: "AGB der Abels Immobilien GmbH - Makler für Premium Immobilien in Deutschland"
}

export default function AGBPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <article className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl lg:text-5xl text-ink tracking-[-0.02em] leading-tight mb-12">
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="prose prose-sm max-w-none space-y-8">
          <p className="text-graphite leading-relaxed">
            Die nachstehenden Allgemeinen Geschäftsbedingungen (AGB) sind Grundlage des Maklervertrages. Der Kunde hat die Einbeziehung dieser AGB in den Maklervertrag anerkannt und bestätigt, dass ihm ein Exemplar dieser AGB übergeben wurde oder er auf die Möglichkeit hingewiesen wurde, diese AGB hier über das Internet einzusehen.
          </p>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">§1 Provision</h2>
            <p className="text-graphite leading-relaxed mb-4">
              Der Kunde der Firma Abels Immobilien GmbH verpflichtet sich, bei Abschluss eines durch die Firma Abels Immobilien GmbH vermittelten Vertrages (z. B. Kaufvertrag, Mietvertrag, Pachtvertrag, Nutzungsvertrag, Beteiligungsvertrag usw.) eine im Maklervertrag oder in einer anderen Vereinbarung näher bezeichnete Maklerprovision zu zahlen.
            </p>
            <p className="text-graphite leading-relaxed mb-4">
              Sollte eine solche Provision nicht ausdrücklich vereinbart worden sein, so verpflichtet sich der Kunde im Falle des Kaufes bzw. des Verkaufes einer Immobilie eine Provision in Höhe von 3,57 % des Kaufpreises inkl. MwSt. zu zahlen. Eine entsprechende Provision wird sowohl vom Käufer als auch vom Verkäufer erhoben, soweit nicht ausdrücklich etwas anderes vereinbart ist.
            </p>
            <p className="text-graphite leading-relaxed">
              Im Falle des Nachweises der Möglichkeit zum Abschluss eines Mietvertrages verpflichtet sich der Auftraggeber/Besteller, – sofern nichts anderes vereinbart ist – eine Provision in Höhe von 2,38 Monatsmieten zu zahlen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">§2 Fälligkeit der Provision</h2>
            <p className="text-graphite leading-relaxed">
              Die Provision wird mit Abschluss des vermittelten Vertrages fällig und zahlbar. Der Kunde kommt mit der Zahlung in Verzug, wenn er nicht innerhalb von 8 Tagen nach Fälligkeit und Zugang einer Rechnung oder einer gleichwertigen Zahlungsaufstellung den Honoraranspruch ausgleicht.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">§3 Gewährleistung und Haftung bei Angaben zu Objekten</h2>
            <p className="text-graphite leading-relaxed mb-4">
              Alle unterbreiteten Angebote der Firma Abels Immobilien GmbH sind unverbindlich und freibleibend. Sämtliche Angaben zu den zu vermittelnden Objekten basieren auf Angaben von Dritten. Für die Richtigkeit und Vollständigkeit dieser Angaben übernimmt die Abels Immobilien GmbH keine Gewähr oder Haftung.
            </p>
            <p className="text-graphite leading-relaxed">
              Abels Immobilien GmbH ist nicht verpflichtet, die Angaben, die sie von Dritten erhält, zu überprüfen. Ihr ist dieses aufgrund der Vielzahl der zu betreuenden Objekte auch nicht möglich.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">§4 Vertraulichkeit und Datenschutz</h2>
            <p className="text-graphite leading-relaxed mb-4">
              Die durch die Firma Abels Immobilien GmbH übermittelten Daten und Angebote sind ausschließlich für den Empfänger bestimmt und sind von ihm vertraulich zu behandeln. Eine Weitergabe an Dritte ist nur nach vorheriger Genehmigung durch die Firma Abels Immobilien GmbH gestattet.
            </p>
            <p className="text-graphite leading-relaxed">
              Die Firma Abels Immobilien GmbH verpflichtet sich, sämtliche Daten, die sie im Zusammenhang mit ihrer Tätigkeit erhält, insbesondere die persönlichen Daten der Kunden, vertraulich zu behandeln.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">§5 Haftung bei Weitergabe</h2>
            <p className="text-graphite leading-relaxed">
              Kommt es infolge der Weitergabe der Daten und Information zu einem Vertragsabschluss eines Dritten mit dem Käufer/Verkäufer bzw. Mieter/Vermieter, so haftet der Kunde der Firma Abels Immobilien GmbH auf Schadenersatz in Höhe der Provision.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">§6 Gleichwertiges Geschäft</h2>
            <p className="text-graphite leading-relaxed">
              Abels Immobilien GmbH steht die vereinbarte Provision auch zu, wenn ein wirtschaftlich gleichwertiges, gleichartiges oder ähnliches Geschäft zustande kommt (z.B. Kauf anstatt Miete oder Miete anstatt Kauf). Dies gilt insbesondere auch dann, wenn ein entsprechender Vertrag erst zu einem späteren Zeitpunkt zustande kommen soll.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">§7 Haftungsbeschränkung</h2>
            <p className="text-graphite leading-relaxed mb-4">
              Abels Immobilien GmbH schränkt ihre Haftung nach folgenden Regelungen ein: Die gesetzlichen Bestimmungen für Schäden an Leben, Körper und Gesundheit, die auf einer fahrlässigen oder vorsätzlichen Pflichtverletzung beruhen, gelten uneingeschränkt.
            </p>
            <p className="text-graphite leading-relaxed mb-4">
              Abels Immobilien GmbH haftet auch für Schäden, die durch einfache Fahrlässigkeit verursacht werden, soweit diese Fahrlässigkeit die Verletzung solcher Vertragspflichten betrifft, deren Einhaltung für die Erreichung des Vertragszweckes von besonderer Bedeutung ist.
            </p>
            <p className="text-graphite leading-relaxed">
              Eine weitergehende Haftung ist ohne Rücksicht auf die Rechtsnatur des geltend gemachten Anspruchs ausgeschlossen. Abels Immobilien GmbH überprüft die Bonität der vermittelten Partei nicht und übernimmt deshalb auch keine Haftung dafür.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">§8 Doppelte Provision</h2>
            <p className="text-graphite leading-relaxed">
              Abels Immobilien GmbH wird in der Regel auch für den anderen Vertragspartner provisionspflichtig tätig, es sei denn es ist ausdrücklich eine einseitige Interessenvertretung vereinbart.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">§9 Mitteilungspflicht und Alleinauftrag</h2>
            <p className="text-graphite leading-relaxed mb-4">
              Der Kunde verpflichtet sich, die Firma Abels Immobilien GmbH umgehend zu informieren, wenn er seine Kauf- bzw. Verkaufs- und/oder Vermiet- bzw. Anmietabsicht aufgibt.
            </p>
            <p className="text-graphite leading-relaxed">
              Für den Fall, dass der Verkäufer einer Immobilie unter Umgehung der Abels Immobilien GmbH das Objekt an einen Dritten veräußert und er zuvor einen Makleralleinauftrag erteilt hat, verpflichtet sich der Verkäufer einen pauschalisierten Aufwendungs- und Schadenersatz in Höhe von 10 % der vereinbarten Provision zu zahlen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">§10 Auskunftspflicht des Kunden</h2>
            <p className="text-graphite leading-relaxed">
              Abels Immobilien GmbH hat gegen den Kunden einen Anspruch auf Auskunft, mit wem und zu welchen Konditionen der Kauf-/Mietvertrag abgeschlossen worden ist, um die eigenen Vergütungsansprüche überprüfen zu können.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">§11 Erfüllungsort und Gerichtsstand</h2>
            <p className="text-graphite leading-relaxed">
              Erfüllungsort und Gerichtstand, soweit gesetzlich zulässig, ist der Geschäftssitz der Firma Abels Immobilien GmbH in Düsseldorf.
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  )
}
