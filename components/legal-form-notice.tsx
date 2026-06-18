export type InquiryNoticeVariant = "general" | "valuation" | "search"

export const INQUIRY_SUCCESS_MESSAGE =
  "Vielen Dank. Wir haben Ihre unverbindliche Anfrage erhalten und melden uns persönlich bei Ihnen. Durch die Übermittlung ist kein Maklervertrag und kein kostenpflichtiger Vertrag zustande gekommen."

const notices: Record<InquiryNoticeVariant, string> = {
  general:
    "Mit dem Absenden übermitteln Sie ausschließlich eine kostenlose und unverbindliche Anfrage. Dadurch kommt kein Maklervertrag, keine Provisionsvereinbarung und kein sonstiger kostenpflichtiger Vertrag zustande. Ein Vertrag wird – sofern gewünscht – erst später gesondert und ausdrücklich geschlossen.",
  valuation:
    "Die Anfrage und die erste Werteinschätzung sind kostenlos und unverbindlich. Mit dem Absenden wird kein Maklerauftrag erteilt und keine Provision vereinbart.",
  search:
    "Die Übermittlung Ihres Suchwunsches ist kostenlos und unverbindlich. Dadurch kommt kein Maklervertrag zustande und es entsteht keine Provisionspflicht.",
}

export function getInquiryNotice(variant: InquiryNoticeVariant = "general") {
  return notices[variant]
}

export function getInquiryFormName(variant: InquiryNoticeVariant = "general") {
  if (variant === "valuation") return "valuation_request"
  if (variant === "search") return "buyer_search_request"
  return "contact_request"
}

export function getInquiryButtonLabel(variant: InquiryNoticeVariant = "general") {
  if (variant === "valuation") return "Kostenlose Bewertung unverbindlich anfragen"
  if (variant === "search") return "Suchwunsch unverbindlich übermitteln"
  return "Unverbindliche Anfrage senden"
}

export function LegalFormNotice({
  variant = "general",
  tone = "light",
  className = "",
}: {
  variant?: InquiryNoticeVariant
  tone?: "light" | "dark"
  className?: string
}) {
  const toneClass =
    tone === "dark"
      ? "border-cream/15 bg-cream/5 text-cream/70"
      : "border-line/60 bg-bone/50 text-stone/80"

  return (
    <p className={`border px-4 py-3 text-[12px] leading-relaxed ${toneClass} ${className}`}>
      {getInquiryNotice(variant)}
    </p>
  )
}
