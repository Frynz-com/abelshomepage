"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Phone, Mail, Plus } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const reasons = [
  {
    number: "01",
    title: "Lokale Marktkenntnis",
    text: "Stuttgart ist ein vielschichtiger Markt. Preise, Nachfrage und Käuferprofile unterscheiden sich von Stadtteil zu Stadtteil erheblich — von der Halbhöhenlage bis zum Talboden. Wir kennen diese Unterschiede aus langjähriger, aktiver Praxis.",
  },
  {
    number: "02",
    title: "Hochwertige Präsentation",
    text: "Professionelle Architekturfotografie, sorgfältig gestaltete Exposés und eine durchdachte Käuferansprache — weil die erste Wahrnehmung Ihrer Immobilie über Preis und Nachfrage entscheidet.",
  },
  {
    number: "03",
    title: "Diskrete Vermarktung",
    text: "Für Eigentümer, denen Privatsphäre wichtig ist, bieten wir die stille Vermarktung über unser Netzwerk solventer Kaufinteressenten — ohne öffentliche Portale, ohne Streuverlust.",
  },
  {
    number: "04",
    title: "Strukturierter Verkaufsprozess",
    text: "Vom ersten Gespräch bis zur Schlüsselübergabe folgen wir einem klaren, bewährten Prozess. Kein Zufall, keine Improvisation — nur verlässliche Schritte mit messbarem Ergebnis.",
  },
  {
    number: "05",
    title: "Persönliche Begleitung",
    text: "Ein fester Ansprechpartner für Ihr Objekt. Keine wechselnden Sachbearbeiter, kein Franchisesystem — sondern ein inhabergeführtes Unternehmen mit voller Verantwortung.",
  },
]

const neighborhoods = [
  {
    name: "Stuttgart Killesberg",
    tagline: "Halbhöhenlage · Parks · Villen",
    text: "Eine der begehrtesten Adressen Stuttgarts. Der Killesberg verbindet großzügige Wohnlagen, parkähnliche Umgebung und gute Fernsicht. Gefragt sind Einfamilienhäuser, Doppelhaushälften und großzügige Eigentumswohnungen. Käufer schätzen die ruhige Lage bei gleichzeitig kurzer Distanz zur Innenstadt.",
  },
  {
    name: "Stuttgart Degerloch",
    tagline: "Höhenlage · Familienlagen · Solide Wertentwicklung",
    text: "Degerloch ist eine der stablisten und gefragtesten Wohnlagen Stuttgarts — mit eigenem Zentrum, guter Infrastruktur und ruhigen Wohnstraßen. Hier verkaufen wir vor allem Einfamilienhäuser und gehobene Eigentumswohnungen an Familien, die Qualität und Beständigkeit suchen.",
  },
  {
    name: "Stuttgart Mitte",
    tagline: "Innenstadtlage · Urbanität · Kapitalanlagen",
    text: "Stuttgart Mitte ist geprägt von Gründerzeit- und Nachkriegsarchitektur sowie modernen Wohnprojekten. Die Lage eignet sich besonders für Kapitalanlagen, urbane Eigentumswohnungen und Erstbezugsobjekte. Gefragt bei Berufstätigen, Investoren und internationalen Käufern.",
  },
  {
    name: "Stuttgart Bopser / Heslach",
    tagline: "Südhanglage · Urbaner Charme · Altbaubestand",
    text: "Der Bopser und die angrenzenden südlichen Stadtteile bieten eine hervorragende Verbindung aus Innenstadtnähe und Wohnqualität. Charaktervolle Altbauwohnungen, Terrassen mit Blick über die Stadt und eine ausgesprochen aktive Käuferschicht aus dem urbanen, bildungsaffinen Milieu.",
  },
  {
    name: "Stuttgart West",
    tagline: "Szenelage · Altbaucharakter · Starke Nachfrage",
    text: "Stuttgart-West ist das lebendigste Wohnquartier der Stadt — mit Gründerzeithäusern, kleinen Läden und einer wachsenden Nachfrage nach Eigentumswohnungen. Käufer sind häufig jüngere Berufstätige, Paare und Kapitalanleger.",
  },
  {
    name: "Stuttgart Sillenbuch",
    tagline: "Ruhige Familienlage · Gute Infrastruktur",
    text: "Sillenbuch ist der klassische Familienstandort im Stuttgarter Osten — mit gewachsener Bebauung, guten Schulen und einer stabilen Gemeinschaft. Gefragt sind freistehende Einfamilienhäuser und Reihenhäuser mit Garten. Wenig Leerstand, konstante Nachfrage.",
  },
  {
    name: "Stuttgart Vaihingen",
    tagline: "Südlage · Universität · Unternehmensumfeld",
    text: "Vaihingen profitiert von der Nähe zu großen Unternehmen und der Universität Stuttgart. Die Nachfrage nach Eigentumswohnungen ist solide und wächst durch die zunehmende Attraktivität des Stadtteils. Investoren schätzen die strukturelle Stabilität dieser Lage.",
  },
  {
    name: "Stuttgart Möhringen",
    tagline: "Infrastruktur · Wachstumslage · Eigentumswohnungen",
    text: "Möhringen ist einer der am schnellsten wachsenden Stadtteile Stuttgarts. Gute Anbindung, modernes Wohnumfeld und ein breites Angebot an Eigentumswohnungen machen den Stadtteil für Selbstnutzer wie Kapitalanleger gleichermaßen interessant.",
  },
  {
    name: "Stuttgart Bad Cannstatt",
    tagline: "Mineralquellen · Urbane Entwicklung · Lage am Neckar",
    text: "Bad Cannstatt ist in Transformation. Die Lage am Neckar, wachsende Infrastruktur und deutlich moderatere Einstiegspreise als in den Hochlagen machen es zu einem Standort mit Potenzial. Gefragt sind Eigentumswohnungen im renovierten Altbau und neue Projekte in Flussnähe.",
  },
  {
    name: "Stuttgart Süd",
    tagline: "Hanglage · Aussicht · Besondere Objekte",
    text: "Stuttgart-Süd bietet eine der schönsten Wohnlagen der Stadt — mit Blick über den Talkessel, Altbaucharme und einem lebendigen, gut situierten Wohnumfeld. Beliebt bei anspruchsvollen Selbstnutzern, die Stadtleben mit Rückzugsmöglichkeit verbinden möchten.",
  },
]

