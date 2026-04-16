import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const articles: Record<string, any> = {
  "immobilie-bewerten": {
    title: "Wie wird eine Immobilie richtig bewertet?",
    category: "Bewertung",
    date: "15. März 2024",
    readTime: "5 min Lesezeit",
    content: `
Die richtige Bewertung ist das Fundament jedes erfolgreichen Immobiliengeschäfts. Ob Sie kaufen oder verkaufen möchten - eine objektive Marktbewertung ist essentiell.

Wichtige Bewertungskriterien:

**Lage & Umgebung**
Die Lage ist der wichtigste Faktor bei der Bewertung. Infrastruktur, Schulen, öffentliche Verkehrsmittel und die Entwicklung der Gegend spielen eine große Rolle.

**Zustand der Immobilie**
Der bauliche Zustand, Modernisierungsgrad und Sanierungsbedarf beeinflussen den Wert erheblich. Ein gut erhaltenes Haus ist deutlich mehr wert als ein renovierungsbedürftiges.

**Markttrends**
Die aktuelle Marktlage und Nachfrage in der Region sind entscheidend. In manchen Gegenden steigen die Preise, in anderen fallen sie.

**Vergleichbare Objekte**
Durch den Vergleich mit ähnlichen Objekten in der Nachbarschaft lässt sich ein realistischer Wert bestimmen.

**Energieeffizienz**
Der Energieeffizienzstandard wird immer wichtiger. Ein Haus mit guter Energiebilanz ist attraktiver und teurer.

Unsere Experten können eine professionelle Bewertung durchführen, die alle diese Faktoren berücksichtigt. Kontaktieren Sie uns für eine kostenlose, unverbindliche Bewertung.
    `
  },
  "verkauf-vorbereiten": {
    title: "Ihre Immobilie zum Verkauf vorbereiten",
    category: "Verkaufen",
    date: "10. März 2024",
    readTime: "6 min Lesezeit",
    content: `
Mit ein paar klugen Schritten können Sie den Verkauf Ihrer Immobilie erheblich optimieren und den besten Preis erzielen.

**Schritt 1: Gründliche Reinigung**
Erste Impressionen zählen. Eine blitzsaubere Immobilie wirkt gepflegter und hochwertiger.

**Schritt 2: Kleine Reparaturen**
Reparieren Sie sichtbare Mängel wie tropfende Wasserhähne, kaputte Fenstergriffe oder beschädigte Tapeten.

**Schritt 3: Decluttering**
Räumen Sie auf und reduzieren Sie persönliche Gegenstände. Dies hilft potenziellen Käufern, sich die Räume als ihre eigenen vorzustellen.

**Schritt 4: Gute Fotos**
Professionelle Fotos sind entscheidend für die online Präsentation. Diese beeinflussen, wer die Immobilie überhaupt besichtigt.

**Schritt 5: Faire Preisgestaltung**
Basierend auf einer professionellen Bewertung sollte der Preis wettbewerbsfähig sein.

**Schritt 6: Professionelle Vermarktung**
Mit den richtigen Kanälen und einer guten Vermarktungsstrategie erreichen Sie die richtige Zielgruppe.

Lassen Sie sich von unseren Experten beraten - wir haben jahrelange Erfahrung bei der erfolgreichen Vermittlung von Immobilien.
    `
  },
  "kauf-checkliste": {
    title: "Die ultimative Kaufen-Checkliste",
    category: "Kaufen",
    date: "5. März 2024",
    readTime: "7 min Lesezeit",
    content: `
Vor dem Immobilienkauf gibt es viel zu beachten. Mit dieser Checkliste verpassen Sie nichts Wichtiges.

**Vor der Besichtigung:**
- [ ] Budget und Finanzierung klären
- [ ] Makler oder Verkäufer kontaktieren
- [ ] Fragen zur Immobilie vorbereiten

**Besichtigung:**
- [ ] Alle Räume gründlich ansehen
- [ ] Heizung, Elektrik, Sanitär prüfen
- [ ] Lärmbelastung überprüfen
- [ ] Nachbarschaft erkunden
- [ ] Fotos machen

**Nach der Besichtigung:**
- [ ] Bewertung durch Experten einholen
- [ ] Makler nach Verkaufsunterlagen fragen
- [ ] Besichtigungen mit Familie wiederholen
- [ ] Vergleich mit anderen Objekten

**Vor dem Kauf:**
- [ ] Finanzierungsangebot einholen
- [ ] Energieausweis prüfen
- [ ] Grundbuch und Kataster ansehen
- [ ] Notar kontaktieren

**Beim Notar:**
- [ ] Kaufvertrag gründlich lesen
- [ ] Alle Kosten (Notar, Grunderwerbsteuer) berechnen
- [ ] Zahlungsmodalitäten klären

Unsere Experten begleiten Sie bei jedem Schritt. Kontaktieren Sie uns für professionelle Beratung beim Immobilienkauf.
    `
  },
  "finanzierung": {
    title: "Immobilienfinanzierung verstehen",
    category: "Finanzierung",
    date: "28. Februar 2024",
    readTime: "8 min Lesezeit",
    content: `
Die Finanzierung ist einer der wichtigsten Aspekte beim Immobilienkauf. Verstehen Sie die Optionen und Kosten.

**Kreditarten:**
- Annuitätendarlehen (Standard, gleichmäßige Raten)
- Tilgungsdarlehen (variable Tilgung)
- Bauspardarlehen (speziell für Neubau)

**Zinsen:**
Die aktuellen Zinssätze sind ein entscheidender Faktor. Vergleichen Sie verschiedene Banken und Angebote.

**Eigenkapital:**
Je mehr Eigenkapital Sie haben, desto besser die Kreditkonditionen. Mindestens 10-20% sollten Sie einplanen.

**Nebenkosten:**
- Maklergebühr (3-5%)
- Grunderwerbsteuer (3,5-6,5%)
- Notargebühren (1-2%)
- Grundbuchgebühren

**Finanzierungsplanung:**
Planen Sie langfristig. Eine 20-Jahres-Finanzierung ist heute üblich. Achten Sie auf Sondertilgungsoptionen.

**Beratung:**
Lassen Sie sich von einem Finanzierungsberater unterstützen. Kleine Unterschiede bei Zinsen sparen Zehntausende Euro.

Kontaktieren Sie unsere Finanzierungsexperten für eine kostenlose Beratung.
    `
  },
  "steuern": {
    title: "Steuern beim Immobilienkauf und Verkauf",
    category: "Steuern",
    date: "20. Februar 2024",
    readTime: "5 min Lesezeit",
    content: `
Wichtige Steuerinformationen für Käufer und Verkäufer von Immobilien.

**Für Käufer:**

Grunderwerbsteuer:
Die Grunderwerbsteuer liegt zwischen 3,5-6,5% des Kaufpreises (je nach Bundesland). Dies ist eine nicht verhandelbare Gebühr.

Notargebühren:
Der Notar kostet ca. 1-2% des Kaufpreises. Diese sind gesetzlich geregelt.

Maklergebühren:
Falls ein Makler beteiligt ist, ca. 3-5% des Kaufpreises.

**Für Verkäufer:**

Spekulationssteuer:
Wenn Sie die Immobilie vor 10 Jahren verkaufen, kann Spekulationssteuer anfallen (bis 42%).

Maklergebühren:
Oft teilt sich Maklergebühr zwischen Käufer und Verkäufer.

Gestaltungsspielraum:
Überprüfen Sie, ob Teilung in Grundstück und Gebäude sinnvoll ist.

**Tipps:**
- Sprechen Sie mit Ihrem Steuerberater
- Dokumentieren Sie alle Ausgaben
- Planen Sie die Steuern in Ihr Budget ein

Unsere Makler können Ihnen bei der Planung helfen und aufzeigen, wie Sie transparent bleiben.
    `
  },
  "markttrends": {
    title: "Immobilienmarkt Trends 2024",
    category: "Markt",
    date: "15. Februar 2024",
    readTime: "6 min Lesezeit",
    content: `
Überblick über die wichtigsten Trends im deutschen Immobilienmarkt 2024.

**Preisentwicklung:**
Nach Jahren des Anstiegs stabilisieren sich die Preise. In einigen Regionen gibt es erste Rückgänge.

**Nachfrage nach Nachhaltigkeit:**
Energieeffiziente und nachhaltig gebaute Immobilien sind stärker gefragt und erzielen höhere Preise.

**Digitalisierung:**
Online-Besichtigungen, 3D-Touren und Drohnen-Videos werden zum Standard. Virtual Reality wird immer häufiger.

**Homeoffice-Effekt:**
Die Nachfrage nach Häusern mit Homeoffice/Büro bleibt hoch. Pendlerentfernungen werden größer.

**Makler als Berater:**
Der reine Transaktionsmakler wird zunehmend durch Advisor ersetzt. Kunden wünschen sich umfassende Beratung.

**Nachhaltigkeit in der Finanzierung:**
Green Finance und nachhaltige Darlehen werden wichtiger. Bessere Konditionen für ökologische Bauweisen.

**Regionale Unterschiede:**
Großstädte sättigen sich, während B- und C-Städte an Attraktivität gewinnen.

Mit unseren Marktexperten verstehen Sie diese Trends und nutzen sie zu Ihrem Vorteil.
    `
  }
}

export async function generateStaticParams() {
  return Object.keys(articles).map((id) => ({
    id: id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = articles[id]
  return {
    title: `${article?.title || 'Ratgeber'} | Abels Immobilien Ratgeber`,
    description: article ? `Lesen Sie unseren Ratgeber-Artikel: ${article.title}` : ''
  }
}

export default async function RatgeberDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = articles[id]

  if (!article) {
    return <div>Artikel nicht gefunden</div>
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-40 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="text-sm text-muted-foreground">{article.date}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{article.readTime}</span>
            </div>
            <h1 className="font-serif text-5xl font-bold mb-6">{article.title}</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            {article.content.split('\n\n').map((paragraph: string, i: number) => (
              <p key={i} className="text-muted-foreground mb-6 leading-relaxed whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-xl font-bold mb-4">Haben Sie noch Fragen?</h3>
            <p className="text-muted-foreground mb-6">
              Unsere Experten beantworten gerne Ihre Fragen zur Immobilienfinanzierung, Bewertung oder anderen Themen.
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
              Jetzt Kontakt aufnehmen
            </button>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  )
}
