# Legal Implementation Notes

Stand: 2026-06-18

## Ziel der Umsetzung

Die Website-Formulare dienen nur noch der kostenlosen und unverbindlichen Anfrage. Durch das Absenden eines Formulars wird technisch kein Maklervertrag, keine Provisionsvereinbarung, kein Finanzierungsvertrag und kein sonstiger kostenpflichtiger Vertrag erzeugt.

Es wurde kein Widerrufsbutton eingebaut.

Diese Umsetzung ist eine technische und redaktionelle Anpassung der Website. Sie ist keine Bestätigung, dass die Website dadurch automatisch vollständig rechtssicher ist.

## Geänderte Dateien

- `components/legal-form-notice.tsx`
- `components/widerruf-consent.tsx`
- `components/contact-modal.tsx`
- `components/contact-section.tsx`
- `components/finanzierung-modal.tsx`
- `components/footer.tsx`
- `components/header.tsx`
- `components/sections/positioning-section.tsx`
- `app/kontakt/page.tsx`
- `app/tippgeber/page.tsx`
- `app/kaufen/page.tsx`
- `app/finanzierung/page.tsx`
- `app/bewertung/page.tsx`
- `app/bewertung/bewertung-iframe.tsx`
- `app/immobilie-bewerten-duesseldorf/page.tsx`
- `app/haus-verkaufen-duesseldorf/page.tsx`
- `app/wohnung-verkaufen-duesseldorf/page.tsx`
- `app/standorte/stuttgart/page.tsx`
- `app/widerrufsrecht/page.tsx`
- `public/netlify-forms.html`
- `public/sitemap.xml`

## Gefundene Formulare

- Kontaktformular Seite: `contact_request`
- Allgemeine Kontaktsektion: `contact_request`
- Kontaktmodal allgemein: `contact_request`
- Bewertungsmodal: `valuation_request`
- Kauf-/Suchprofilmodal: `buyer_search_request`
- Finanzierungsmodal: `financing_inquiry`
- Vermietungsmodal: `contact_request`
- Tippgeberformular: `referral_request`
- Newsletterformular: `newsletter_subscription`
- Externes Bewertungstool: `https://immowert.lovable.app/`

## Entfernte Widerrufs- und AGB-Checkboxen

- Die Komponente `components/widerruf-consent.tsx` wurde entfernt.
- Alle Importe und Nutzungen von `WiderrufConsent` wurden entfernt.
- Alle Netlify-Felder `widerrufsbelehrung` wurden aus `public/netlify-forms.html` entfernt.
- Es wurden keine Felder `withdrawalAccepted`, `termsAccepted` oder `contractAccepted` im Quellcode gefunden.
- Es wurden keine AGB-Bestätigungscheckboxen in den Formularen gefunden.
- Die Datenschutzerklärung bleibt in den Formularen bzw. beim Newsletter verlinkt.

## Angepasste Buttontexte

- `Anfrage senden` / `Anfrage absenden` / `Absenden` wurde in Anfrageformularen zu `Unverbindliche Anfrage senden`.
- `Kaufprofil anlegen` wurde zu `Suchwunsch unverbindlich übermitteln`.
- Bewertungs-CTAs wurden zu `Kostenlose Bewertung unverbindlich anfragen`.
- `Finanzierung anfragen` wurde zu `Finanzierungsberatung unverbindlich anfragen`.

## Hinweise und Erfolgsmeldungen

- Allgemeine Anfrageformulare erhalten den Hinweis, dass nur eine kostenlose und unverbindliche Anfrage übermittelt wird und kein kostenpflichtiger Vertrag zustande kommt.
- Bewertungsformulare erhalten den Hinweis, dass Anfrage und erste Werteinschätzung kostenlos und unverbindlich sind, kein Maklerauftrag erteilt und keine Provision vereinbart wird.
- Kauf-/Suchprofilformulare erhalten den Hinweis, dass der Suchwunsch kostenlos und unverbindlich ist, kein Maklervertrag zustande kommt und keine Provisionspflicht entsteht.
- Die Erfolgsmeldung für Anfragen lautet: `Vielen Dank. Wir haben Ihre unverbindliche Anfrage erhalten und melden uns persönlich bei Ihnen. Durch die Übermittlung ist kein Maklervertrag und kein kostenpflichtiger Vertrag zustande gekommen.`

## Newsletter

- Die Widerrufsbelehrungs-Checkbox wurde entfernt.
- Das Newsletterformular nutzt jetzt eine eigene, nicht vorausgewählte Einwilligungscheckbox `newsletter_consent`.
- Die Newsletter-Anmeldung enthält Double-Opt-in-Wording und sendet `double_opt_in=requested`.
- Die Newsletter-Erfolgsmeldung bestätigt nur, dass der Double-Opt-in-Link bestätigt werden muss.

## CRM-, Datenbank- und Webhook-Prüfung

- Es wurde kein `app/api`-Backend gefunden.
- Es wurden keine lokalen Datenbankmodelle, CRM-Integrationen, Webhook-Endpunkte, Zapier-/Make-Konfigurationen oder Vertrags-/Provisionsstatus-Felder im Repository gefunden.
- Die Formulare senden ausschließlich Netlify-Form-Submissions mit Anfrage-/Lead-Namen wie `contact_request`, `valuation_request`, `buyer_search_request`, `financing_inquiry`, `referral_request` und `newsletter_subscription`.
- Es werden keine technischen Felder erzeugt, die einen Vertrag, Auftrag oder Provisionsstatus darstellen.

## Navigation, Sitemap und Widerrufsseite

- Der Footer-Link `Widerrufsrecht` wurde entfernt.
- Die Seite `/widerrufsrecht` wurde nicht gelöscht.
- `/widerrufsrecht` wurde aus `public/sitemap.xml` entfernt.
- Die Widerrufsseite wurde auf `noindex, nofollow` gesetzt.

## Externe Dienste

- Das externe Bewertungstool `https://immowert.lovable.app/` konnte im Repository nicht direkt geändert werden.
- Die lokale Seite `/bewertung` leitet nicht mehr automatisch weiter, sondern zeigt vor dem Öffnen des externen Tools den Bewertungs-Hinweis zur kostenlosen und unverbindlichen Anfrage.

## Abschlussbestätigung

- Es wurde kein Widerrufsbutton eingebaut.
- Website-Formulare dienen nur noch als unverbindliche Anfrage.
- Formulare werden technisch nicht als Vertragsabschluss behandelt.

## Verifikation

- Produktions-Build: `npm run build` erfolgreich.
- Typecheck: `npx tsc --noEmit` ausgeführt; der Check bricht wegen bestehenden Typfehlern in Framer-Motion-Varianten und weiteren bereits vorhandenen Typstellen ab (`app/finanzierung/page.tsx`, `app/vermietung/page.tsx`, `app/ratgeber/scheidungsimmobilie/page.tsx`, `components/count-up.tsx`, `components/sections/numbers-section.tsx`). Die Fehler stehen nicht im neuen Legal-Hinweiscode.
- Lint: `npm run lint` ausgeführt; bricht ab, weil `eslint` im Projekt nicht installiert ist (`sh: eslint: command not found`).
- Tests: `npm test` ausgeführt; bricht ab, weil kein `test`-Script in `package.json` definiert ist.