const propertyTypes = [
  { title: "Eigentumswohnungen", text: "Vom kompakten Stadtappartement bis zur Penthausanlage mit Panoramablick. Wir begleiten den Verkauf hochwertiger Eigentumswohnungen in allen gefragten Stuttgarter Stadtteilen." },
  { title: "Einfamilienhäuser", text: "Freistehende Einfamilienhäuser in ruhigen Wohnlagen, auf dem Killesberg, in Degerloch oder Sillenbuch. Wir kennen die Käufergruppen und die richtige Preisstrategie für jede Lage." },
  { title: "Mehrfamilienhäuser", text: "Renditestarke Mehrfamilienhäuser als Kapitalanlage oder zur Eigennutzung mit Teilvermietung. Professionelle Bewertung und strukturierte Vermarktung inklusive Mieterbewertung." },
  { title: "Kapitalanlagen", text: "Vermietete Eigentumswohnungen, Wohnanlagen und Anlageimmobilien in wirtschaftlich starken Stuttgarter Lagen. Wir sprechen die Sprache der Investoren." },
  { title: "Hochwertige Stadtwohnungen", text: "Besondere Wohnungen in zentralen Lagen — mit Charakter, Geschichte oder besonderer Ausstattung. Diskrete Vermarktung an vorqualifizierte Interessenten aus unserem Netzwerk." },
  { title: "Besondere Objekte", text: "Denkmalgeschützte Stadtvillen, historische Gebäude, Grundstücke in Toplagen. Für außergewöhnliche Objekte braucht es außergewöhnliche Vermarktung — das ist unser Handwerk." },
]

