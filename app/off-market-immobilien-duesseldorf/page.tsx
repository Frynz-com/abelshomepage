"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export default function OffMarketDuesseldorf() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <section className="pt-40 pb-24 px-6 max-w-5xl mx-auto">
        <p className="text-gold text-xs uppercase tracking-[0.2em] mb-4">Diskrete Vermarktung</p>
        <h1 className="font-serif text-5xl lg:text-6xl text-ink tracking-[-0.02em] leading-[1.05] mb-8">
          Off-Market Immobilienverkauf in Düsseldorf
        </h1>
        <p className="text-graphite text-xl leading-relaxed mb-16 max-w-3xl">
          Sie möchten Ihre Immobilie verkaufen, aber nicht, dass die ganze Stadt es erfährt? Off-Market-Vermarktung ist die Lösung — Ihre Immobilie wird exklusiv nur einem vorqualifizierten Käuferkreis angeboten. Diskretion, Sicherheit und Effizienz in einem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-serif text-3xl text-ink mb-8">Off-Market: Wann macht es Sinn?</h2>
            <ul className="space-y-6">
              {[
                { title: "Sie sind prominente oder gut bekannte Person", desc: "Öffentlicher Verkauf würde unwünschte Aufmerksamkeit erregen." },
                { title: "Ihre Immobilie ist besonders wertvoll oder hochpreisig", desc: "Sicherheit vor Einbruch, Diebstahl oder Vandalismus während Besichtigungen." },
                { title: "Sie wünschen sich maximale Diskretion", desc: "Nachbarn, Geschäftspartner oder Familie sollen nicht vom Verkauf erfahren." },
                { title: "Sie sind in einer Übergangssituation", desc: "Scheidung, Erbfall oder Unternehmensumstrukturierung erfordern diskrete Lösung." },
                { title: "Sie möchten gezielt verkaufen", desc: "Nur Käufer, die wirklich passen — nicht Besichtigungsmarathon mit hunderten Interessenten." },
                { title: "Qualität vor Masse", desc: "Weniger, aber hochwertige Interessenten führen zu besseren Preisen." }
              ].map((item) => (
                <li key={item.title} className="border-l-2 border-gold pl-4">
                  <p className="font-serif text-lg text-ink mb-2">{item.title}</p>
                  <p className="text-graphite text-sm">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-line p-10">
            <h3 className="font-serif text-2xl text-ink mb-6">Off-Market vs. herkömmlicher Verkauf</h3>
            <table className="w-full text-sm">
              <tbody className="text-graphite">
                <tr className="border-b border-line">
                  <td className="py-3 font-serif text-ink">Reichweite</td>
                  <td className="py-3">Begrenzt (Netzwerk)</td>
                  <td className="py-3">Maximal (öffentlich)</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="py-3 font-serif text-ink">Diskretion</td>
                  <td className="py-3">Sehr hoch</td>
                  <td className="py-3">Niedrig</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="py-3 font-serif text-ink">Besichtigungen</td>
                  <td className="py-3">Wenige, gezielt</td>
                  <td className="py-3">Viele</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="py-3 font-serif text-ink">Verkaufsdauer</td>
                  <td className="py-3">Oft schneller</td>
                  <td className="py-3">Variabel</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="py-3 font-serif text-ink">Sicherheit</td>
                  <td className="py-3">Hoch</td>
                  <td className="py-3">Eher niedrig</td>
                </tr>
                <tr>
                  <td className="py-3 font-serif text-ink">Preis</td>
                  <td className="py-3">Oft höher</td>
                  <td className="py-3">Marktpreis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-24 bg-white border border-line p-12">
          <h2 className="font-serif text-3xl text-ink mb-6">So funktioniert Off-Market bei Abels</h2>
          <ol className="space-y-6">
            {[
              { num: "1", title: "Vertrauliches Gespräch", desc: "Sie schildern Ihre Anforderungen, Zeithorizont und Geheimhaltungswünsche. Unterzeichnung einer NDA." },
              { num: "2", title: "Realistische Bewertung", desc: "Wir erstellen eine marktgerechte Preiseinschätzung — nicht zu optimistisch, nicht zu niedrig." },
              { num: "3", title: "Diskrete Vermarktung", desc: "Ihre Immobilie wird NUR unserem vorqualifizierten Käufernetzwerk in Düsseldorf und der Region vorgestellt." },
              { num: "4", title: "Vorqualifikation der Interessenten", desc: "Nur Käufer mit nachgewiesener Finanzierungsfähigkeit und ernsthafte Absicht sehen Ihre Immobilie." },
              { num: "5", title: "Besichtigung unter Vertrag", desc: "Jeder Interessent unterzeichnet eine Verschwiegenheitserklärung vor der Besichtigung." },
              { num: "6", title: "Anonyme Verhandlung", desc: "Wir verhandeln für Sie — Käufer und Verkäufer müssen sich nicht direkt treffen." },
              { num: "7", title: "Sichere Abwicklung", desc: "Vom Kaufvertrag bis zur Übergabe begleiten wir Sie diskret und professionell." }
            ].map((step) => (
              <div key={step.num} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gold text-cream font-serif font-bold text-lg">
                    {step.num}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-ink mb-2">{step.title}</h3>
                  <p className="text-graphite">{step.desc}</p>
                </div>
              </div>
            ))}
          </ol>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">Unser Käufernetzwerk in Düsseldorf</h2>
          <p className="text-graphite mb-8">
            Abels hat über Jahre ein großes Netzwerk von hochvermögenden Privatpersonen, Unternehmern, Investoren und institutionellen Käufern aufgebaut:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { type: "Erfolgreiche Unternehmer", desc: "Geschäftsführer, Gründer, Inhaber mit Kaufkraft von € 1–5 Mio." },
              { type: "Unternehmerfamilien", desc: "Multi-Generationen-Vermögen, suchen Immobilien als Kapitalanlage oder Altersdomizil." },
              { type: "Institutionelle Investoren", desc: "Versicherungen, Pensionsfonds, Family Offices mit Interesse an Premium-Liegenschaften." },
              { type: "Internationale Käufer", desc: "Europäische Privatpersonen (Benelux, Skandinavien) mit Düsseldorf-Interesse." },
              { type: "Fonds und Gesellschaften", desc: "Real Estate Entwickler und Investment-Gesellschaften mit mehrfachen Projekten." },
              { type: "Vermögende Privatpersonen", desc: "Ruheständler, Erben, Erbinnen mit Kapital und Interesse an hochwertigen Objekten." }
            ].map((buyer) => (
              <div key={buyer.type} className="border-l-4 border-gold pl-6">
                <p className="font-serif text-lg text-ink mb-2">{buyer.type}</p>
                <p className="text-graphite text-sm">{buyer.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24 bg-gold/10 border border-gold/30 p-10 rounded-sm">
          <h2 className="font-serif text-2xl text-ink mb-4">Häufig gefragt: Off-Market</h2>
          <div className="space-y-6">
            <div>
              <p className="font-serif text-ink mb-2">Werden meine Daten geheim gehalten?</p>
              <p className="text-graphite text-sm">Ja, absolut. Wir unterzeichnen Verschwiegenheitserklärungen und geben personenbezogene Daten nicht weiter. Nur die Immobilie wird beschrieben, nicht der Eigentümer.</p>
            </div>
            <div>
              <p className="font-serif text-ink mb-2">Kann ich trotzdem alle Interessenten kennenlernen?</p>
              <p className="text-graphite text-sm">Sie können, müssen aber nicht. Manche Eigentümer möchten anonym bleiben — andere möchten den Käufer persönlich treffen. Das entscheiden Sie.</p>
            </div>
            <div>
              <p className="font-serif text-ink mb-2">Bekomme ich beim Off-Market einen höheren Preis?</p>
              <p className="text-graphite text-sm">Oft ja — weil nur qualifizierte, kaufbereite Interessenten in Frage kommen. Gleichzeitig ist die Reichweite begrenzt. Der Marktpreis bleibt die Basis.</p>
            </div>
            <div>
              <p className="font-serif text-ink mb-2">Dauert Off-Market länger?</p>
              <p className="text-graphite text-sm">Nein, oft sogar schneller. Mit gezieltem Netzwerk und hochwertigen Interessenten sind Verkäufe mitunter in 4–8 Wochen abgeschlossen.</p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">Diskrete Objektbeschreibung</h2>
          <p className="text-graphite mb-6">
            Im Off-Market erstellen wir bewusst vage Beschreibungen zum Schutz Ihrer Privatsphäre:
          </p>
          <div className="bg-white border border-line p-8">
            <p className="text-graphite italic mb-6">
              „Exklusive Liegenschaft in gefragter Lage Düsseldorfs. Großzügiges Anwesen mit Premium-Ausstattung, moderner Gebäudetechnik und privaten Freiflächen. Ideal für anspruchsvolle Käufer. Weitere Informationen nur auf Anfrage und nach Unterzeichnung der Verschwiegenheitserklärung."
            </p>
            <p className="text-graphite text-sm">
              So sieht die Off-Market-Beschreibung aus: nicht spezifisch, aber prägnant. Echte Interessenten fragen nach und zeigen damit, dass sie es ernst meinen.
            </p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">Jetzt diskrete Vermarktung vereinbaren</h2>
          <p className="text-graphite text-lg mb-8">
            Sie möchten Ihre Immobilie diskret und sicher verkaufen? Vereinbaren Sie jetzt ein vertrauliches Gespräch mit uns — komplett unter Verschluss.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-graphite transition-colors font-medium"
            >
              Diskrete Beratung vereinbaren
            </button>
            <Link 
              href="/standorte/duesseldorf"
              className="inline-flex items-center justify-center border-2 border-ink text-ink px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-ink/5 transition-colors font-medium"
            >
              Zurück zu Immobilienmakler
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}