const processSteps = [
  {
    number: "01",
    title: "Erstgespräch",
    text: "Persönliches Kennenlernen, Einordnung Ihrer Immobilie in den aktuellen Stuttgarter Markt. Kostenfrei, unverbindlich, auf Augenhöhe.",
  },
  {
    number: "02",
    title: "Markt- und Preisbewertung",
    text: "Fundierte Vor-Ort-Bewertung mit Analyse von Lage, Mikrostandort, Zustand und aktuellen Vergleichspreisen in Stuttgart. Keine Fantasiezahlen — nur belastbare Einschätzungen.",
  },
  {
    number: "03",
    title: "Vermarktungsstrategie",
    text: "Wir entwickeln gemeinsam die richtige Strategie: diskret oder öffentlich, zeitlich getaktet oder sofort. Abgestimmt auf Ihre Ziele und die Besonderheiten Ihres Objekts.",
  },
  {
    number: "04",
    title: "Aufbereitung und Präsentation",
    text: "Professionelle Fotografie, hochwertiges Exposé, gezielte Käuferansprache. Die Präsentation Ihrer Immobilie bestimmt den ersten Eindruck — und damit den Preis.",
  },
  {
    number: "05",
    title: "Besichtigungen und Qualifizierung",
    text: "Ausschließlich vorqualifizierte Kaufinteressenten kommen zu Besichtigungen. Wir prüfen Bonität und ernsthafte Kaufabsicht — kein Zeitverlust durch unverbindliche Anfragen.",
  },
  {
    number: "06",
    title: "Verhandlung bis zum Notartermin",
    text: "Preisverhandlung in Ihrem Interesse, Begleitung der Kaufvertragsprüfung und des Notartermins. Wir sind bis zur Schlüsselübergabe an Ihrer Seite.",
  },
]

const valuationReasons = [
  {
    title: "Lageunterschiede in Stuttgart",
    text: "Stuttgart ist keine homogene Stadt. Der Preisunterschied zwischen einer Halbhöhenlage wie dem Killesberg und dem Stuttgarter Talboden kann mehrere tausend Euro pro Quadratmeter betragen. Eine korrekte Einordnung Ihrer Immobilie in die Mikrolage ist entscheidend.",
  },
  {
    title: "Objektzustand und Ausstattung",
    text: "Renovierter Altbau oder sanierungsbedürftiger Bestand — der Zustand hat erheblichen Einfluss auf den erzielbaren Preis. Wir bewerten transparent und realistisch, ohne zu beschönigen.",
  },
  {
    title: "Realistisches Nachfrageprofil",
    text: "Nicht jede Immobilie spricht jeden Käufer an. Eine Erdgeschosswohnung ohne Garten hat ein anderes Nachfrageprofil als ein Einfamilienhaus in Degerloch. Wir kennen die Käufergruppen in Stuttgart und positionieren Ihr Objekt entsprechend.",
  },
  {
    title: "Preisstrategie und Vermarktungsdauer",
    text: "Ein zu hoch angesetzter Preis führt zu langer Vermarktungsdauer und Preisverfall. Ein zu niedriger Preis kostet Sie Geld. Eine professionelle Bewertung ist die Grundlage für den richtigen Einstiegspreis — und damit für einen erfolgreichen Verkauf.",
  },
]

const faqs = [
  {
    question: "Was macht einen guten Immobilienmakler in Stuttgart aus?",
    answer: "Ein guter Immobilienmakler in Stuttgart kennt nicht nur aktuelle Preise, sondern versteht die Besonderheiten der einzelnen Stadtteile — die Nachfragegruppen, die typischen Objekte und die jeweilige Preisentwicklung. Er verfügt über ein Netzwerk qualifizierter Kaufinteressenten, arbeitet strukturiert und kommuniziert transparent. IHK-Registrierung und eine nachweisbare Erfolgsbilanz sind weitere Qualitätsmerkmale.",
  },
  {
    question: "In welchen Stadtteilen von Stuttgart ist die Nachfrage besonders hoch?",
    answer: "Die stärkste Nachfrage verzeichnen wir regelmäßig in den Halbhöhenlagen wie Killesberg, Degerloch und Bopser sowie in Stuttgart West und Stuttgart Süd. Auch Vaihingen und Möhringen gewinnen durch Infrastrukturausbau an Attraktivität. In allen diesen Lagen übersteigt die Nachfrage das verfügbare Angebot deutlich — was gut eingepreisten Objekten schnelle Vermarktungszeiten sichert.",
  },
  {
    question: "Wie läuft ein Immobilienverkauf in Stuttgart ab?",
    answer: "Der Prozess beginnt mit einem persönlichen Gespräch und einer fundierten Marktbewertung vor Ort. Darauf aufbauend entwickeln wir gemeinsam eine Vermarktungsstrategie — diskret oder öffentlich. Die Immobilie wird professionell aufbereitet, potenzielle Käufer werden qualifiziert. Besichtigungen finden ausschließlich mit ernstgemeinten Interessenten statt. Nach der Preisverhandlung begleiten wir Sie durch Kaufvertrag und Notartermin bis zur Übergabe.",
  },
  {
    question: "Warum ist eine fundierte Immobilienbewertung in Stuttgart wichtig?",
    answer: "Stuttgart ist ein differenzierter Markt mit erheblichen Preisunterschieden zwischen einzelnen Lagen. Eine Immobilie, die zu hoch angesetzt wird, verliert im Markt an Akzeptanz und erzielt am Ende oft weniger als bei realistischer Erstpreissung. Eine Bewertung zu niedrig kostet Sie direkt Vermögen. Eine professionelle, marktgerechte Bewertung ist daher der entscheidende erste Schritt zu einem erfolgreichen Verkauf.",
  },
  {
    question: "Eignet sich meine Immobilie für eine diskrete Vermarktung?",
    answer: "Die diskrete Vermarktung ohne öffentliche Portale eignet sich besonders für hochwertige oder außergewöhnliche Objekte, für Eigentümer mit Privatsphäre-Anforderungen und für Immobilien in ausgesprochenen Nachfragelagen, in denen unser Netzwerk ausreichend qualifizierte Interessenten bereithält. Im persönlichen Gespräch bewerten wir gemeinsam, ob Off-Market-Vermarktung für Ihr Objekt sinnvoll ist.",
  },
]

// ─────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────

export default function StuttgartPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number>(0)

  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />

      {/* ─── 1. HERO ─── */}
      <section className="relative min-h-[92vh] flex flex-col overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-zoom">
          <Image
            src="/images/cities/stuttgart.jpg"
            alt="Stuttgart Killesberg – Abels Immobilien"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          </div>
          <div className="absolute inset-0 bg-ink/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/72 via-ink/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex items-end pb-24 lg:pb-32">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 w-full">
            <div className="max-w-[740px]">

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 mb-8"
              >
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-[clamp(2.6rem,5.5vw,5rem)] text-white leading-[0.97] tracking-[-0.01em] mb-8"
              >
                Immobilie verkaufen<br />
                <span className="text-white/78">in Stuttgart.</span>
              </motion.h1>

              {/* Lead */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-white/70 text-[16px] lg:text-[18px] leading-[1.7] mb-10 max-w-[540px]"
              >
                Abels Immobilien begleitet Eigentümer in Stuttgart beim Verkauf hochwertiger Wohnimmobilien — mit fundierter Marktkenntnis, diskreter Vermarktung und persönlicher Betreuung von der Bewertung bis zur Übergabe.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-3 mb-12"
              >
                <Link
                  href="/bewertung"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-gold-soft transition-colors group"
                >
                  Immobilie bewerten lassen
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 border border-white/28 text-white px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-medium hover:bg-white/10 hover:border-white/45 transition-all duration-300 backdrop-blur-sm"
                >
                  Unverbindliche Beratung
                </button>
              </motion.div>

              {/* Trust bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex items-center gap-6 flex-wrap"
              >
                {["Seit 1999", "Inhabergeführt", "7 Standorte"].map((tag, i) => (
                  <span key={i} className="text-[11px] uppercase tracking-[0.16em] text-white/40">{tag}</span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. WARUM ABELS IN STUTTGART ─── */}
      <section className="py-28 lg:py-40 bg-cream border-t border-line/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-8 mb-20"
          >
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold/60" />
                <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Warum Abels Immobilien</span>
              </div>
              <h2 className="font-serif text-[clamp(2rem,3.8vw,3.2rem)] text-ink leading-[1.06] tracking-[-0.01em]">
                Was professionelle Vermarktung<br />in Stuttgart bedeutet
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-[15px] text-graphite leading-[1.75]">
                In einem Markt wie Stuttgart, der von starken Lageunterschieden und einer anspruchsvollen Käuferschaft geprägt wird, ist die Wahl des richtigen Maklers keine Formsache. Sie ist eine Entscheidung, die den Verkaufserlös direkt beeinflusst.
              </p>
            </div>
          </motion.div>

          <div className="border-t border-line">
            {reasons.map((r, i) => (
              <motion.div
                key={r.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="border-b border-line py-8 group"
              >
                <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                  <div className="lg:col-span-1">
                    <span className="text-[12px] text-gold/55 tracking-[0.14em] font-medium group-hover:text-gold transition-colors duration-300">
                      {r.number}
                    </span>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="font-serif text-[20px] lg:text-[22px] text-ink leading-tight group-hover:text-gold transition-colors duration-300">
                      {r.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-5">
                    <p className="text-[14px] text-graphite leading-[1.75]">{r.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. IMMOBILIENMARKT STUTTGART ─── */}
      <section className="py-28 lg:py-40 bg-bone border-t border-line/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold/60" />
                <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Marktüberblick</span>
              </div>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,2.9rem)] text-ink leading-[1.08] tracking-[-0.01em] mb-6">
                Der Immobilienmarkt<br />Stuttgart
              </h2>
              <div className="w-10 h-px bg-gold/40" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              viewport={{ once: true }}
              className="lg:col-span-7 lg:col-start-6 space-y-6 text-[15px] text-graphite leading-[1.8]"
            >
              <p>
                Stuttgart ist einer der wirtschaftlich stärksten und strukturell attraktivsten Immobilienstandorte Deutschlands. Als Landeshauptstadt Baden-Württembergs und Heimat bedeutender Industrie-, Technologie- und Dienstleistungsunternehmen zieht die Stadt kontinuierlich gut ausgebildete Fachkräfte, Führungskräfte und internationale Bevölkerung an — mit entsprechend stabiler Wohnraumnachfrage.
              </p>
              <p>
                Was Stuttgart von anderen deutschen Großstädten unterscheidet, ist seine besondere Topografie. Der Talkessel und die umgebenden Höhenlagen schaffen eine natürliche Begrenzung des Baulands. Das limitierte Angebot in gefragten Lagen — insbesondere in den Halbhöhenlagen und südlichen Stadtteilen — trifft auf eine anhaltend starke Nachfrage. Gut positionierte Immobilien in diesen Lagen erzielen stabile Preise.
              </p>
              <p>
                Gleichzeitig ist Stuttgart kein monolithischer Markt. Die Unterschiede zwischen einem Penthouse auf dem Killesberg und einer Altbauwohnung im Stuttgarter Norden sind erheblich — nicht nur in Preis und Ausstattung, sondern auch in der Käuferstruktur und der richtigen Vermarktungsstrategie. Genau hier liegt die Kompetenz eines lokalen Maklers mit echter Marktkenntnis.
              </p>
              <p>
                Professionelle Preisstrategie und durchdachte Positionierung sind in diesem Markt keine Option, sondern die Voraussetzung für einen erfolgreichen Verkauf. Zu hoch angesetzte Objekte verlieren im Markt an Dynamik — zu niedrig angesetzte kosten Eigentümer bares Geld.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 4. WOHNLAGEN STUTTGART ─── */}
      <section className="py-28 lg:py-40 bg-cream border-t border-line/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Lokale Expertise</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.8vw,3.2rem)] text-ink leading-[1.06] tracking-[-0.01em] max-w-[640px]">
              Gefragte Wohnlagen<br />in Stuttgart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-line">
            {neighborhoods.map((n, i) => (
              <motion.div
                key={n.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className={`p-8 lg:p-10 group hover:bg-bone transition-colors duration-300 border-b border-line ${
                  i % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-[20px] text-ink leading-tight group-hover:text-gold transition-colors duration-300">
                    {n.name}
                  </h3>
                </div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-gold/70 mb-4">
                  {n.tagline}
                </p>
                <p className="text-[14px] text-graphite leading-[1.7]">
                  {n.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. FÜR WELCHE IMMOBILIEN ─── */}
      <section className="py-28 lg:py-40 bg-bone border-t border-line/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-8 mb-20"
          >
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold/60" />
                <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Unsere Objekte</span>
              </div>
              <h2 className="font-serif text-[clamp(2rem,3.8vw,3.2rem)] text-ink leading-[1.06] tracking-[-0.01em]">
                Welche Immobilien wir in Stuttgart suchen
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-line/40">
            {propertyTypes.map((pt, i) => (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className={`p-8 lg:p-10 border-b border-line/40 group hover:bg-cream transition-colors duration-300 ${
                  i % 3 !== 2 ? "lg:border-r border-line/40" : ""
                } ${i % 2 === 0 ? "md:border-r border-line/40 lg:border-r-0" : "md:border-r-0"} ${
                  i === 0 || i === 1 || i === 3 || i === 4 ? "lg:border-r border-line/40" : ""
                }`}
              >
                <div className="w-6 h-px bg-gold/50 mb-5" />
                <h3 className="font-serif text-[20px] text-ink mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
                  {pt.title}
                </h3>
                <p className="text-[14px] text-graphite leading-[1.7]">
                  {pt.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. VERKAUFSPROZESS ─── */}
      <section className="py-28 lg:py-40 bg-bone border-t border-line/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-8 mb-20"
          >
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold/60" />
                <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Ihr Verkaufsprozess</span>
              </div>
              <h2 className="font-serif text-[clamp(2rem,3.8vw,3.2rem)] text-ink leading-[1.06] tracking-[-0.01em]">
                So begleiten wir Sie<br />durch den Verkauf
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-[15px] text-graphite leading-[1.75]">
                Kein Zufall, keine Improvisation. Unser Prozess ist bewährt, transparent und auf Ihre Immobilie in Stuttgart abgestimmt.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-line">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`p-8 lg:p-10 border-b border-line group hover:bg-cream transition-colors duration-300 ${
                  i === 0 || i === 1 || i === 3 || i === 4 ? "lg:border-r border-line" : ""
                } ${i % 2 === 0 ? "md:border-r border-line lg:border-r-0" : "md:border-r-0"} ${
                  i === 0 || i === 1 || i === 3 || i === 4 ? "lg:border-r" : ""
                }`}
              >
                <span className="font-serif text-[56px] text-gold/22 leading-none block mb-5 group-hover:text-gold/35 transition-colors duration-300">
                  {step.number}
                </span>
                <h3 className="font-serif text-[20px] text-ink mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[14px] text-graphite leading-[1.7]">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. WARUM PROFESSIONELLE BEWERTUNG ─── */}
      <section className="py-28 lg:py-40 bg-cream border-t border-line/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-4 lg:sticky lg:top-28 self-start"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold/60" />
                <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Bewertung</span>
              </div>
              <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.7rem)] text-ink leading-[1.1] tracking-[-0.01em] mb-6">
                Warum eine professionelle Bewertung in Stuttgart entscheidend ist
              </h2>
              <p className="text-[14px] text-graphite leading-[1.7]">
                Der Stuttgarter Immobilienmarkt belohnt fundierte Vorbereitung. Eine unsorgfältige Bewertung ist einer der häufigsten und teuersten Fehler beim Immobilienverkauf.
              </p>
            </motion.div>

            <div className="lg:col-span-7 lg:col-start-6 space-y-0 border-t border-line">
              {valuationReasons.map((vr, i) => (
                <motion.div
                  key={vr.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="border-b border-line py-8 group"
                >
                  <h3 className="font-serif text-[19px] lg:text-[21px] text-ink mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
                    {vr.title}
                  </h3>
                  <p className="text-[14px] text-graphite leading-[1.75]">{vr.text}</p>
                </motion.div>
              ))}

              <div className="pt-10">
                <Link
                  href="/bewertung"
                  className="inline-flex items-center gap-2 bg-ink text-cream px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-graphite transition-colors group"
                >
                  Kostenfreie Bewertung anfordern
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. CTA ─── */}
      <section className="bg-bone border-t border-line/40">
        {/* Statement */}
        <div className="border-b border-line/40">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-gold/60" />
                <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Ihr nächster Schritt</span>
              </div>
              <h2 className="font-serif text-[clamp(2.4rem,5.5vw,5rem)] text-ink leading-[0.97] tracking-[-0.02em] max-w-[820px]">
                Sie möchten Ihre Immobilie<br />
                in Stuttgart professionell<br />
                <span className="text-graphite">verkaufen?</span>
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Split */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-6 py-16 lg:py-20 lg:pr-20 lg:border-r border-line/40"
            >
              <p className="text-[16px] text-graphite leading-[1.75] mb-10 max-w-[460px]">
                Lassen Sie Ihre Immobilie in Stuttgart fundiert einschätzen — kostenfrei, unverbindlich und durch einen erfahrenen Makler, der den Markt kennt. Oder vereinbaren Sie direkt ein persönliches Gespräch.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/bewertung"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-gold-soft transition-colors group"
                >
                  Immobilie bewerten lassen
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center border border-line text-ink/70 px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-medium hover:bg-cream transition-all"
                >
                  Persönliches Gespräch
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:col-start-8 py-16 lg:py-20 lg:pl-16"
            >
              <h3 className="text-[11px] uppercase tracking-[0.22em] text-graphite mb-8">Direkter Kontakt</h3>
              <div className="space-y-5">
                <a href="tel:+492115591751" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-line/40 flex items-center justify-center group-hover:border-gold/40 transition-colors shrink-0">
                    <Phone className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-graphite mb-0.5">Telefon</span>
                    <span className="block text-[15px] text-ink group-hover:text-gold transition-colors">+49 211 5591751</span>
                  </div>
                </a>
                <a href="mailto:info@abels-immobilien.de" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-line/40 flex items-center justify-center group-hover:border-gold/40 transition-colors shrink-0">
                    <Mail className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-graphite mb-0.5">E-Mail</span>
                    <span className="block text-[15px] text-ink group-hover:text-gold transition-colors">info@abels-immobilien.de</span>
                  </div>
                </a>
              </div>
              <div className="mt-10 pt-8 border-t border-line/40">
                <p className="text-[13px] text-graphite leading-relaxed">
                  Erstgespräch kostenfrei · Bewertung in 72 Stunden · Keine Vorauszahlung
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 9. FAQ ─── */}
      <section className="py-28 lg:py-40 bg-cream border-t border-line/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="lg:sticky lg:top-28">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-gold/60" />
                  <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Häufige Fragen</span>
                </div>
                <h2 className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] text-ink leading-[1.1] tracking-[-0.01em] mb-5">
                  Fragen zum Immobilienverkauf in Stuttgart
                </h2>
                <p className="text-[14px] text-graphite leading-[1.7]">
                  Klare Antworten auf die wichtigsten Fragen rund um den Verkauf Ihrer Stuttgarter Immobilie.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 lg:col-start-6"
            >
              <div className="border-t border-line">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-line">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                      className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                    >
                      <span className={`font-serif text-[17px] lg:text-[19px] leading-snug transition-colors duration-200 pr-4 ${
                        openFaq === i ? "text-ink" : "text-ink/80 group-hover:text-ink"
                      }`}>
                        {faq.question}
                      </span>
                      <div className={`shrink-0 w-7 h-7 border flex items-center justify-center transition-all duration-300 mt-0.5 ${
                        openFaq === i ? "border-gold bg-gold" : "border-line group-hover:border-gold/50"
                      }`}>
                        <Plus className={`w-3.5 h-3.5 transition-all duration-300 ${
                          openFaq === i ? "rotate-45 text-ink" : "text-graphite"
                        }`} />
                      </div>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pb-8 text-[15px] text-graphite leading-[1.75] max-w-[580px]">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}
